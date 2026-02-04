import 'vitest-browser-lit';
import { i18n } from '@lingui/core';
import { expect } from 'vitest';
import type { AxeResults, Result } from 'axe-core';

// Initialize i18n with English locale for tests
i18n.load('en', {});
i18n.activate('en');

interface AxeMatchers {
  toHaveNoViolations(): void;
}

declare module 'vitest' {
  interface Assertion extends AxeMatchers {}
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}

function formatViolations(violations: Result[]): string {
  if (violations.length === 0) {
    return '';
  }

  return violations
    .map((violation) => {
      const nodeInfo = violation.nodes
        .map((node) => {
          const selector = node.target.join(', ');
          return `  - Element: ${selector}\n    HTML: ${node.html}\n    ${node.failureSummary}`;
        })
        .join('\n');

      return `${violation.id}: ${violation.help}\n  Impact: ${violation.impact}\n  Help URL: ${violation.helpUrl}\n${nodeInfo}`;
    })
    .join('\n\n');
}

expect.extend({
  toHaveNoViolations(results: AxeResults) {
    if (typeof results.violations === 'undefined') {
      throw new Error('No axe-core results found, unable to assert');
    }

    const violations = results.violations;
    const pass = violations.length === 0;

    return {
      pass,
      message: () =>
        pass
          ? 'Expected to have accessibility violations, but none were found'
          : `Expected no accessibility violations, but found ${violations.length}:\n\n${formatViolations(violations)}`,
      actual: violations,
    };
  },
});
