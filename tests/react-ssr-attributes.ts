import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, test } from 'vitest';

type SsrAttributeCase = {
  attrName: string;
  propName: string;
  value?: unknown;
};

export function describeReactSsrAttributeMapping(
  componentName: string,
  Component: React.ElementType,
  cases: SsrAttributeCase[],
) {
  describe(`${componentName} React SSR`, () => {
    test.each(cases)('renders $propName as the $attrName attribute', ({ attrName, propName, value = true }) => {
      const html = renderToString(React.createElement(Component, { [propName]: value }, componentName));

      expect(html).toContain(attrName);
      expect(html).not.toContain(propName);
    });
  });
}
