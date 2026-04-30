import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './alert.js';

describe('w-alert React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-alert', {});
    expect(warnings).toEqual([]);
  });

  test('info alert hydrates without warnings', async () => {
    const warnings = await testHydration('w-alert', {
      variant: 'info',
      show: true,
    });
    expect(warnings).toEqual([]);
  });

  test('warning alert hydrates without warnings', async () => {
    const warnings = await testHydration('w-alert', {
      variant: 'warning',
      show: true,
    });
    expect(warnings).toEqual([]);
  });

  test('negative alert hydrates without warnings', async () => {
    const warnings = await testHydration('w-alert', {
      variant: 'negative',
      show: true,
    });
    expect(warnings).toEqual([]);
  });

  test('positive alert hydrates without warnings', async () => {
    const warnings = await testHydration('w-alert', {
      variant: 'positive',
      show: true,
    });
    expect(warnings).toEqual([]);
  });

  test('hidden alert hydrates without warnings', async () => {
    const warnings = await testHydration('w-alert', {
      variant: 'info',
    });
    expect(warnings).toEqual([]);
  });
});
