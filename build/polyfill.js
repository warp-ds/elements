// Build polyfill for CSS anchor positioning for distribution on Eik.
// This gets lazy loaded by components that need it in browsers that don't have native support.
import { createRequire } from 'node:module';

import esbuild from 'esbuild';

const { resolve } = createRequire(import.meta.url);

const outdir =
  typeof process.env.STORYBOOK_BASE !== 'undefined'
    ? new URL('../storybook-static/assets/', import.meta.url).pathname
    : new URL('../eik', import.meta.url).pathname;

await esbuild.build({
  entryPoints: [resolve('@oddbird/css-anchor-positioning/fn')],
  outfile: `${outdir}/oddbird-css-anchor-positioning.js`,
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'es2018',
  minify: true,
});
