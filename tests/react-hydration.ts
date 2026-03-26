import React from 'react';
import { hydrateRoot } from 'react-dom/client';

declare global {
  interface Window {
    __HYDRATION_WARNINGS__: string[];
  }
}

export function setupHydrationWarningCapture(): void {
  window.__HYDRATION_WARNINGS__ = [];
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    const msg = args.map((a) => (typeof a === 'string' ? a : String(a))).join(' ');
    if (
      msg.includes('Hydration') ||
      msg.includes('hydrat') ||
      msg.includes('did not match') ||
      msg.includes('server rendered HTML') ||
      msg.includes('Text content does not match') ||
      msg.includes('Expected server HTML')
    ) {
      window.__HYDRATION_WARNINGS__.push(msg);
    }
    originalError.apply(console, args);
  };
}

/**
 * Converts props to HTML attributes string
 */
function propsToHtml(props: Record<string, unknown>): string {
  return Object.entries(props)
    .map(([key, value]) => {
      if (value === true) return key;
      if (value === false || value === undefined || value === null) return '';
      return `${key}="${value}"`;
    })
    .filter(Boolean)
    .join(' ');
}

/**
 * Tests that a component hydrates without warnings.
 * Takes tag name and props, generates both SSR HTML and React element from them.
 */
export async function testHydration(
  tagName: string,
  props: Record<string, unknown> = {},
): Promise<string[]> {
  const container = document.createElement('div');
  container.id = 'hydration-test-root';
  document.body.appendChild(container);

  try {
    // Generate SSR HTML from props
    const attrs = propsToHtml(props);
    const ssrHtml = `<${tagName}${attrs ? ` ${attrs}` : ''}></${tagName}>`;
    container.innerHTML = ssrHtml;

    // Create React element from same props and hydrate
    const element = React.createElement(tagName, props);
    hydrateRoot(container, element);

    // Wait for hydration, custom element upgrade, and async callbacks
    await new Promise((resolve) => setTimeout(resolve, 200));

    return window.__HYDRATION_WARNINGS__;
  } finally {
    document.body.removeChild(container);
  }
}

/**
 * Tests hydration for parent/child component structures.
 * Takes parent tag, props, and children HTML string.
 *
 * Note: For custom elements with slotted children, we set innerHTML directly
 * rather than through React props, since React sees slotted content as light DOM
 * that the custom element manages.
 */
export async function testHydrationWithChildren(
  tagName: string,
  props: Record<string, unknown>,
  childrenHtml: string,
): Promise<string[]> {
  const container = document.createElement('div');
  container.id = 'hydration-test-root';
  document.body.appendChild(container);

  try {
    // Generate SSR HTML from props with children
    const attrs = propsToHtml(props);
    const ssrHtml = `<${tagName}${attrs ? ` ${attrs}` : ''}>${childrenHtml}</${tagName}>`;
    container.innerHTML = ssrHtml;

    // For custom elements with children, hydrate just the parent element props.
    // The children are slotted content that lives in light DOM and is managed
    // by the custom element, not React.
    const element = React.createElement(tagName, props);
    hydrateRoot(container, element);

    // After hydration, restore the children to the element
    // (React will have cleared them since they weren't in the React tree)
    await new Promise((resolve) => setTimeout(resolve, 50));
    const el = container.querySelector(tagName);
    if (el && el.innerHTML !== childrenHtml.trim()) {
      el.innerHTML = childrenHtml;
    }

    // Wait for hydration, custom element upgrade, and async callbacks
    await new Promise((resolve) => setTimeout(resolve, 200));

    return window.__HYDRATION_WARNINGS__;
  } finally {
    document.body.removeChild(container);
  }
}
