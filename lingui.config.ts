import type { LinguiConfig } from '@lingui/conf';

import { supportedLocales } from './packages/i18n';

const config: LinguiConfig = {
  locales: supportedLocales as unknown as string[],
  catalogs: [
    {
      include: ['packages/breadcrumbs/'],
      path: 'packages/breadcrumbs/locales/{locale}/messages',
    },
    {
      include: ['packages/button/'],
      path: 'packages/button/locales/{locale}/messages',
    },
    {
      include: ['packages/card/'],
      path: 'packages/card/locales/{locale}/messages',
    },
    {
      include: ['packages/datepicker/'],
      path: 'packages/datepicker/locales/{locale}/messages',
    },
    {
      include: ['packages/select/'],
      path: 'packages/select/locales/{locale}/messages',
    },
    {
      include: ['packages/attention/'],
      path: 'packages/attention/locales/{locale}/messages',
    },
    {
      include: ['packages/modal/'],
      path: 'packages/modal/locales/{locale}/messages',
    },
    {
      include: ['packages/toast/'],
      path: 'packages/toast/locales/{locale}/messages',
    },
    {
      include: ['packages/pill/'],
      path: 'packages/pill/locales/{locale}/messages',
    },
    {
      include: ['packages/pagination/'],
      path: 'packages/pagination/locales/{locale}/messages',
    },
    {
      include: ['packages/stepindicator/'],
      path: 'packages/stepindicator/locales/{locale}/messages',
    },
    {
      include: ['packages/combobox/'],
      path: 'packages/combobox/locales/{locale}/messages',
    },
    {
      include: ['packages/slider/'],
      path: 'packages/slider/locales/{locale}/messages',
    },

    {
      include: ['packages/textarea/'],
      path: 'packages/textarea/locales/{locale}/messages',
    },
  ],
  compileNamespace: 'es',
  sourceLocale: 'en',
};

export default config;
