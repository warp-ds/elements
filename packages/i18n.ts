import { i18n, Messages } from '@lingui/core';

export const supportedLocales = ['en', 'nb', 'fi', 'da', 'sv'] as const;
type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale = 'en';

export const getSupportedLocale = (usedLocale: string) => {
  return (
    supportedLocales.find((locale) => usedLocale === locale || usedLocale.toLowerCase().includes(locale)) ||
    defaultLocale
  );
};

export function detectLocale(): SupportedLocale {
  if (typeof window === 'undefined') {
    /**
     * Server locale detection. This requires e.g LANG environment variable to be set on the server.
     */
    const serverLocale = process.env.NMP_LANGUAGE || Intl.DateTimeFormat().resolvedOptions().locale;
    return getSupportedLocale(serverLocale);
  }

  try {
    /**
     * Client locale detection. Expects the lang attribute to be defined.
     */
    const htmlLocale = document.documentElement.lang;
    return getSupportedLocale(htmlLocale);
  } catch (e) {
    console.warn('could not detect locale, falling back to source locale', e);
    return defaultLocale;
  }
}

export const getMessages = (
  locale: SupportedLocale,
  enMsg: Messages,
  nbMsg: Messages,
  fiMsg: Messages,
  daMsg: Messages,
  svMsg: Messages,
) => {
  if (locale === 'nb') return nbMsg;
  if (locale === 'fi') return fiMsg;
  if (locale === 'da') return daMsg;
  if (locale === 'sv') return svMsg;
  // Default to English
  return enMsg;
};

export const activateI18n = (
  enMessages: Messages,
  nbMessages: Messages,
  fiMessages: Messages,
  daMessages: Messages,
  svMessages: Messages,
) => {
  // Load all locales upfront to support dynamic locale switching
  i18n.load('en', enMessages);
  i18n.load('nb', nbMessages);
  i18n.load('fi', fiMessages);
  i18n.load('da', daMessages);
  i18n.load('sv', svMessages);

  const locale = detectLocale();
  i18n.activate(locale);
};
