import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './affix.js';

describe('w-affix React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('with label hydrates without warnings', async () => {
    const warnings = await testHydration('w-affix', {
      label: 'kr',
    });
    expect(warnings).toEqual([]);
  });

  test('with search hydrates without warnings', async () => {
    const warnings = await testHydration('w-affix', {
      search: true,
      'aria-label': 'Search',
    });
    expect(warnings).toEqual([]);
  });

  test('with clear hydrates without warnings', async () => {
    const warnings = await testHydration('w-affix', {
      clear: true,
      'aria-label': 'Clear',
    });
    expect(warnings).toEqual([]);
  });
});
