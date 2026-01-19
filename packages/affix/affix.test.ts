import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './affix.js';

test('renders the affix', async () => {
  const component = html`<w-affix label="kr"></w-affix>`;

  const page = render(component);
  await expect.element(page.getByText('kr')).toBeVisible();
});
