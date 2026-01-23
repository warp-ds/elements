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
