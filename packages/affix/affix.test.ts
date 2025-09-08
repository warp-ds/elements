import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('renders the affix', async () => {
  const component = html`<w-affix label="kr"></w-affix>`;

  const screen = page.render(component);
  await expect.element(screen.getByText('kr')).toBeVisible();
});
