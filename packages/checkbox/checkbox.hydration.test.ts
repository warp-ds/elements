import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './checkbox.js';

describe('w-checkbox React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // Fails because component sets type="checkbox" and tabindex="0" in connectedCallback
  test.fails('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {});
    expect(warnings).toEqual([]);
  });

  // Fails because component sets type="checkbox" and tabindex="0" in connectedCallback
  test.fails('with name hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
    });
    expect(warnings).toEqual([]);
  });

  // Fails because component sets type="checkbox" and tabindex="0" in connectedCallback
  test.fails('checked checkbox hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
      checked: true,
    });
    expect(warnings).toEqual([]);
  });

  // Fails because component sets type="checkbox" in connectedCallback
  test.fails('disabled checkbox hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  // Fails because component sets type="checkbox" and tabindex="0" in connectedCallback
  test.fails('indeterminate checkbox hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
      indeterminate: true,
    });
    expect(warnings).toEqual([]);
  });

  // Fails because component sets type="checkbox" and tabindex="0" in connectedCallback
  test.fails('invalid checkbox hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
      invalid: true,
    });
    expect(warnings).toEqual([]);
  });
});
