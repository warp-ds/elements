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
 * Converts a DOM node to a React element.
 * Used to include children in the React tree for proper hydration testing.
 */
function nodeToReact(node: Node): React.ReactNode {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }
  if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as Element;
    const props: Record<string, unknown> = {};
    for (const attr of el.attributes) {
      // Convert HTML attributes to React props
      let name = attr.name;
      if (name === 'class') name = 'className';
      if (name === 'for') name = 'htmlFor';
      props[name] = attr.value;
    }
    const children = Array.from(el.childNodes).map(nodeToReact).filter(Boolean);
    return React.createElement(el.tagName.toLowerCase(), props, ...children);
  }
  return null;
}

/**
 * Converts an HTML string to an array of React elements.
 */
function htmlToReactElements(html: string): React.ReactNode[] {
  const template = document.createElement('template');
  template.innerHTML = html;
  return Array.from(template.content.childNodes)
    .map(nodeToReact)
    .filter((node) => node !== null && (typeof node !== 'string' || node.trim()));
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
    // Use onRecoverableError to capture hydration errors (React 19+)
    const element = React.createElement(tagName, props);
    hydrateRoot(container, element, {
      onRecoverableError: (error: unknown) => {
        const msg = error instanceof Error ? error.message : String(error);
        if (msg.includes('Hydration') || msg.includes('hydrat') || msg.includes('did not match')) {
          window.__HYDRATION_WARNINGS__.push(msg);
        }
      },
    });

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
 * This properly includes children in the React tree so that React can detect
 * hydration mismatches when components modify their light DOM children
 * (e.g., adding classes, moving children to shadow DOM).
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

    // Convert children HTML to React elements so they're part of React's tree.
    // This allows React to detect mismatches when components modify children.
    const reactChildren = htmlToReactElements(childrenHtml);
    const element = React.createElement(tagName, props, ...reactChildren);

    // Use onRecoverableError to capture hydration errors (React 19+)
    hydrateRoot(container, element, {
      onRecoverableError: (error: unknown) => {
        const msg = error instanceof Error ? error.message : String(error);
        if (msg.includes('Hydration') || msg.includes('hydrat') || msg.includes('did not match')) {
          window.__HYDRATION_WARNINGS__.push(msg);
        }
      },
    });

    // Wait for hydration, custom element upgrade, and async callbacks
    await new Promise((resolve) => setTimeout(resolve, 200));

    return window.__HYDRATION_WARNINGS__;
  } finally {
    document.body.removeChild(container);
  }
}
