import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './card.js';

test('renders the slotted text', async () => {
  const component = html`<w-card>This is a card</w-card>`;

  const page = render(component);
  await expect.element(page.getByText('This is a card')).toBeVisible();
});
