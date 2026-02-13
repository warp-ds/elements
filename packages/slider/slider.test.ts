import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../attention/attention.js';
import '../affix/affix.js';
import '../textfield/textfield.js';
import type { WarpSlider } from './slider.js';
import './slider.js';
import type { WarpSliderThumb } from '../slider-thumb/slider-thumb.js';
import '../slider-thumb/slider-thumb.js';

test('single slider starts with a default value equal to max', async () => {
  const component = html`
    <form data-testid="form">
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    </form>
  `;

  const page = render(component);

  await expect.element(page.getByLabelText('Single').first()).toHaveValue('100');
});

test('range slider starts with a default from value equal to min, and to value equal to max', async () => {
  const component = html`
    <form data-testid="form">
      <w-slider label="Range" min="0" max="100">
        <w-slider-thumb aria-label="From" name="rangefrom" slot="from"></w-slider-thumb>
        <w-slider-thumb aria-label="To" name="rangeto" slot="to"></w-slider-thumb>
      </w-slider>
    </form>
  `;

  const page = render(component);

  await expect.element(page.getByLabelText('From').first()).toHaveValue('0');
  await expect.element(page.getByLabelText('To').first()).toHaveValue('100');
});

test('can set slider value via the range input', async () => {
  const component = html`
    <form data-testid="form">
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    </form>
  `;

  const page = render(component);

  await userEvent.type(page.getByLabelText('Single').first(), '{ArrowLeft}{ArrowLeft}{ArrowLeft}');

  await expect.element(page.getByLabelText('Single').first()).toHaveValue('97');
  await expect.element(page.getByRole('spinbutton')).toHaveValue(97); // keeps value in sync between inputs

  const formData = new FormData(page.getByTestId('form').element() as HTMLFormElement);
  expect(formData.get('value')).toBe('97');
});

test('can set slider value via the number input', async () => {
  const component = html`
    <form data-testid="form">
      <w-slider label="Single" min="0" max="100">
        <w-slider-thumb name="value"></w-slider-thumb>
      </w-slider>
    </form>
  `;

  const page = render(component);

  await page.getByRole('spinbutton').fill('50');
  await expect.element(page.getByRole('spinbutton')).toHaveValue(50);
  await expect.element(page.getByLabelText('Single').first()).toHaveValue('50'); // keeps value in sync between inputs

  const formData = new FormData(page.getByTestId('form').element() as HTMLFormElement);
  expect(formData.get('value')).toBe('50');
});

test('deleting from number input works as expected', async () => {
  const component = html`
    <form data-testid="form">
      <w-slider label="Production year" min="1950" max="2025" over under>
        <p slot="description">Try typing a from value higher than a to value</p>
        <w-slider-thumb slot="from" name="from"></w-slider-thumb>
        <w-slider-thumb slot="to" name="to"></w-slider-thumb>
      </w-slider>
    </form>
  `;

  const page = render(component);

  await expect.element(page.getByRole('spinbutton').last()).toHaveValue(2025);

  await userEvent.type(page.getByRole('spinbutton').last(), '{Backspace}');
  await expect.element(page.getByRole('spinbutton').last()).toHaveValue(202);

  await userEvent.type(page.getByRole('spinbutton').last(), '{Backspace}');
  await expect.element(page.getByRole('spinbutton').last()).toHaveValue(20);

  await userEvent.type(page.getByRole('spinbutton').last(), '{Backspace}');
  await expect.element(page.getByRole('spinbutton').last()).toHaveValue(2);

  await userEvent.type(page.getByRole('spinbutton').last(), '{Backspace}');
  await expect.element(page.getByRole('spinbutton').last()).not.toHaveValue();
});

test('can reset slider by resetting surrounding form', async () => {
  render(html`
    <form>
      <w-slider label="Slider from 0 - 10" min="0" max="10">
        <p slot="description">If you want to slide between 0 and 10, this slider has you covered.</p>
        <w-slider-thumb name="zero-ten" value="3"></w-slider-thumb>
      </w-slider>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wSlider = document.querySelector('w-slider') as WarpSlider;
  const wSliderThumb = wSlider.querySelector('w-slider-thumb') as WarpSliderThumb;

  // sanity
  expect(form).not.toBeNull();
  expect(wSlider).not.toBeNull();
  expect(wSliderThumb).not.toBeNull();

  expect(wSliderThumb.value).toBe('3');
  expect(Object.fromEntries(new FormData(form).entries())['zero-ten']).toBe('3');

  wSliderThumb.value = '5';

  await wSliderThumb.updateComplete;
  expect(wSliderThumb.value).toBe('5');
  expect(Object.fromEntries(new FormData(form).entries())['zero-ten']).toBe('5');

  // Reset the form
  form.reset();

  await wSliderThumb.updateComplete;
  expect(wSliderThumb.value).toBe('3');
  expect(Object.fromEntries(new FormData(form).entries())['zero-ten']).toBe('3');
});

// labelFormatter tests
test('labelFormatter formats min and max labels', async () => {
  const component = html`
    <w-slider label="Production year" min="1950" max="2025">
      <w-slider-thumb slot="from" name="from"></w-slider-thumb>
      <w-slider-thumb slot="to" name="to"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  slider.labelFormatter = (slot) => {
    if (slot === 'from') return 'Before 1950';
    return '2025+';
  };

  await slider.updateComplete;

  const fromThumb = document.querySelector('w-slider-thumb[slot="from"]') as WarpSliderThumb;
  const toThumb = document.querySelector('w-slider-thumb[slot="to"]') as WarpSliderThumb;

  await fromThumb.updateComplete;
  await toThumb.updateComplete;

  // Check the visible labels are formatted
  const fromMarker = fromThumb.shadowRoot.querySelector('.w-slider-thumb__from-marker');
  const toMarker = toThumb.shadowRoot.querySelector('.w-slider-thumb__to-marker');

  expect(fromMarker.textContent.trim()).toBe('Before 1950');
  expect(toMarker.textContent.trim()).toBe('2025+');
});

test('labelFormatter can hide labels by returning empty string', async () => {
  const component = html`
    <w-slider label="Hidden labels" min="0" max="100">
      <w-slider-thumb name="value"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  slider.labelFormatter = () => '';

  await slider.updateComplete;

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  const fromMarker = thumb.shadowRoot.querySelector('.w-slider-thumb__from-marker');
  const toMarker = thumb.shadowRoot.querySelector('.w-slider-thumb__to-marker');

  expect(fromMarker.textContent.trim()).toBe('');
  expect(toMarker.textContent.trim()).toBe('');
});

// valueFormatter tests
test('valueFormatter formats tooltip display value', async () => {
  const component = html`
    <w-slider label="Price" min="0" max="100000">
      <w-slider-thumb name="price" value="50000"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  // Format with custom suffix
  slider.valueFormatter = (value) => {
    if (!value) return '0';
    return `${value} formatted`;
  };

  await slider.updateComplete;

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  // Check the tooltip message content in w-attention
  const tooltipMessage = thumb.shadowRoot.querySelector('w-attention span[slot="message"]');
  expect(tooltipMessage.textContent.trim()).toBe('50000 formatted');
});

// WCAG 2.1 Accessibility Tests

// Fieldset and legend tests (WCAG 1.3.1 Info and Relationships, 4.1.2 Name, Role, Value)
test('slider uses fieldset with legend for proper grouping', async () => {
  const component = html`
    <w-slider label="Volume control" min="0" max="100">
      <w-slider-thumb name="volume"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  await slider.updateComplete;

  const fieldset = slider.shadowRoot.querySelector('fieldset');
  const legend = fieldset.querySelector('legend');

  expect(fieldset).not.toBeNull();
  expect(legend).not.toBeNull();
  expect(legend.textContent.trim()).toBe('Volume control');
});

test('range slider fieldset groups both thumbs together', async () => {
  const component = html`
    <w-slider label="Price range" min="0" max="1000">
      <w-slider-thumb slot="from" aria-label="Minimum price" name="min"></w-slider-thumb>
      <w-slider-thumb slot="to" aria-label="Maximum price" name="max"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  await slider.updateComplete;

  const fieldset = slider.shadowRoot.querySelector('fieldset');
  const legend = fieldset.querySelector('legend');

  expect(fieldset).not.toBeNull();
  expect(legend.textContent.trim()).toBe('Price range');

  // Both thumbs should be slotted within the fieldset
  const slots = fieldset.querySelectorAll('slot');
  expect(slots.length).toBeGreaterThan(0);
});

// Input type range accessibility (WCAG 4.1.2 Name, Role, Value)
test('range input has proper aria-label', async () => {
  const component = html`
    <w-slider label="Brightness" min="0" max="100">
      <w-slider-thumb name="brightness"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  const rangeInput = thumb.shadowRoot.querySelector('input[type="range"]') as HTMLInputElement;

  expect(rangeInput.getAttribute('aria-label')).toBe('Brightness');
});

test('range input uses explicit aria-label when provided', async () => {
  const component = html`
    <w-slider label="Volume" min="0" max="100">
      <w-slider-thumb aria-label="Custom volume control" name="volume"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  const rangeInput = thumb.shadowRoot.querySelector('input[type="range"]') as HTMLInputElement;

  expect(rangeInput.getAttribute('aria-label')).toBe('Custom volume control');
});

// Range slider accessibility for from/to labels
test('range slider thumbs get appropriate aria-labels when not explicitly set', async () => {
  const component = html`
    <w-slider label="Year range" min="2000" max="2025">
      <w-slider-thumb slot="from" name="from-year"></w-slider-thumb>
      <w-slider-thumb slot="to" name="to-year"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const fromThumb = document.querySelector('w-slider-thumb[slot="from"]') as WarpSliderThumb;
  const toThumb = document.querySelector('w-slider-thumb[slot="to"]') as WarpSliderThumb;

  await fromThumb.updateComplete;
  await toThumb.updateComplete;

  const fromRange = fromThumb.shadowRoot.querySelector('input[type="range"]') as HTMLInputElement;
  const toRange = toThumb.shadowRoot.querySelector('input[type="range"]') as HTMLInputElement;

  // Should append min/max to the parent label
  expect(fromRange.getAttribute('aria-label')).toBe('Year range min');
  expect(toRange.getAttribute('aria-label')).toBe('Year range max');
});

// Input type number accessibility (WCAG 4.1.2 Name, Role, Value)
test('number input (textfield) has proper aria-label', async () => {
  const component = html`
    <w-slider label="Quantity" min="0" max="100">
      <w-slider-thumb name="qty"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  const textfield = thumb.shadowRoot.querySelector('w-textfield') as HTMLElement;

  expect(textfield.getAttribute('aria-label')).toBe('Quantity');
});

// Disabled state accessibility
test('disabled slider marks all inputs as disabled', async () => {
  const component = html`
    <w-slider label="Disabled slider" min="0" max="100" disabled>
      <w-slider-thumb name="value"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  const rangeInput = thumb.shadowRoot.querySelector('input[type="range"]') as HTMLInputElement;
  const textfield = thumb.shadowRoot.querySelector('w-textfield') as HTMLElement;

  expect(rangeInput.disabled).toBe(true);
  expect(textfield.hasAttribute('disabled')).toBe(true);
});

test('disabled fieldset communicates disabled state', async () => {
  const component = html`
    <w-slider label="Disabled control" min="0" max="100" disabled>
      <w-slider-thumb name="value"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  await slider.updateComplete;

  const fieldset = slider.shadowRoot.querySelector('fieldset');

  expect(fieldset.disabled).toBe(true);
});

// Error state accessibility (WCAG 3.3.1 Error Identification)
test('invalid slider sets aria-invalid on fieldset', async () => {
  const component = html`
    <w-slider label="Invalid slider" min="0" max="100" invalid error="Please select a value">
      <w-slider-thumb name="value"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  await slider.updateComplete;
  // Wait for the state update triggered in connectedCallback
  await slider.updateComplete;

  const fieldset = slider.shadowRoot.querySelector('fieldset');

  expect(fieldset.getAttribute('aria-invalid')).toBe('true');
});

test('error message is visible when slider is invalid', async () => {
  const component = html`
    <w-slider label="Error slider" min="0" max="100" invalid error="Value is required">
      <w-slider-thumb name="value"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  await slider.updateComplete;
  // Wait for the state update triggered in connectedCallback
  await slider.updateComplete;

  const errorMessage = slider.shadowRoot.querySelector('.w-slider__error');

  expect(errorMessage).not.toBeNull();
  expect(errorMessage.textContent.trim()).toBe('Value is required');
});

// Screen reader min/max range announcement
test('screen reader can access min and max range values', async () => {
  const component = html`
    <w-slider label="Range with bounds" min="10" max="90">
      <w-slider-thumb name="value"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  await slider.updateComplete;

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  // Screen reader only text should contain min and max info
  const srOnlyText = thumb.shadowRoot.querySelector('.sr-only');

  expect(srOnlyText).not.toBeNull();
  expect(srOnlyText.textContent).toContain('10');
  expect(srOnlyText.textContent).toContain('90');
});

test('screen reader range announcement uses labelFormatter values', async () => {
  const component = html`
    <w-slider label="Formatted range" min="0" max="100">
      <w-slider-thumb name="value"></w-slider-thumb>
    </w-slider>
  `;

  render(component);

  const slider = document.querySelector('w-slider') as WarpSlider;
  slider.labelFormatter = (slot) => {
    if (slot === 'from') return 'Zero';
    return 'One hundred';
  };

  await slider.updateComplete;

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  const srOnlyText = thumb.shadowRoot.querySelector('.sr-only');

  expect(srOnlyText.textContent).toContain('Zero');
  expect(srOnlyText.textContent).toContain('One hundred');
});

// Required field accessibility (WCAG 3.3.2 Labels or Instructions)
test('required slider passes required state to thumb', async () => {
  render(html`
    <w-slider label="Required slider" min="0" max="100" required>
      <w-slider-thumb name="value"></w-slider-thumb>
    </w-slider>
  `);

  const slider = document.querySelector('w-slider') as WarpSlider;
  await slider.updateComplete;

  const thumb = document.querySelector('w-slider-thumb') as WarpSliderThumb;
  await thumb.updateComplete;

  // The required state should be synced from slider to thumb
  expect(thumb.required).toBe(true);

  // Verify the slider has required attribute in HTML
  expect(slider.hasAttribute('required')).toBe(true);
});
