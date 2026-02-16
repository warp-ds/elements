import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './radio-group.js';
import '../radio/radio.js';

describe('w-radio-group accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('default state has no violations', async () => {
      const page = render(html`
        <w-radio-group label="Preferences">
          <w-radio value="one">One</w-radio>
          <w-radio value="two">Two</w-radio>
        </w-radio-group>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('with hint has no violations', async () => {
      const page = render(html`
        <w-radio-group label="Preferences" hint="Select one">
          <w-radio value="one">One</w-radio>
          <w-radio value="two">Two</w-radio>
        </w-radio-group>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('required invalid state has no violations', async () => {
      const page = render(html`
        <w-radio-group label="Preferences" required>
          <w-radio value="one">One</w-radio>
          <w-radio value="two">Two</w-radio>
        </w-radio-group>
      `);

      const group = document.querySelector('w-radio-group') as { reportValidity?: () => boolean };
      group.reportValidity?.();

      await expect(page).toHaveNoAxeViolations();
    });
  });

  describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('group has accessible name from label', async () => {
      const page = render(html`
        <w-radio-group label="Preferences">
          <w-radio value="one">One</w-radio>
          <w-radio value="two">Two</w-radio>
        </w-radio-group>
      `);
      await expect.element(page.getByRole('radiogroup', { name: 'Preferences' })).toBeVisible();
    });
  });

  describe('WCAG 3.3.2 - Labels or Instructions', () => {
    test('hint is programmatically associated', async () => {
      const page = render(html`
        <w-radio-group label="Preferences" hint="Select one">
          <w-radio value="one">One</w-radio>
          <w-radio value="two">Two</w-radio>
        </w-radio-group>
      `);

      await expect.element(page.getByRole('radiogroup', { name: 'Preferences' })).toHaveAccessibleDescription(
        'Select one',
      );
    });
  });

  describe('WCAG 2.1.1 - Keyboard', () => {
    test('arrow keys move selection between radios', async () => {
      render(html`
        <w-radio-group label="Preferences">
          <w-radio value="one">One</w-radio>
          <w-radio value="two">Two</w-radio>
          <w-radio value="three">Three</w-radio>
        </w-radio-group>
      `);

      const radios = Array.from(document.querySelectorAll('w-radio')) as Array<
        HTMLElement & { checked: boolean; updateComplete: Promise<unknown>; focus: () => void }
      >;

      await radios[0].updateComplete;
      radios[0].focus();
      await expect.poll(() => document.activeElement).toBe(radios[0]);

      await userEvent.keyboard('[ArrowDown]');
      await expect.poll(() => radios[1].checked).toBe(true);
      await expect.poll(() => document.activeElement).toBe(radios[1]);

      await userEvent.keyboard('[ArrowDown]');
      await expect.poll(() => radios[2].checked).toBe(true);
      await expect.poll(() => document.activeElement).toBe(radios[2]);
    });
  });
});
