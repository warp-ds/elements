import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './affix.js';

test('renders the affix', async () => {
  const component = html`<w-affix label="kr"></w-affix>`;

  const page = render(component);
  await expect.element(page.getByText('kr')).toBeVisible();
});

test('renders an icon when icon prop is set', async () => {
  const page = render(html`<w-affix data-testid="affix" icon="AwardMedal"></w-affix>`);
  const affix = (await page.getByTestId('affix').element()) as HTMLElement;
  const icon = affix.shadowRoot?.querySelector('w-icon');

  expect(icon).toBeTruthy();
  expect(icon?.getAttribute('name')).toBe('AwardMedal');
});
