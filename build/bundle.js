// Produce final production bundle using Rollup so we can use Lit's
// official template minification plugin.
// We inline Lit so there are no Eik dependencies which we see improves load times at the cost of only about 10kb

// expects that we first compile TS to JS into .tmp with:
// tsc --project tsconfig.json --outDir .tmp --declaration false --sourceMap true

// Usage:
// - Default (all languages): rollup -c ./build/bundle.js
// - Per-language: WARP_LOCALE=nb rollup -c ./build/bundle.js

import minifyHTML from '@lit-labs/rollup-plugin-minify-html-literals';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

import { generateEntrypointFile } from './entrypoint.js';
import { localePlugin } from './rollup-plugin-locale.js';

generateEntrypointFile();

const tmpEntrypoint = new URL('../.tmp/entrypoint.js', import.meta.url).pathname;
const outdir = new URL('../eik', import.meta.url).pathname;

// Check for target locale from environment variable
const targetLocale = process.env.WARP_LOCALE;
const supportedLocales = ['en', 'nb', 'fi', 'da', 'sv'];

if (targetLocale && !supportedLocales.includes(targetLocale)) {
  throw new Error(`Invalid WARP_LOCALE: ${targetLocale}. Must be one of: ${supportedLocales.join(', ')}`);
}

// Determine output path based on locale
const outputFile = targetLocale ? `${outdir}/${targetLocale}/index.js` : `${outdir}/index.js`;

// Build plugins array
const plugins = [
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('production'),
    // For per-locale builds, bake in the locale; for all-languages build, leave undefined
    ...(targetLocale
      ? { '__WARP_LOCALE__': JSON.stringify(targetLocale) }
      : { 'typeof __WARP_LOCALE__': JSON.stringify('undefined') }),
  }),
  resolve({
    browser: true, // prefer browser-compatible versions
    preferBuiltins: false, // don't use Node built-ins
  }),
  commonjs(),
  minifyHTML(),
  terser(),
];

// Add locale plugin for per-language builds (stubs out non-target locale messages)
if (targetLocale) {
  plugins.unshift(localePlugin({ targetLocale }));
}

export default {
  input: tmpEntrypoint,
  output: {
    file: outputFile,
    format: 'esm',
    sourcemap: true,
  },
  plugins,
};
