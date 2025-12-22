/**
 * Rollup plugin that stubs out message files for non-target locales.
 * This ensures only the target language's translations are included in the bundle.
 *
 * @param {Object} options
 * @param {string} options.targetLocale - The locale to keep (e.g., 'en', 'nb', 'fi', 'da', 'sv')
 * @returns {import('rollup').Plugin}
 */
export function localePlugin({ targetLocale }) {
  const supportedLocales = ['en', 'nb', 'fi', 'da', 'sv'];

  if (!supportedLocales.includes(targetLocale)) {
    throw new Error(`Invalid target locale: ${targetLocale}. Must be one of: ${supportedLocales.join(', ')}`);
  }

  // Match patterns like:
  // - ./locales/da/messages.mjs
  // - ../modal/locales/en/messages.mjs
  // - /absolute/path/packages/button/locales/nb/messages.mjs
  const localeMessagePattern = /locales\/([a-z]{2})\/messages\.mjs$/;

  return {
    name: 'warp-locale-plugin',

    resolveId(source, importer) {
      const match = source.match(localeMessagePattern);
      if (match) {
        const locale = match[1];
        if (supportedLocales.includes(locale) && locale !== targetLocale) {
          // Return a virtual module ID for non-target locales
          return `\0empty-messages-${locale}`;
        }
      }
      return null;
    },

    load(id) {
      // Handle virtual empty message modules
      if (id.startsWith('\0empty-messages-')) {
        // Return an empty messages object that matches Lingui's compiled format
        return 'export const messages = {};';
      }
      return null;
    },
  };
}
