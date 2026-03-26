import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './tab.js';

describe('w-tab React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // w-tab sets aria-controls in connectedCallback, causing hydration mismatch
  test.fails('default tab hydrates without warnings', async () => {
    const warnings = await testHydration('w-tab', { for: 'panel1' });
    expect(warnings).toEqual([]);
  });

  test.fails('active tab hydrates without warnings', async () => {
    const warnings = await testHydration('w-tab', { for: 'panel1', active: true });
    expect(warnings).toEqual([]);
  });

  test.fails('with id hydrates without warnings', async () => {
    const warnings = await testHydration('w-tab', { for: 'panel1', id: 'tab1' });
    expect(warnings).toEqual([]);
  });
});
