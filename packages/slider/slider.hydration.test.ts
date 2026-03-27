import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './slider.js';

describe('w-slider React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', {});
    expect(warnings).toEqual([]);
  });

  test('with label and range hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100' });
    expect(warnings).toEqual([]);
  });

  test('with step hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100', step: 10 });
    expect(warnings).toEqual([]);
  });

  test('disabled slider hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100', disabled: true });
    expect(warnings).toEqual([]);
  });

  test('with suffix hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100', suffix: '%' });
    expect(warnings).toEqual([]);
  });

  test('with help-text hydrates without warnings', async () => {
    const warnings = await testHydration('w-slider', { label: 'Value', min: '0', max: '100', 'help-text': 'Select a value' });
    expect(warnings).toEqual([]);
  });
});
