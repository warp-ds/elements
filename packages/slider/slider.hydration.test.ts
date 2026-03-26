import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './slider.js';

describe('w-slider React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // Note: w-slider requires w-slider-thumb children to function properly.
  // w-slider sets default reflected attributes (error="", suffix="") and
  // inline styles in connectedCallback, causing hydration mismatches.

  test.fails('empty slider hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100' });
    expect(warnings).toEqual([]);
  });

  test.fails('with step hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100', step: 10 });
    expect(warnings).toEqual([]);
  });

  test.fails('disabled slider hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100', disabled: true });
    expect(warnings).toEqual([]);
  });

  test.fails('with suffix hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100', suffix: '%' });
    expect(warnings).toEqual([]);
  });

  test.fails('with help-text hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100', 'help-text': 'Select a value' });
    expect(warnings).toEqual([]);
  });
});
