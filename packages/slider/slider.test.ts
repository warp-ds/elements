import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import '../attention/index.js';
import '../affix/index.js';
import '../textfield/index.js';
import './index.js';

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
  const wSlider = document.querySelector('w-slider') as HTMLElement & { value: string };
  const wSliderThumb = wSlider.querySelector('w-slider-thumb') as HTMLElement & { value: string; updateComplete: any };

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
