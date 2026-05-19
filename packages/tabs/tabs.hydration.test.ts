import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './index.js';

describe('w-tabs React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // Note: w-tabs requires w-tab and w-tab-panel children to function properly.
  // Testing the parent element alone to verify its own attributes don't cause mismatch.
  // Full parent/child hydration requires React component wrappers or framework integration.

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-tabs', {});
    expect(warnings).toEqual([]);
  });

  test('with active prop hydrates without warnings', async () => {
    const warnings = await testHydration('w-tabs', { active: 'panel1' });
    expect(warnings).toEqual([]);
  });
});
