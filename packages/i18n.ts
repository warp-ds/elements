import { Messages, i18n } from '@lingui/core';

export const supportedLocales = ['en', 'nb', 'fi'] as const;
type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale = 'en';

export const getSupportedLocale = (usedLocale: string) => {
  return (
    supportedLocales.find(
      (locale) =>
        usedLocale === locale || usedLocale.toLowerCase().includes(locale)
    ) || defaultLocale
  );
};

export function detectLocale(): SupportedLocale {
  if (typeof window === 'undefined') {
    /**
     * Server locale detection. This requires e.g LANG environment variable to be set on the server.
     */
    const serverLocale =
      process.env.NMP_LANGUAGE ||
      Intl.DateTimeFormat().resolvedOptions().locale;
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
  fiMsg: Messages
) => {
  if (locale === 'nb') return nbMsg;
  if (locale === 'fi') return fiMsg;
  // Default to English
  return enMsg;
};

export const activateI18n = (
  enMessages: Messages,
  nbMessages: Messages,
  fiMessages: Messages
) => {
  const locale = detectLocale();
  const messages = getMessages(locale, enMessages, nbMessages, fiMessages);
  i18n.load(locale, messages);
  i18n.activate(locale);
};
