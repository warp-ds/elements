import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './datepicker.js';

describe('w-datepicker React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-datepicker', {});
    expect(warnings).toEqual([]);
  });

  test('with label hydrates without warnings', async () => {
    const warnings = await testHydration('w-datepicker', {
      label: 'Date',
    });
    expect(warnings).toEqual([]);
  });

  test('with value hydrates without warnings', async () => {
    const warnings = await testHydration('w-datepicker', {
      label: 'Date',
      value: '2024-01-15',
    });
    expect(warnings).toEqual([]);
  });

  test('with name hydrates without warnings', async () => {
    const warnings = await testHydration('w-datepicker', {
      label: 'Date',
      name: 'birthdate',
    });
    expect(warnings).toEqual([]);
  });

  test('with lang hydrates without warnings', async () => {
    const warnings = await testHydration('w-datepicker', {
      label: 'Dato',
      lang: 'nb',
    });
    expect(warnings).toEqual([]);
  });
});
