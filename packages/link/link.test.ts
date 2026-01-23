import { page } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';
import './link.js';

test('renders a link with role button ', async () => {
  const component = html`<w-link type="button" href="link yo">This is a link looking like a button</w-link>`;
  const screen = await page.render(component);
  await expect.element(screen.getByText('This is a link looking like a button')).toHaveAttribute('href', 'link yo');
});
