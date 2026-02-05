import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './pagination.js';

describe('w-pagination accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('default state has no violations', async () => {
      const page = render(html`<w-pagination current-page="5" pages="10" base-url="/page/"></w-pagination>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('first page (no first or previous links) has no violations', async () => {
      const page = render(html`<w-pagination current-page="1" pages="10" base-url="/page/"></w-pagination>`);
      await expect(page).toHaveNoAxeViolations();
    });
  });

  describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('page links expose accessible names', async () => {
      const page = render(html`<w-pagination current-page="3" pages="5" base-url="/page/"></w-pagination>`);
      await expect.element(page.getByRole('link', { name: 'Page 3' })).toBeVisible();
      await expect.element(page.getByRole('link', { name: 'Page 2' })).toBeVisible();
    });
  });

  describe('WCAG 4.1.2 - Name, Role, Value', () => {
    test('current page is exposed via aria-current', async () => {
      const page = render(html`<w-pagination current-page="4" pages="8" base-url="/page/"></w-pagination>`);
      await expect.element(page.getByRole('link', { name: 'Page 4' })).toHaveAttribute('aria-current', 'page');
      await expect.element(page.getByRole('link', { name: 'Page 3' })).not.toHaveAttribute('aria-current', 'page');
    });

    test('navigation controls have accessible names', async () => {
      const page = render(html`<w-pagination current-page="4" pages="8" base-url="/page/"></w-pagination>`);
      await expect.element(page.getByRole('link', { name: 'First page' })).toBeVisible();
      await expect.element(page.getByRole('link', { name: 'Previous page' })).toBeVisible();
      await expect.element(page.getByRole('link', { name: 'Next page' })).toBeVisible();
    });
  });
});
