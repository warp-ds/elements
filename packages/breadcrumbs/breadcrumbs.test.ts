import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './breadcrumbs.js';

test('renders a bread crumb', async () => {
  const page = render(
    html` <w-breadcrumb>
      <a href="/foo">Foo</a>
      <a href="/bar">Bar</a>
    </w-breadcrumb>`,
  );
  await expect.element(page.getByText('Foo')).toBeVisible();
  await expect.element(page.getByText('Bar')).toBeVisible();
});

test('renders an aria-label if set', async () => {
  const page = render(html` <w-breadcrumb aria-label="You are here"> </w-breadcrumb>`);
  await expect.element(page.getByLabelText('You are here', { hasText: 'w-breadcrumb' })).toBeDefined();
});
