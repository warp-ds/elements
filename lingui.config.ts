import type { LinguiConfig } from '@lingui/conf';

import { supportedLocales } from './packages/i18n';

const config: LinguiConfig = {
  locales: supportedLocales as unknown as string[],
  catalogs: [
    {
      include: ['packages/breadcrumbs/index.ts'],
      path: 'packages/breadcrumbs/locales/{locale}/messages',
    },
    {
      include: ['packages/button/index.ts'],
      path: 'packages/button/locales/{locale}/messages',
    },
    {
      include: ['packages/card/index.ts'],
      path: 'packages/card/locales/{locale}/messages',
    },
    {
      include: ['packages/datepicker/*.ts'],
      path: 'packages/datepicker/locales/{locale}/messages',
    },
    {
      include: ['packages/select/index.ts'],
      path: 'packages/select/locales/{locale}/messages',
    },
    {
      include: ['packages/attention/index.js'],
      path: 'packages/attention/locales/{locale}/messages',
    },
    {
      include: ['packages/modal/modal-header.ts'],
      path: 'packages/modal/locales/{locale}/messages',
    },
    {
      include: ['packages/toast/toast.js'],
      path: 'packages/toast/locales/{locale}/messages',
    },
    {
      include: ['packages/pill/index.ts'],
      path: 'packages/pill/locales/{locale}/messages',
    },
    {
      include: ['packages/pagination/index.ts'],
      path: 'packages/pagination/locales/{locale}/messages',
    },
  ],
  compileNamespace: 'es',
  sourceLocale: 'en',
};

export default config;
