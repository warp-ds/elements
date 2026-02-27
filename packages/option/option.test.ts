import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './option.js';

test('registers w-option as a custom element', () => {
  expect(customElements.get('w-option')).toBeDefined();
});

test('supports value and disabled as data attributes', async () => {
  const page = render(html`<w-option data-testid="option" value="no" disabled>Norway</w-option>`);
  const locator = page.getByTestId('option');

  const el = (await locator.element()) as HTMLElement;
  expect(el).toBeTruthy();
  expect(el.getAttribute('value')).toBe('no');
  expect(el.hasAttribute('disabled')).toBe(true);
});

test('uses text content as label when no explicit label attribute is set', async () => {
  const page = render(html`<w-option data-testid="option" value="se">Sweden</w-option>`);
  const locator = page.getByTestId('option');

  const el = (await locator.element()) as HTMLElement;
  expect(el).toBeTruthy();
  expect(el.textContent?.trim()).toBe('Sweden');
});
