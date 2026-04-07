import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './textarea.js';

describe('w-textarea React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-textarea', {});
    expect(warnings).toEqual([]);
  });

  test('with label hydrates without warnings', async () => {
    const warnings = await testHydration('w-textarea', {
      label: 'Description',
    });
    expect(warnings).toEqual([]);
  });

  test('with value hydrates without warnings', async () => {
    const warnings = await testHydration('w-textarea', {
      value: 'Some text content',
    });
    expect(warnings).toEqual([]);
  });

  test('with disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-textarea', {
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with invalid state hydrates without warnings', async () => {
    const warnings = await testHydration('w-textarea', {
      invalid: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with help text hydrates without warnings', async () => {
    const warnings = await testHydration('w-textarea', {
      'help-text': 'Enter a detailed description',
    });
    expect(warnings).toEqual([]);
  });
});
