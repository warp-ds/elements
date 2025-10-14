import 'virtual:uno.css';
import { setCustomElementsManifest } from '@storybook/web-components';
import type { Preview } from '@storybook/web-components-vite';
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers';
import { withActions } from 'storybook/actions/decorator';

import customElements from '../dist/custom-elements.json' with { type: 'json' };
import { toast, updateToast, removeToast, WarpToastContainer } from '../packages/toast/index.js';

setCustomElementsManifest(customElements);

setStorybookHelpersConfig({
  hideArgRef: true,
  renderDefaultValues: true,
});

export const themes = {
  'Finn light': 'finn-no',
  'Finn dark': 'finn-no-dark',
  'Tori light': 'tori-fi',
  'Tori dark': 'tori-fi-dark',
  'DBA light': 'dba-dk',
  'DBA dark': 'dba-dk-dark',
  'Blocket light': 'blocket-se',
  'Blocket dark': 'blocket-se-dark',
};

export const rewriteStylesheets = (theme: string) => {
  const roots = [
    document,
    ...Array.from(document.querySelectorAll('*'))
      .filter((el) => !!el.shadowRoot)
      .map((el) => el.shadowRoot),
  ];
  roots.forEach((root) => {
    //@ts-expect-error: Root not defined
    const tokensStylesheets = root.querySelectorAll('link[rel="stylesheet"][href*="@warp-ds/css/v2/tokens/"]');
    tokensStylesheets.forEach((s) => {
      s.setAttribute('href', `https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/${theme}.css`);
    });
  });
};

export const globalTypes = {
  brand: {
    name: 'Brand Theme',
    description: 'Select a design system brand',
    defaultValue: 'finn-no', // fallback if no localStorage
    toolbar: {
      icon: 'globe',
      items: Object.entries(themes).map(([label, value]) => ({
        value,
        title: label,
        right: value.includes('dark') ? '🌙' : '☀️',
      })),
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.brand;

    // Persist theme
    localStorage.setItem('warpTheme', theme);

    // Swap stylesheet
    rewriteStylesheets(theme);

    return Story();
  },
];

const defaultTheme = typeof window !== 'undefined' && localStorage.getItem('warpTheme');
if (defaultTheme) {
  rewriteStylesheets(defaultTheme);
}

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    controls: {
      expanded: true,
      sort: 'alpha',
    },
    docs: {
      codePanel: true,
    },
  },
  decorators: [withActions, ...decorators],
};

if (typeof window !== 'undefined') {
  // @ts-expect-error We depend on these being global in our examples
  window.WarpToastContainer = WarpToastContainer;
  // @ts-expect-error We depend on these being global in our examples
  window.toast = toast;
  // @ts-expect-error We depend on these being global in our examples
  window.updateToast = updateToast;
  // @ts-expect-error We depend on these being global in our examples
  window.removeToast = removeToast;

  // @ts-expect-error Used in slider examples
  window.getNumberFormatter = (locale, opts = {}) => {
    return new Intl.NumberFormat(locale, { maximumFractionDigits: 0, ...opts });
  };
}

export default preview;
