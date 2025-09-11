import { html } from 'lit';

import { page, userEvent, server } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import '../button/index.js';
import './index.js';

test('can pick a date using a pointer', async () => {
  const component = html`
    <form data-testid="flight">
      <w-datepicker label="From date" name="from"></w-datepicker>
    </form>
  `;

  page.render(component);

  await expect.element(page.getByLabelText('From date')).not.toHaveValue();

  await expect.element(page.getByTestId('calendar').query()).not.toBeInTheDocument();
  await page.getByRole('button').click({ force: true });

  await expect.element(page.getByTestId('calendar')).toBeVisible();

  await page.getByRole('gridcell').nth(15).click();

  await expect
    .element(page.getByTestId('calendar').query(), { message: 'expected calendar to close after clicking a date' })
    .not.toBeInTheDocument();

  await expect.element(page.getByLabelText('From date')).toHaveValue();

  const formData = new FormData(page.getByTestId('flight').element() as HTMLFormElement);
  expect(formData.get('from')).toBeTruthy();
});

test('can pick a date using a keyboard', async () => {
  const component = html`
    <form data-testid="flight">
      <w-datepicker label="From date" name="from"></w-datepicker>
    </form>
  `;

  page.render(component);

  await expect.element(page.getByLabelText('From date')).not.toHaveValue();

  await expect.element(page.getByTestId('calendar').query()).not.toBeInTheDocument();

  const toggle = page.getByRole('button').element() as HTMLButtonElement;
  toggle.focus();

  await userEvent.keyboard('[Enter]');
  await expect.element(page.getByTestId('calendar')).toBeVisible();

  (page.getByRole('gridcell').nth(15).element() as HTMLTableCellElement).focus();
  await userEvent.keyboard('[Enter]');

  await expect
    .element(page.getByTestId('calendar').query(), { message: 'expected calendar to close after clicking a date' })
    .not.toBeInTheDocument();

  await expect.element(page.getByLabelText('From date')).toHaveValue();

  const formData = new FormData(page.getByTestId('flight').element() as HTMLFormElement);
  expect(formData.get('from')).toBeTruthy();
});

test('can pick a date by typing in the input field', async () => {
  const component = html`
    <form data-testid="flight">
      <w-datepicker label="From date" name="from" lang="nb"></w-datepicker>
    </form>
  `;

  page.render(component);

  await expect.element(page.getByLabelText('From date')).not.toHaveValue();

  const toggle = page.getByLabelText('From date').element() as HTMLInputElement;
  toggle.focus();

  if (server.browser === 'webkit') {
    // Safari/Webkit needs a [Tab] between day, month and year
    await userEvent.keyboard('01[Tab]01[Tab]2025');
    await userEvent.keyboard('[Tab]');
  } else {
    await userEvent.keyboard('01012025');

    if (server.browser === 'firefox') {
      // For some reason Firefox needs two tabs to fire the blur event
      await userEvent.keyboard('[Tab][Tab]');
    } else {
      await userEvent.keyboard('[Tab]');
    }
  }

  await expect.element(page.getByLabelText('From date')).toHaveValue();

  const formData = new FormData(page.getByTestId('flight').element() as HTMLFormElement);
  expect(formData.get('from')).toBeTruthy();
});
