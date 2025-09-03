import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('current page is the active page', async () => {
  const component = html`<w-pagination current-page="5" pages="10" base-url="/page/"></w-pagination>`;
  const screen = await page.render(component);

  const currentPageLink = screen.getByLabelText('Page 5');
  await expect.element(currentPageLink).toBeInTheDocument();
  await expect.element(currentPageLink).toHaveAttribute('aria-current', 'page');
});

test('limits the number of displayed pages', async () => {
  const component = html`<w-pagination current-page="10" pages="20" visible-pages="5" base-url="/page/"></w-pagination>`;
  const screen = await page.render(component);

  const pageLinks = screen.getByRole('link').and(page.getByLabelText('Page ')).all();
  expect(pageLinks).toHaveLength(5);
});

test('shows link to first page if current page is page 3 or beyond', async () => {
  const component = html`<w-pagination current-page="10" pages="20" base-url="/page/"></w-pagination>`;
  const screen = await page.render(component);

  expect(screen.getByText('First page')).toBeInTheDocument();
});

test('does not show link to first page if current page is page 1 or 2', async () => {
  for (let i = 1; i <= 2; i++) {
    const component = html`<w-pagination current-page="${i}" pages="20" base-url="/page/"></w-pagination>`;
    const screen = await page.render(component);

    expect(screen.getByText('First page').query()).not.toBeInTheDocument();
  }
});

test('shows link to previous page if current page is page 2 or beyond', async () => {
  const component = html`<w-pagination current-page="10" pages="20" base-url="/page/"></w-pagination>`;
  const screen = await page.render(component);

  expect(screen.getByText('Previous page')).toBeInTheDocument();
});

test('does not show link to previous page if current page is the first page', async () => {
  const component = html`<w-pagination current-page="1" pages="20" base-url="/page/"></w-pagination>`;
  const screen = await page.render(component);

  expect(screen.getByText('Previous page').query()).not.toBeInTheDocument();
});

test('shows link to next page', async () => {
  const component = html`<w-pagination current-page="15" pages="20" base-url="/page/"></w-pagination>`;
  const screen = await page.render(component);

  expect(screen.getByText('Next page').query()).toBeInTheDocument();
});

test('does not show link to next page if current page is the last page', async () => {
  const component = html`<w-pagination current-page="20" pages="20" base-url="/page/"></w-pagination>`;
  const screen = await page.render(component);

  expect(screen.getByText('Next page').query()).not.toBeInTheDocument();
});
