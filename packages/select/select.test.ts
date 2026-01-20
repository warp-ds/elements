import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './select.js';

test('works in a form', async () => {
  const component = html`
    <form data-testid="flavour">
      <w-select label="Berries" name="berry">
        <option value="strawberries">Strawberries</option>
        <option value="raspberries">Raspberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>

      <button>Submit</button>
    </form>
  `;

  const page = render(component);

  // Confirm we have a form associated field berry
  const form = page.getByTestId('flavour');
  expect(form).toHaveFormValues({
    berry: undefined,
  });

  // Select Raspberries
  await expect.element(page.getByLabelText('Berries')).toBeVisible();
  await userEvent.selectOptions(page.getByLabelText('Berries').element(), 'Raspberries');

  // Confirm the form has a field berry with value raspberries
  expect(form).toHaveFormValues({
    berry: 'raspberries',
  });
});

test('can reset select by resetting surrounding form', async () => {
  const label = 'Test label';

  render(html`
    <form>
      <w-select
        label=${label}
        name="test"
        value="strawberries"
      >
        <option value="strawberries">Strawberries</option>
        <option value="raspberries">Raspberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wSelect = document.querySelector('w-select') as HTMLElement & { value: string };

  // sanity
  expect(form).not.toBeNull();
  expect(wSelect).not.toBeNull();

  // Initial value is "strawberries"
  expect(wSelect.value).toBe('strawberries');

  // Change the value to "raspberries"
  wSelect.value = 'raspberries';
  expect(wSelect.value).toBe('raspberries');

  // Reset the form
  form.reset();

  // Value should be reset back to "strawberries"
  expect(wSelect.value).toBe('strawberries');
});
