import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('renders the slotted label', async () => {
  const component = html`<w-box>This is not a button</w-box>`;

  const screen = page.render(component);
  await expect.element(screen.getByText('This is not a button')).toBeVisible();
});
