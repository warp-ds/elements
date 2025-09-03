import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('renders the dead toggle', async () => {
  const component = html`<w-dead-toggle data-testid="dead-toggle"></w-dead-toggle>`;

  const screen = await page.render(component);
  await expect.element(screen.getByTestId('dead-toggle')).toBeVisible();
});
