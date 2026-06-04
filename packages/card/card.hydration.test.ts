import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './card.js';

describe('w-card React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-card', {});
    expect(warnings).toEqual([]);
  });

  test('selected card hydrates without warnings', async () => {
    const warnings = await testHydration('w-card', {
      selected: true,
    });
    expect(warnings).toEqual([]);
  });

  test('flat card hydrates without warnings', async () => {
    const warnings = await testHydration('w-card', {
      flat: true,
    });
    expect(warnings).toEqual([]);
  });

  test('clickable card hydrates without warnings', async () => {
    const warnings = await testHydration('w-card', {
      clickable: true,
    });
    expect(warnings).toEqual([]);
  });

  test('flat selected card hydrates without warnings', async () => {
    const warnings = await testHydration('w-card', {
      flat: true,
      selected: true,
    });
    expect(warnings).toEqual([]);
  });
});
