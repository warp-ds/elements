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
    const htmlLocale = getDocumentLang(document);
    if (htmlLocale) {
      return getSupportedLocale(htmlLocale);
    }

    const frameLocale = getFrameElementLang();
    if (frameLocale) {
      return getSupportedLocale(frameLocale);
    }

    const parentLocale = getDocumentLang(getParentDocument());
    if (parentLocale) {
      return getSupportedLocale(parentLocale);
    }

    return defaultLocale;
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
  notifyI18nChange();

  setupLangObserver();
};

export const I18N_CHANGE_EVENT = 'warp-i18n-change';

export function notifyI18nChange() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(I18N_CHANGE_EVENT));
}

let langObserverInitialized = false;

function setupLangObserver() {
  if (langObserverInitialized) return;
  if (typeof window === 'undefined') return;
  if (!document?.documentElement) return;

  langObserverInitialized = true;

  const handleLangChange = () => {
    const nextLocale = detectLocale();
    if (i18n.locale !== nextLocale) {
      i18n.activate(nextLocale);
      notifyI18nChange();
    }
  };

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
        handleLangChange();
        break;
      }
    }
  });

  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  const parentDocument = getParentDocument();
  if (parentDocument && parentDocument.documentElement && parentDocument !== document) {
    observer.observe(parentDocument.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  const frameEl = getFrameElement();
  if (frameEl) {
    observer.observe(frameEl, { attributes: true, attributeFilter: ['lang'] });
  }
}

function getParentDocument(): Document | null {
  try {
    return window.parent?.document ?? null;
  } catch {
    return null;
  }
}

function getDocumentLang(doc: Document | null | undefined): string {
  try {
    return doc?.documentElement?.lang ?? '';
  } catch {
    return '';
  }
}

function getFrameElement(): HTMLElement | null {
  try {
    return (window.frameElement as HTMLElement | null) ?? null;
  } catch {
    return null;
  }
}

function getFrameElementLang(): string {
  try {
    return window.frameElement?.getAttribute?.('lang') ?? '';
  } catch {
    return '';
  }
}
