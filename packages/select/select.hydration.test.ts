import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './select.js';

describe('w-select React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-select', {});
    expect(warnings).toEqual([]);
  });

  test('with label hydrates without warnings', async () => {
    const warnings = await testHydration('w-select', {
      label: 'Country',
    });
    expect(warnings).toEqual([]);
  });

  test('with disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-select', {
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with invalid state hydrates without warnings', async () => {
    const warnings = await testHydration('w-select', {
      invalid: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with help text hydrates without warnings', async () => {
    const warnings = await testHydration('w-select', {
      'help-text': 'Select your country',
    });
    expect(warnings).toEqual([]);
  });
});
