import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('renders the slotted label', async () => {
  const component = html`<w-badge>This is also not a button</w-badge>`;

  const screen = await page.render(component);
  await expect.element(screen.getByText('This is also not a button')).toBeVisible();
});
