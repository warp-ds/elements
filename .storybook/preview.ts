import { i18n } from '@lingui/core';
import 'virtual:uno.css';
import { setCustomElementsManifest } from '@storybook/web-components';
import type { Preview } from '@storybook/web-components-vite';
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers';
import { withActions } from 'storybook/actions/decorator';

import customElements from '../dist/custom-elements.json' with { type: 'json' };
import { removeToast, toast, updateToast, WarpToastContainer } from '../packages/toast/index.js';
import { supportedLocales } from '../packages/i18n';

setCustomElementsManifest(customElements);

setStorybookHelpersConfig({
  hideArgRef: true,
  renderDefaultValues: true,
});

// Preload empty catalogs to avoid warnings when activating locales before components load messages.
supportedLocales.forEach((locale) => i18n.load(locale, {}));

export const themes = {
  'Finn light': 'finn-no',
  'Finn dark': 'finn-no-dark',
  'Tori light': 'tori-fi',
  'Tori dark': 'tori-fi-dark',
  'DBA light': 'dba-dk',
  'DBA dark': 'dba-dk-dark',
  'Blocket light': 'blocket-se',
  'Blocket dark': 'blocket-se-dark',
  'Vend light': 'vend-com',
  'Vend dark': 'vend-com-dark',
  'Neutral light': 'neutral-com',
  'Neutral dark': 'neutral-com-dark',
};

export const locales = { English: 'en', /* Finnish: 'fi', Norwegian: 'nb', Danish: 'da', Swedish: 'sv' */ };

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
      icon: 'box',
      items: Object.entries(themes).map(([label, value]) => ({
        value,
        title: label,
        right: value.includes('dark') ? '🌙' : '☀️',
      })),
    },
  },
  locale: {
    name: 'Locale',
    defaultValue: 'en', // fallback if no localStorage
    toolbar: {
      icon: 'globe',
      items: Object.entries(locales).map(([label, value]) => ({
        value,
        title: label,
      })),
    },
  },
};

export const decorators = [
  // @ts-expect-error Explict any for Story and context
  (Story, context) => {
    const theme = context.globals.brand;
    const locale = context.globals.locale;

    // Persist values
    localStorage.setItem('warpTheme', theme);
    localStorage.setItem('locale', locale);

    // Swap stylesheet
    rewriteStylesheets(theme);

    // Set lang attribute for i18n detection and activate locale
    document.documentElement.lang = locale;
    i18n.activate(locale);

    return Story();
  },
];

const defaultTheme = typeof window !== 'undefined' && localStorage.getItem('warpTheme');
if (defaultTheme) {
  rewriteStylesheets(defaultTheme);
}
const defaultLocale = typeof window !== 'undefined' && localStorage.getItem('locale');
if (defaultLocale) {
  document.documentElement.lang = defaultLocale;
  i18n.activate(defaultLocale);
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
