import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './page-indicator.js';

test('renders the correct number of dots', async () => {
  const component = html`<w-page-indicator page-count="5" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      return element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot').length;
    })
    .toBe(5);
});

test('renders a single dot when page-count is 1', async () => {
  const component = html`<w-page-indicator page-count="1" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      return element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot').length;
    })
    .toBe(1);
});

test('has aria-label on the container', async () => {
  const component = html`<w-page-indicator page-count="5" selected-page="3"></w-page-indicator>`;
  const page = render(component);

  // Check that the container has role="img" and an aria-label attribute
  await expect.element(page.getByRole('img')).toHaveAttribute('aria-label');
});

test('marks the selected dot with correct class', async () => {
  const component = html`<w-page-indicator page-count="5" selected-page="2"></w-page-indicator>`;
  const page = render(component);

  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      const dots = element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot');
      const selectedDots = element?.shadowRoot?.querySelectorAll('.w-page-indicator--selecteddot');
      return dots?.length === 5 && selectedDots?.length === 1;
    })
    .toBe(true);
});

test('selected dot is at correct position', async () => {
  const component = html`<w-page-indicator page-count="3" selected-page="2"></w-page-indicator>`;
  const page = render(component);

  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      const dots = element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot');
      return dots?.[1]?.classList.contains('w-page-indicator--selecteddot');
    })
    .toBe(true);
});

test('validates page-count to minimum of 1', async () => {
  const component = html`<w-page-indicator page-count="0" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      return element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot').length;
    })
    .toBe(1);
});

test('validates page-count for negative values', async () => {
  const component = html`<w-page-indicator page-count="-5" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      return element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot').length;
    })
    .toBe(1);
});

test('clamps selected-page to valid range (too high)', async () => {
  const component = html`<w-page-indicator page-count="3" selected-page="10"></w-page-indicator>`;
  const page = render(component);

  // Should clamp to page 3 (the max) - verify selected dot is at position 3 (index 2)
  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      const dots = element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot');
      return dots?.[2]?.classList.contains('w-page-indicator--selecteddot');
    })
    .toBe(true);
});

test('clamps selected-page to valid range (too low)', async () => {
  const component = html`<w-page-indicator page-count="3" selected-page="0"></w-page-indicator>`;
  const page = render(component);

  // Should clamp to page 1 (the min) - verify selected dot is at position 1 (index 0)
  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      const dots = element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot');
      return dots?.[0]?.classList.contains('w-page-indicator--selecteddot');
    })
    .toBe(true);
});

test('handles decimal page-count by flooring', async () => {
  const component = html`<w-page-indicator page-count="3.7" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      return element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot').length;
    })
    .toBe(3);
});

test('handles decimal selected-page by flooring', async () => {
  const component = html`<w-page-indicator page-count="5" selected-page="2.9"></w-page-indicator>`;
  const page = render(component);

  // Should floor to page 2 - verify selected dot is at position 2 (index 1)
  await expect
    .poll(() => {
      const element = page.container.querySelector('w-page-indicator');
      const dots = element?.shadowRoot?.querySelectorAll('.w-page-indicator--dot');
      return dots?.[1]?.classList.contains('w-page-indicator--selecteddot');
    })
    .toBe(true);
});

test('updates when selected-page changes', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  container.innerHTML = '<w-page-indicator page-count="5" selected-page="1"></w-page-indicator>';
  const element = container.querySelector('w-page-indicator') as HTMLElement & {
    updateComplete: Promise<boolean>;
  };

  // Wait for initial render
  await element.updateComplete;

  // Verify initial state - first dot is selected
  const dots = element.shadowRoot?.querySelectorAll('.w-page-indicator--dot');
  expect(dots?.[0]?.classList.contains('w-page-indicator--selecteddot')).toBe(true);

  // Change selected page
  element.setAttribute('selected-page', '3');
  await element.updateComplete;

  // Verify updated state - third dot is now selected
  expect(dots?.[0]?.classList.contains('w-page-indicator--selecteddot')).toBe(false);
  expect(dots?.[2]?.classList.contains('w-page-indicator--selecteddot')).toBe(true);

  // Cleanup
  document.body.removeChild(container);
});
