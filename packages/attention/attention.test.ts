import { page } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';

import './index.js';

test('renders an info', async () => {
  const screen = await page.render(
    html`<w-attention show data-testid="attentionTarget" placement="bottom" popover flip>
      <button id="target" slot="target" onclick="toggleShow()">Click to toggle a popover</button>
      <span slot="message">I'm a popover</span>
    </w-attention>`,
  );

  await expect.element(screen.getByTestId('attentionTarget')).toBeVisible();
});
