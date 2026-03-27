import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './checkbox.js';

describe('w-checkbox React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {});
    expect(warnings).toEqual([]);
  });

  test('with name hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
    });
    expect(warnings).toEqual([]);
  });

  test('checked checkbox hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
      checked: true,
    });
    expect(warnings).toEqual([]);
  });

  test('disabled checkbox hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  test('indeterminate checkbox hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
      indeterminate: true,
    });
    expect(warnings).toEqual([]);
  });

  test('invalid checkbox hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox', {
      name: 'agree',
      invalid: true,
    });
    expect(warnings).toEqual([]);
  });
});
