/* eslint-env node */
import path from 'path';

import { classes } from '@warp-ds/css/component-classes/classes';
import { presetWarp } from '@warp-ds/uno';
import { glob } from 'glob';
import uno from 'unocss/vite';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import topLevelAwait from 'vite-plugin-top-level-await';

export default ({ mode }) => {
  let input = {};

  const dirname = path.dirname(new URL(import.meta.url).pathname);

  const isProduction = mode === 'production';

  // For production we need to specify all our entry points
  // See https://vitejs.dev/guide/build.html#multi-page-app
  if (isProduction) {
    input.main = path.resolve(dirname, 'index.html');

    const componentPages = glob.sync('pages/components/**/*.html', {
      absolute: true,
    });
    const pages = glob.sync('pages/*.html', {
      absolute: true,
    });

    for (const page of pages.concat(componentPages)) {
      const fileName = path.parse(page).name;

      input[fileName] = page;
    }
  }

  const injectOptions = {
    ejsOptions: {
      views: ['pages/includes'],
    },
  };

  function getBuildOpts(mode) {
    if (mode === 'production') {
      return defineConfig({
        build: {
          target: 'esnext',
          outDir: 'site',
          rollupOptions: {
            input,
          },
        },
      });
    }
  }

  return {
    base: isProduction ? '/elements/' : '',
    plugins: [
      uno({
        presets: [presetWarp()],
      }),
      mode === 'development' &&
        uno({
          mode: 'shadow-dom',
          presets: [presetWarp()],
          safelist: classes,
        }),
      createHtmlPlugin({
        minify: false,
        pages: [
          {
            filename: 'button.html',
            template: 'pages/components/button.html',
            injectOptions,
          },
          {
            filename: 'pill.html',
            template: 'pages/components/pill.html',
            injectOptions,
          },
          {
            filename: 'alert.html',
            template: 'pages/components/alert.html',
            injectOptions,
          },
          {
            filename: 'select.html',
            template: 'pages/components/select.html',
            injectOptions,
          },
          {
            filename: 'attention.html',
            template: 'pages/components/attention.html',
            injectOptions,
          },
          {
            filename: 'badge.html',
            template: 'pages/components/badge.html',
            injectOptions,
          },
          {
            filename: 'box.html',
            template: 'pages/components/box.html',
            injectOptions,
          },
          {
            filename: 'breadcrumbs.html',
            template: 'pages/components/breadcrumbs.html',
            injectOptions,
          },
          {
            filename: 'card.html',
            template: 'pages/components/card.html',
            injectOptions,
          },
          {
            filename: 'deadtoggle.html',
            template: 'pages/components/deadtoggle.html',
            injectOptions,
          },
          {
            filename: 'modal.html',
            template: 'pages/components/modal.html',
            injectOptions,
          },
          {
            filename: 'toast.html',
            template: 'pages/components/toast.html',
            injectOptions,
          },
          {
            filename: 'textfield.html',
            template: 'pages/components/textfield.html',
            injectOptions,
          },
          {
            filename: 'expandable.html',
            template: 'pages/components/expandable.html',
            injectOptions,
          },
          {
            filename: 'index.html',
            template: 'index.html',
            injectOptions,
          },
        ],
      }),
      isProduction && basePathFix(),
      mode === 'development' &&
        topLevelAwait({
          // The export name of top-level await promise for each chunk module
          promiseExportName: '__tla',
          // The function to generate import names of top-level await promise in each chunk module
          promiseImportName: (i) => `__tla_${i}`,
        }),
    ],
    ...getBuildOpts(mode),
  };
};

function basePathFix() {
  return {
    name: 'base-path-fix',
    transform(src, fileName) {
      return fileName.includes('navigation-data.js')
        ? src.replace(/pages\/components\//g, 'elements/').replace(/'\/'/, '"/elements/"')
        : src;
    },
  };
}
