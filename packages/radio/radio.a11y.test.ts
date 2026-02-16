import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './radio.js';
import '../radio-group/radio-group.js';

describe('w-radio accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('default state has no violations', async () => {
      const page = render(html`
        <w-radio-group label="Options">
          <w-radio value="one">One</w-radio>
          <w-radio value="two">Two</w-radio>
        </w-radio-group>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('disabled state has no violations', async () => {
      const page = render(html`
        <w-radio-group label="Options">
          <w-radio value="one" disabled>One</w-radio>
          <w-radio value="two">Two</w-radio>
        </w-radio-group>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('checked state has no violations', async () => {
      const page = render(html`
        <w-radio-group label="Options" value="one">
          <w-radio value="one">One</w-radio>
          <w-radio value="two">Two</w-radio>
        </w-radio-group>
      `);

      const group = document.querySelector('w-radio-group') as {
        updateComplete: Promise<unknown>;
        value: string | null;
      };
      await group.updateComplete;
      group.value = 'one';
      await group.updateComplete;

      await expect(page).toHaveNoAxeViolations();
    });
  });

  describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('radio has accessible name from label slot', async () => {
      const page = render(html`
        <w-radio-group label="Options">
          <w-radio value="one">First option</w-radio>
        </w-radio-group>
      `);

      await expect.element(page.getByRole('radio', { name: 'First option' })).toBeVisible();
    });
  });

  describe('WCAG 4.1.2 - Name, Role, Value', () => {
    test('disabled state is exposed', async () => {
      const page = render(html`
        <w-radio-group label="Options">
          <w-radio value="one" disabled>Disabled</w-radio>
        </w-radio-group>
      `);

      await expect.element(page.getByRole('radio', { name: 'Disabled' })).toBeDisabled();
    });

    test('checked state is exposed', async () => {
      const page = render(html`
        <w-radio-group label="Options">
          <w-radio value="one">Checked</w-radio>
          <w-radio value="two">Unchecked</w-radio>
        </w-radio-group>
      `);

      const group = document.querySelector('w-radio-group') as { updateComplete: Promise<unknown> };
      await group.updateComplete;

      const [checkedRadio, uncheckedRadio] = Array.from(document.querySelectorAll('w-radio')) as Array<
        HTMLElement & { click: () => void }
      >;

      checkedRadio.click();
      await group.updateComplete;

      await expect.poll(() => checkedRadio.getAttribute('aria-checked')).toBe('true');
      await expect.poll(() => uncheckedRadio.getAttribute('aria-checked')).toBe('false');
    });
  });
});
