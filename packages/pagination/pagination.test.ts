import { html } from 'lit';

import { userEvent } from '@vitest/browser/context';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import './index.js';

test('current page is the active page', async () => {
  const component = html`<w-pagination current-page="5" pages="10" base-url="/page/"></w-pagination>`;
  const page = render(component);

  await expect.element(page.getByLabelText('Page 5')).toBeInTheDocument();
  await expect.element(page.getByLabelText('Page 5')).toHaveAttribute('aria-current', 'page');
});

test('limits the number of displayed pages', async () => {
  const component = html`<w-pagination current-page="10" pages="20" visible-pages="5" base-url="/page/"></w-pagination>`;
  const page = render(component);

  await expect.poll(() => page.getByRole('link').and(page.getByLabelText('Page ')).all()).toHaveLength(5);
});

test('shows link to first page if current page is page 3 or beyond', async () => {
  const component = html`<w-pagination current-page="10" pages="20" base-url="/page/"></w-pagination>`;
  const page = render(component);

  await expect.poll(() => page.getByText('First page')).toBeInTheDocument();
});

test('does not show link to first page if current page is page 1 or 2', async () => {
  for (let i = 1; i <= 2; i++) {
    const component = html`<w-pagination current-page="${i}" pages="20" base-url="/page/"></w-pagination>`;
    const page = render(component);

    await expect.poll(() => page.getByText('First page').query()).not.toBeInTheDocument();
  }
});

test('shows link to previous page if current page is page 2 or beyond', async () => {
  const component = html`<w-pagination current-page="10" pages="20" base-url="/page/"></w-pagination>`;
  const page = render(component);

  await expect.poll(() => page.getByText('Previous page')).toBeInTheDocument();
});

test('does not show link to previous page if current page is the first page', async () => {
  const component = html`<w-pagination current-page="1" pages="20" base-url="/page/"></w-pagination>`;
  const page = render(component);

  await expect.poll(() => page.getByText('Previous page').query()).not.toBeInTheDocument();
});

test('shows link to next page', async () => {
  const component = html`<w-pagination current-page="15" pages="20" base-url="/page/"></w-pagination>`;
  const page = render(component);

  await expect.poll(() => page.getByText('Next page').query()).toBeInTheDocument();
});

test('does not show link to next page if current page is the last page', async () => {
  const component = html`<w-pagination current-page="20" pages="20" base-url="/page/"></w-pagination>`;
  const page = render(component);

  await expect.poll(() => page.getByText('Next page').query()).not.toBeInTheDocument();
});

test('is able to get the correct data-page-number attribute from the element on click', async () => {
  const component = html`<w-pagination current-page="15" pages="20" base-url="/page/" data-testid="pagination"></w-pagination>`;
  const page = render(component);

  await expect.poll(() => page.getByText('14').query()).toBeInTheDocument();

  let clickedPage = null;

  page
    .getByTestId('pagination')
    .element()
    .addEventListener('click', (e: PointerEvent) => {
      e.preventDefault();
    });

  page
    .getByTestId('pagination')
    .element()
    .addEventListener('page-click', (e: CustomEvent) => {
      clickedPage = e.detail.clickedPage;
    });

  const element = page.getByLabelText('page 14');
  await userEvent.click(element);

  await vi.waitFor(
    () => {
      if (clickedPage === null) {
        throw new Error('clickedPage was not set');
      }
    },
    {
      interval: 100,
    },
  );

  expect(clickedPage).toEqual('14');
});
