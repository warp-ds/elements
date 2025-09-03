import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';

import './index.js';

test('renders a bread crumb', async () => {
  const screen = await page.render(
    html` <w-breadcrumb>
      <a href="/foo">Foo</a>
      <a href="/bar">Bar</a>
    </w-breadcrumb>`,
  );
  await expect.element(screen.getByText('Foo')).toBeVisible();
  await expect.element(screen.getByText('Bar')).toBeVisible();
});

test('renders an aria-label if set', async () => {
  const screen = await page.render(html` <w-breadcrumb aria-label="You are here"> </w-breadcrumb>`);
  await expect.element(screen.getByLabelText('You are here', { hasText: 'w-breadcrumb' })).toBeDefined();
});
