import 'vitest-browser-lit';
import { i18n } from '@lingui/core';
import axe from 'axe-core';
import type { AxeResults, Result } from 'axe-core';
import type { RenderResult } from 'vitest-browser-lit';
import { expect } from 'vitest';

// Initialize i18n with English locale for tests
i18n.load('en', {});
i18n.activate('en');

interface AxeMatchers {
  toHaveNoViolations(): void;
  toHaveNoAxeViolations(): Promise<void>;
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

async function runAxe(container: Element = document.body): Promise<AxeResults> {
  return axe.run(container, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
    },
  });
}

function resolveAxeContainer(received: unknown): Element {
  if (received && typeof received === 'object' && 'container' in (received as RenderResult)) {
    const { container } = received as RenderResult;
    if (container instanceof Element) return container;
  }

  if (received instanceof Element) {
    return received;
  }

  if (received instanceof Document) {
    return received.body;
  }

  return document.body;
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

  async toHaveNoAxeViolations(received: unknown) {
    const container = resolveAxeContainer(received);
    const results = await runAxe(container);

    if (typeof results.violations === 'undefined') {
      throw new Error('Invalid axe results: missing `violations` array');
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
