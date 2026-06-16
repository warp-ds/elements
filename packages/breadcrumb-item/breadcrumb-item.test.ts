import { html } from 'lit';

import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import { setupHydrationWarningCapture, testHydrationWithChildren } from '../../tests/react-hydration.js';
import '../breadcrumbs/breadcrumbs';
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

test('item with current-page exposes aria-current="page" semantics', async () => {
  const page = render(html`
    <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Current page')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');

  // The item or its content should expose aria-current="page"
  // Check shadow DOM for the semantic marker
  const shadowRoot = item?.shadowRoot;
  const elementWithAriaCurrent = shadowRoot?.querySelector('[aria-current="page"]');
  expect(elementWithAriaCurrent).not.toBeNull();
});

test('w-breadcrumb-item children hydrate in React SSR without warnings', async () => {
  setupHydrationWarningCapture();

  const childrenHtml =
    '<w-breadcrumb-item href="/home">Home</w-breadcrumb-item>' +
    '<w-breadcrumb-item href="/category">Category</w-breadcrumb-item>' +
    '<w-breadcrumb-item current-page>Current page</w-breadcrumb-item>';

  const warnings = await testHydrationWithChildren('w-breadcrumbs', { 'aria-label': 'You are here' }, childrenHtml);

  window.__HYDRATION_WARNINGS__ = [];

  expect(warnings).toEqual([]);
});

test('slotted nodes remain in item light DOM after custom element upgrade', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">
      <span class="custom-icon">Icon</span>
      Home
    </w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');

  // Slotted content should remain in light DOM, not moved to shadow DOM
  const lightDomSpan = item?.querySelector('span.custom-icon');
  expect(lightDomSpan).not.toBeNull();
  expect(lightDomSpan?.textContent).toBe('Icon');

  // Text node should also remain in light DOM
  const textContent = item?.textContent;
  expect(textContent).toContain('Home');
});

test('component does not add styling classes to slotted elements', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">
      <span id="test-span">Home</span>
    </w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const span = item?.querySelector('#test-span');

  // Component should not add any classes to slotted elements
  expect(span?.classList.length).toBe(0);
  expect(span?.className).toBe('');
});

test('adding href attribute dynamically creates a link', async () => {
  const page = render(html`
    <w-breadcrumb-item>Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item') as HTMLElement;

  // Initially no link
  let anchor = item.shadowRoot?.querySelector('a');
  expect(anchor).toBeNull();

  // Add href dynamically
  item.setAttribute('href', '/home');
  await new Promise((resolve) => setTimeout(resolve, 50));

  // Now should have a link
  anchor = item.shadowRoot?.querySelector('a');
  expect(anchor).not.toBeNull();
  expect(anchor?.getAttribute('href')).toBe('/home');
});

test('warns when mixing Legacy API and Item API children', async () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

  render(html`
    <w-breadcrumbs aria-label="You are here">
      <a href="/home">Home</a>
      <w-breadcrumb-item href="/category">Category</w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(warnSpy).toHaveBeenCalled();
  const warningMessage = warnSpy.mock.calls.find((call) =>
    call.some((arg) => typeof arg === 'string' && arg.toLowerCase().includes('mix'))
  );
  expect(warningMessage).toBeDefined();

  warnSpy.mockRestore();
});

test('empty w-breadcrumbs does not throw and exposes navigation landmark', async () => {
  const page = render(html`
    <w-breadcrumbs aria-label="You are here"></w-breadcrumbs>
  `);

  // Wait for custom element to upgrade and render
  await new Promise((resolve) => setTimeout(resolve, 50));

  const breadcrumbs = page.container.querySelector('w-breadcrumbs');
  expect(breadcrumbs).not.toBeNull();

  // Should expose navigation landmark via ElementInternals
  const nav = breadcrumbs?.shadowRoot?.querySelector('nav');
  expect(nav).not.toBeNull();

  // Accessible label should be rendered in the hidden h2
  const label = breadcrumbs?.shadowRoot?.querySelector('#breadCrumbLabel');
  expect(label?.textContent).toBe('You are here');
});

test('current-page item with href is still a focusable link', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/current" current-page>Current page</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Current page')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');

  // Should have an anchor element since href is present
  const anchor = item?.shadowRoot?.querySelector('a');
  expect(anchor).not.toBeNull();
  expect(anchor?.getAttribute('href')).toBe('/current');

  // Should also have aria-current="page"
  expect(anchor?.getAttribute('aria-current')).toBe('page');
});

test('removing href attribute dynamically removes the link', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item') as HTMLElement;

  // Initially has a link
  let anchor = item.shadowRoot?.querySelector('a');
  expect(anchor).not.toBeNull();

  // Remove href dynamically
  item.removeAttribute('href');
  await new Promise((resolve) => setTimeout(resolve, 50));

  // Now should not have a link
  anchor = item.shadowRoot?.querySelector('a');
  expect(anchor).toBeNull();
});

test('separator is not keyboard-focusable', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const separator = item?.shadowRoot?.querySelector('[aria-hidden="true"]');

  expect(separator).not.toBeNull();
  // Separator should have aria-hidden and not be focusable
  expect(separator?.getAttribute('aria-hidden')).toBe('true');
  // Should not have tabindex that makes it focusable
  expect(separator?.getAttribute('tabindex')).not.toBe('0');
  // Should not be an interactive element
  expect(separator?.tagName.toLowerCase()).not.toBe('a');
  expect(separator?.tagName.toLowerCase()).not.toBe('button');
});

test('w-breadcrumb-item with empty content does not throw', async () => {
  // This should not throw
  const page = render(html`
    <w-breadcrumbs aria-label="You are here">
      <w-breadcrumb-item href="/home"></w-breadcrumb-item>
      <w-breadcrumb-item></w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await new Promise((resolve) => setTimeout(resolve, 50));

  const items = page.container.querySelectorAll('w-breadcrumb-item');
  expect(items.length).toBe(2);
});

test('warns when current-page is not on the final item', async () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

  render(html`
    <w-breadcrumbs aria-label="You are here">
      <w-breadcrumb-item current-page>Home</w-breadcrumb-item>
      <w-breadcrumb-item href="/category">Category</w-breadcrumb-item>
      <w-breadcrumb-item href="/page">Page</w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(warnSpy).toHaveBeenCalled();
  const warningMessage = warnSpy.mock.calls.find((call) =>
    call.some((arg) => typeof arg === 'string' && arg.toLowerCase().includes('final'))
  );
  expect(warningMessage).toBeDefined();

  warnSpy.mockRestore();
});

test('warns when more than one w-breadcrumb-item has current-page', async () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

  render(html`
    <w-breadcrumbs aria-label="You are here">
      <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
      <w-breadcrumb-item current-page>Category</w-breadcrumb-item>
      <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await new Promise((resolve) => setTimeout(resolve, 100));

  expect(warnSpy).toHaveBeenCalled();
  const warningMessage = warnSpy.mock.calls.find((call) =>
    call.some((arg) => typeof arg === 'string' && arg.toLowerCase().includes('current'))
  );
  expect(warningMessage).toBeDefined();

  warnSpy.mockRestore();
});

test('linked item applies s-text-link class to the anchor', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');

  expect(anchor).not.toBeNull();
  expect(anchor?.classList.contains('s-text-link')).toBe(true);
});

test('non-linked item applies s-text class to the span', async () => {
  const page = render(html`
    <w-breadcrumb-item>Category</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Category')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const span = item?.shadowRoot?.querySelector('span:not([aria-hidden])');

  expect(span).not.toBeNull();
  expect(span?.classList.contains('s-text')).toBe(true);
});

test('separator applies separator class', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const separator = item?.shadowRoot?.querySelector('[aria-hidden="true"]');

  expect(separator).not.toBeNull();
  expect(separator?.classList.contains('separator')).toBe(true);
});

test('slotted span inside w-breadcrumb-item does not trigger mixed API warning', async () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

  render(html`
    <w-breadcrumbs aria-label="You are here">
      <w-breadcrumb-item href="/home"><span>Home</span></w-breadcrumb-item>
      <w-breadcrumb-item current-page><span>Current</span></w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await new Promise((resolve) => setTimeout(resolve, 100));

  // Should NOT warn about mixing APIs - spans are inside items, not direct children
  const mixWarning = warnSpy.mock.calls.find((call) =>
    call.some((arg) => typeof arg === 'string' && arg.toLowerCase().includes('mix'))
  );
  expect(mixWarning).toBeUndefined();

  warnSpy.mockRestore();
});

test('warns about multiple current-page with message mentioning "only one"', async () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

  render(html`
    <w-breadcrumbs aria-label="You are here">
      <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
      <w-breadcrumb-item current-page>Category</w-breadcrumb-item>
      <w-breadcrumb-item current-page>Current page</w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await new Promise((resolve) => setTimeout(resolve, 100));

  // Should warn specifically about multiple current-page items (not just non-final)
  const multipleWarning = warnSpy.mock.calls.find((call) =>
    call.some((arg) => typeof arg === 'string' && arg.toLowerCase().includes('only one'))
  );
  expect(multipleWarning).toBeDefined();

  warnSpy.mockRestore();
});

test('slotted anchor inside w-breadcrumb-item does not trigger mixed API warning', async () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

  render(html`
    <w-breadcrumbs aria-label="You are here">
      <w-breadcrumb-item><a href="/home">Home</a></w-breadcrumb-item>
      <w-breadcrumb-item current-page>Current</w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await new Promise((resolve) => setTimeout(resolve, 100));

  // Should NOT warn about mixing APIs - anchor is inside item, not a direct child
  const mixWarning = warnSpy.mock.calls.find((call) =>
    call.some((arg) => typeof arg === 'string' && arg.toLowerCase().includes('mix'))
  );
  expect(mixWarning).toBeUndefined();

  warnSpy.mockRestore();
});

test('item has horizontal spacing between content and separator', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const separator = item?.shadowRoot?.querySelector('[aria-hidden="true"]');

  expect(separator).not.toBeNull();

  // Separator should have left margin for spacing (space-x-8 = 8px margin)
  const separatorStyles = getComputedStyle(separator!);
  const marginLeft = Number.parseFloat(separatorStyles.marginLeft);
  expect(marginLeft).toBeGreaterThan(0);
});

test('item has right margin after separator for spacing to next item', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const separator = item?.shadowRoot?.querySelector('[aria-hidden="true"]');

  expect(separator).not.toBeNull();

  // Separator should have right margin for spacing to next item
  const separatorStyles = getComputedStyle(separator!);
  const marginRight = Number.parseFloat(separatorStyles.marginRight);
  expect(marginRight).toBeGreaterThan(0);
});

test('item displays inline to allow horizontal breadcrumb layout', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item') as HTMLElement;
  const itemStyles = getComputedStyle(item);

  // Host should display inline-block or inline to allow horizontal layout
  expect(['inline', 'inline-block']).toContain(itemStyles.display);
});

test('linked item exposes "link" part on the anchor element', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');

  expect(anchor).not.toBeNull();
  expect(anchor?.getAttribute('part')).toBe('link');
});

test('item exposes "separator" part on the separator element', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const separator = item?.shadowRoot?.querySelector('[aria-hidden="true"]');

  expect(separator).not.toBeNull();
  expect(separator?.getAttribute('part')).toBe('separator');
});

test('non-linked item exposes "text" part on the span element', async () => {
  const page = render(html`
    <w-breadcrumb-item>Category</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Category')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const span = item?.shadowRoot?.querySelector('span:not([aria-hidden])');

  expect(span).not.toBeNull();
  expect(span?.getAttribute('part')).toBe('text');
});

test('::part(link) selector can style the anchor element', async () => {
  const page = render(html`
    <style>
      w-breadcrumb-item::part(link) {
        font-size: 32px;
      }
    </style>
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');

  expect(anchor).not.toBeNull();
  const anchorStyles = getComputedStyle(anchor!);
  expect(anchorStyles.fontSize).toBe('32px');
});

test('--w-c-breadcrumb-item-link-color sets the link color', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home" style="--w-c-breadcrumb-item-link-color: rgb(255, 0, 0);">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');

  expect(anchor).not.toBeNull();
  const anchorStyles = getComputedStyle(anchor!);
  expect(anchorStyles.color).toBe('rgb(255, 0, 0)');
});

test('--w-c-breadcrumb-item-text-color sets the non-linked item color', async () => {
  const page = render(html`
    <w-breadcrumb-item style="--w-c-breadcrumb-item-text-color: rgb(0, 128, 0);">Category</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Category')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const span = item?.shadowRoot?.querySelector('span:not([aria-hidden])');

  expect(span).not.toBeNull();
  const spanStyles = getComputedStyle(span!);
  expect(spanStyles.color).toBe('rgb(0, 128, 0)');
});

test('--w-c-breadcrumb-item-separator-color sets the separator color', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home" style="--w-c-breadcrumb-item-separator-color: rgb(0, 0, 255);">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const separator = item?.shadowRoot?.querySelector('[aria-hidden="true"]');

  expect(separator).not.toBeNull();
  const separatorStyles = getComputedStyle(separator!);
  expect(separatorStyles.color).toBe('rgb(0, 0, 255)');
});

test('--w-c-breadcrumb-item-separator-spacing sets the separator margin', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home" style="--w-c-breadcrumb-item-separator-spacing: 20px;">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const separator = item?.shadowRoot?.querySelector('[aria-hidden="true"]');

  expect(separator).not.toBeNull();
  const separatorStyles = getComputedStyle(separator!);
  expect(separatorStyles.marginLeft).toBe('20px');
  expect(separatorStyles.marginRight).toBe('20px');
});

test('--w-c-breadcrumb-item-font-size sets the font size for link and separator', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home" style="--w-c-breadcrumb-item-font-size: 24px;">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');
  const separator = item?.shadowRoot?.querySelector('[aria-hidden="true"]');

  expect(anchor).not.toBeNull();
  expect(separator).not.toBeNull();

  const anchorStyles = getComputedStyle(anchor!);
  const separatorStyles = getComputedStyle(separator!);

  expect(anchorStyles.fontSize).toBe('24px');
  expect(separatorStyles.fontSize).toBe('24px');
});

test('--w-c-breadcrumb-item-line-height sets the line height', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home" style="--w-c-breadcrumb-item-line-height: 2;">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');

  expect(anchor).not.toBeNull();
  const anchorStyles = getComputedStyle(anchor!);
  expect(anchorStyles.lineHeight).toBe('32px'); // 16px default font * 2 line-height = 32px
});

test('--w-c-breadcrumb-item-font-weight sets the font weight', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home" style="--w-c-breadcrumb-item-font-weight: 700;">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');

  expect(anchor).not.toBeNull();
  const anchorStyles = getComputedStyle(anchor!);
  expect(anchorStyles.fontWeight).toBe('700');
});

test('--w-c-breadcrumb-item-padding-x sets horizontal padding on the link', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home" style="--w-c-breadcrumb-item-padding-x: 12px;">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');

  expect(anchor).not.toBeNull();
  const anchorStyles = getComputedStyle(anchor!);
  expect(anchorStyles.paddingLeft).toBe('12px');
  expect(anchorStyles.paddingRight).toBe('12px');
});

test('--w-c-breadcrumb-item-padding-y sets vertical padding on the link', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home" style="--w-c-breadcrumb-item-padding-y: 8px;">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a');

  expect(anchor).not.toBeNull();
  const anchorStyles = getComputedStyle(anchor!);
  expect(anchorStyles.paddingTop).toBe('8px');
  expect(anchorStyles.paddingBottom).toBe('8px');
});

test('--w-c-breadcrumb-item-link-color-hover sets the link hover color', async () => {
  const page = render(html`
    <style>
      .test-item {
        --w-c-breadcrumb-item-link-color-hover: rgb(255, 128, 0);
      }
    </style>
    <w-breadcrumb-item class="test-item" href="/home">Home</w-breadcrumb-item>
  `);

  const link = page.getByRole('link', { name: 'Home' });
  await expect.element(link).toBeVisible();

  // Use real browser hover interaction
  await link.hover();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a') as HTMLElement;

  const anchorStyles = getComputedStyle(anchor);
  expect(anchorStyles.color).toBe('rgb(255, 128, 0)');
});

test('link has :active style rule using --w-c-breadcrumb-item-link-color-active', async () => {
  const page = render(html`
    <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const shadowRoot = item?.shadowRoot;

  // Check that the shadow root's stylesheets include an :active rule
  let hasActiveRule = false;

  // Check adoptedStyleSheets
  for (const sheet of shadowRoot?.adoptedStyleSheets ?? []) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.cssText.includes(':active') && rule.cssText.includes('link-color-active')) {
          hasActiveRule = true;
          break;
        }
      }
    } catch {
      // CORS may prevent access
    }
  }

  // Also check inline style elements in shadow DOM
  if (!hasActiveRule) {
    const styleEl = shadowRoot?.querySelector('style');
    if (styleEl?.textContent?.includes(':active') && styleEl?.textContent?.includes('link-color-active')) {
      hasActiveRule = true;
    }
  }

  expect(hasActiveRule).toBe(true);
});

test('--w-c-breadcrumb-item-outline-color sets the focus outline color', async () => {
  const page = render(html`
    <style>
      .test-item {
        --w-c-breadcrumb-item-outline-color: rgb(255, 0, 255);
      }
    </style>
    <w-breadcrumb-item class="test-item" href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a') as HTMLElement;

  // Focus the anchor element directly
  await anchor.focus();

  const anchorStyles = getComputedStyle(anchor);
  expect(anchorStyles.outlineColor).toBe('rgb(255, 0, 255)');
});

test('--w-c-breadcrumb-item-outline-width sets the focus outline width', async () => {
  const page = render(html`
    <style>
      .test-item {
        --w-c-breadcrumb-item-outline-width: 4px;
      }
    </style>
    <w-breadcrumb-item class="test-item" href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a') as HTMLElement;

  // Focus the anchor element
  await anchor.focus();

  const anchorStyles = getComputedStyle(anchor);
  expect(anchorStyles.outlineWidth).toBe('4px');
});

test('--w-c-breadcrumb-item-outline-offset sets the focus outline offset', async () => {
  const page = render(html`
    <style>
      .test-item {
        --w-c-breadcrumb-item-outline-offset: 6px;
      }
    </style>
    <w-breadcrumb-item class="test-item" href="/home">Home</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const anchor = item?.shadowRoot?.querySelector('a') as HTMLElement;

  // Focus the anchor element
  await anchor.focus();

  const anchorStyles = getComputedStyle(anchor);
  expect(anchorStyles.outlineOffset).toBe('6px');
});

test('CSS custom properties inherit from w-breadcrumbs to child items', async () => {
  const page = render(html`
    <style>
      .test-breadcrumbs {
        --w-c-breadcrumb-item-link-color: rgb(100, 150, 200);
        --w-c-breadcrumb-item-separator-color: rgb(50, 75, 100);
      }
    </style>
    <w-breadcrumbs class="test-breadcrumbs" aria-label="You are here">
      <w-breadcrumb-item href="/home">Home</w-breadcrumb-item>
      <w-breadcrumb-item href="/category">Category</w-breadcrumb-item>
    </w-breadcrumbs>
  `);

  await expect.element(page.getByText('Home')).toBeVisible();

  const items = page.container.querySelectorAll('w-breadcrumb-item');
  const firstAnchor = items[0]?.shadowRoot?.querySelector('a') as HTMLElement;
  const firstSeparator = items[0]?.shadowRoot?.querySelector('[aria-hidden="true"]') as HTMLElement;

  // Link color should inherit from parent
  const anchorStyles = getComputedStyle(firstAnchor);
  expect(anchorStyles.color).toBe('rgb(100, 150, 200)');

  // Separator color should inherit from parent
  const separatorStyles = getComputedStyle(firstSeparator);
  expect(separatorStyles.color).toBe('rgb(50, 75, 100)');
});

test('non-linked current-page item uses --w-c-breadcrumb-item-text-color', async () => {
  const page = render(html`
    <w-breadcrumb-item
      current-page
      style="--w-c-breadcrumb-item-text-color: rgb(200, 100, 50);"
    >Current page</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Current page')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');
  const span = item?.shadowRoot?.querySelector('span:not([aria-hidden])') as HTMLElement;

  expect(span).not.toBeNull();
  const spanStyles = getComputedStyle(span);
  expect(spanStyles.color).toBe('rgb(200, 100, 50)');
});

test('focus tokens do not make non-linked items focusable', async () => {
  const page = render(html`
    <w-breadcrumb-item
      style="--w-c-breadcrumb-item-outline-color: rgb(255, 0, 0); --w-c-breadcrumb-item-outline-width: 4px;"
    >Category</w-breadcrumb-item>
  `);

  await expect.element(page.getByText('Category')).toBeVisible();

  const item = page.container.querySelector('w-breadcrumb-item');

  // Should still not have any focusable elements
  const focusables = item?.shadowRoot?.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
  expect(focusables?.length).toBe(0);

  // The span should not be focusable
  const span = item?.shadowRoot?.querySelector('span:not([aria-hidden])') as HTMLElement;
  expect(span?.getAttribute('tabindex')).not.toBe('0');
});
