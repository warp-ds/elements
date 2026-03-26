import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './icon.js';

describe('w-icon React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // Fails because component sets default size/locale attributes
  test.fails('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-icon', {});
    expect(warnings).toEqual([]);
  });

  test('with name hydrates without warnings', async () => {
    const warnings = await testHydration('w-icon', {
      name: 'Check',
    });
    expect(warnings).toEqual([]);
  });

  test('small icon hydrates without warnings', async () => {
    const warnings = await testHydration('w-icon', {
      name: 'Check',
      size: 'small',
    });
    expect(warnings).toEqual([]);
  });

  test('medium icon hydrates without warnings', async () => {
    const warnings = await testHydration('w-icon', {
      name: 'Check',
      size: 'medium',
    });
    expect(warnings).toEqual([]);
  });

  test('large icon hydrates without warnings', async () => {
    const warnings = await testHydration('w-icon', {
      name: 'Check',
      size: 'large',
    });
    expect(warnings).toEqual([]);
  });

  test('with locale hydrates without warnings', async () => {
    const warnings = await testHydration('w-icon', {
      name: 'Check',
      locale: 'nb',
    });
    expect(warnings).toEqual([]);
  });
});
