import React, { useState } from 'react';
import { expect, test, vi } from 'vitest';
import { server, userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';

import '../button/button.js';
import './datepicker.js';
import { DatePicker } from './react.js';

test('renders the date picker component', async () => {
  const page = await render(
    <form>
      <DatePicker label="From date" />
    </form>,
  );

  await expect.element(page.getByLabelText('From date')).toBeVisible();
});

test('can pick a date using a pointer', async () => {
  const page = await render(
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
  const page = await render(
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
  const page = await render(
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
  const page = await render(<TestComponent />);

  await page.getByRole('button').click({ force: true });
  await page.getByRole('gridcell').nth(15).click();

  await expect.element(page.getByLabelText('From date')).toHaveValue();

  // Controlled consumers should receive the ISO value, even when the visible input text is localized.
  const selectedValue = spy.mock.calls.at(-1)?.[0];
  expect(selectedValue).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  expect((document.querySelector('w-datepicker') as HTMLElement & { value: string }).value).toBe(selectedValue);
});
