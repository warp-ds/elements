import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../textfield/textfield.js';
import './combobox.js';

test('renders with autocomplete="off" when attribute not provided', async () => {
  const component = html`<w-combobox data-testid="combobox"></w-combobox>`;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement;
  expect(el.getAttribute('autocomplete')).toBe('off');
});

test('renders with autocomplete attribute when provided', async () => {
  const component = html`<w-combobox data-testid="combobox" autocomplete="on"></w-combobox>`;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement;
  expect(el.getAttribute('autocomplete')).toBe('on');
});

test('displays initial value correctly when value prop is set', async () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ];

  const component = html`<w-combobox
    data-testid="combobox"
    value="apple"
    .options="${options}"
  ></w-combobox>`;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement & { value: string };

  // Get the textfield's input element
  const textfield = el.shadowRoot?.querySelector('w-textfield');
  const input = textfield?.shadowRoot?.querySelector('input');

  // Verify the displayed text shows the label "Apple", not the value "apple"
  expect(input?.value).toBe('Apple');

  // Verify the combobox value is "apple"
  expect(el.value).toBe('apple');
});

test('filters options by label, not value', async () => {
  const options = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'no', label: 'Norway' },
  ];

  const component = html`<w-combobox
    data-testid="combobox"
    open-on-focus
    .options="${options}"
  ></w-combobox>`;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement & { value: string };

  // Get the textfield's input element
  const textfield = el.shadowRoot?.querySelector('w-textfield');
  const input = textfield?.shadowRoot?.querySelector('input') as HTMLInputElement;

  // Type "United" which should match labels "United States" and "United Kingdom"
  // but NOT match any values (us, uk, no)
  input?.focus();
  input.value = 'United';
  input.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Check that the dropdown shows the matching options
  const listbox = el.shadowRoot?.querySelector('[role="listbox"]');
  const visibleOptions = listbox?.querySelectorAll('[role="option"]');

  // Should show 2 options: "United States" and "United Kingdom"
  expect(visibleOptions?.length).toBe(2);

  const optionTexts = Array.from(visibleOptions || []).map((opt) => opt.textContent?.trim());
  expect(optionTexts).toContain('United States');
  expect(optionTexts).toContain('United Kingdom');
  expect(optionTexts).not.toContain('Norway');
});

test('displays option label in textfield but stores option value', async () => {
  const optionsWithDifferentLabelAndValue = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'no', label: 'Norway' },
  ];

  const component = html`<w-combobox
    data-testid="combobox"
    open-on-focus
    .options="${optionsWithDifferentLabelAndValue}"
  ></w-combobox>`;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement & { value: string };

  // Get the textfield's input element
  const textfield = el.shadowRoot?.querySelector('w-textfield');
  const input = textfield?.shadowRoot?.querySelector('input');

  // Focus to open the dropdown
  input?.focus();
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Find and click the "Norway" option (which has value "no")
  const listbox = el.shadowRoot?.querySelector('[role="listbox"]');
  const options = listbox?.querySelectorAll('[role="option"]');
  const norwayOption = Array.from(options || []).find((opt) => opt.textContent?.trim() === 'Norway');

  expect(norwayOption).toBeDefined();

  // Simulate mousedown on the option
  norwayOption?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Verify the displayed text is the label "Norway", not the value "no"
  expect(input?.value).toBe('Norway');

  // Verify the combobox value is "no", not "Norway"
  expect(el.value).toBe('no');
});

test('announces suggestion count when opened on focus with empty input', async () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ];

  const component = html`<w-combobox
    data-testid="combobox"
    open-on-focus
    .options="${options}"
  ></w-combobox>`;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement;
  const textfield = el.shadowRoot?.querySelector('w-textfield');
  const input = textfield?.shadowRoot?.querySelector('input');

  input?.focus();
  await new Promise((resolve) => setTimeout(resolve, 100));

  const statusText = el.shadowRoot?.querySelector('[role="status"]')?.textContent?.trim();
  expect(statusText).toBe('3 suggestions');
});

test('supports child w-option data nodes as options', async () => {
  const component = html`
    <w-combobox
      data-testid="combobox"
      open-on-focus
      label="Select a country">
      <w-option value="no">Norway</w-option>
      <w-option value="se">Sweden</w-option>
      <w-option value="dk">Denmark</w-option>
    </w-combobox>
  `;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement;
  const textfield = el.shadowRoot?.querySelector('w-textfield');
  const input = textfield?.shadowRoot?.querySelector('input');

  input?.focus();
  await new Promise((resolve) => setTimeout(resolve, 100));

  const listbox = el.shadowRoot?.querySelector('[role="listbox"]');
  const visibleOptions = listbox?.querySelectorAll('[role="option"]');

  expect(visibleOptions?.length).toBe(3);

  const optionTexts = Array.from(visibleOptions || []).map((opt) => opt.textContent?.trim());
  expect(optionTexts).toContain('Norway');
  expect(optionTexts).toContain('Sweden');
  expect(optionTexts).toContain('Denmark');
});

test('selecting a child w-option stores value and displays label', async () => {
  const component = html`
    <w-combobox
      data-testid="combobox"
      open-on-focus
      label="Select a country">
      <w-option value="no">Norway</w-option>
      <w-option value="se">Sweden</w-option>
      <w-option value="dk">Denmark</w-option>
    </w-combobox>
  `;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement & { value: string };
  const textfield = el.shadowRoot?.querySelector('w-textfield');
  const input = textfield?.shadowRoot?.querySelector('input');

  input?.focus();
  await new Promise((resolve) => setTimeout(resolve, 100));

  const listbox = el.shadowRoot?.querySelector('[role="listbox"]');
  const options = listbox?.querySelectorAll('[role="option"]');
  const swedenOption = Array.from(options || []).find((opt) => opt.textContent?.trim() === 'Sweden');

  expect(swedenOption).toBeDefined();
  swedenOption?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(input?.value).toBe('Sweden');
  expect(el.value).toBe('se');
});
