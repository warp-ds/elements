/* eslint-env node */
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';
import glob from 'glob';
import { classes } from '@warp-ds/css/component-classes/classes';
import { MinifyWarpLib } from './.minifier-plugin.js';

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
    if (mode === 'production')
      return defineConfig({
        build: {
          outDir: 'site',
          rollupOptions: {
            input,
          },
        },
      });
    if (mode === 'lib')
      return defineConfig({
        build: {
          emptyOutDir: false,
          lib: {
            formats: ['es'],
            entry: './index.js',
            fileName: 'index',
          },
          rollupOptions: { external: ['elements', 'lit'] },
        },
      });
  }

  return {
    base: isProduction ? '/elements/' : '',
    plugins: [
      uno({
        presets: [presetWarp()],
        mode: 'shadow-dom',
        safelist: classes,
      }),
      uno({
        presets: [presetWarp()],
      }),
      // litElementTailwindPlugin({ mode }),
      mode !== 'lib' &&
        createHtmlPlugin({
          minify: false,
          pages: [
            {
              filename: 'button.html',
              template: 'pages/components/button.html',
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
              filename: 'broadcast.html',
              template: 'pages/components/broadcast.html',
              injectOptions,
            },
            {
              filename: 'card.html',
              template: 'pages/components/card.html',
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
      MinifyWarpLib(),
    ],
    ...getBuildOpts(mode),
  };
};

function basePathFix() {
  return {
    name: 'base-path-fix',
    transform(src, id) {
      return id.includes('navigation-data.js')
        ? src
            .replace(/pages\/components\//g, 'elements/')
            .replace(/'\/'/, '"/elements/"')
        : src;
    },
  };
}
