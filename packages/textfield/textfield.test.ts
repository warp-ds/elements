import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../affix/affix.js';
import './textfield.js';

test('renders the textfield', async () => {
  const component = html`<w-textfield label="Test label"></w-textfield>`;

  const page = render(component);
  await expect.element(page.getByText('Test label')).toBeVisible();
});

test('works as expected in forms', async () => {
  const label = 'Test label';
  const component = html`
    <form data-testid="form">
      <w-textfield label="${label}" name="message" value="Hola el Mundo"></w-textfield>
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
  expect(changeHandler).toHaveBeenCalled();

  await expect.element(page.getByLabelText(label)).toHaveValue('Hello, World');

  formData = new FormData(page.getByTestId('form').element() as HTMLFormElement);
  expect(formData.get('message')).toBe('Hello, World');
});

test('renders help text if provided', async () => {
  const component = html`<w-textfield label="Test label" help-text="Helpful help text"></w-textfield>`;

  const page = render(component);
  await expect.element(page.getByText('Helpful help text')).toBeVisible();
});

test('marks input field as aria-invalid if the invalid prop is true', async () => {
  const component = html`<w-textfield label="Test label" invalid help-text="No, bad input!"></w-textfield>`;

  const page = render(component);
  await expect.element(page.getByLabelText('Test label')).toHaveAccessibleErrorMessage('No, bad input!');
});

test('marks input field as readonly if the read-only prop is true', async () => {
  const component = html`<w-textfield label="Test label" read-only></w-textfield>`;

  const page = render(component);
  await expect.element(page.getByLabelText('Test label')).toHaveAttribute('readonly', '');
});

test('renders affix component in the prefix slot', async () => {
  const component = html`
    <w-textfield label="Test label">
      <w-affix slot="prefix" label="kr"></w-affix>
    </w-textfield>
  `;

  const page = render(component);
  await expect.element(page.getByText('kr')).toBeVisible();
});

test('renders affix component in the suffix slot', async () => {
  const component = html`
    <w-textfield label="Test label">
      <w-affix slot="suffix" label="kr"></w-affix>
    </w-textfield>
  `;

  const page = render(component);
  await expect.element(page.getByText('kr')).toBeVisible();
});

test('renders with no autocomplete attribute when none provided', async () => {
  const component = html`<w-textfield data-testid="textfield"></w-textfield>`;

  const page = render(component);
  const locator = page.getByTestId('textfield');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement;
  expect(el.hasAttribute('autocomplete')).toBe(false);

  expect(el.shadowRoot.querySelector('input').hasAttribute('autocomplete')).toBe(false);
});
