import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

// Import the custom element definition
import './switch.js';

// Switch uses ElementInternals for role/aria-checked/aria-disabled and
// delegatesFocus for keyboard accessibility. No host attributes needed.

describe('w-switch React SSR hydration', () => {
  beforeEach(() => {
    setupHydrationWarningCapture();
  });

  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {});
    expect(warnings).toEqual([]);
  });

  test('with aria-label hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });

  test('checked state hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      checked: true,
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });

  test('disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      disabled: true,
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });

  test('checked and disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      checked: true,
      disabled: true,
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });

  test('with name and value hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      name: 'notifications',
      value: 'enabled',
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });
});
