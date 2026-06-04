import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './tab-panel.js';

describe('w-tab-panel React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-tab-panel', {});
    expect(warnings).toEqual([]);
  });

  test('with id hydrates without warnings', async () => {
    const warnings = await testHydration('w-tab-panel', { id: 'panel1' });
    expect(warnings).toEqual([]);
  });

  test('active tab-panel hydrates without warnings', async () => {
    const warnings = await testHydration('w-tab-panel', { id: 'panel1', active: true });
    expect(warnings).toEqual([]);
  });
});
