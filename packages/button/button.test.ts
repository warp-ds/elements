import { html } from 'lit';

import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import './index.js';
import { WarpButton } from './index.js';

test('renders the slotted label', async () => {
  const component = html`<w-button>This is a button</w-button>`;

  const page = render(component);
  await expect.element(page.getByText('This is a button')).toBeVisible();
  await expect.element(page.getByRole('button')).toBeVisible();
});

test('by default button type is button', async () => {
  const component = html`<w-button>This is a button</w-button>`;
  const page = render(component);
  await expect.element(page.getByRole('button')).toHaveAttribute('type', 'button');
});

test.todo('works in a form as type submit');

test.todo('works in a form as type reset');

test('calling focus on w-button focuses the button inside the shadow root', async () => {
  const component = html`<w-button>This is a button</w-button>`;
  const page = render(component);
  await expect.element(page.getByRole('button')).toBeVisible();

  const button: WarpButton = page.container.querySelector('w-button')
  
  button.focus();

  await vi.waitFor(() => page.container.querySelector(':focus').tagName === 'BUTTON');
});
