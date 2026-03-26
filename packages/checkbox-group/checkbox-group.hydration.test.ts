import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import '../checkbox/checkbox.js';
import './checkbox-group.js';

describe('w-checkbox-group React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // Note: w-checkbox-group requires w-checkbox children to function properly.
  // Testing the parent element alone to verify its own attributes don't cause mismatch.

  test('empty checkbox-group hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox-group', { label: 'Options' });
    expect(warnings).toEqual([]);
  });

  test('with name hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox-group', { label: 'Options', name: 'options' });
    expect(warnings).toEqual([]);
  });

  test('with optional hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox-group', { label: 'Options', optional: true });
    expect(warnings).toEqual([]);
  });

  test('with help-text hydrates without warnings', async () => {
    const warnings = await testHydration('w-checkbox-group', { label: 'Options', 'help-text': 'Select one or more' });
    expect(warnings).toEqual([]);
  });
});
