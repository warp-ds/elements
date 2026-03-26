import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

// Import the custom element definition
import './attention.js';

describe('w-attention React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // Fails because component sets default attributes when no placement is specified
  test.fails('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-attention');
    expect(warnings).toEqual([]);
  });

  test('tooltip hydrates without warnings', async () => {
    const warnings = await testHydration('w-attention', {
      tooltip: true,
      placement: 'bottom',
    });
    expect(warnings).toEqual([]);
  });

  test('callout hydrates without warnings', async () => {
    const warnings = await testHydration('w-attention', {
      callout: true,
      placement: 'bottom',
    });
    expect(warnings).toEqual([]);
  });

  test('popover hydrates without warnings', async () => {
    const warnings = await testHydration('w-attention', {
      popover: true,
      placement: 'bottom',
    });
    expect(warnings).toEqual([]);
  });

  test('highlight hydrates without warnings', async () => {
    const warnings = await testHydration('w-attention', {
      highlight: true,
      placement: 'bottom',
    });
    expect(warnings).toEqual([]);
  });

  test('with show hydrates without warnings', async () => {
    const warnings = await testHydration('w-attention', {
      tooltip: true,
      show: true,
      placement: 'bottom',
    });
    expect(warnings).toEqual([]);
  });

  test('with can-close hydrates without warnings', async () => {
    const warnings = await testHydration('w-attention', {
      callout: true,
      'can-close': true,
      placement: 'bottom',
    });
    expect(warnings).toEqual([]);
  });

  test('with no-arrow hydrates without warnings', async () => {
    const warnings = await testHydration('w-attention', {
      tooltip: true,
      'no-arrow': true,
      placement: 'bottom',
    });
    expect(warnings).toEqual([]);
  });
});
