import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import './option.js';

describe('w-option accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('w-option as a data node has no accessibility violations', async () => {
      expect(customElements.get('w-option')).toBeDefined();

      const page = render(html`<w-option value="no">Norway</w-option>`);
      await expect(page).toHaveNoAxeViolations();
    });
  });
});
