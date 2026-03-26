import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './combobox.js';

describe('w-combobox React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default combobox hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {});
    expect(warnings).toEqual([]);
  });

  test('with label hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      label: 'Search',
    });
    expect(warnings).toEqual([]);
  });

  test('with placeholder hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      placeholder: 'Type to search...',
    });
    expect(warnings).toEqual([]);
  });

  test('with value hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      value: 'test',
    });
    expect(warnings).toEqual([]);
  });

  test('disabled combobox hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  test('invalid combobox hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      invalid: true,
    });
    expect(warnings).toEqual([]);
  });
});
