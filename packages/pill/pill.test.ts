import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';

import './index.js';

test('renders a pill', async () => {
  const screen = await page.render(html` <w-pill>Standard</w-pill>`);
  await expect.element(screen.getByText('Standard')).toBeVisible();
});

test('renders a pill with a close icon', async () => {
  const screen = await page.render(html` <w-pill can-close>Close me</w-pill>`);
  await expect.element(screen.getByText('Close me')).toBeVisible();
  await expect.element(screen.getByText('Close me').element().shadowRoot.querySelector('w-icon-close-16')).toBeVisible();
});

test('renders screen reader label on the pill', async () => {
  const screen = await page.render(html` <w-pill open-sr-label="Open me please">Close me</w-pill>`);
  await expect.element(screen.getByText('Close me')).toBeVisible();
  await expect.element(screen.getByText('Open me please')).toBeVisible();
});

test('renders screen reader label on the pill', async () => {
  const screen = await page.render(html` <w-pill open-aria-label="Open me please">Close me</w-pill>`);
  await expect.element(screen.getByText('Close me')).toBeVisible();
  await expect.element(screen.getByText('Open me please')).toBeVisible();
});
