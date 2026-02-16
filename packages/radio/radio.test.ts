import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './radio.js';

test('checks on click and remains checked on subsequent clicks', async () => {
  render(html`<w-radio value="alpha">Alpha</w-radio>`);

  const radio = document.querySelector('w-radio') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<unknown>;
    click: () => void;
  };

  await radio.updateComplete;
  expect(radio.checked).toBe(false);

  radio.click();
  await radio.updateComplete;
  expect(radio.checked).toBe(true);

  radio.click();
  await radio.updateComplete;
  expect(radio.checked).toBe(true);
});

test('does not check when disabled', async () => {
  render(html`<w-radio value="alpha" disabled>Alpha</w-radio>`);

  const radio = document.querySelector('w-radio') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<unknown>;
    click: () => void;
    tabIndex: number;
  };

  await radio.updateComplete;
  expect(radio.checked).toBe(false);
  expect(radio.getAttribute('aria-disabled')).toBe('true');
  expect(radio.tabIndex).toBe(-1);

  radio.click();
  await radio.updateComplete;
  expect(radio.checked).toBe(false);
});

test('updates aria-checked and tabIndex when checked', async () => {
  render(html`<w-radio value="alpha">Alpha</w-radio>`);

  const radio = document.querySelector('w-radio') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<unknown>;
    tabIndex: number;
  };

  await radio.updateComplete;
  expect(radio.getAttribute('aria-checked')).toBe('false');

  radio.checked = true;
  await radio.updateComplete;

  expect(radio.getAttribute('aria-checked')).toBe('true');
  expect(radio.tabIndex).toBe(0);
});
