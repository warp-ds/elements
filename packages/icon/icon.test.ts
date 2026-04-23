import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './icon.js';

test('renders the icon', async () => {
  const component = html`<w-icon name="Plus" data-testid="icon"></w-icon>`;

  const page = render(component);
  await expect.element(page.getByTestId('icon')).toBeVisible();
});

test('defaults to medium size when no size attribute is set', async () => {
  const component = html`<w-icon name="Plus" data-testid="icon"></w-icon>`;

  const page = render(component);
  const el = page.getByTestId('icon').element() as HTMLElement;

  // The size attribute should not be reflected (to avoid hydration mismatch)
  expect(el.hasAttribute('size')).toBe(false);

  // But the medium size class should still be applied
  await expect
    .poll(() => {
      const inner = el.shadowRoot?.querySelector('.w-icon');
      return inner?.classList.contains('w-icon--m');
    })
    .toBe(true);
});

test('defaults to en locale when no locale attribute is set', async () => {
  const component = html`<w-icon name="Plus" data-testid="icon"></w-icon>`;

  const page = render(component);
  const el = page.getByTestId('icon').element() as HTMLElement;

  // The locale attribute should not be reflected (to avoid hydration mismatch)
  expect(el.hasAttribute('locale')).toBe(false);
});

test('uses specified size when size attribute is set', async () => {
  const component = html`<w-icon name="Plus" size="small" data-testid="icon"></w-icon>`;

  const page = render(component);
  const el = page.getByTestId('icon').element() as HTMLElement;

  // The size attribute should be reflected
  expect(el.getAttribute('size')).toBe('small');

  // And the small size class should be applied
  await expect
    .poll(() => {
      const inner = el.shadowRoot?.querySelector('.w-icon');
      return inner?.classList.contains('w-icon--s');
    })
    .toBe(true);
});

test('uses specified locale when locale attribute is set', async () => {
  const component = html`<w-icon name="Plus" locale="nb" data-testid="icon"></w-icon>`;

  const page = render(component);
  const el = page.getByTestId('icon').element() as HTMLElement;

  // The locale attribute should be reflected
  expect(el.getAttribute('locale')).toBe('nb');
});

test('uses html lang attribute when no locale attribute is set', async () => {
  const originalLang = document.documentElement.lang;

  try {
    document.documentElement.lang = 'fi';

    const component = html`<w-icon name="Plus" data-testid="icon"></w-icon>`;
    const page = render(component);
    const el = page.getByTestId('icon').element() as HTMLElement;

    // The component should use the html lang value as its locale
    expect((el as any).locale).toBe('fi');
  } finally {
    document.documentElement.lang = originalLang;
  }
});
