import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './index.js';

test('renders an info', async () => {
  const page = render(html`<w-alert variant="info" show data-testid="infoMessage">This is information</w-alert>`);

  // Verify the icon correct icon is rendered
  await expect.poll(() => page.getByTestId('infoMessage').element().shadowRoot.querySelector('w-icon-info-16')).toBeVisible();
  await expect.element(page.getByTestId('infoMessage')).toBeVisible();
  await expect.element(page.getByText('This is information')).toBeVisible();
});

test('does not render when "show" is not set / or not true', async () => {
  const component = html`<w-alert variant="warning" data-testid="warningMessage">This is a warning</w-alert>`;
  const page = render(component);
  await expect.element(page.container.querySelector('w-alert')).not.toHaveAttribute('show');
});
