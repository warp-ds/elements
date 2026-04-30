import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './pill.js';

describe('w-pill React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-pill', {});
    expect(warnings).toEqual([]);
  });

  test('suggestion pill hydrates without warnings', async () => {
    const warnings = await testHydration('w-pill', {
      suggestion: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with can-close hydrates without warnings', async () => {
    const warnings = await testHydration('w-pill', {
      'can-close': true,
    });
    expect(warnings).toEqual([]);
  });

  test('suggestion with can-close hydrates without warnings', async () => {
    const warnings = await testHydration('w-pill', {
      suggestion: true,
      'can-close': true,
    });
    expect(warnings).toEqual([]);
  });
});
