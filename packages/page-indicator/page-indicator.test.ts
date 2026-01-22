import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './page-indicator.js';

test('renders the correct number of dots', async () => {
  const component = html`<w-page-indicator page-count="5" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect.poll(() => page.getByRole('img').all()).toHaveLength(5);
});

test('renders a single dot when page-count is 1', async () => {
  const component = html`<w-page-indicator page-count="1" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect.poll(() => page.getByRole('img').all()).toHaveLength(1);
});

test('has correct aria-label on the group', async () => {
  const component = html`<w-page-indicator page-count="5" selected-page="3"></w-page-indicator>`;
  const page = render(component);

  await expect.element(page.getByRole('group')).toHaveAttribute('aria-label', 'Page 3 of 5');
});

test('marks the selected dot as current', async () => {
  const component = html`<w-page-indicator page-count="5" selected-page="2"></w-page-indicator>`;
  const page = render(component);

  await expect.element(page.getByLabelText('Page 2, current')).toBeInTheDocument();
});

test('non-selected dots have correct labels', async () => {
  const component = html`<w-page-indicator page-count="3" selected-page="2"></w-page-indicator>`;
  const page = render(component);

  await expect.element(page.getByLabelText('Page 1')).toBeInTheDocument();
  await expect.element(page.getByLabelText('Page 2, current')).toBeInTheDocument();
  await expect.element(page.getByLabelText('Page 3')).toBeInTheDocument();
});

test('validates page-count to minimum of 1', async () => {
  const component = html`<w-page-indicator page-count="0" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect.poll(() => page.getByRole('img').all()).toHaveLength(1);
});

test('validates page-count for negative values', async () => {
  const component = html`<w-page-indicator page-count="-5" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect.poll(() => page.getByRole('img').all()).toHaveLength(1);
});

test('clamps selected-page to valid range (too high)', async () => {
  const component = html`<w-page-indicator page-count="3" selected-page="10"></w-page-indicator>`;
  const page = render(component);

  // Should clamp to page 3 (the max)
  await expect.element(page.getByRole('group')).toHaveAttribute('aria-label', 'Page 3 of 3');
  await expect.element(page.getByLabelText('Page 3, current')).toBeInTheDocument();
});

test('clamps selected-page to valid range (too low)', async () => {
  const component = html`<w-page-indicator page-count="3" selected-page="0"></w-page-indicator>`;
  const page = render(component);

  // Should clamp to page 1 (the min)
  await expect.element(page.getByRole('group')).toHaveAttribute('aria-label', 'Page 1 of 3');
  await expect.element(page.getByLabelText('Page 1, current')).toBeInTheDocument();
});

test('handles decimal page-count by flooring', async () => {
  const component = html`<w-page-indicator page-count="3.7" selected-page="1"></w-page-indicator>`;
  const page = render(component);

  await expect.poll(() => page.getByRole('img').all()).toHaveLength(3);
});

test('handles decimal selected-page by flooring', async () => {
  const component = html`<w-page-indicator page-count="5" selected-page="2.9"></w-page-indicator>`;
  const page = render(component);

  await expect.element(page.getByLabelText('Page 2, current')).toBeInTheDocument();
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

  // Verify initial state
  expect(element.shadowRoot?.querySelector('[aria-label="Page 1, current"]')).toBeTruthy();

  // Change selected page
  element.setAttribute('selected-page', '3');
  await element.updateComplete;

  // Verify updated state
  expect(element.shadowRoot?.querySelector('[aria-label="Page 3, current"]')).toBeTruthy();

  // Cleanup
  document.body.removeChild(container);
});
