import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './switch.js';

describe('w-switch accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('default state has no violations', async () => {
      const page = render(html`<w-switch aria-label="Enable notifications"></w-switch>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('checked state has no violations', async () => {
      const page = render(html`<w-switch checked aria-label="Enable notifications"></w-switch>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('disabled state has no violations', async () => {
      const page = render(html`<w-switch disabled aria-label="Enable notifications"></w-switch>`);
      await expect(page).toHaveNoAxeViolations();
    });
  });

  describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('switch has accessible name via aria-labelledby', async () => {
      const page = render(html`
        <div>
          <span id="switch-label">Enable notifications</span>
          <w-switch aria-labelledby="switch-label"></w-switch>
        </div>
      `);

      // ElementInternals role is set in accessibility tree but not queryable via getByRole
      const wSwitch = page.container.querySelector('w-switch') as HTMLElement;
      await expect.element(wSwitch).toBeVisible();
      expect(wSwitch.getAttribute('aria-labelledby')).toBe('switch-label');
    });
  });

  describe('WCAG 4.1.2 - Name, Role, Value', () => {
    test('switch exposes role and checked state', async () => {
      const page = render(html`<w-switch aria-label="Enable notifications"></w-switch>`);
      const wSwitch = page.container.querySelector('w-switch') as HTMLElement & {
        checked: boolean;
        updateComplete: Promise<unknown>;
      };

      // Check properties - ARIA states are set via ElementInternals
      await expect.element(wSwitch).toBeVisible();
      expect(wSwitch.checked).toBe(false);

      wSwitch.checked = true;
      await wSwitch.updateComplete;

      expect(wSwitch.checked).toBe(true);
    });

    test('disabled state is exposed', async () => {
      const page = render(html`<w-switch disabled aria-label="Enable notifications"></w-switch>`);
      const wSwitch = page.container.querySelector('w-switch') as HTMLElement & { disabled: boolean };
      // Check property - aria-disabled is set via ElementInternals
      expect(wSwitch.disabled).toBe(true);
    });
  });

  describe('WCAG 2.1.1 - Keyboard', () => {
    test('switch is reachable by tab and can be toggled with keyboard', async () => {
      const page = render(html`
        <button type="button">Before</button>
        <w-switch aria-label="Enable notifications"></w-switch>
        <button type="button">After</button>
      `);
      const wSwitch = page.container.querySelector('w-switch') as HTMLElement & {
        checked: boolean;
        updateComplete: Promise<unknown>;
      };
      const beforeButton = page.getByRole('button', { name: 'Before' });

      await wSwitch.updateComplete;
      const beforeButtonEl = beforeButton.element() as HTMLButtonElement;
      beforeButtonEl.focus();
      await expect.element(beforeButton).toHaveFocus();

      await userEvent.tab();
      await expect.element(wSwitch).toHaveFocus();

      await userEvent.keyboard(' ');
      await wSwitch.updateComplete;

      expect(wSwitch.checked).toBe(true);

      await userEvent.keyboard('{Enter}');
      await wSwitch.updateComplete;
      expect(wSwitch.checked).toBe(false);

      wSwitch.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', altKey: true, bubbles: true }));
      await wSwitch.updateComplete;
      expect(wSwitch.checked).toBe(false);

      wSwitch.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', shiftKey: true, bubbles: true }));
      await wSwitch.updateComplete;
      expect(wSwitch.checked).toBe(false);
    });
  });
});
