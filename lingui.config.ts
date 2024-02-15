import type { LinguiConfig } from '@lingui/conf';
import { supportedLocales } from './packages/i18n';

const config: LinguiConfig = {
  locales: supportedLocales as unknown as string[],
  catalogs: [
    {
      include: ['packages/breadcrumbs/index.js'],
      path: 'packages/breadcrumbs/locales/{locale}/messages',
    },
    {
      include: ['packages/button/index.js'],
      path: 'packages/button/locales/{locale}/messages',
    },
    {
      include: ['packages/select/index.js'],
      path: 'packages/select/locales/{locale}/messages',
    },
    {
      include: ['packages/attention/index.js'],
      path: 'packages/attention/locales/{locale}/messages',
    },
    {
      include: ['packages/toast/toast.js'],
      path: 'packages/toast/locales/{locale}/messages',
    },
    {
      include: ['packages/pill/index.js'],
      path: 'packages/pill/locales/{locale}/messages',
    },
  ],
  compileNamespace: 'es',
  sourceLocale: 'en',
};

export default config;
