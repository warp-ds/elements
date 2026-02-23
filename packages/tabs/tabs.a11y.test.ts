import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import '../tab/tab.js';
import '../tab-panel/tab-panel.js';
import './tabs.js';
import type { WarpTab } from '../tab/tab.js';

describe('w-tabs, w-tab-panel, w-tab accessibility (WCAG 2.2)', () => {
  describe('axe-core automated checks', () => {
    test('default state has no violations', async () => {
      const page = render(
        html`<w-tabs>
          <w-tab for="fellowship">Fellowship</w-tab>
          <w-tab-panel id="fellowship">
            <p>And my axe!</p>
          </w-tab-panel>

          <w-tab for="towers">Towers</w-tab>
          <w-tab-panel id="towers">
            <p>
              I am on nobody's side, because nobody is on my side, little orc.
            </p>
          </w-tab-panel>

          <w-tab for="return">Return</w-tab>
          <w-tab-panel id="return">
            <p>I am no man.</p>
          </w-tab-panel>
        </w-tabs>`,
      );
      await expect(page).toHaveNoAxeViolations();
    });

    test('active tab state has no violations', async () => {
      const page = render(
        html`<w-tabs active="towers">
          <w-tab for="fellowship">Fellowship</w-tab>
          <w-tab-panel id="fellowship">
            <p>And my axe!</p>
          </w-tab-panel>

          <w-tab for="towers">Towers</w-tab>
          <w-tab-panel id="towers">
            <p>
              I am on nobody's side, because nobody is on my side, little orc.
            </p>
          </w-tab-panel>

          <w-tab for="return">Return</w-tab>
          <w-tab-panel id="return">
            <p>I am no man.</p>
          </w-tab-panel>
        </w-tabs>`,
      );
      await expect(page).toHaveNoAxeViolations();
    });
  });

   describe('WCAG 1.3.1 - Info and Relationships', () => {
    test('w-tab has role tab, w-tab-panel has role tabpanel', async () => {
      const page = render(
        html`<w-tabs active="towers">
          <w-tab for="fellowship">Fellowship</w-tab>
          <w-tab-panel id="fellowship">
            <p>And my axe!</p>
          </w-tab-panel>

          <w-tab for="towers">Towers</w-tab>
          <w-tab-panel id="towers">
            <p>
              I am on nobody's side, because nobody is on my side, little orc.
            </p>
          </w-tab-panel>

          <w-tab for="return">Return</w-tab>
          <w-tab-panel id="return">
            <p>I am no man.</p>
          </w-tab-panel>
        </w-tabs>`,
      );
      await page.container.querySelector('w-tabs').updateComplete;
      expect(page.getByRole('tab').all()).toHaveLength(3);
      expect(page.getByRole('tabpanel', { includeHidden: true }).all()).toHaveLength(3);
    });

    test('w-tab and w-tab-panel has a defined relationship through aria-controls, aria-labelledby', async () => {
      const page = render(
        html`<w-tabs active="fellowship">
          <w-tab for="fellowship">Fellowship</w-tab>
          <w-tab-panel id="fellowship">
            <p>And my axe!</p>
          </w-tab-panel>

          <w-tab for="towers">Towers</w-tab>
          <w-tab-panel id="towers">
            <p>
              I am on nobody's side, because nobody is on my side, little orc.
            </p>
          </w-tab-panel>

          <w-tab for="return">Return</w-tab>
          <w-tab-panel id="return">
            <p>I am no man.</p>
          </w-tab-panel>
        </w-tabs>`,
      );
      await page.container.querySelector('w-tabs').updateComplete;
      expect(page.getByRole('tab').first()).toHaveAccessibleName("Fellowship");
      expect(page.getByRole('tabpanel').first()).toHaveAccessibleName("Fellowship");
    });
  });

  describe('WCAG 4.1.2 - Name, Role, Value', () => {
    test('active tab is marked as selected', async () => {
      const page = render(
        html`<w-tabs active="towers">
          <w-tab for="fellowship">Fellowship</w-tab>
          <w-tab-panel id="fellowship">
            <p>And my axe!</p>
          </w-tab-panel>

          <w-tab for="towers">Towers</w-tab>
          <w-tab-panel id="towers">
            <p>
              I am on nobody's side, because nobody is on my side, little orc.
            </p>
          </w-tab-panel>

          <w-tab for="return">Return</w-tab>
          <w-tab-panel id="return">
            <p>I am no man.</p>
          </w-tab-panel>
        </w-tabs>`,
      );
      await page.container.querySelector('w-tabs').updateComplete;

      await expect.element(page.container.querySelector('[aria-selected="true"]')).toHaveTextContent("Towers");
    });
  });

  describe('WCAG 2.1.1 - Keyboard', () => {
    test('active tab is focusable, can use the arrow keys to change tabs', async () => {
      const page = render(
        html`<w-tabs active="towers">
          <w-tab for="fellowship">Fellowship</w-tab>
          <w-tab-panel id="fellowship">
            <p>And my axe!</p>
          </w-tab-panel>

          <w-tab for="towers">Towers</w-tab>
          <w-tab-panel id="towers">
            <p>
              I am on nobody's side, because nobody is on my side, little orc.
            </p>
          </w-tab-panel>

          <w-tab for="return">Return</w-tab>
          <w-tab-panel id="return">
            <p>I am no man.</p>
          </w-tab-panel>
        </w-tabs>`,
      );
      await page.container.querySelector('w-tabs').updateComplete;

      (page.container.querySelector('[aria-selected="true"]') as WarpTab).focus();
      await userEvent.keyboard('{ArrowLeft}');

      await expect.element(page.getByText('And my axe!')).toBeVisible();
      await expect.element(page.getByText('I am no man')).not.toBeVisible();
      await expect.element(page.getByText("I am on nobody's side")).not.toBeVisible();
    });

    test('inactive tabs have tabindex -1', async () => {
      const page = render(
        html`<w-tabs active="towers">
          <w-tab for="fellowship">Fellowship</w-tab>
          <w-tab-panel id="fellowship">
            <p>And my axe!</p>
          </w-tab-panel>

          <w-tab for="towers">Towers</w-tab>
          <w-tab-panel id="towers">
            <p>
              I am on nobody's side, because nobody is on my side, little orc.
            </p>
          </w-tab-panel>

          <w-tab for="return">Return</w-tab>
          <w-tab-panel id="return">
            <p>I am no man.</p>
          </w-tab-panel>
        </w-tabs>`,
      );

      await page.container.querySelector('w-tabs').updateComplete;
      const inactiveTabs = [...page.container.querySelectorAll('[aria-selected="false"]')] as WarpTab[];
      expect(inactiveTabs).toHaveLength(2);
      for (const tab of inactiveTabs) {
        await expect.element(tab).toHaveAttribute("tabindex", "-1");
      }
    });
  });
});
