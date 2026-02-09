import type { AxeResults } from 'axe-core';
import axe from 'axe-core';

export { axe };
export type { AxeResults };

/**
 * Run axe accessibility scan with WCAG 2.2 AA ruleset
 */
export async function runAxe(container: Element = document.body): Promise<AxeResults> {
  return axe.run(container, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
    },
  });
}

/**
 * Common component states to test for accessibility
 */
export const A11Y_TEST_STATES = {
  default: 'default state',
  disabled: 'disabled state',
  invalid: 'invalid/error state',
  readonly: 'readonly state',
  required: 'required state',
  withHelpText: 'with help text',
} as const;
