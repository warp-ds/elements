import { userEvent } from '@vitest/browser/context';
import { html } from 'lit';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-lit';

import './select.js';

test('works in a form', async () => {
  const component = html`
    <form data-testid="flavour">
      <w-select label="Berries" name="berry">
        <option value="strawberries">Strawberries</option>
        <option value="raspberries">Raspberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>

      <button>Submit</button>
    </form>
  `;

  const page = render(component);

  // Confirm we have a form associated field berry
  const form = page.getByTestId('flavour');
  expect(form).toHaveFormValues({
    berry: undefined,
  });

  // Select Raspberries
  await expect.element(page.getByLabelText('Berries')).toBeVisible();
  await userEvent.selectOptions(page.getByLabelText('Berries').element(), 'Raspberries');

  // Confirm the form has a field berry with value raspberries
  expect(form).toHaveFormValues({
    berry: 'raspberries',
  });
});

test('can reset select by resetting surrounding form', async () => {
  const label = 'Test label';

  render(html`
    <form>
      <w-select
        label=${label}
        name="test"
        value="strawberries"
      >
        <option value="strawberries">Strawberries</option>
        <option value="raspberries">Raspberries</option>
        <option value="cloudberries">Cloudberries</option>
      </w-select>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wSelect = document.querySelector('w-select') as HTMLElement & { value: string };

  // sanity
  expect(form).not.toBeNull();
  expect(wSelect).not.toBeNull();

  // Initial value is "strawberries"
  expect(wSelect.value).toBe('strawberries');

  // Change the value to "raspberries"
  wSelect.value = 'raspberries';
  expect(wSelect.value).toBe('raspberries');

  // Reset the form
  form.reset();

  // Value should be reset back to "strawberries"
  expect(wSelect.value).toBe('strawberries');
});

test('change event target.value reflects the selected value', async () => {
  render(html`
    <w-select label="Fruit">
      <option value="apples">Apples</option>
      <option value="pears">Pears</option>
    </w-select>
  `);

  const wSelect = document.querySelector('w-select') as HTMLElement & {
    value: string;
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
  };
  await wSelect.updateComplete;
  const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;
  let observedTargetValue = '';

  wSelect.addEventListener('change', (e) => {
    observedTargetValue = ((e.target as HTMLElement & { value?: string }).value ?? '') as string;
  });

  nativeSelect.value = 'pears';
  nativeSelect.dispatchEvent(new Event('change'));

  expect(observedTargetValue).toBe('pears');
});

test('keeps native select in sync when host value changes', async () => {
  render(html`
    <w-select label="Gender" value="male">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </w-select>
  `);

  const wSelect = document.querySelector('w-select') as HTMLElement & {
    value: string;
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
  };
  await wSelect.updateComplete;
  const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;

  wSelect.value = 'female';
  await wSelect.updateComplete;

  expect(nativeSelect.value).toBe('female');
});

test('syncs host value when native select value changes without firing change', async () => {
  render(html`
    <form>
      <w-select label="Gender" name="gender">
        <option value="">Choose</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </w-select>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wSelect = document.querySelector('w-select') as HTMLElement & {
    value: string;
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
  };
  await wSelect.updateComplete;
  const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;

  // Simulates browser session restore/autocomplete updating only the internal native select.
  nativeSelect.value = 'female';
  window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));

  await expect.poll(() => wSelect.value).toBe('female');
  expect(new FormData(form).get('gender')).toBe('female');
});

test('does not sync host value from the browser default first option', async () => {
  render(html`
    <w-select label="Default first option">
      <option value="alpha">Alpha</option>
      <option value="beta">Beta</option>
    </w-select>
  `);

  const wSelect = document.querySelector('w-select') as HTMLElement & {
    value: string | undefined;
    updateComplete: Promise<unknown>;
  };
  await wSelect.updateComplete;

  window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));

  expect(wSelect.value ?? '').toBe('');
});

test('pageshow does not overwrite an intentionally empty host value', async () => {
  render(html`
    <w-select label="Intentional empty" value="">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </w-select>
  `);

  const wSelect = document.querySelector('w-select') as HTMLElement & {
    value: string | undefined;
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
  };
  await wSelect.updateComplete;

  const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;
  expect(nativeSelect.value).toBe('');

  window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));

  expect(wSelect.value ?? '').toBe('');
});

test('formStateRestoreCallback syncs value from provided state', async () => {
  render(html`
    <form>
      <w-select label="Restore state" name="gender">
        <option value="">Choose</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </w-select>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wSelect = document.querySelector('w-select') as HTMLElement & {
    value: string;
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
    formStateRestoreCallback: (state: string | File | FormData | null, reason: 'autocomplete' | 'restore') => void;
  };
  await wSelect.updateComplete;

  wSelect.formStateRestoreCallback('female', 'restore');

  const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;
  expect(wSelect.value).toBe('female');
  expect(nativeSelect.value).toBe('female');
  expect(new FormData(form).get('gender')).toBe('female');
});

test('formStateRestoreCallback with null falls back to native value reconciliation', async () => {
  render(html`
    <form>
      <w-select label="Restore fallback" name="gender">
        <option value="">Choose</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </w-select>
    </form>
  `);

  const form = document.querySelector('form') as HTMLFormElement;
  const wSelect = document.querySelector('w-select') as HTMLElement & {
    value: string;
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
    formStateRestoreCallback: (state: string | File | FormData | null, reason: 'autocomplete' | 'restore') => void;
  };
  await wSelect.updateComplete;

  const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;
  nativeSelect.value = 'female';

  wSelect.formStateRestoreCallback(null, 'restore');

  expect(wSelect.value).toBe('female');
  expect(new FormData(form).get('gender')).toBe('female');
});

test('change event keeps backward compatibility by exposing detail', async () => {
  render(html`
    <w-select label="Legacy change detail">
      <option value="alpha">Alpha</option>
      <option value="beta">Beta</option>
    </w-select>
  `);

  const wSelect = document.querySelector('w-select') as HTMLElement & {
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
  };
  await wSelect.updateComplete;

  const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;
  let observedDetail: unknown;

  wSelect.addEventListener('change', (event) => {
    observedDetail = (event as CustomEvent).detail;
  });

  nativeSelect.value = 'beta';
  nativeSelect.dispatchEvent(new Event('change'));

  expect(observedDetail).toBe('beta');
});

test('emits a single host change event for one native change interaction', async () => {
  render(html`
    <w-select label="Single change event">
      <option value="alpha">Alpha</option>
      <option value="beta">Beta</option>
    </w-select>
  `);

  const wSelect = document.querySelector('w-select') as HTMLElement & {
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
  };
  await wSelect.updateComplete;

  const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;
  let changeCount = 0;
  wSelect.addEventListener('change', () => {
    changeCount += 1;
  });

  nativeSelect.value = 'beta';
  nativeSelect.dispatchEvent(new Event('change'));

  expect(changeCount).toBe(1);
});

test('reflects dynamic light-DOM option selected changes into native select', async () => {
  render(html`
    <w-select label="Dynamic options">
      <option value="alpha">Alpha</option>
      <option value="beta">Beta</option>
    </w-select>
  `);

  const wSelect = document.querySelector('w-select') as HTMLElement & {
    updateComplete: Promise<unknown>;
    shadowRoot: ShadowRoot;
  };
  await wSelect.updateComplete;

  const lightOptions = Array.from(wSelect.querySelectorAll('option'));
  lightOptions[1].setAttribute('selected', '');

  await expect.poll(() => {
    const nativeSelect = wSelect.shadowRoot.querySelector('select') as HTMLSelectElement;
    return nativeSelect.value;
  }).toBe('beta');
});
