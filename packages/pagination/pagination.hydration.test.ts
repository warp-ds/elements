import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './pagination.js';

describe('w-pagination React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default pagination hydrates without warnings', async () => {
    const warnings = await testHydration('w-pagination', {
      'base-url': '/page/',
      pages: 10,
      'current-page': 1,
    });
    expect(warnings).toEqual([]);
  });

  test('with current page hydrates without warnings', async () => {
    const warnings = await testHydration('w-pagination', {
      'base-url': '/page/',
      pages: 10,
      'current-page': 5,
    });
    expect(warnings).toEqual([]);
  });

  test('with visible pages hydrates without warnings', async () => {
    const warnings = await testHydration('w-pagination', {
      'base-url': '/page/',
      pages: 20,
      'current-page': 10,
      'visible-pages': 5,
    });
    expect(warnings).toEqual([]);
  });
});
