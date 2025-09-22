import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { describe, expect, test } from 'vitest';

import { toast } from './index.js';

const duration = 500;
function wait(ms: number = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


describe('toast', () => {
    test('render toast', async () => {
    page.render(html`<button id="show" @click=${() => toast("HELLO", { duration })}>Show toast</button>`);
    await page.getByRole('button').click();

    await expect.element(page.getByText('Show toast')).toBeVisible();

    // wait for the toast popup animation to complete
    await wait();
    page.screenshot();
    await expect.element(page.getByText('HELLO')).toBeVisible()
  })

  test('render toast with close button', async () => { 
    page.render(html`<button id="show" @click=${() => toast("HELLO", { duration, canclose: true })}>Show toast</button>`);
    await page.getByRole('button').click();

    await wait();
    await page.screenshot();
  });
});




