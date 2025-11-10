import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import './index.js';

test('renders the slotted label', async () => {
  const component = html`<w-badge>This is also not a button</w-badge>`;

  const page = render(component);
  await expect.element(page.getByText('This is also not a button')).toBeVisible();
});
