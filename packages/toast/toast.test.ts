import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './toast.js';

test('renders the toast with text', async () => {
  const component = html`<w-toast text="Test message" data-testid="toast"></w-toast>`;

  const page = render(component);
  await expect.element(page.getByTestId('toast')).toBeVisible();
  await expect.element(page.getByText('Test message')).toBeVisible();
});

test('defaults to success type when no type attribute is set', async () => {
  const component = html`<w-toast text="Success message" data-testid="toast"></w-toast>`;

  const page = render(component);
  const el = page.getByTestId('toast').element() as HTMLElement;

  // The type attribute should not be reflected (to avoid hydration mismatch)
  expect(el.hasAttribute('type')).toBe(false);

  // But the success icon should be rendered (default behavior)
  await expect
    .poll(() => {
      const icon = el.shadowRoot?.querySelector('w-icon');
      return icon?.getAttribute('name');
    })
    .toBe('Success');
});

test('generates unique id when no id attribute is set', async () => {
  const component = html`<w-toast text="Test message" data-testid="toast"></w-toast>`;

  const page = render(component);
  const el = page.getByTestId('toast').element() as HTMLElement & { id: string };

  // An id should be generated
  expect(el.id).toBeTruthy();
  expect(el.id.length).toBeGreaterThan(0);
});

test('uses specified type when type attribute is set', async () => {
  const component = html`<w-toast text="Warning message" type="warning" data-testid="toast"></w-toast>`;

  const page = render(component);
  const el = page.getByTestId('toast').element() as HTMLElement;

  // The type attribute should be reflected
  expect(el.getAttribute('type')).toBe('warning');

  // And the warning icon should be rendered
  await expect
    .poll(() => {
      const icon = el.shadowRoot?.querySelector('w-icon');
      return icon?.getAttribute('name');
    })
    .toBe('Warning');
});

test('renders error type correctly', async () => {
  const component = html`<w-toast text="Error message" type="error" data-testid="toast"></w-toast>`;

  const page = render(component);
  const el = page.getByTestId('toast').element() as HTMLElement;

  // The error icon should be rendered
  await expect
    .poll(() => {
      const icon = el.shadowRoot?.querySelector('w-icon');
      return icon?.getAttribute('name');
    })
    .toBe('Error');
});
