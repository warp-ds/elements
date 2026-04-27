import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import '../tab/tab.js';
import '../tab-panel/tab-panel.js';
import './tabs.js';
import type { WarpTabPanel } from '../tab-panel/tab-panel.js';

test('renders the different tab components', async () => {
  const component = html`<w-tabs>
    <w-tab for="fellowship">Fellowship</w-tab>
    <w-tab-panel id="fellowship">
      <p>And my axe!</p>
    </w-tab-panel>

    <w-tab for="towers">Towers</w-tab>
    <w-tab-panel id="towers">
      <p>I am on nobody's side, because nobody is on my side, little orc.</p>
    </w-tab-panel>

    <w-tab for="return">Return</w-tab>
    <w-tab-panel id="return">
      <p>I am no man.</p>
    </w-tab-panel>
  </w-tabs>`;

  const page = render(component);

  // defaults to the first tab if the active property is not set
  await expect.element(page.getByText('And my axe!')).toBeVisible();
  await expect.element(page.getByText("I am on nobody's side")).not.toBeVisible();
  await expect.element(page.getByText('I am no man')).not.toBeVisible();
});

test('can control the visible tab with the active attribute', async () => {
  const component = html`<w-tabs active="towers">
    <w-tab for="fellowship">Fellowship</w-tab>
    <w-tab-panel id="fellowship">
      <p>And my axe!</p>
    </w-tab-panel>

    <w-tab for="towers">Towers</w-tab>
    <w-tab-panel id="towers">
      <p>I am on nobody's side, because nobody is on my side, little orc.</p>
    </w-tab-panel>

    <w-tab for="return">Return</w-tab>
    <w-tab-panel id="return">
      <p>I am no man.</p>
    </w-tab-panel>
  </w-tabs>`;

  const page = render(component);

  await expect.element(page.getByText("I am on nobody's side")).toBeVisible();
  await expect.element(page.getByText('And my axe!')).not.toBeVisible();
  await expect.element(page.getByText('I am no man')).not.toBeVisible();
});

test('clicking a tab changes the active attribute, visible tab panel', async () => {
  const component = html`<w-tabs active="towers">
    <w-tab for="fellowship">Fellowship</w-tab>
    <w-tab-panel id="fellowship">
      <p>And my axe!</p>
    </w-tab-panel>

    <w-tab for="towers">Towers</w-tab>
    <w-tab-panel id="towers">
      <p>I am on nobody's side, because nobody is on my side, little orc.</p>
    </w-tab-panel>

    <w-tab for="return">Return</w-tab>
    <w-tab-panel id="return">
      <p>I am no man.</p>
    </w-tab-panel>
  </w-tabs>`;

  const page = render(component);

  // Query tabs by element tag name since role is set via ElementInternals
  const tabs = page.container.querySelectorAll('w-tab');
  await userEvent.click(tabs[2]);

  await page.container.querySelector('w-tabs').updateComplete;
  await page.container.querySelectorAll('w-tab-panel')[2].updateComplete;

  await expect.element(page.getByText('I am no man')).toBeVisible();
  await expect.element(page.getByText('And my axe!')).not.toBeVisible();
  await expect.element(page.getByText("I am on nobody's side")).not.toBeVisible();
});

test('switches panel content when panels are initialized with hidden attribute', async () => {
  const component = html`<w-tabs active="tab2">
    <w-tab for="tab1">First Tab</w-tab>
    <w-tab-panel id="tab1">
      <p>Content for the first tab.</p>
    </w-tab-panel>

    <w-tab for="tab2">Second Tab</w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for the second tab.</p>
    </w-tab-panel>

    <w-tab for="tab3">Third Tab</w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for the third tab.</p>
    </w-tab-panel>
  </w-tabs>`;

  const page = render(component);
  await page.container.querySelector('w-tabs').updateComplete;

  await expect.element(page.getByText('Content for the second tab.')).toBeVisible();
  await expect.element(page.getByText('Content for the first tab.')).not.toBeVisible();
  await expect.element(page.getByText('Content for the third tab.')).not.toBeVisible();

  const tabs = page.container.querySelectorAll('w-tab');
  await userEvent.click(tabs[2]);

  await page.container.querySelector('w-tabs').updateComplete;
  await page.container.querySelectorAll('w-tab-panel')[2].updateComplete;

  await expect.element(page.getByText('Content for the third tab.')).toBeVisible();
  await expect.element(page.getByText('Content for the second tab.')).not.toBeVisible();
});

test('tab-panel visibility is controlled via internal shadow DOM (no host attribute changes) to avoid hydration mismatch', async () => {
  const component = html`<w-tabs>
    <w-tab for="panel1">Tab 1</w-tab>
    <w-tab-panel id="panel1">
      <p>Content 1</p>
    </w-tab-panel>

    <w-tab for="panel2">Tab 2</w-tab>
    <w-tab-panel id="panel2">
      <p>Content 2</p>
    </w-tab-panel>
  </w-tabs>`;

  const page = render(component);

  // Wait for tabs component to initialize
  await page.container.querySelector('w-tabs').updateComplete;

  const panels = page.container.querySelectorAll('w-tab-panel') as NodeListOf<WarpTabPanel>;

  // Visibility is controlled via internal shadow DOM elements, not host attributes
  // This avoids hydration mismatches when parent sets _parentActive
  expect(panels[0].active).toBe(true);
  expect(panels[1].active).toBe(false);

  // Internal shadow DOM wrapper has data-active attribute for CSS visibility
  const activeWrapper = panels[0].shadowRoot?.querySelector('.panel-content');
  const inactiveWrapper = panels[1].shadowRoot?.querySelector('.panel-content');
  expect(activeWrapper?.hasAttribute('data-active')).toBe(true);
  expect(inactiveWrapper?.hasAttribute('data-active')).toBe(false);

  // Verify visibility works correctly
  await expect.element(page.getByText('Content 1')).toBeVisible();
  await expect.element(page.getByText('Content 2')).not.toBeVisible();
});

test('aria-selected uses ElementInternals (no DOM attribute) to avoid hydration mismatch', async () => {
  const component = html`<w-tabs>
    <w-tab for="panel1">Tab 1</w-tab>
    <w-tab-panel id="panel1"><p>Content 1</p></w-tab-panel>

    <w-tab for="panel2">Tab 2</w-tab>
    <w-tab-panel id="panel2"><p>Content 2</p></w-tab-panel>
  </w-tabs>`;

  const page = render(component);
  const tabsEl = page.container.querySelector('w-tabs');
  await tabsEl.updateComplete;

  const tabs = page.container.querySelectorAll('w-tab');

  // aria-selected is set via ElementInternals, not as a DOM attribute (to avoid hydration mismatch)
  expect(tabs[0].hasAttribute('aria-selected')).toBe(false);
  expect(tabs[1].hasAttribute('aria-selected')).toBe(false);

  // But the property should be set correctly by the parent
  expect((tabs[0] as any).ariaSelected).toBe('true');
  expect((tabs[1] as any).ariaSelected).toBe('false');
});

test('w-tab does not mutate host aria-controls by default', async () => {
  const component = html`<w-tabs>
    <w-tab for="panel1">Tab 1</w-tab>
    <w-tab-panel id="panel1"><p>Content 1</p></w-tab-panel>
  </w-tabs>`;

  const page = render(component);
  const tabsEl = page.container.querySelector('w-tabs');
  await tabsEl.updateComplete;

  const tab = page.container.querySelector('w-tab') as HTMLElement;
  const internalButton = tab.shadowRoot?.querySelector('button');

  expect(tab.hasAttribute('aria-controls')).toBe(false);
  expect(internalButton?.getAttribute('aria-controls')).toBe('panel1');
});
