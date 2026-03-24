import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './alert.js';

test('renders an info', async () => {
  const page = render(html`<w-alert variant="info" show data-testid="infoMessage">This is information</w-alert>`);

  // Verify the icon correct icon is rendered
  await expect.poll(() => page.getByTestId('infoMessage').element().shadowRoot.querySelector('w-icon')).toBeVisible();
  await expect.element(page.getByTestId('infoMessage')).toBeVisible();
  await expect.element(page.getByText('This is information')).toBeVisible();
});

test('does not render when "show" is not set / or not true', async () => {
  const component = html`<w-alert variant="warning" data-testid="warningMessage">This is a warning</w-alert>`;
  const page = render(component);
  await expect.element(page.container.querySelector('w-alert')).not.toHaveAttribute('show');
});

test('defaults to info variant when no variant attribute is set', async () => {
  const component = html`<w-alert show data-testid="alert">Default alert</w-alert>`;
  const page = render(component);

  const el = page.getByTestId('alert').element() as HTMLElement;

  // The variant attribute should not be reflected (to avoid hydration mismatch)
  expect(el.hasAttribute('variant')).toBe(false);

  // But the info icon should be rendered (default behavior)
  await expect
    .poll(() => {
      const icon = el.shadowRoot?.querySelector('w-icon');
      return icon?.getAttribute('name');
    })
    .toBe('Info');
});

test('defaults to hidden (show=false) when show attribute is not set', async () => {
  const component = html`<w-alert data-testid="alert">Hidden alert</w-alert>`;
  const page = render(component);

  const el = page.getByTestId('alert').element() as HTMLElement;

  // The show attribute should not be present (to avoid hydration mismatch)
  expect(el.hasAttribute('show')).toBe(false);
});
