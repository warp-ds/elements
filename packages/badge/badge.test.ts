import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import './badge.js';

test('renders the slotted label', async () => {
  const component = html`<w-badge>This is also not a button</w-badge>`;

  const page = render(component);
  await expect.element(page.getByText('This is also not a button')).toBeVisible();
});

test('defaults to neutral variant when no variant attribute is set', async () => {
  const component = html`<w-badge data-testid="badge">Default badge</w-badge>`;

  const page = render(component);
  const el = page.getByTestId('badge').element() as HTMLElement;

  // The variant attribute should not be reflected (to avoid hydration mismatch)
  expect(el.hasAttribute('variant')).toBe(false);

  // But the neutral styles should still be applied
  await expect
    .poll(() => {
      const inner = el.shadowRoot?.querySelector('div');
      return inner?.className.includes('bg-[--w-color-badge-neutral-background]');
    })
    .toBe(true);
});
