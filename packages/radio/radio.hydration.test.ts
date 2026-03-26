import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './radio.js';

describe('w-radio React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  // w-radio sets type attribute and tabindex in connectedCallback
  test.fails('default radio hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', { value: 'option1' });
    expect(warnings).toEqual([]);
  });

  test.fails('with name hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', { value: 'option1', name: 'options' });
    expect(warnings).toEqual([]);
  });

  test.fails('checked radio hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', { value: 'option1', checked: true });
    expect(warnings).toEqual([]);
  });

  test.fails('disabled radio hydrates without warnings', async () => {
    const warnings = await testHydration('w-radio', { value: 'option1', disabled: true });
    expect(warnings).toEqual([]);
  });
});
