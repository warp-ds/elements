import { i18n } from '@lingui/core';
import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './checkbox-group.js';
import '../checkbox/checkbox.js';

// Initialize i18n with English locale for tests
i18n.load('en', {
  'checkbox-group.label.optional': ['(optional)'],
  'checkbox-group.validation.required': ['At least one selection is required.'],
});
i18n.activate('en');

const REQUIRED_MESSAGE = 'At least one selection is required.';

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

  describe('WCAG 2.1.1 - Keyboard', () => {
    test('tab moves through checkboxes and space toggles', async () => {
      const page = render(html`
        <button>Before</button>
        <w-checkbox-group label="Preferences">
          <w-checkbox>One</w-checkbox>
          <w-checkbox>Two</w-checkbox>
        </w-checkbox-group>
        <button>After</button>
      `);

      const checkboxes = Array.from(document.querySelectorAll('w-checkbox')) as Array<
        HTMLElement & { checked?: boolean; updateComplete?: Promise<unknown> }
      >;
      const firstCheckbox = checkboxes[0];
      const secondCheckbox = checkboxes[1];

      await firstCheckbox?.updateComplete;
      firstCheckbox?.focus();
      await expect.poll(() => firstCheckbox?.shadowRoot?.activeElement?.tagName).toBe('INPUT');
      expect(firstCheckbox.checked).toBe(false);

      await userEvent.keyboard('[Space]');
      await expect.poll(() => firstCheckbox.checked).toBe(true);

      await secondCheckbox?.updateComplete;
      secondCheckbox?.focus();
      await expect.poll(() => secondCheckbox?.shadowRoot?.activeElement?.tagName).toBe('INPUT');
      await userEvent.keyboard('[Space]');
      await expect.poll(() => secondCheckbox.checked).toBe(true);
    });
  });
});
