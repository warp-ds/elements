import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './switch.js';

test('can reset switch by resetting surrounding form', async () => {
  const label = 'Test label';

  render(html`
    <form>
      <w-switch
        label=${label}
        name="test"
        value="some value"
        checked
      >
      </w-switch>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wSwitch = document.querySelector('w-switch') as HTMLElement & {
    checked: boolean;
    value: string;
    updateComplete: Promise<undefined>;
  };

  // sanity
  expect(form).not.toBeNull();
  expect(wSwitch).not.toBeNull();

  // Initial value is "some value"
  expect(wSwitch.value).toBe('some value');

  // value should be associated with the form
  const data = new FormData(form);
  expect(Array.from(data.entries()).length).toBe(1);

  // uncheck
  wSwitch.checked = false;
  await wSwitch.updateComplete;

  // value should no longer be associated with the form
  const data2 = new FormData(form);
  expect(Array.from(data2.entries()).length).toBe(0);

  // Reset the form
  form.reset();
  await wSwitch.updateComplete;

  // value should be associated with the form again after reset
  const data3 = new FormData(form);
  expect(Array.from(data3.entries()).length).toBe(1);
});

test('mouse click toggles switch once', async () => {
  render(html`<w-switch aria-label="Enable notifications"></w-switch>`);

  const wSwitch = document.querySelector('w-switch') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<undefined>;
    shadowRoot: ShadowRoot;
  };

  await wSwitch.updateComplete;
  const button = wSwitch.shadowRoot.querySelector('button') as HTMLButtonElement;

  expect(wSwitch.checked).toBe(false);
  expect(wSwitch.getAttribute('aria-checked')).toBe('false');

  button.click();
  await wSwitch.updateComplete;

  expect(wSwitch.checked).toBe(true);
  expect(wSwitch.getAttribute('aria-checked')).toBe('true');
});

test('native label click toggles switch', async () => {
  render(html`
    <label for="native-label-switch">Enable notifications</label>
    <w-switch
      id="native-label-switch"
      name="notifications"
      value="enabled"
    ></w-switch>
  `);

  const label = document.querySelector('label') as HTMLLabelElement;
  const wSwitch = document.querySelector('w-switch') as HTMLElement & {
    checked: boolean;
    updateComplete: Promise<undefined>;
  };

  await wSwitch.updateComplete;
  expect(wSwitch.checked).toBe(false);
  expect(wSwitch.getAttribute('aria-checked')).toBe('false');

  label.click();
  await wSwitch.updateComplete;
  expect(wSwitch.checked).toBe(true);
  expect(wSwitch.getAttribute('aria-checked')).toBe('true');

  label.click();
  await wSwitch.updateComplete;
  expect(wSwitch.checked).toBe(false);
  expect(wSwitch.getAttribute('aria-checked')).toBe('false');
});
