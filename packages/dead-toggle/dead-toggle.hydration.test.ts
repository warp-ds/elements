import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './dead-toggle.js';

describe('w-dead-toggle React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('checkbox type hydrates without warnings', async () => {
    const warnings = await testHydration('w-dead-toggle', {
      type: 'checkbox',
    });
    expect(warnings).toEqual([]);
  });

  test('radio type hydrates without warnings', async () => {
    const warnings = await testHydration('w-dead-toggle', {
      type: 'radio',
    });
    expect(warnings).toEqual([]);
  });

  test('checked state hydrates without warnings', async () => {
    const warnings = await testHydration('w-dead-toggle', {
      type: 'checkbox',
      checked: true,
    });
    expect(warnings).toEqual([]);
  });

  test('indeterminate state hydrates without warnings', async () => {
    const warnings = await testHydration('w-dead-toggle', {
      type: 'checkbox',
      indeterminate: true,
    });
    expect(warnings).toEqual([]);
  });

  test('disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-dead-toggle', {
      type: 'checkbox',
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  test('invalid state hydrates without warnings', async () => {
    const warnings = await testHydration('w-dead-toggle', {
      type: 'checkbox',
      invalid: true,
    });
    expect(warnings).toEqual([]);
  });
});
