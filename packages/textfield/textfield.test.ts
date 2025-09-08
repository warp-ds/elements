import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('renders the textfield', async () => {
  const component = html`<w-textfield label="Email" help-text="Ugyldig e-post"></w-textfield>`;

  const screen = page.render(component);
  await expect.element(screen.getByText('Email')).toBeVisible();
});
