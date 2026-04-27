import { i18n } from '@lingui/core';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './slider-thumb.js';

// Activate i18n before tests (normally done by parent w-slider)
i18n.load('en', {});
i18n.activate('en');

describe('w-slider-thumb React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // Note: w-slider-thumb is typically used within w-slider, which syncs properties.
  // Testing the element alone to verify its own attributes don't cause mismatch.

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider-thumb', {});
    expect(warnings).toEqual([]);
  });

  test('with value hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider-thumb', { value: '50' });
    expect(warnings).toEqual([]);
  });

  test('with name hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider-thumb', { value: '50', name: 'slider' });
    expect(warnings).toEqual([]);
  });

  test('disabled slider-thumb hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider-thumb', { value: '50', disabled: true });
    expect(warnings).toEqual([]);
  });

  test('with placeholder hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider-thumb', { value: '', placeholder: 'Min' });
    expect(warnings).toEqual([]);
  });
});
