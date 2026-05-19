import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './index.js';

describe('w-step-indicator React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-step-indicator', {});
    expect(warnings).toEqual([]);
  });

  test('horizontal step-indicator hydrates without warnings', async () => {
    const warnings = await testHydration('w-step-indicator', {
      horizontal: true,
    });
    expect(warnings).toEqual([]);
  });

  test('right-aligned step-indicator hydrates without warnings', async () => {
    const warnings = await testHydration('w-step-indicator', {
      right: true,
    });
    expect(warnings).toEqual([]);
  });
});
