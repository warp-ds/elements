import { html } from 'lit';

import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-lit';

import './index.js';

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

test('Works in a form as type reset', async () => {
  const label = 'Test label';

  render(html`
    <form>
      <w-button
        label=${label}
        name="test"
        type="reset"
        value="test"
        variant="secondary"
      >
        Reset the form
      </w-button>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wButton = document.querySelector('w-button') as HTMLElement & { value: string };

  // sanity
  expect(form).not.toBeNull();
  expect(wButton).not.toBeNull();

  // Initial value is "test"
  expect(wButton.value).toBe('test');

  // Change the value to "definitely not test"
  wButton.value = 'definitely not test';
  expect(wButton.value).toBe('definitely not test');

  // Reset the form
  form.reset();

  // Value should be reset back to "test"
  expect(wButton.value).toBe('test');
});

test('calling focus on w-button focuses the button inside the shadow root', async () => {
  const component = html`<w-button>This is a button</w-button>`;
  const page = render(component);
  await expect.element(page.getByRole('button')).toBeVisible();

  // @ts-expect-error if we import and type using WarpButton, the test fails which is nonsense so I've opted to simply ignore this error.
  page.container.querySelector('w-button').focus();

  await vi.waitFor(() => page.container.querySelector(':focus').tagName === 'BUTTON');
});
