import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('renders the given title prop and hides the slotted content', async () => {
  const component = html`
    <w-expandable title="I'm expandable">
      <p>with expanded content</p>
    </w-expandable>
  `;

  const screen = page.render(component);
  await expect.element(screen.getByText("I'm expandable")).toBeVisible();
  await expect.element(screen.getByText('with expanded content')).not.toBeVisible();
});

test('clicking the expandable shows the slotted content', async () => {
  const component = html`
    <w-expandable title="I'm expandable">
      <p>with expanded content</p>
    </w-expandable>
  `;

  const screen = page.render(component);
  await screen.getByRole('button').click();
  await expect.element(screen.getByText('with expanded content')).toBeVisible();
});
