import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import './checkbox.js';

describe('w-checkbox accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('default state has no violations', async () => {
      const page = render(html`<w-checkbox>Check me</w-checkbox>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('disabled state has no violations', async () => {
      const page = render(html`<w-checkbox disabled>Check me</w-checkbox>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('required state has no violations', async () => {
      const page = render(html`<w-checkbox required>Check me</w-checkbox>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('indeterminate state has no violations', async () => {
      const page = render(html`<w-checkbox indeterminate>Check me</w-checkbox>`);
      await expect(page).toHaveNoAxeViolations();
    });
  });

  describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('checkbox has accessible name from label slot', async () => {
      const page = render(html`<w-checkbox>Accept terms</w-checkbox>`);
      await expect.element(page.getByRole('checkbox', { name: 'Accept terms' })).toBeVisible();
    });
  });

  describe('WCAG 4.1.2 - Name, Role, Value', () => {
    test('required state is exposed', async () => {
      const page = render(html`<w-checkbox required>Required</w-checkbox>`);
      await expect.element(page.getByRole('checkbox', { name: 'Required' })).toHaveAttribute('required');
    });

    test('disabled state is exposed', async () => {
      const page = render(html`<w-checkbox disabled>Disabled</w-checkbox>`);
      await expect.element(page.getByRole('checkbox', { name: 'Disabled' })).toBeDisabled();
    });

    test('checked state is exposed', async () => {
      const page = render(html`<w-checkbox checked>Checked</w-checkbox>`);
      await expect.element(page.getByRole('checkbox', { name: 'Checked' })).toBeChecked();
    });
  });

  describe('WCAG 2.1.1 - Keyboard', () => {
    test('checkbox is focusable', async () => {
      const page = render(html`<w-checkbox>Focusable</w-checkbox>`);
      await expect.element(page.getByRole('checkbox', { name: 'Focusable' })).toBeVisible();

      const wCheckbox = document.querySelector('w-checkbox') as HTMLElement & {
        focus: () => void;
        updateComplete: Promise<unknown>;
      };

      await wCheckbox.updateComplete;
      wCheckbox.focus();
      await expect.poll(() => wCheckbox?.shadowRoot?.activeElement?.tagName).toBe('INPUT');
    });

    test('disabled checkbox is not focusable', async () => {
      const page = render(html`
        <button>Before</button>
        <w-checkbox disabled>Disabled</w-checkbox>
        <button>After</button>
      `);

      const buttons = Array.from(document.querySelectorAll('button'));
      const beforeBtn = buttons[0] as HTMLButtonElement;
      const afterBtn = buttons[1] as HTMLButtonElement;

      expect(beforeBtn).toBeDefined();
      expect(afterBtn).toBeDefined();

      beforeBtn?.focus();

      const wCheckbox = document.querySelector('w-checkbox') as
        | (HTMLElement & {
            focus: () => void;
            updateComplete: Promise<unknown>;
          })
        | null;

      await wCheckbox?.updateComplete;
      wCheckbox?.focus();
      await expect.element(beforeBtn).toHaveFocus();
      expect(wCheckbox?.shadowRoot?.activeElement).toBeNull();

      await expect.element(page.getByRole('checkbox', { name: 'Disabled' })).toBeDisabled();
    });
  });
});
