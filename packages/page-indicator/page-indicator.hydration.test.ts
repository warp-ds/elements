import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './page-indicator.js';

describe('w-page-indicator React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default page-indicator hydrates without warnings', async () => {
    const warnings = await testHydration('w-page-indicator', {
      'page-count': 5,
      'selected-page': 1,
    });
    expect(warnings).toEqual([]);
  });

  test('with selected page hydrates without warnings', async () => {
    const warnings = await testHydration('w-page-indicator', {
      'page-count': 5,
      'selected-page': 3,
    });
    expect(warnings).toEqual([]);
  });

  test('single page hydrates without warnings', async () => {
    const warnings = await testHydration('w-page-indicator', {
      'page-count': 1,
      'selected-page': 1,
    });
    expect(warnings).toEqual([]);
  });

  test('many pages hydrates without warnings', async () => {
    const warnings = await testHydration('w-page-indicator', {
      'page-count': 10,
      'selected-page': 5,
    });
    expect(warnings).toEqual([]);
  });
});
