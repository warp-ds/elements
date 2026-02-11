import { html } from 'lit';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import './checkbox.js';

const getInput = (el: HTMLElement) => el.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement | null;

test('toggles checked on click and dispatches change', async () => {
  render(html`<w-checkbox>Check me</w-checkbox>`);

  const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<unknown>;
    click: () => void;
  };

  const onChange = vi.fn();
  wCheckbox.addEventListener('change', onChange);

  await wCheckbox.updateComplete;
  wCheckbox.click();
  await wCheckbox.updateComplete;
  expect(wCheckbox.checked).toBe(true);
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('associates value with form when checked', async () => {
  render(html`
    <form data-testid="form">
      <w-checkbox name="newsletter" value="yes" checked>Sign up</w-checkbox>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<unknown>;
  };

  await wCheckbox.updateComplete;
  let data = new FormData(form);
  expect(data.get('newsletter')).toBe('yes');

  wCheckbox.checked = false;
  await wCheckbox.updateComplete;

  data = new FormData(form);
  expect(data.get('newsletter')).toBeNull();
});

test('resets to defaultChecked on form reset', async () => {
  render(html`
    <form>
      <w-checkbox name="updates" value="yes" checked>Updates</w-checkbox>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<unknown>;
    click: () => void;
  };

  await wCheckbox.updateComplete;
  wCheckbox.click();
  await wCheckbox.updateComplete;
  expect(wCheckbox.checked).toBe(false);

  form.reset();
  await wCheckbox.updateComplete;
  expect(wCheckbox.checked).toBe(true);
});

test('required checkbox reports validity based on checked state', async () => {
  render(html`<w-checkbox name="terms" required>Accept</w-checkbox>`);

  const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<unknown>;
    checkValidity: () => boolean;
    validity: ValidityState;
    validationMessage: string;
  };

  await expect.poll(() => wCheckbox.checkValidity()).toBe(false);
  expect(wCheckbox.validity.valueMissing).toBe(true);
  expect(wCheckbox.validationMessage).not.toBe('');

  wCheckbox.checked = true;
  await wCheckbox.updateComplete;

  await expect.poll(() => wCheckbox.checkValidity()).toBe(true);
  expect(wCheckbox.validity.valid).toBe(true);
});

test('required checkbox shows invalid state after submit and clears after selection', async () => {
  render(html`
    <form>
      <w-checkbox name="terms" required>Accept</w-checkbox>
      <button type="submit">Submit</button>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
    updateComplete: Promise<unknown>;
    click: () => void;
  };
  const submit = document.querySelector('button[type="submit"]') as HTMLButtonElement;

  await wCheckbox.updateComplete;
  expect(wCheckbox.hasAttribute('invalid')).toBe(false);

  submit.click();
  await wCheckbox.updateComplete;
  await expect.poll(() => form.checkValidity()).toBe(false);
  expect(wCheckbox.hasAttribute('invalid')).toBe(true);

  wCheckbox.click();
  await wCheckbox.updateComplete;
  await expect.poll(() => form.checkValidity()).toBe(true);
  expect(wCheckbox.hasAttribute('invalid')).toBe(false);
});

test('participates in form submission and blocks submit when required', async () => {
  render(html`
    <form>
      <w-checkbox name="newsletter" value="yes" required>Sign up</w-checkbox>
      <button type="submit">Submit</button>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
    updateComplete: Promise<unknown>;
    click: () => void;
  };
  const submit = document.querySelector('button[type="submit"]') as HTMLButtonElement;

  const onSubmit = vi.fn(() => {
    const data = new FormData(form);
    expect(data.get('newsletter')).toBe('yes');
  });

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    onSubmit();
  });

  await wCheckbox.updateComplete;
  await expect.poll(() => form.checkValidity()).toBe(false);
  submit.click();
  await expect.poll(() => form.checkValidity()).toBe(false);
  expect(onSubmit).not.toHaveBeenCalled();

  wCheckbox.click();
  await wCheckbox.updateComplete;

  submit.click();
  await wCheckbox.updateComplete;
  await expect.poll(() => form.checkValidity()).toBe(true);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

test('clears indeterminate on click', async () => {
  render(html`<w-checkbox indeterminate>Partial</w-checkbox>`);

  const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
    checked: boolean;
    indeterminate: boolean;
    updateComplete: Promise<unknown>;
    click: () => void;
  };

  await wCheckbox.updateComplete;
  expect(wCheckbox.indeterminate).toBe(true);
  const input = getInput(wCheckbox);
  expect(input).not.toBeNull();
  expect(input?.indeterminate).toBe(true);

  wCheckbox.click();
  await wCheckbox.updateComplete;

  expect(wCheckbox.indeterminate).toBe(false);
  expect(wCheckbox.checked).toBe(true);
});

test('does not toggle or emit change when disabled', async () => {
  render(html`<w-checkbox disabled>Disabled</w-checkbox>`);

  const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<unknown>;
    click: () => void;
  };

  const onChange = vi.fn();
  wCheckbox.addEventListener('change', onChange);

  await wCheckbox.updateComplete;
  expect(wCheckbox.checked).toBe(false);

  const input = getInput(wCheckbox);
  expect(input).not.toBeNull();
  expect(input?.disabled).toBe(true);

  wCheckbox.click();
  await wCheckbox.updateComplete;

  expect(wCheckbox.checked).toBe(false);
  expect(onChange).not.toHaveBeenCalled();
});
