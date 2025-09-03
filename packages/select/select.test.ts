import { html } from 'lit';

import { page, userEvent } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

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

  await page.render(component);

  // Confirm we have a form associated field berry
  const form = page.getByTestId('flavour');
  expect(form).toHaveFormValues({
    berry: undefined,
  });

  // Select Raspberries
  await userEvent.selectOptions(
    page.getByLabelText('Berries').element(),
    'Raspberries'
  );

  // Confirm the form has a field berry with value raspberries
  expect(form).toHaveFormValues({
    berry: 'raspberries',
  });
});
