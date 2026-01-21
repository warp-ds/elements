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

test('keyboard navigation with arrow keys', async () => {
  render(html`
    <div>
      <w-radio-basic name="keyboard-group" value="a">Option A</w-radio-basic>
      <w-radio-basic name="keyboard-group" value="b">Option B</w-radio-basic>
      <w-radio-basic name="keyboard-group" value="c">Option C</w-radio-basic>
    </div>
  `);

  const radios = document.querySelectorAll('w-radio-basic') as NodeListOf<RadioBasicElement>;
  const [radioA, radioB, radioC] = Array.from(radios);

  // Wait for components to be ready
  await radioA.updateComplete;
  await radioB.updateComplete;
  await radioC.updateComplete;

  // Click Option A to select and focus it
  const inputA = radioA.shadowRoot?.querySelector('input') as HTMLInputElement;
  inputA.click();
  await radioA.updateComplete;
  expect(radioA.checked).toBe(true);

  // Press ArrowDown to move to Option B
  radioA.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
  await radioB.updateComplete;
  expect(radioA.checked).toBe(false);
  expect(radioB.checked).toBe(true);
  expect(radioC.checked).toBe(false);

  // Press ArrowRight to move to Option C
  radioB.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
  await radioC.updateComplete;
  expect(radioA.checked).toBe(false);
  expect(radioB.checked).toBe(false);
  expect(radioC.checked).toBe(true);

  // Press ArrowDown to wrap around to Option A
  radioC.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
  await radioA.updateComplete;
  expect(radioA.checked).toBe(true);
  expect(radioB.checked).toBe(false);
  expect(radioC.checked).toBe(false);

  // Press ArrowUp to wrap around to Option C
  radioA.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
  await radioC.updateComplete;
  expect(radioA.checked).toBe(false);
  expect(radioB.checked).toBe(false);
  expect(radioC.checked).toBe(true);

  // Press ArrowLeft to move to Option B
  radioC.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
  await radioB.updateComplete;
  expect(radioA.checked).toBe(false);
  expect(radioB.checked).toBe(true);
  expect(radioC.checked).toBe(false);
});

test('required validation passes when any radio in group is checked', async () => {
  render(html`
    <form>
      <w-radio-basic name="required-group" value="a" required>Option A</w-radio-basic>
      <w-radio-basic name="required-group" value="b" required>Option B</w-radio-basic>
      <w-radio-basic name="required-group" value="c" required>Option C</w-radio-basic>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const radios = document.querySelectorAll('w-radio-basic') as NodeListOf<RadioBasicElement>;
  const [radioA, radioB, radioC] = Array.from(radios);

  // Wait for components to be ready
  await radioA.updateComplete;
  await radioB.updateComplete;
  await radioC.updateComplete;

  // Initially form should be invalid (no radio checked)
  expect(form.checkValidity()).toBe(false);

  // Select Option B
  const inputB = radioB.shadowRoot?.querySelector('input') as HTMLInputElement;
  inputB.click();
  await radioB.updateComplete;

  // Now form should be valid (one radio in group is checked)
  expect(form.checkValidity()).toBe(true);
});

test('space key selects focused radio', async () => {
  render(html`
    <div>
      <w-radio-basic name="space-group" value="a">Option A</w-radio-basic>
      <w-radio-basic name="space-group" value="b">Option B</w-radio-basic>
      <w-radio-basic name="space-group" value="c">Option C</w-radio-basic>
    </div>
  `);

  const radios = document.querySelectorAll('w-radio-basic') as NodeListOf<RadioBasicElement>;
  const [radioA, radioB, radioC] = Array.from(radios);

  // Wait for components to be ready
  await radioA.updateComplete;
  await radioB.updateComplete;
  await radioC.updateComplete;

  // Initially no radio is checked
  expect(radioA.checked).toBe(false);
  expect(radioB.checked).toBe(false);
  expect(radioC.checked).toBe(false);

  // Focus the first radio (simulating Tab)
  radioA.focus();

  // Press Space to select
  radioA.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
  await radioA.updateComplete;

  // First radio should now be checked
  expect(radioA.checked).toBe(true);
  expect(radioB.checked).toBe(false);
  expect(radioC.checked).toBe(false);

  // Focus second radio and press Space
  radioB.focus();
  radioB.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
  await radioB.updateComplete;

  // Second radio should now be checked, first unchecked
  expect(radioA.checked).toBe(false);
  expect(radioB.checked).toBe(true);
  expect(radioC.checked).toBe(false);
});

test('tabindex management - only checked radio is tabbable', async () => {
  render(html`
    <div>
      <w-radio-basic name="tabindex-group" value="a">Option A</w-radio-basic>
      <w-radio-basic name="tabindex-group" value="b">Option B</w-radio-basic>
      <w-radio-basic name="tabindex-group" value="c">Option C</w-radio-basic>
    </div>
  `);

  const radios = document.querySelectorAll('w-radio-basic') as NodeListOf<RadioBasicElement>;
  const [radioA, radioB, radioC] = Array.from(radios);

  // Wait for components to be ready and tabindex sync
  await radioA.updateComplete;
  await radioB.updateComplete;
  await radioC.updateComplete;
  // Allow requestAnimationFrame to fire
  await new Promise((resolve) => requestAnimationFrame(resolve));

  const inputA = radioA.shadowRoot?.querySelector('input') as HTMLInputElement;
  const inputB = radioB.shadowRoot?.querySelector('input') as HTMLInputElement;
  const inputC = radioC.shadowRoot?.querySelector('input') as HTMLInputElement;

  // Initially no radio is checked, first enabled radio should be tabbable
  expect(inputA.tabIndex).toBe(0);
  expect(inputB.tabIndex).toBe(-1);
  expect(inputC.tabIndex).toBe(-1);

  // Click Option B to select it
  inputB.click();
  await radioB.updateComplete;
  await new Promise((resolve) => requestAnimationFrame(resolve));

  // Now only Option B should be tabbable
  expect(inputA.tabIndex).toBe(-1);
  expect(inputB.tabIndex).toBe(0);
  expect(inputC.tabIndex).toBe(-1);

  // Use arrow key to move to Option C
  radioB.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
  await radioC.updateComplete;
  await new Promise((resolve) => requestAnimationFrame(resolve));

  // Now only Option C should be tabbable
  expect(inputA.tabIndex).toBe(-1);
  expect(inputB.tabIndex).toBe(-1);
  expect(inputC.tabIndex).toBe(0);
});
