import 'vitest-browser-lit';
import type { AxeResults, Result } from 'axe-core';
import axe from 'axe-core';
import { expect } from 'vitest';
import type { RenderResult } from 'vitest-browser-lit';

interface AxeMatchers {
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

function toHaveNoViolations(results: AxeResults) {
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
}

expect.extend({
  async toHaveNoAxeViolations(received: unknown) {
    const container = resolveAxeContainer(received);
    const results = await runAxe(container);

    return toHaveNoViolations(results);
  },
});
