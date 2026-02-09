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
