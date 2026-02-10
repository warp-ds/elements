import { i18n } from '@lingui/core';
import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './checkbox-group.js';
import '../checkbox/checkbox.js';

// Initialize i18n with English locale for tests
i18n.load('en', { 'checkbox-group.label.optional': ['(optional)'] });
i18n.activate('en');

const REQUIRED_MESSAGE = 'Select at least one option.';

describe('w-checkbox-group accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('default state has no violations', async () => {
      const page = render(html`
        <w-checkbox-group label="Preferences">
          <w-checkbox>One</w-checkbox>
          <w-checkbox>Two</w-checkbox>
        </w-checkbox-group>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('with help text has no violations', async () => {
      const page = render(html`
        <w-checkbox-group label="Preferences" help-text="Select one">
          <w-checkbox>One</w-checkbox>
          <w-checkbox>Two</w-checkbox>
        </w-checkbox-group>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('required invalid state has no violations', async () => {
      const page = render(html`
        <w-checkbox-group label="Preferences" required help-text="Select one">
          <w-checkbox>One</w-checkbox>
          <w-checkbox>Two</w-checkbox>
        </w-checkbox-group>
      `);

      const groupEl = document.querySelector('w-checkbox-group') as { reportValidity?: () => boolean };
      groupEl.reportValidity?.();

      await expect(page).toHaveNoAxeViolations();
    });
  });

  describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('group has accessible name from label', async () => {
      const page = render(html`
        <w-checkbox-group label="Preferences">
          <w-checkbox>One</w-checkbox>
          <w-checkbox>Two</w-checkbox>
        </w-checkbox-group>
      `);
      await expect.element(page.getByRole('group', { name: 'Preferences' })).toBeVisible();
    });
  });

  describe('WCAG 3.3.1 - Error Identification', () => {
    test('invalid state is indicated via aria-invalid', async () => {
      const page = render(html`
        <w-checkbox-group label="Preferences" required help-text="Select one">
          <w-checkbox>One</w-checkbox>
          <w-checkbox>Two</w-checkbox>
        </w-checkbox-group>
      `);

      const groupEl = document.querySelector('w-checkbox-group') as { reportValidity?: () => boolean };
      groupEl.reportValidity?.();

      await expect.element(page.getByRole('group', { name: 'Preferences' })).toHaveAttribute('aria-invalid', 'true');
      await expect.element(page.getByText(REQUIRED_MESSAGE)).toBeVisible();
    });
  });

  describe('WCAG 3.3.2 - Labels or Instructions', () => {
    test('help text is programmatically associated', async () => {
      const page = render(html`
        <w-checkbox-group label="Preferences" help-text="Select one">
          <w-checkbox>One</w-checkbox>
          <w-checkbox>Two</w-checkbox>
        </w-checkbox-group>
      `);

      await expect.element(page.getByRole('group', { name: 'Preferences' })).toHaveAccessibleDescription('Select one');
    });
  });
});
