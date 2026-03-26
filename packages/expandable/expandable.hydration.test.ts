import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './expandable.js';

describe('w-expandable React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-expandable', {});
    expect(warnings).toEqual([]);
  });

  test('with title hydrates without warnings', async () => {
    const warnings = await testHydration('w-expandable', {
      title: 'Show more',
    });
    expect(warnings).toEqual([]);
  });

  test('expanded state hydrates without warnings', async () => {
    const warnings = await testHydration('w-expandable', {
      title: 'Show more',
      expanded: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with box variant hydrates without warnings', async () => {
    const warnings = await testHydration('w-expandable', {
      title: 'Show more',
      box: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with bleed hydrates without warnings', async () => {
    const warnings = await testHydration('w-expandable', {
      title: 'Show more',
      bleed: true,
    });
    expect(warnings).toEqual([]);
  });

  test('with animated hydrates without warnings', async () => {
    const warnings = await testHydration('w-expandable', {
      title: 'Show more',
      animated: true,
    });
    expect(warnings).toEqual([]);
  });
});
