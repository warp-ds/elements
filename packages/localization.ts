import { configureLocalization, type LocaleModule } from '@lit/localize';

// Import all translation modules statically for bundling
import * as daModule from './generated/da.js';
import * as fiModule from './generated/fi.js';
import * as nbModule from './generated/nb.js';
import * as svModule from './generated/sv.js';

// Source locale (English) - no translations needed
export const sourceLocale = 'en';

// Target locales that have translations
export const targetLocales = ['nb', 'fi', 'da', 'sv'] as const;

export type Locale = typeof sourceLocale | (typeof targetLocales)[number];

// All available locales
export const allLocales = [sourceLocale, ...targetLocales] as const;

// Map of locale to templates for static loading
const localeModules: Record<string, LocaleModule> = {
  da: daModule,
  fi: fiModule,
  nb: nbModule,
  sv: svModule,
};

const localization = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: async (locale: string) => localeModules[locale],
});

export const { getLocale, setLocale } = localization;
