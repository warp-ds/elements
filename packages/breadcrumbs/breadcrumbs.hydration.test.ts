import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './breadcrumbs.js';

describe('w-breadcrumbs React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default breadcrumbs hydrates without warnings', async () => {
    const warnings = await testHydration('w-breadcrumbs', {});
    expect(warnings).toEqual([]);
  });
});
