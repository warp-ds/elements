import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { setupHydrationWarningCapture, testHydration } from '../../tests/react-hydration';

import './combobox.js';

describe('w-combobox React SSR hydration', () => {
  beforeEach(() => setupHydrationWarningCapture());
  afterEach(() => {
    window.__HYDRATION_WARNINGS__ = [];
  });

  test('default (no attributes) hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {});
    expect(warnings).toEqual([]);
  });

  test('with label hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      label: 'Search',
    });
    expect(warnings).toEqual([]);
  });

  test('with placeholder hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      placeholder: 'Type to search...',
    });
    expect(warnings).toEqual([]);
  });

  test('with value hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      value: 'test',
    });
    expect(warnings).toEqual([]);
  });

  test('disabled combobox hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      disabled: true,
    });
    expect(warnings).toEqual([]);
  });

  test('invalid combobox hydrates without warnings', async () => {
    const warnings = await testHydration('w-combobox', {
      invalid: true,
    });
    expect(warnings).toEqual([]);
  });

  test('options array prop hydrates without runtime errors', async () => {
    const unhandledRejections: string[] = [];
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      unhandledRejections.push(String(event.reason));
      event.preventDefault();
    };

    window.addEventListener('unhandledrejection', onUnhandledRejection);

    try {
      await testHydration('w-combobox', {
        options: [
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
        ],
      });

      expect(unhandledRejections).toEqual([]);
    } finally {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    }
  });

  test('dangerouslySetInnerHTML wrapper hydrates without attribute mismatch warnings', async () => {
    const container = document.createElement('div');
    container.id = 'hydration-innerhtml-root';
    document.body.appendChild(container);

    const innerHtml = '<w-combobox id="demo-combobox" placeholder="Search"></w-combobox>';

    try {
      container.innerHTML = `<section class="example">${innerHtml}</section>`;

      // Give the custom element a tick to upgrade and reflect defaults
      // before React hydrates the tree.
      await new Promise((resolve) => setTimeout(resolve, 50));

      function App() {
        return React.createElement('section', {
          className: 'example',
          // biome-ignore lint/security/noDangerouslySetInnerHtml: test reproduces React hydration mismatch path
          dangerouslySetInnerHTML: { __html: innerHtml },
        });
      }

      hydrateRoot(container, React.createElement(App), {
        onRecoverableError: (error: unknown) => {
          const msg = error instanceof Error ? error.message : String(error);
          if (
            msg.includes('Hydration') ||
            msg.includes('hydrat') ||
            msg.includes('did not match') ||
            msg.includes("didn't match")
          ) {
            window.__HYDRATION_WARNINGS__.push(msg);
          }
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 200));

      expect(window.__HYDRATION_WARNINGS__).toEqual([]);
    } finally {
      document.body.removeChild(container);
    }
  });
});
