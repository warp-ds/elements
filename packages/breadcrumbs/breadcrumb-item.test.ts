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

test('separators display after items except the one with current-page', async () => {
  const page = render(html`
    <w-breadcrumbs aria-label="You are here">
      <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
      <w-breadcrumb-item href="/category">Category</w-breadcrumb-item>
      <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const items = page.container.querySelectorAll('w-breadcrumb-item');

  // First two items should have separators, last (current-page) should not
  const firstItemShadow = items[0].shadowRoot;
  const secondItemShadow = items[1].shadowRoot;
  const thirdItemShadow = items[2].shadowRoot;

  // Separators should be visible after first and second items
  expect(firstItemShadow?.textContent).toContain('/');
  expect(secondItemShadow?.textContent).toContain('/');

  // No separator after current-page item
  expect(thirdItemShadow?.textContent).not.toContain('/');
});

test('item with href exposes a navigable link with visible label as accessible name', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  // Should expose a link role with the visible label as accessible name
  const link = page.getByRole('link', { name: 'Home' });
  await expect.element(link).toBeVisible();

  // Link should have the correct href
  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');
  expect(anchor?.getAttribute('href')).toBe('/home');
});

test('item without href does not expose a keyboard-focusable element', async () => {
  const page = render(html`
    <w-breadcrumb-item>Category</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Category')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');

  // Should not contain an anchor element
  const anchor = item?.shadowRoot?.querySelector('a');
  expect(anchor).toBeNull();

  // Should not contain any focusable elements
  const focusables = item?.shadowRoot?.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
  expect(focusables?.length).toBe(0);
});
