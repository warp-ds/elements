import { html } from 'lit';

import { expect, test, assert } from 'vitest';
import { render } from 'vitest-browser-lit';
import './index.js';

test('renders an info ', async () => {
  const component = html`<w-alert variant="info" show data-testid="infoMessage">This is information</w-alert>`;

  const screen = render(component);

  assert.equal(screen.getByTestId('infoMessage').element().attributes['variant'].value, 'info');
  await expect.element(screen.getByTestId('infoMessage')).toBeVisible();
  await expect.element(screen.getByText('This is information')).toBeVisible();
});

test('renders a warning ', async () => {
  const component = html`<w-alert variant="warning" show data-testid="warningMessage">This is a warning</w-alert>`;

  const screen = render(component);

  assert.equal(screen.getByTestId('warningMessage').element().attributes['variant'].value, 'warning');
  await expect.element(screen.getByTestId('warningMessage')).toBeVisible();
  await expect.element(screen.getByText('This is a warning')).toBeVisible();
});
