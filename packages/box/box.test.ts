import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';
import './box.js';

test('renders the slotted label', async () => {
  const component = html`<w-box>This is not a button</w-box>`;

  const page = render(component);
  await expect.element(page.getByText('This is not a button')).toBeVisible();
});
