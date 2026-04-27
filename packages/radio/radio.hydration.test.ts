import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './radio.js';

describe('w-radio React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', {});
    expect(warnings).toEqual([]);
  });

  test('with value hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', { value: 'option1' });
    expect(warnings).toEqual([]);
  });

  test('with name hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', { value: 'option1', name: 'options' });
    expect(warnings).toEqual([]);
  });

  test('checked radio hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', { value: 'option1', checked: true });
    expect(warnings).toEqual([]);
  });

  test('disabled radio hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', { value: 'option1', disabled: true });
    expect(warnings).toEqual([]);
  });
});
