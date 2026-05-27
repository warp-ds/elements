import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './step.js';

describe('w-step React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-step', {});
    expect(warnings).toEqual([]);
  });

  test('active step hydrates without warnings', async () => {
    const warnings = await testHydration('w-step', {
      active: true,
    });
    expect(warnings).toEqual([]);
  });

  test('completed step hydrates without warnings', async () => {
    const warnings = await testHydration('w-step', {
      completed: true,
    });
    expect(warnings).toEqual([]);
  });
});
