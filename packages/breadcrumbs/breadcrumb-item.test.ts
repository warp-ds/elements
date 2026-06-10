import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './breadcrumbs.js';
import './breadcrumb-item';

test('w-breadcrumbs with three w-breadcrumb-item children displays labels in source order', async () => {
  const page = render(html`
    <w-breadcrumbs aria-label="You are here">
      <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
      <w-breadcrumb-item href="/category">Category</w-breadcrumb-item>
      <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  // All three labels should be visible
  await expect.element(page.getByText('Home')).toBeVisible();
  await expect.element(page.getByText('Category')).toBeVisible();
  await expect.element(page.getByText('Current page')).toBeVisible();

  // Verify source order by checking DOM positions
  const breadcrumbs = page.container.querySelector('w-breadcrumbs');
  const items = breadcrumbs?.querySelectorAll('w-breadcrumb-item');

  expect(items?.length).toBe(3);
  expect(items?.[0].textContent?.trim()).toBe('Home');
  expect(items?.[1].textContent?.trim()).toBe('Category');
  expect(items?.[2].textContent?.trim()).toBe('Current page');
});
