import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './dead-toggle.js';

test('renders the dead toggle', async () => {
  const component = html`<w-dead-toggle data-testid="dead-toggle"></w-dead-toggle>`;

  const page = render(component);
  await expect.element(page.getByTestId('dead-toggle')).toBeVisible();
});
