import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

// Import the custom element definition
import './switch.js';

describe('w-switch React SSR hydration', () => {
  beforeEach(() => {
    setupHydrationWarningCapture();
  });

  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test.fails('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {});
    expect(warnings).toEqual([]);
  });

  test.fails('with aria-label hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });

  test.fails('checked state hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      checked: true,
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });

  test.fails('disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      disabled: true,
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });

  test.fails('checked and disabled state hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      checked: true,
      disabled: true,
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });

  test.fails('with name and value hydrates without warnings', async () => {
    const warnings = await testHydration('w-switch', {
      name: 'notifications',
      value: 'enabled',
      'aria-label': 'Toggle notifications',
    });
    expect(warnings).toEqual([]);
  });
});
