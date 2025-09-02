import { html } from 'lit';

import { page } from '@vitest/browser/context';
import { expect, test } from 'vitest';
import './index.js';

test('renders the slotted label', async () => {
  const component = html`<w-button>This is a button</w-button>`;

  const screen = await page.render(component);
  await expect.element(screen.getByText('This is a button')).toBeVisible();
  await expect.element(screen.getByRole('button')).toBeVisible();
});

test('by default button type is button', async () => {
  const component = html`<w-button>This is a button</w-button>`;
  const screen = await page.render(component);
  await expect.element(screen.getByRole('button')).toHaveAttribute('type', 'button');
});

test.todo('works in a form as type submit');

test.todo('works in a form as type reset');
