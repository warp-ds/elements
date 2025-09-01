import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import './index.js';

test('renders the slotted text', async () => {
  const component = html`<w-card>This is a card</w-card>`;

  const screen = render(component);
  await expect.element(screen.getByText('This is a card')).toBeVisible();
});
