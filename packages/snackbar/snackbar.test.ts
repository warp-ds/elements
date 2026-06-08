import { html } from 'lit';

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../button/button.js';
import '../icon/icon.js';
import '../snackbar-item/snackbar-item.js';
import './snackbar.js';

test('exposes a create function that adds snackbar items', async () => {
    const component = html`<w-snackbar></w-snackbar>`;

    const page = render(component);

    const snackbar = page.container.querySelector('w-snackbar');
    if (!snackbar) return expect(snackbar).not.toBeNull();

    await snackbar.updateComplete;
    snackbar.create('Test message');

    await expect.element(page.getByText('Test message')).toBeVisible();
});
