import { server, userEvent } from '@vitest/browser/context';
import React, { useState } from 'react';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import '../button/button.js';
import './datepicker.js';
import { DatePicker } from './react.js';

test('renders the date picker component', async () => {
  const page = render(
    <form>
      <DatePicker label="From date" />
    </form>,
  );

  await expect.element(page.getByLabelText('From date')).toBeVisible();
});

test('can pick a date using a pointer', async () => {
  const page = render(
    <form data-testid="flight">
      <DatePicker label="From date" name="from" />
    </form>,
  );

  await expect.element(page.getByLabelText('From date')).not.toHaveValue();

  await page.getByRole('button').click({ force: true });

  await page.getByRole('gridcell').nth(15).click();

  await expect.element(page.getByLabelText('From date')).toHaveValue();

  const formData = new FormData(page.getByTestId('flight').element() as HTMLFormElement);
  expect(formData.get('from')).toBeTruthy();
});

test.skipIf(server.browser === 'firefox')('can pick a date using keyboard', async () => {
  const page = render(
    <form data-testid="flight">
      <DatePicker label="From date" name="from" />
    </form>,
  );

  await expect.element(page.getByLabelText('From date')).not.toHaveValue();

  await expect.element(page.getByTestId('calendar').query()).not.toBeVisible();

  const toggle = page.getByRole('button').element() as HTMLButtonElement;
  toggle.focus();

  await userEvent.keyboard('[Enter]');
  await expect.element(page.getByTestId('calendar')).toBeVisible();

  (page.getByRole('gridcell').nth(15).element() as HTMLTableCellElement).focus();
  await userEvent.keyboard('[Enter]');

  await expect
    .element(page.getByTestId('calendar').query(), { message: 'expected calendar to close after clicking a date' })
    .not.toBeVisible();

  await expect.element(page.getByLabelText('From date')).toHaveValue();

  const formData = new FormData(page.getByTestId('flight').element() as HTMLFormElement);
  expect(formData.get('from')).toBeTruthy();
});

test('can pick a date by typing in the input field', async () => {
  const page = render(
    <form data-testid="flight">
      <DatePicker label="From date" name="from" />
    </form>,
  );

  await expect.element(page.getByLabelText('From date')).not.toHaveValue();

  const toggle = page.getByLabelText('From date').element() as HTMLInputElement;
  toggle.focus();

  await page.getByLabelText('From date').fill('2025-01-01');
  await expect.element(page.getByLabelText('From date')).toHaveValue();

  const formData = new FormData(page.getByTestId('flight').element() as HTMLFormElement);
  expect(formData.get('from')).toBeTruthy();
});

test('allows for the controlled component pattern', async () => {
  const spy = vi.fn();
  const TestComponent = () => {
    const [value, setValue] = useState('');
    return (
      <form data-testid="flight">
        <DatePicker
          label="From date"
          name="from"
          value={value}
          onChange={(e) => {
            const nextValue = (e.target as HTMLInputElement).value;
            setValue(nextValue);
            spy(nextValue);
          }}
        />
      </form>
    );
  };
  const page = render(<TestComponent />);

  await page.getByRole('button').click({ force: true });
  await page.getByRole('gridcell').nth(15).click();

  await expect.element(page.getByLabelText('From date')).toHaveValue();

  // Check that our controlled onChange handler got to set the value back on the element
  expect(spy).toBeCalledWith((page.getByLabelText('From date').element() as HTMLInputElement).value);
});
