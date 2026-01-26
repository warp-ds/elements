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
