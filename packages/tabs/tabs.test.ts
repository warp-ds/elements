import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import '../tab/tab.js';
import '../tab-panel/tab-panel.js';
import './tabs.js';

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
  await expect.element(page.getByText('I am on nobody\'s side')).not.toBeVisible();
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

  await expect.element(page.getByText('I am on nobody\'s side')).toBeVisible();
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

  await userEvent.click(page.getByRole('tab').last());

  await page.container.querySelector('w-tabs').updateComplete;
  await page.container.querySelectorAll('w-tab-panel')[2].updateComplete;

  await expect.element(page.getByText('I am no man')).toBeVisible();
  await expect.element(page.getByText('And my axe!')).not.toBeVisible();
  await expect.element(page.getByText('I am on nobody\'s side')).not.toBeVisible();
});

