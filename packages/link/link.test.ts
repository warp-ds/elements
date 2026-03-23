import { page } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';
import './link.js';

test('renders a link with role button ', async () => {
  const component = html`<w-link type="button" href="link yo">This is a link looking like a button</w-link>`;
  const screen = await page.render(component);
  await expect.element(screen.getByText('This is a link looking like a button')).toHaveAttribute('href', 'link yo');
});

test('defaults to secondary variant when no variant attribute is set', async () => {
  const component = html`<w-link href="/test" data-testid="link">Default link</w-link>`;
  const screen = await page.render(component);

  const el = screen.getByTestId('link').element() as HTMLElement;

  // The variant attribute should not be reflected (to avoid hydration mismatch)
  expect(el.hasAttribute('variant')).toBe(false);

  // But the secondary styles should still be applied (w-button--secondary class)
  await expect
    .poll(() => {
      const inner = el.shadowRoot?.querySelector('a');
      return inner?.classList.contains('w-button--secondary');
    })
    .toBe(true);
});
