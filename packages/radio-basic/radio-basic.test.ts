import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './radio-basic.js';

type RadioBasicElement = HTMLElement & { checked: boolean; updateComplete: Promise<boolean>; shadowRoot: ShadowRoot };

test('renders a radio button', async () => {
  const page = render(html`
    <w-radio-basic name="test" value="option1">Option 1</w-radio-basic>
  `);

  await expect.element(page.getByText('Option 1')).toBeVisible();
});

test('can be checked by clicking', async () => {
  const page = render(html`
    <w-radio-basic name="test" value="option1">Option 1</w-radio-basic>
  `);

  const radio = document.querySelector('w-radio-basic') as HTMLElement & { checked: boolean };
  expect(radio.checked).toBe(false);

  await page.getByText('Option 1').click();

  expect(radio.checked).toBe(true);
});

test('radio group behavior - clicking one unchecks others', async () => {
  const page = render(html`
    <div>
      <w-radio-basic name="group" value="a">Option A</w-radio-basic>
      <w-radio-basic name="group" value="b">Option B</w-radio-basic>
      <w-radio-basic name="group" value="c">Option C</w-radio-basic>
    </div>
  `);

  const radios = document.querySelectorAll('w-radio-basic') as NodeListOf<HTMLElement & { checked: boolean }>;
  const [radioA, radioB, radioC] = Array.from(radios);

  // Click Option A
  await page.getByText('Option A').click();
  expect(radioA.checked).toBe(true);
  expect(radioB.checked).toBe(false);
  expect(radioC.checked).toBe(false);

  // Click Option B - should uncheck A
  await page.getByText('Option B').click();
  expect(radioA.checked).toBe(false);
  expect(radioB.checked).toBe(true);
  expect(radioC.checked).toBe(false);

  // Click Option C - should uncheck B
  await page.getByText('Option C').click();
  expect(radioA.checked).toBe(false);
  expect(radioB.checked).toBe(false);
  expect(radioC.checked).toBe(true);
});

test('works in a form', async () => {
  const page = render(html`
    <form data-testid="form">
      <w-radio-basic name="choice" value="apple">Apple</w-radio-basic>
      <w-radio-basic name="choice" value="banana">Banana</w-radio-basic>
    </form>
  `);

  const form = page.getByTestId('form').element() as HTMLFormElement;
  const radios = document.querySelectorAll('w-radio-basic') as NodeListOf<RadioBasicElement>;
  const [radioApple, radioBanana] = Array.from(radios);

  // Wait for components to be ready
  await radioApple.updateComplete;
  await radioBanana.updateComplete;

  // Initially no value selected
  let formData = new FormData(form);
  expect(formData.get('choice')).toBeNull();

  // Select Apple - click the input directly inside shadow DOM for cross-browser compatibility
  const appleInput = radioApple.shadowRoot?.querySelector('input') as HTMLInputElement;
  appleInput.click();
  await radioApple.updateComplete;
  formData = new FormData(form);
  expect(formData.get('choice')).toBe('apple');

  // Select Banana - value should change
  const bananaInput = radioBanana.shadowRoot?.querySelector('input') as HTMLInputElement;
  bananaInput.click();
  await radioBanana.updateComplete;
  formData = new FormData(form);
  expect(formData.get('choice')).toBe('banana');
});

test('disabled radio cannot be clicked', async () => {
  const page = render(html`
    <w-radio-basic name="test" value="option1" disabled>Disabled Option</w-radio-basic>
  `);

  const radio = document.querySelector('w-radio-basic') as HTMLElement & { checked: boolean };
  expect(radio.checked).toBe(false);

  await page.getByText('Disabled Option').click();

  // Should still be unchecked
  expect(radio.checked).toBe(false);
});

test('can reset radio by resetting surrounding form', async () => {
  render(html`
    <form>
      <w-radio-basic name="choice" value="apple">Apple</w-radio-basic>
      <w-radio-basic name="choice" value="banana" checked>Banana</w-radio-basic>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const radios = document.querySelectorAll('w-radio-basic') as NodeListOf<RadioBasicElement>;
  const [radioApple, radioBanana] = Array.from(radios);

  // Wait for components to be ready
  await radioApple.updateComplete;
  await radioBanana.updateComplete;

  // Initial state - Banana is checked
  expect(radioApple.checked).toBe(false);
  expect(radioBanana.checked).toBe(true);

  // Click Apple - click the input directly inside shadow DOM for cross-browser compatibility
  const appleInput = radioApple.shadowRoot?.querySelector('input') as HTMLInputElement;
  appleInput.click();
  await radioApple.updateComplete;
  expect(radioApple.checked).toBe(true);
  expect(radioBanana.checked).toBe(false);

  // Reset the form
  form.reset();
  await radioBanana.updateComplete;
  await radioApple.updateComplete;

  // Should be back to initial state
  expect(radioApple.checked).toBe(false);
  expect(radioBanana.checked).toBe(true);
});

test('checked attribute sets initial state', async () => {
  render(html`
    <w-radio-basic name="test" value="option1" checked>Pre-checked</w-radio-basic>
  `);

  const radio = document.querySelector('w-radio-basic') as HTMLElement & { checked: boolean };
  expect(radio.checked).toBe(true);
});

test('dispatches change event when clicked', async () => {
  const page = render(html`
    <w-radio-basic name="test" value="option1">Option 1</w-radio-basic>
  `);

  const radio = document.querySelector('w-radio-basic') as HTMLElement;
  let changeEventFired = false;
  let eventDetail: { checked: boolean; value: string } | null = null;

  radio.addEventListener('change', (e: Event) => {
    changeEventFired = true;
    eventDetail = (e as CustomEvent).detail;
  });

  await page.getByText('Option 1').click();

  expect(changeEventFired).toBe(true);
  expect(eventDetail).toEqual({ checked: true, value: 'option1' });
});
