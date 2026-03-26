import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './box.js';

describe('w-box React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default box hydrates without warnings', async () => {
    const warnings = await testHydration('w-box', {});
    expect(warnings).toEqual([]);
  });

  test('info box hydrates without warnings', async () => {
    const warnings = await testHydration('w-box', {
      info: true,
    });
    expect(warnings).toEqual([]);
  });

  test('neutral box hydrates without warnings', async () => {
    const warnings = await testHydration('w-box', {
      neutral: true,
    });
    expect(warnings).toEqual([]);
  });

  test('bordered box hydrates without warnings', async () => {
    const warnings = await testHydration('w-box', {
      bordered: true,
    });
    expect(warnings).toEqual([]);
  });

  test('bleed box hydrates without warnings', async () => {
    const warnings = await testHydration('w-box', {
      bleed: true,
    });
    expect(warnings).toEqual([]);
  });
});
