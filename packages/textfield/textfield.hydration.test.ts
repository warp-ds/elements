import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './textfield.js';

describe('w-textfield React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-textfield', {});
    expect(warnings).toEqual([]);
  });

  test('with label hydrates without warnings', async () => {
    const warnings = await testHydration('w-textfield', {
      label: 'Email',
    });
    expect(warnings).toEqual([]);
  });

  test('with value hydrates without warnings', async () => {
    const warnings = await testHydration('w-textfield', {
      value: 'test@example.com',
    });
    expect(warnings).toEqual([]);
  });

  test('with disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-textfield', {
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with invalid state hydrates without warnings', async () => {
    const warnings = await testHydration('w-textfield', {
      invalid: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with help text hydrates without warnings', async () => {
    const warnings = await testHydration('w-textfield', {
      'help-text': 'Enter your email address',
    });
    expect(warnings).toEqual([]);
  });
});
