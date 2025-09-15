import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './index.js';

test('renders the textfield', async () => {
  const component = html`<w-textfield label="Email" help-text="Ugyldig e-post"></w-textfield>`;

  const page = render(component);
  await expect.element(page.getByText('Email')).toBeVisible();
});
