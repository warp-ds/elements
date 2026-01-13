import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../textfield/index.js';
import './index.js';

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
