import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('renders the slotted text', async () => {
  const component = html`<w-card>This is a card</w-card>`;

  const screen = page.render(component);
  await expect.element(screen.getByText('This is a card')).toBeVisible();
});
