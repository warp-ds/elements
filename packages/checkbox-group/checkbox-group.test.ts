import { i18n } from '@lingui/core';
import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './checkbox-group.js';
import '../checkbox/checkbox.js';

// Initialize i18n with English locale for tests
i18n.load('en', { 'checkbox-group.label.optional': ['(optional)'] });
i18n.activate('en');

test('renders help text when provided', async () => {
  const page = render(html`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox>One</w-checkbox>
      <w-checkbox>Two</w-checkbox>
    </w-checkbox-group>
  `);

  await expect.element(page.getByText('Select all that apply')).toBeVisible();
});

test('associates help text with the group', async () => {
  const page = render(html`
    <w-checkbox-group help-text="Choose wisely">
      <w-checkbox>One</w-checkbox>
      <w-checkbox>Two</w-checkbox>
    </w-checkbox-group>
  `);

  const group = page.getByRole('group');
  await expect.element(group).toHaveAccessibleDescription('Choose wisely');
});

test('renders label above the group and associates it', async () => {
  const page = render(html`
    <w-checkbox-group label="Preferences">
      <w-checkbox>One</w-checkbox>
      <w-checkbox>Two</w-checkbox>
    </w-checkbox-group>
  `);

  await expect.element(page.getByText('Preferences')).toBeVisible();
  await expect.element(page.getByRole('group', { name: 'Preferences' })).toBeVisible();
});

test('renders optional text when optional is true', async () => {
  const page = render(html`
    <w-checkbox-group label="Preferences" optional>
      <w-checkbox>One</w-checkbox>
      <w-checkbox>Two</w-checkbox>
    </w-checkbox-group>
  `);

  await expect.element(page.getByText('(optional)')).toBeVisible();
});

test('renders label icon slot when provided', async () => {
  const page = render(html`
    <w-checkbox-group label="Preferences">
      <w-checkbox>One</w-checkbox>
      <w-checkbox>Two</w-checkbox>
    </w-checkbox-group>
  `);

  await expect.element(page.getByText('Preferences')).toBeVisible();
});

test('required group toggles invalid state for group and children after submit and selection', async () => {
  const page = render(html`
    <form>
      <w-checkbox-group label="Preferences" required>
        <w-checkbox name="group" value="foo">Foo</w-checkbox>
        <w-checkbox name="group" value="bar">Bar</w-checkbox>
      </w-checkbox-group>
      <button type="submit">Submit</button>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const submit = page.getByRole('button', { name: 'Submit' });
  const group = page.getByRole('group', { name: 'Preferences' });
  const firstCheckbox = page.getByRole('checkbox', { name: 'Foo' });
  const firstCheckboxEl = document.querySelector('w-checkbox') as { click: () => void };

  await submit.click();
  await expect.poll(() => form.checkValidity()).toBe(false);
  await expect.element(group).toHaveAttribute('aria-invalid', 'true');
  await expect.element(firstCheckbox).toHaveAttribute('aria-invalid', 'true');

  firstCheckboxEl.click();
  await expect.poll(() => form.checkValidity()).toBe(true);
  await expect.element(group).not.toHaveAttribute('aria-invalid', 'true');
  await expect.element(firstCheckbox).not.toHaveAttribute('aria-invalid', 'true');
});
