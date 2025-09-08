import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';

import './index.js';

test('renders an info', async () => {
  const screen = page.render(html`<w-alert variant="info" show data-testid="infoMessage">This is information</w-alert>`);

  // Verify the icon correct icon is rendered
  await expect.poll(() => screen.getByTestId('infoMessage').element().shadowRoot.querySelector('w-icon-info-16')).toBeVisible();
  await expect.element(screen.getByTestId('infoMessage')).toBeVisible();
  await expect.element(screen.getByText('This is information')).toBeVisible();
});

test('does not render when "show" is not set / or not true', async () => {
  const component = html`<w-alert variant="warning" data-testid="warningMessage">This is a warning</w-alert>`;
  const screen = page.render(component);
  await expect.element(screen.container.querySelector('w-alert')).not.toHaveAttribute('show');
});
