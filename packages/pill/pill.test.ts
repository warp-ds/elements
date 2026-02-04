import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './pill.js';

test('renders a pill', async () => {
  const page = render(html` <w-pill>Standard</w-pill>`);
  await expect.element(page.getByText('Standard')).toBeVisible();
});

test('renders a pill with a close icon', async () => {
  const page = render(html` <w-pill can-close>Close me</w-pill>`);
  await expect.element(page.getByText('Close me')).toBeVisible();
  await expect.poll(() => page.getByText('Close me').element().shadowRoot.querySelector('w-icon')).toBeVisible();
});

test('renders screen reader label on the pill', async () => {
  const page = render(html` <w-pill open-sr-label="Open me please">Close me</w-pill>`);
  await expect.element(page.getByText('Close me')).toBeVisible();
  await expect.element(page.getByText('Open me please')).toBeVisible();
});

test('renders screen reader label on the pill', async () => {
  const page = render(html` <w-pill open-aria-label="Open me please">Close me</w-pill>`);
  await expect.element(page.getByText('Close me')).toBeVisible();
  await expect.element(page.getByText('Open me please')).toBeVisible();
});
