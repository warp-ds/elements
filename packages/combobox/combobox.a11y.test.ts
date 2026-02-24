import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../textfield/textfield.js';
import './combobox.js';

describe('w-combobox accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    const sampleOptions = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
    ];

    test('default state has no violations', async () => {
      const page = render(html`<w-combobox label="Select a fruit" .options="${sampleOptions}"></w-combobox>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('with help text has no violations', async () => {
      const page = render(html`
        <w-combobox
          label="Select a fruit"
          help-text="Start typing to filter options"
          .options="${sampleOptions}"></w-combobox>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('invalid state has no violations', async () => {
      const page = render(html`
        <w-combobox
          label="Select a fruit"
          invalid
          help-text="Please select a valid option"
          .options="${sampleOptions}"></w-combobox>
      `);
      await expect(page).toHaveNoAxeViolations();
    });

    test('disabled state has no violations', async () => {
      const page = render(html`<w-combobox label="Select a fruit" disabled .options="${sampleOptions}"></w-combobox>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('required state has no violations', async () => {
      const page = render(html`<w-combobox label="Select a fruit" required .options="${sampleOptions}"></w-combobox>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('optional state has no violations', async () => {
      const page = render(html`<w-combobox label="Select a fruit" optional .options="${sampleOptions}"></w-combobox>`);
      await expect(page).toHaveNoAxeViolations();
    });

    test('open on focus state has no violations', async () => {
      const page = render(html`<w-combobox label="Select a fruit" open-on-focus .options="${sampleOptions}"></w-combobox>`);
      await expect(page).toHaveNoAxeViolations();
    });
  });
});
