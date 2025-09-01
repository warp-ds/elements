import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import './index.js';

test('renders the given title prop and hides the slotted content', async () => {
  const component = html`
    <w-expandable title="I'm expandable">
      <p>with expanded content</p>
    </w-expandable>
  `;

  const screen = render(component);
  await expect.element(screen.getByText("I'm expandable")).toBeVisible();
  await expect.element(screen.getByText('with expanded content')).not.toBeVisible();
});

test('clicking the expandable shows the slotted content', async () => {
  const component = html`
    <w-expandable title="I'm expandable">
      <p>with expanded content</p>
    </w-expandable>
  `;

  const screen = render(component);
  await screen.getByRole('button').click();
  await expect.element(screen.getByText('with expanded content')).toBeVisible();
});
