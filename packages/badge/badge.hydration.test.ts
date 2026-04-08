import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './badge.js';

describe('w-badge React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-badge', {});
    expect(warnings).toEqual([]);
  });

  test('neutral variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-badge', {
      variant: 'neutral',
    });
    expect(warnings).toEqual([]);
  });

  test('info variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-badge', {
      variant: 'info',
    });
    expect(warnings).toEqual([]);
  });

  test('positive variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-badge', {
      variant: 'positive',
    });
    expect(warnings).toEqual([]);
  });

  test('warning variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-badge', {
      variant: 'warning',
    });
    expect(warnings).toEqual([]);
  });

  test('negative variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-badge', {
      variant: 'negative',
    });
    expect(warnings).toEqual([]);
  });

  test('with position hydrates without warnings', async () => {
    const warnings = await testHydration('w-badge', {
      variant: 'info',
      position: 'top-right',
    });
    expect(warnings).toEqual([]);
  });
});
