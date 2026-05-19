import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../textfield/textfield.js';
import './combobox.js';

test('renders with autocomplete="off" on inner textfield when attribute not provided', async () => {
  const component = html`<w-combobox data-testid="combobox"></w-combobox>`;

  const page = render(component);
  const locator = page.getByTestId('combobox');

  await expect.element(locator).toBeVisible();

  const el = (await locator.element()) as HTMLElement;
  // The autocomplete attribute is not reflected on the outer element to avoid hydration mismatches
  // Instead, check that the inner textfield receives the correct default value
  const textfield = el.shadowRoot?.querySelector('w-textfield') as HTMLElement & { autocomplete: string };
  expect(textfield?.autocomplete).toBe('off');
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

test('renders light-DOM option children in the generated popup', async () => {
  const component = html`
    <w-combobox data-testid="combobox" open-on-focus>
      <option value="no">Norway</option>
      <option value="se">Sweden</option>
      <option value="dk">Denmark</option>
    </w-combobox>
  `;

  const page = render(component);
  const locator = page.getByTestId('combobox');
  await expect.element(locator).toBeVisible();
  const el = (await locator.element()) as HTMLElement;
  const input = el.shadowRoot?.querySelector('w-textfield')?.shadowRoot?.querySelector('input');

  input?.focus();
  await new Promise((resolve) => setTimeout(resolve, 100));

  const visibleOptions = el.shadowRoot?.querySelectorAll('[role="listbox"] [role="option"]');
  const optionTexts = Array.from(visibleOptions || []).map((opt) => opt.textContent?.trim());

  expect(optionTexts).toEqual(['Norway', 'Sweden', 'Denmark']);
});

test('filters light-DOM options by label attribute and stores option value on select', async () => {
  const component = html`
    <w-combobox data-testid="combobox" open-on-focus>
      <option value="us" label="United States">US</option>
      <option value="uk" label="United Kingdom">UK</option>
      <option value="no">Norway</option>
    </w-combobox>
  `;

  const page = render(component);
  const locator = page.getByTestId('combobox');
  await expect.element(locator).toBeVisible();
  const el = (await locator.element()) as HTMLElement & { value: string };
  const input = el.shadowRoot?.querySelector('w-textfield')?.shadowRoot?.querySelector('input') as HTMLInputElement;
  const selectEvents: CustomEvent[] = [];

  el.addEventListener('select', (event) => selectEvents.push(event as CustomEvent));

  input.focus();
  input.value = 'United';
  input.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
  await new Promise((resolve) => setTimeout(resolve, 100));

  const visibleOptions = el.shadowRoot?.querySelectorAll('[role="listbox"] [role="option"]');
  const optionTexts = Array.from(visibleOptions || []).map((opt) => opt.textContent?.trim());

  expect(optionTexts).toEqual(['United States', 'United Kingdom']);

  visibleOptions?.[1]?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(input.value).toBe('United Kingdom');
  expect(el.value).toBe('uk');
  expect(selectEvents.at(-1)?.detail).toEqual({ value: 'uk' });
});

test('uses light-DOM options to display an initial value label', async () => {
  const component = html`
    <w-combobox data-testid="combobox" value="no">
      <option value="se">Sweden</option>
      <option value="no">Norway</option>
    </w-combobox>
  `;

  const page = render(component);
  const locator = page.getByTestId('combobox');
  await expect.element(locator).toBeVisible();
  const el = (await locator.element()) as HTMLElement & { value: string };
  const input = el.shadowRoot?.querySelector('w-textfield')?.shadowRoot?.querySelector('input') as HTMLInputElement;

  expect(input.value).toBe('Norway');
  expect(el.value).toBe('no');
});

test('syncs dynamic light-DOM option child changes', async () => {
  const component = html`
    <w-combobox data-testid="combobox" open-on-focus>
      <option value="no">Norway</option>
      <option value="se">Sweden</option>
    </w-combobox>
  `;

  const page = render(component);
  const locator = page.getByTestId('combobox');
  await expect.element(locator).toBeVisible();
  const el = (await locator.element()) as HTMLElement;
  const input = el.shadowRoot?.querySelector('w-textfield')?.shadowRoot?.querySelector('input') as HTMLInputElement;

  const denmark = document.createElement('option');
  denmark.value = 'dk';
  denmark.textContent = 'Denmark';
  el.appendChild(denmark);

  const sweden = el.querySelector('option[value="se"]');
  sweden?.remove();

  const norway = el.querySelector('option[value="no"]');
  norway?.setAttribute('value', 'nor');
  if (norway) {
    norway.textContent = 'Norge';
  }

  await new Promise((resolve) => setTimeout(resolve, 100));

  input.focus();
  await new Promise((resolve) => setTimeout(resolve, 100));

  const visibleOptions = el.shadowRoot?.querySelectorAll('[role="listbox"] [role="option"]');
  const optionTexts = Array.from(visibleOptions || []).map((opt) => opt.textContent?.trim());

  expect(optionTexts).toEqual(['Norge', 'Denmark']);
});

test('non-empty options property takes precedence over light-DOM option children', async () => {
  const options = [{ value: 'apple', label: 'Apple' }];
  const component = html`
    <w-combobox data-testid="combobox" open-on-focus .options="${options}">
      <option value="banana">Banana</option>
    </w-combobox>
  `;

  const page = render(component);
  const locator = page.getByTestId('combobox');
  await expect.element(locator).toBeVisible();
  const el = (await locator.element()) as HTMLElement;
  const input = el.shadowRoot?.querySelector('w-textfield')?.shadowRoot?.querySelector('input') as HTMLInputElement;

  input.focus();
  await new Promise((resolve) => setTimeout(resolve, 100));

  const visibleOptions = el.shadowRoot?.querySelectorAll('[role="listbox"] [role="option"]');
  const optionTexts = Array.from(visibleOptions || []).map((opt) => opt.textContent?.trim());

  expect(optionTexts).toEqual(['Apple']);
});
