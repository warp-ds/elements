import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './button.js';

describe('w-button React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-button', {});
    expect(warnings).toEqual([]);
  });

  test('primary variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-button', {
      variant: 'primary',
    });
    expect(warnings).toEqual([]);
  });

  test('secondary variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-button', {
      variant: 'secondary',
    });
    expect(warnings).toEqual([]);
  });

  test('with loading state hydrates without warnings', async () => {
    const warnings = await testHydration('w-button', {
      loading: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-button', {
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with href hydrates without warnings', async () => {
    const warnings = await testHydration('w-button', {
      href: 'https://example.com',
    });
    expect(warnings).toEqual([]);
  });
});
