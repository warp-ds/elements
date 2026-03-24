import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './dead-toggle.js';

test('renders the dead toggle', async () => {
  const component = html`<w-dead-toggle data-testid="dead-toggle"></w-dead-toggle>`;

  const page = render(component);
  await expect.element(page.getByTestId('dead-toggle')).toBeVisible();
});

test('defaults to radio type when no type attribute is set', async () => {
  const component = html`<w-dead-toggle data-testid="dead-toggle"></w-dead-toggle>`;

  const page = render(component);
  const el = page.getByTestId('dead-toggle').element() as HTMLElement;

  // The type attribute should not be reflected (to avoid hydration mismatch)
  expect(el.hasAttribute('type')).toBe(false);

  // But the radio styles should still be applied (border-radius: 50%)
  await expect
    .poll(() => {
      const control = el.shadowRoot?.querySelector('.control');
      return control ? getComputedStyle(control).borderRadius : null;
    })
    .toBe('50%');
});

test('renders as checkbox when type="checkbox" is set', async () => {
  const component = html`<w-dead-toggle type="checkbox" data-testid="dead-toggle"></w-dead-toggle>`;

  const page = render(component);
  const el = page.getByTestId('dead-toggle').element() as HTMLElement;

  // The type attribute should be reflected
  expect(el.getAttribute('type')).toBe('checkbox');

  // And the checkbox styles should be applied (border-radius: 4px)
  await expect
    .poll(() => {
      const control = el.shadowRoot?.querySelector('.control');
      return control ? getComputedStyle(control).borderRadius : null;
    })
    .toBe('4px');
});
