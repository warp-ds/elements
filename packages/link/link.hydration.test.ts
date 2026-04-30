import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './link.js';

describe('w-link React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-link', {});
    expect(warnings).toEqual([]);
  });

  test('with href hydrates without warnings', async () => {
    const warnings = await testHydration('w-link', {
      href: 'https://example.com',
    });
    expect(warnings).toEqual([]);
  });

  test('primary variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-link', {
      href: 'https://example.com',
      variant: 'primary',
    });
    expect(warnings).toEqual([]);
  });

  test('secondary variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-link', {
      href: 'https://example.com',
      variant: 'secondary',
    });
    expect(warnings).toEqual([]);
  });

  test('with target blank hydrates without warnings', async () => {
    const warnings = await testHydration('w-link', {
      href: 'https://example.com',
      target: '_blank',
    });
    expect(warnings).toEqual([]);
  });

  test('small link hydrates without warnings', async () => {
    const warnings = await testHydration('w-link', {
      href: 'https://example.com',
      small: true,
    });
    expect(warnings).toEqual([]);
  });

  test('disabled link hydrates without warnings', async () => {
    const warnings = await testHydration('w-link', {
      href: 'https://example.com',
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });
});
