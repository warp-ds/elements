import { html } from 'lit';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import './radio-group.js';
import '../radio/radio.js';

test('selects radio on click and dispatches input/change', async () => {
  render(html`
    <w-radio-group label="Choices">
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    value: string | null;
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; click: () => void }
  >;

  const onInput = vi.fn();
  const onChange = vi.fn();
  group.addEventListener('input', onInput);
  group.addEventListener('change', onChange);

  await group.updateComplete;

  radios[1].click();
  await group.updateComplete;

  expect(group.value).toBe('beta');
  expect(radios[0].checked).toBe(false);
  expect(radios[1].checked).toBe(true);
  expect(onInput).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledTimes(1);

  radios[1].click();
  await group.updateComplete;
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('associates selected value with form submission', async () => {
  render(html`
    <form>
      <w-radio-group label="Choices" name="choice">
        <w-radio value="alpha">Alpha</w-radio>
        <w-radio value="beta">Beta</w-radio>
      </w-radio-group>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const group = document.querySelector('w-radio-group') as HTMLElement & {
    value: string | null;
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; click: () => void }
  >;

  await group.updateComplete;
  let data = new FormData(form);
  expect(data.get('choice')).toBeNull();

  radios[0].click();
  await group.updateComplete;

  data = new FormData(form);
  expect(data.get('choice')).toBe('alpha');
});

test('does not submit a value when name is missing', async () => {
  render(html`
    <form>
      <w-radio-group label="Choices">
        <w-radio value="alpha">Alpha</w-radio>
        <w-radio value="beta">Beta</w-radio>
      </w-radio-group>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { updateComplete: Promise<unknown>; click: () => void }
  >;

  await group.updateComplete;
  radios[0].click();
  await group.updateComplete;

  const data = new FormData(form);
  expect(data.get('choice')).toBeNull();
});

test('required group reports validity based on selection', async () => {
  render(html`
    <w-radio-group label="Choices" name="choice" required>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
    checkValidity: () => boolean;
    validity: ValidityState;
    validationMessage: string;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; click: () => void }
  >;

  await group.updateComplete;

  await expect.poll(() => group.checkValidity()).toBe(false);
  expect(group.validity.valueMissing).toBe(true);
  expect(group.validationMessage).not.toBe('');

  radios[0].click();
  await group.updateComplete;

  await expect.poll(() => group.checkValidity()).toBe(true);
  expect(group.validity.valid).toBe(true);
});

test('resets to default value on form reset', async () => {
  render(html`
    <form>
      <w-radio-group label="Choices" name="choice" value="alpha">
        <w-radio value="alpha">Alpha</w-radio>
        <w-radio value="beta">Beta</w-radio>
      </w-radio-group>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const group = document.querySelector('w-radio-group') as HTMLElement & {
    value: string | null;
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; click: () => void }
  >;

  await group.updateComplete;
  await expect.poll(() => group.value).toBe('alpha');
  await expect.poll(() => radios[0].checked).toBe(true);
  await expect.poll(() => radios[1].checked).toBe(false);

  radios[1].click();
  await group.updateComplete;
  await expect.poll(() => group.value).toBe('beta');

  form.reset();
  await group.updateComplete;

  await expect.poll(() => group.value).toBe('alpha');
  await expect.poll(() => radios[0].checked).toBe(true);
  await expect.poll(() => radios[1].checked).toBe(false);
});

test('value property overrides default value and reset restores default', async () => {
  render(html`
    <form>
      <w-radio-group label="Choices" name="choice" value="alpha">
        <w-radio value="alpha">Alpha</w-radio>
        <w-radio value="beta">Beta</w-radio>
      </w-radio-group>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const group = document.querySelector('w-radio-group') as HTMLElement & {
    value: string | null;
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown> }
  >;

  await group.updateComplete;
  group.value = 'beta';
  await group.updateComplete;

  await expect.poll(() => group.value).toBe('beta');
  await expect.poll(() => radios[1].checked).toBe(true);

  form.reset();
  await group.updateComplete;

  await expect.poll(() => group.value).toBe('alpha');
  await expect.poll(() => radios[0].checked).toBe(true);
});

test('disabled group prevents selection and disables child radios', async () => {
  render(html`
    <w-radio-group label="Choices" disabled>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    value: string | null;
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; click: () => void; tabIndex: number }
  >;

  await group.updateComplete;
  const initialValue = group.value;

  expect(radios[0].getAttribute('aria-disabled')).toBe('true');
  expect(radios[1].getAttribute('aria-disabled')).toBe('true');
  expect(radios[0].tabIndex).toBe(-1);
  expect(radios[1].tabIndex).toBe(-1);

  radios[0].click();
  await group.updateComplete;

  expect(group.value).toBe(initialValue ?? null);
  expect(radios[0].checked).toBe(false);
});

test('re-enabling a disabled group restores tabbable radio', async () => {
  render(html`
    <w-radio-group label="Choices" value="beta" disabled>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    disabled: boolean;
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; tabIndex: number; updateComplete: Promise<unknown> }
  >;

  await group.updateComplete;
  expect(radios[0].tabIndex).toBe(-1);
  expect(radios[1].tabIndex).toBe(-1);

  group.disabled = false;
  await group.updateComplete;

  await expect.poll(() => radios[1].checked).toBe(true);
  await expect.poll(() => radios[1].tabIndex).toBe(0);
  await expect.poll(() => radios[0].tabIndex).toBe(-1);
});

test('only one radio is tabbable at a time', async () => {
  render(html`
    <w-radio-group label="Choices">
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { tabIndex: number; click: () => void; updateComplete: Promise<unknown> }
  >;

  await group.updateComplete;
  await expect.poll(() => radios[0].tabIndex).toBe(0);
  await expect.poll(() => radios[1].tabIndex).toBe(-1);

  radios[1].click();
  await group.updateComplete;

  await expect.poll(() => radios[0].tabIndex).toBe(-1);
  await expect.poll(() => radios[1].tabIndex).toBe(0);
});

test('applies group size to child radios', async () => {
  render(html`
    <w-radio-group label="Choices" size="small">
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as HTMLElement[];

  await group.updateComplete;

  expect(radios[0].getAttribute('size')).toBe('small');
  expect(radios[1].getAttribute('size')).toBe('small');
});
