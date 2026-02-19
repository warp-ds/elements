import { i18n } from '@lingui/core';
import { html } from 'lit';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import './radio-group.js';
import '../radio/radio.js';

// Initialize i18n with English locale for tests
i18n.load('en', {
  'radio-group.label.optional': ['(optional)'],
  'radio-group.validation.required': ['Please select an option.'],
});
i18n.activate('en');

test('selects radio on click and dispatches input/change', async () => {
  render(html`
    <w-radio-group label="Choices" name="choice">
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
    name: string | null;
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

  expect(radios[0].checked).toBe(false);
  expect(radios[1].checked).toBe(true);
  expect(onInput).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledTimes(1);

  radios[1].click();
  await group.updateComplete;
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('renders help text when provided', async () => {
  const page = render(html`
    <w-radio-group name="choices" label="Choices" help-text="Select one">
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  await expect.element(page.getByText('Select one')).toBeVisible();
});

test('disabled group renders help text in disabled color', async () => {
  render(html`
    <w-radio-group name="choices" label="Choices" help-text="Select one" disabled>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & { updateComplete: Promise<unknown> };
  await group.updateComplete;

  const helpText = group.shadowRoot?.querySelector('[part~="help-text"]') as HTMLElement | null;
  expect(helpText).not.toBeNull();

  const swatch = document.createElement('div');
  swatch.style.color = 'var(--w-s-color-text-disabled)';
  document.body.append(swatch);
  const disabledColor = getComputedStyle(swatch).color;
  swatch.remove();

  if (!helpText) {
    throw new Error('Expected help text element to exist');
  }

  expect(getComputedStyle(helpText).color).toBe(disabledColor);
});

test('renders optional text when optional is true', async () => {
  const page = render(html`
    <w-radio-group name="choices" label="Choices" optional>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  await expect.element(page.getByText('(optional)')).toBeVisible();
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

test('radio group does not submit its own value', async () => {
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
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { updateComplete: Promise<unknown>; click: () => void }
  >;

  await group.updateComplete;
  radios[1].click();
  await group.updateComplete;

  const data = new FormData(form);
  expect(data.get('choice')).toBe('beta');
});

test('does not submit a value when name is missing', async () => {
  render(html`
    <form>
      <w-radio-group name="choices" label="Choices">
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

test('required group blocks form submission until a selection is made', async () => {
  render(html`
    <form>
      <w-radio-group label="Choices" name="choice" required>
        <w-radio value="alpha">Alpha</w-radio>
        <w-radio value="beta">Beta</w-radio>
      </w-radio-group>
      <button type="submit">Submit</button>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; click: () => void }
  >;
  const submit = document.querySelector('button[type="submit"]') as HTMLButtonElement;

  const onSubmit = vi.fn(() => {
    const data = new FormData(form);
    expect(data.get('choice')).toBe('alpha');
  });

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    onSubmit();
  });

  await group.updateComplete;
  await expect.poll(() => form.checkValidity()).toBe(false);
  submit.click();
  await expect.poll(() => form.checkValidity()).toBe(false);
  expect(onSubmit).not.toHaveBeenCalled();

  radios[0].click();
  await group.updateComplete;

  submit.click();
  await group.updateComplete;
  await expect.poll(() => form.checkValidity()).toBe(true);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

test('required group exposes a validation message when empty', async () => {
  render(html`
    <w-radio-group label="Choices" name="choice" required>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
    reportValidity: () => boolean;
    validationMessage: string;
  };

  await group.updateComplete;
  await expect.poll(() => group.reportValidity()).toBe(false);
  expect(group.validationMessage).not.toBe('');
});

test('resets to default selection on form reset', async () => {
  render(html`
    <form>
      <w-radio-group label="Choices" name="choice">
        <w-radio value="alpha" checked>Alpha</w-radio>
        <w-radio value="beta">Beta</w-radio>
      </w-radio-group>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; click: () => void }
  >;

  await group.updateComplete;
  await expect.poll(() => radios[0].checked).toBe(true);
  await expect.poll(() => radios[1].checked).toBe(false);

  radios[1].click();
  await group.updateComplete;

  form.reset();
  await group.updateComplete;

  await expect.poll(() => radios[0].checked).toBe(true);
  await expect.poll(() => radios[1].checked).toBe(false);
});

test('disabled group prevents selection and disables child radios', async () => {
  render(html`
    <w-radio-group name="choices" label="Choices" disabled>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; click: () => void; tabIndex: number }
  >;

  await group.updateComplete;
  expect(radios[0].getAttribute('aria-disabled')).toBe('true');
  expect(radios[1].getAttribute('aria-disabled')).toBe('true');
  expect(radios[0].tabIndex).toBe(-1);
  expect(radios[1].tabIndex).toBe(-1);

  radios[0].click();
  await group.updateComplete;

  expect(radios[0].checked).toBe(false);
});

test('name changes after render affect form submission', async () => {
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
    name: string | null;
    updateComplete: Promise<unknown>;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
    HTMLElement & { updateComplete: Promise<unknown>; click: () => void }
  >;

  await group.updateComplete;
  radios[0].click();
  await group.updateComplete;

  let data = new FormData(form);
  expect(data.get('choice')).toBe('alpha');

  group.name = 'preference';
  await group.updateComplete;

  data = new FormData(form);
  expect(data.get('choice')).toBeNull();
  expect(data.get('preference')).toBe('alpha');
});

test('re-enabling a disabled group restores tabbable radio', async () => {
  render(html`
    <w-radio-group name="choices" label="Choices" disabled>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta" checked>Beta</w-radio>
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
    <w-radio-group name="choices" label="Choices">
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

test('warns when used in a form without a name', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

  render(html`
    <form>
      <w-radio-group label="Choices">
        <w-radio value="alpha">Alpha</w-radio>
        <w-radio value="beta">Beta</w-radio>
      </w-radio-group>
    </form>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & { updateComplete: Promise<unknown> };
  await group.updateComplete;

  expect(warn).toHaveBeenCalledWith('w-radio-group: "name" is required for form submission.');

  warn.mockRestore();
});

test('propagates invalid state to child radios', async () => {
  render(html`
    <w-radio-group label="Choices" name="choice" required>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & {
    updateComplete: Promise<unknown>;
    reportValidity: () => boolean;
  };
  const radios = Array.from(document.querySelectorAll('w-radio')) as Array<HTMLElement & { invalid?: boolean }>;

  await group.updateComplete;
  group.reportValidity();
  await group.updateComplete;

  expect(radios[0].invalid).toBe(true);
  expect(radios[1].invalid).toBe(true);

  radios[0].click();
  await group.updateComplete;

  expect(radios[0].invalid).toBe(false);
  expect(radios[1].invalid).toBe(false);
});

test('adds and removes tabindex on the host when invalid', async () => {
  render(html`
    <w-radio-group label="Choices" name="choice">
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & { updateComplete: Promise<unknown> };
  await group.updateComplete;

  expect(group.hasAttribute('tabindex')).toBe(false);

  group.setAttribute('invalid', '');
  await group.updateComplete;
  expect(group.getAttribute('tabindex')).toBe('0');

  group.removeAttribute('invalid');
  await group.updateComplete;
  expect(group.hasAttribute('tabindex')).toBe(false);
});

test('updates optional text when locale changes', async () => {
  i18n.load('fr', {
    'radio-group.label.optional': ['(optionnel)'],
    'radio-group.validation.required': ['Please select an option.'],
  });

  const page = render(html`
    <w-radio-group name="choices" label="Choices" optional>
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & { updateComplete: Promise<unknown> };
  await group.updateComplete;
  await expect.element(page.getByText('(optional)')).toBeVisible();

  i18n.activate('fr');
  await group.updateComplete;
  await expect.element(page.getByText('(optionnel)')).toBeVisible();

  i18n.activate('en');
});

test('does not set aria-labelledby when label is missing', async () => {
  render(html`
    <w-radio-group name="choices">
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & { updateComplete: Promise<unknown> };
  await group.updateComplete;

  const fieldset = group.shadowRoot?.querySelector('fieldset');
  expect(fieldset?.getAttribute('aria-labelledby')).toBeNull();
});

test('applies group name to child radios when missing', async () => {
  render(html`
    <w-radio-group label="Choices" name="choice">
      <w-radio value="alpha">Alpha</w-radio>
      <w-radio value="beta">Beta</w-radio>
    </w-radio-group>
  `);

  const group = document.querySelector('w-radio-group') as HTMLElement & { updateComplete: Promise<unknown> };
  const radios = Array.from(document.querySelectorAll('w-radio')) as HTMLElement[];

  await group.updateComplete;

  expect(radios[0].getAttribute('name')).toBe('choice');
  expect(radios[1].getAttribute('name')).toBe('choice');
});
