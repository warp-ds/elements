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

test('checked state uses selected border color', async () => {
  render(html`<w-radio value="alpha">Alpha</w-radio>`);

  const radio = document.querySelector('w-radio') as HTMLElement & {
    updateComplete: Promise<unknown>;
    click: () => void;
  };

  await radio.updateComplete;

  const control = radio.shadowRoot?.querySelector('.control') as HTMLElement | null;
  expect(control).not.toBeNull();

  radio.click();
  await radio.updateComplete;

  const swatch = document.createElement('div');
  swatch.style.borderColor = 'var(--w-s-color-border-selected)';
  document.body.append(swatch);
  const selectedColor = getComputedStyle(swatch).borderColor;
  swatch.remove();

  expect(getComputedStyle(control!).borderColor).toBe(selectedColor);
});

test('disabled control uses disabled background and border colors', async () => {
  render(html`<w-radio value="alpha" disabled>Alpha</w-radio>`);

  const radio = document.querySelector('w-radio') as HTMLElement & {
    updateComplete: Promise<unknown>;
  };

  await radio.updateComplete;

  const control = radio.shadowRoot?.querySelector('.control') as HTMLElement | null;
  expect(control).not.toBeNull();

  const bgSwatch = document.createElement('div');
  bgSwatch.style.backgroundColor = 'var(--w-s-color-background-disabled-subtle)';
  document.body.append(bgSwatch);
  const disabledBg = getComputedStyle(bgSwatch).backgroundColor;
  bgSwatch.remove();

  const borderSwatch = document.createElement('div');
  borderSwatch.style.borderColor = 'var(--w-s-color-border-disabled)';
  document.body.append(borderSwatch);
  const disabledBorder = getComputedStyle(borderSwatch).borderColor;
  borderSwatch.remove();

  const controlStyle = getComputedStyle(control!);
  expect(controlStyle.backgroundColor).toBe(disabledBg);
  expect(controlStyle.borderColor).toBe(disabledBorder);
});

test('reflects disabled state changes and updates tabIndex', async () => {
  render(html`<w-radio value="alpha">Alpha</w-radio>`);

  const radio = document.querySelector('w-radio') as HTMLElement & {
    disabled: boolean;
    updateComplete: Promise<unknown>;
    checked: boolean;
    tabIndex: number;
  };

  await radio.updateComplete;
  expect(radio.getAttribute('aria-disabled')).toBe('false');
  expect(radio.tabIndex).toBe(0);

  radio.checked = true;
  await radio.updateComplete;
  expect(radio.tabIndex).toBe(0);

  radio.disabled = true;
  await radio.updateComplete;
  expect(radio.getAttribute('aria-disabled')).toBe('true');
  expect(radio.tabIndex).toBe(-1);

  radio.disabled = false;
  await radio.updateComplete;
  expect(radio.getAttribute('aria-disabled')).toBe('false');
  expect(radio.tabIndex).toBe(0);
});

test('focuses the host element', async () => {
  render(html`<w-radio value="alpha">Alpha</w-radio>`);

  const radio = document.querySelector('w-radio') as HTMLElement & {
    updateComplete: Promise<unknown>;
    focus: () => void;
  };

  await radio.updateComplete;
  radio.focus();
  await expect.poll(() => document.activeElement).toBe(radio);
});

test('associates selected value with form submission', async () => {
  render(html`
    <form>
      <w-radio name="choice" value="alpha">Alpha</w-radio>
      <w-radio name="choice" value="beta">Beta</w-radio>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { updateComplete: Promise<unknown>; click: () => void; checked: boolean }
  >;

  await radios[0].updateComplete;
  let data = new FormData(form);
  expect(data.get('choice')).toBeNull();

  radios[0].click();
  await radios[0].updateComplete;

  data = new FormData(form);
  expect(data.get('choice')).toBe('alpha');

  radios[1].click();
  await radios[1].updateComplete;

  expect(radios[0].checked).toBe(false);
  expect(radios[1].checked).toBe(true);

  data = new FormData(form);
  expect(data.get('choice')).toBe('beta');
});

test('standalone radios with same name are mutually exclusive', async () => {
  render(html`
    <w-radio name="group" value="one">One</w-radio>
    <w-radio name="group" value="two">Two</w-radio>
  `);

  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; click: () => void; updateComplete: Promise<unknown> }
  >;

  await radios[0].updateComplete;
  radios[0].click();
  await radios[0].updateComplete;

  expect(radios[0].checked).toBe(true);
  expect(radios[1].checked).toBe(false);

  radios[1].click();
  await radios[1].updateComplete;

  expect(radios[0].checked).toBe(false);
  expect(radios[1].checked).toBe(true);
});

test('required radio reports validity based on checked state', async () => {
  render(html`<w-radio name="choice" value="alpha" required>Alpha</w-radio>`);

  const radio = document.querySelector('w-radio') as HTMLElement & {
    updateComplete: Promise<unknown>;
    reportValidity: () => boolean;
    validationMessage: string;
    invalid: boolean;
    click: () => void;
  };

  await radio.updateComplete;
  await expect.poll(() => radio.reportValidity()).toBe(false);
  expect(radio.validationMessage).not.toBe('');
  expect(radio.invalid).toBe(true);

  radio.click();
  await radio.updateComplete;

  await expect.poll(() => radio.reportValidity()).toBe(true);
  expect(radio.invalid).toBe(false);
});
