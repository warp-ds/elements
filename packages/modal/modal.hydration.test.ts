import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './index.js';

describe('w-modal React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-modal', {});
    expect(warnings).toEqual([]);
  });

  test('with content-id hydrates without warnings', async () => {
    const warnings = await testHydration('w-modal', {
      'content-id': 'modal-content',
    });
    expect(warnings).toEqual([]);
  });

  test('with ignore-backdrop-clicks hydrates without warnings', async () => {
    const warnings = await testHydration('w-modal', {
      'ignore-backdrop-clicks': true,
    });
    expect(warnings).toEqual([]);
  });
});
