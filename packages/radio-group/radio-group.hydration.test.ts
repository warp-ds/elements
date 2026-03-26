import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import '../radio/radio.js';
import './radio-group.js';

describe('w-radio-group React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // Note: w-radio-group requires w-radio children to function properly.
  // Testing the parent element alone to verify its own attributes don't cause mismatch.

  test('empty radio-group hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio-group', { label: 'Options', name: 'options' });
    expect(warnings).toEqual([]);
  });

  test('with optional hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio-group', { label: 'Options', name: 'options', optional: true });
    expect(warnings).toEqual([]);
  });

  test('with help-text hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio-group', { label: 'Options', name: 'options', 'help-text': 'Select one' });
    expect(warnings).toEqual([]);
  });

  test('required radio-group hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio-group', { label: 'Options', name: 'options', required: true });
    expect(warnings).toEqual([]);
  });
});
