import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import './textarea.js';

test('renders the textarea', async () => {
  const component = html`<w-textarea label="Test label"></w-textarea>`;

  const page = render(component);
  await expect.element(page.getByText('Test label')).toBeVisible();
});

test('works as expected in forms', async () => {
  const label = 'Test label';
  const component = html`
    <form data-testid="form">
      <w-textarea label="${label}" name="message" value="Hola el Mundo"></w-textarea>
    </form>
  `;

  const page = render(component);

  await expect.element(page.getByLabelText(label)).toHaveValue('Hola el Mundo');

  let formData = new FormData(page.getByTestId('form').element() as HTMLFormElement);
  expect(formData.get('message')).toBe('Hola el Mundo');

  const inputHandler = vi.fn();
  const changeHandler = vi.fn();
  page.getByLabelText(label).element().addEventListener('input', inputHandler);
  page.getByLabelText(label).element().addEventListener('change', changeHandler);

  await page.getByLabelText(label).fill('Hello, World');

  expect(inputHandler).toHaveBeenCalled();
  expect(changeHandler).not.toHaveBeenCalled();

  await userEvent.tab(); // trigger a blur to fire the change event
  await expect.poll(() => changeHandler.mock.calls.length).toBeGreaterThan(0);

  await expect.element(page.getByLabelText(label)).toHaveValue('Hello, World');

  formData = new FormData(page.getByTestId('form').element() as HTMLFormElement);
  expect(formData.get('message')).toBe('Hello, World');
});

test('renders help text if provided', async () => {
  const component = html`<w-textarea label="Test label" help-text="Helpful help text"></w-textarea>`;

  const page = render(component);
  await expect.element(page.getByText('Helpful help text')).toBeVisible();
});

test('marks input field as aria-invalid if the invalid prop is true', async () => {
  const component = html`<w-textarea label="Test label" invalid help-text="No, bad input!"></w-textarea>`;

  const page = render(component);
  await expect.element(page.getByLabelText('Test label')).toHaveAccessibleErrorMessage('No, bad input!');
});

test('aria-invalid attribute is absent when textarea is valid', async () => {
  const component = html`<w-textarea label="Test label" data-testid="textarea"></w-textarea>`;

  const page = render(component);
  const textarea = page.getByLabelText('Test label');

  await expect.element(textarea).toBeVisible();

  // aria-invalid should NOT be present when valid
  await expect.element(textarea).not.toHaveAttribute('aria-invalid');
});

test('aria-invalid attribute is "true" when textarea is invalid', async () => {
  const component = html`<w-textarea label="Test label" invalid></w-textarea>`;

  const page = render(component);
  const textarea = page.getByLabelText('Test label');

  await expect.element(textarea).toBeVisible();

  // aria-invalid should be "true" when invalid
  await expect.element(textarea).toHaveAttribute('aria-invalid', 'true');
});

test('marks input field as readonly if the readonly prop is true', async () => {
  const component = html`<w-textarea label="Test label" readonly></w-textarea>`;

  const page = render(component);
  await expect.element(page.getByLabelText('Test label')).toHaveAttribute('readonly', '');
});

test('can reset textarea by resetting surrounding form', async () => {
  render(html`
    <form>
      <w-textarea name="message" value="Hola el Mundo"></w-textarea>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wTextArea = document.querySelector('w-textarea') as HTMLElement & {
    checked: boolean;
    value: string;
    updateComplete: Promise<undefined>;
  };

  // sanity
  expect(form).not.toBeNull();
  expect(wTextArea).not.toBeNull();

  expect(wTextArea.value).toBe('Hola el Mundo');

  wTextArea.value = 'Definitely not Hola el Mundo';
  await wTextArea.updateComplete;

  // Reset the form
  form.reset();
  await wTextArea.updateComplete;

  expect(wTextArea.value).toBe('Hola el Mundo');
});

test('checkValidity returns false when required textarea is empty', async () => {
  render(html`<w-textarea label="Message" name="message" required></w-textarea>`);

  const wTextArea = document.querySelector('w-textarea') as HTMLElement & {
    value: string;
    checkValidity: () => boolean;
    validity: ValidityState;
    validationMessage: string;
    updateComplete: Promise<undefined>;
  };

  await wTextArea.updateComplete;

  // Required textarea with no value should be invalid
  expect(wTextArea.checkValidity()).toBe(false);
  expect(wTextArea.validity.valueMissing).toBe(true);
  expect(wTextArea.validationMessage).not.toBe('');
});

test('checkValidity returns true when required textarea has a value', async () => {
  render(html`<w-textarea label="Message" name="message" required value="Hello"></w-textarea>`);

  const wTextArea = document.querySelector('w-textarea') as HTMLElement & {
    value: string;
    checkValidity: () => boolean;
    validity: ValidityState;
    updateComplete: Promise<undefined>;
  };

  await wTextArea.updateComplete;

  // Required textarea with value should be valid
  expect(wTextArea.checkValidity()).toBe(true);
  expect(wTextArea.validity.valid).toBe(true);
});

test('form submission is blocked when required textarea is empty', async () => {
  const submitHandler = vi.fn((e: Event) => e.preventDefault());

  render(html`
    <form data-testid="form">
      <w-textarea label="Message" name="message" required></w-textarea>
      <button type="submit">Submit</button>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  form.addEventListener('submit', submitHandler);

  const wTextArea = document.querySelector('w-textarea') as HTMLElement & {
    invalid: boolean;
    helpText: string;
    updateComplete: Promise<undefined>;
  };
  await wTextArea.updateComplete;

  // Try to submit - should be blocked by validation
  const submitButton = document.querySelector('button') as HTMLButtonElement;
  submitButton.click();
  await wTextArea.updateComplete;

  // Form should not have been submitted
  expect(submitHandler).not.toHaveBeenCalled();

  // Component should show invalid state with error message
  expect(wTextArea.invalid).toBe(true);
  expect(wTextArea.helpText).not.toBe('');
});

test('form submission succeeds when required textarea has a value', async () => {
  const submitHandler = vi.fn((e: Event) => e.preventDefault());

  render(html`
    <form data-testid="form">
      <w-textarea label="Message" name="message" required value="Hello"></w-textarea>
      <button type="submit">Submit</button>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  form.addEventListener('submit', submitHandler);

  const wTextArea = document.querySelector('w-textarea') as HTMLElement & {
    updateComplete: Promise<undefined>;
  };
  await wTextArea.updateComplete;

  // Submit should succeed
  const submitButton = document.querySelector('button') as HTMLButtonElement;
  submitButton.click();

  // Form should have been submitted
  expect(submitHandler).toHaveBeenCalled();
});

test('shows validation error on blur when required field is empty', async () => {
  const page = render(html`<w-textarea label="Message" name="message" required></w-textarea>`);

  const wTextArea = document.querySelector('w-textarea') as HTMLElement & {
    invalid: boolean;
    helpText: string;
    updateComplete: Promise<undefined>;
  };
  await wTextArea.updateComplete;

  // Initially should not show error (no interaction yet)
  expect(wTextArea.invalid).toBeFalsy();

  // Focus and blur the textarea
  const textarea = page.getByLabelText('Message');
  await textarea.click();
  await userEvent.tab(); // blur
  await wTextArea.updateComplete;

  // Should now show validation error
  expect(wTextArea.invalid).toBe(true);
  expect(wTextArea.helpText).not.toBe('');
});

test('restores original help text when validation passes', async () => {
  const page = render(html`
    <w-textarea label="Message" name="message" required help-text="Enter your message"></w-textarea>
  `);

  const wTextArea = document.querySelector('w-textarea') as HTMLElement & {
    invalid: boolean;
    helpText: string;
    value: string;
    updateComplete: Promise<undefined>;
  };
  await wTextArea.updateComplete;

  // Initially should show original help text
  expect(wTextArea.helpText).toBe('Enter your message');

  // Focus and blur to trigger validation
  const textarea = page.getByLabelText('Message');
  await textarea.click();
  await userEvent.tab();
  await wTextArea.updateComplete;

  // Should show validation error
  expect(wTextArea.invalid).toBe(true);
  expect(wTextArea.helpText).not.toBe('Enter your message');

  // Fill in a value
  await textarea.fill('Hello');
  await wTextArea.updateComplete;

  // Should restore original help text
  expect(wTextArea.invalid).toBe(false);
  expect(wTextArea.helpText).toBe('Enter your message');
});
