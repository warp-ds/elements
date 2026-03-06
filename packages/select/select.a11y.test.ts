import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './select.js';

describe('w-select accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('default state has no violations', async () => {
      const page = render(html`
        <w-select label="Berries">
          <option value="strawberries">Strawberries</option>
          <option value="raspberries">Raspberries</option>
        </w-select>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('with help text has no violations', async () => {
      const page = render(html`
        <w-select label="Berries" help-text="Choose your favorite">
          <option value="strawberries">Strawberries</option>
          <option value="raspberries">Raspberries</option>
        </w-select>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('invalid state has no violations', async () => {
      const page = render(html`
        <w-select label="Berries" invalid help-text="Selection required">
          <option value="">Choose one</option>
          <option value="strawberries">Strawberries</option>
        </w-select>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('disabled state has no violations', async () => {
      const page = render(html`
        <w-select label="Berries" disabled>
          <option value="strawberries">Strawberries</option>
          <option value="raspberries">Raspberries</option>
        </w-select>
      `);
      await expect(page).toHaveNoAxeViolations();
    });
  });

  describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('select has accessible name from label', async () => {
      const page = render(html`
        <w-select label="Berry choice">
          <option value="strawberries">Strawberries</option>
          <option value="raspberries">Raspberries</option>
        </w-select>
      `);
      await expect.element(page.getByLabelText('Berry choice')).toBeVisible();
    });
  });

  describe('WCAG 3.3.1/3.3.2 - Errors and Instructions', () => {
    test('invalid state is exposed through aria-invalid', async () => {
      const page = render(html`
        <w-select label="Berry choice" invalid>
          <option value="">Choose one</option>
          <option value="strawberries">Strawberries</option>
        </w-select>
      `);
      await expect.element(page.getByLabelText('Berry choice')).toHaveAttribute('aria-invalid', 'true');
    });

    test('help text is associated as accessible description', async () => {
      const page = render(html`
        <w-select label="Berry choice" help-text="This appears in your profile">
          <option value="strawberries">Strawberries</option>
          <option value="raspberries">Raspberries</option>
        </w-select>
      `);
      await expect.element(page.getByLabelText('Berry choice')).toHaveAccessibleDescription(
        'This appears in your profile',
      );
    });
  });

  describe('WCAG 4.1.2 - Name, Role, Value', () => {
    test('disabled state is exposed', async () => {
      const page = render(html`
        <w-select label="Berry choice" disabled>
          <option value="strawberries">Strawberries</option>
          <option value="raspberries">Raspberries</option>
        </w-select>
      `);
      await expect.element(page.getByLabelText('Berry choice')).toBeDisabled();
    });

    test('value reflects selected option', async () => {
      const page = render(html`
        <w-select label="Berry choice">
          <option value="strawberries">Strawberries</option>
          <option value="raspberries" selected>Raspberries</option>
        </w-select>
      `);
      await expect.element(page.getByLabelText('Berry choice')).toHaveValue('raspberries');
    });

    test('dynamic selected option updates are reflected accessibly', async () => {
      const page = render(html`
        <w-select label="Berry choice">
          <option value="strawberries" selected>Strawberries</option>
          <option value="raspberries">Raspberries</option>
        </w-select>
      `);

      const wSelect = document.querySelector('w-select') as HTMLElement & {
        updateComplete: Promise<unknown>;
      };
      await wSelect.updateComplete;

      const lightOptions = Array.from(wSelect.querySelectorAll('option'));
      lightOptions[0].removeAttribute('selected');
      lightOptions[1].setAttribute('selected', '');

      await expect.poll(() => (page.getByLabelText('Berry choice').element() as HTMLSelectElement).value).toBe(
        'raspberries',
      );
      await expect(page).toHaveNoAxeViolations();
    });
  });

  describe('WCAG 2.1.1 - Keyboard', () => {
    test('select is focusable', async () => {
      const page = render(html`
        <w-select label="Berry choice">
          <option value="strawberries">Strawberries</option>
          <option value="raspberries">Raspberries</option>
        </w-select>
      `);
      const select = page.getByLabelText('Berry choice');
      await select.click();

      const wSelect = document.querySelector('w-select');
      await expect.poll(() => wSelect?.shadowRoot?.activeElement?.tagName).toBe('SELECT');
    });
  });
});
