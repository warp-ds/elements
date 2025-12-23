// Produce final production bundle using Rollup so we can use Lit's
// official template minification plugin.
// We inline Lit so there are no Eik dependencies which we see improves load times at the cost of only about 10kb

// expects that we first compile TS to JS into .tmp (or WARP_TMP_DIR for locale builds) with:
// tsc --project tsconfig.json --outDir .tmp --declaration false --sourceMap true

// Usage:
// - Default (all languages, runtime mode): rollup -c ./build/bundle.js
// - Per-language (transform mode): WARP_LOCALE=nb rollup -c ./build/bundle.js

import { isAbsolute, join } from 'node:path';
import minifyHTML from '@lit-labs/rollup-plugin-minify-html-literals';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

import { generateEntrypointFile } from './entrypoint.js';

// Check for target locale from environment variable
const targetLocale = process.env.WARP_LOCALE;
const tmpDir = process.env.WARP_TMP_DIR || '.tmp';
const supportedLocales = ['en', 'nb', 'fi', 'da', 'sv'];

if (targetLocale && !supportedLocales.includes(targetLocale)) {
  throw new Error(`Invalid WARP_LOCALE: ${targetLocale}. Must be one of: ${supportedLocales.join(', ')}`);
}

// Generate entrypoint file in the source directory (tmpDir)
generateEntrypointFile(tmpDir);

// Handle both absolute and relative paths for the entrypoint
let tmpEntrypoint;
if (isAbsolute(tmpDir)) {
  tmpEntrypoint = join(tmpDir, 'entrypoint.js');
} else {
  tmpEntrypoint = new URL(`../${tmpDir}/entrypoint.js`, import.meta.url).pathname;
}
const outdir = new URL('../eik', import.meta.url).pathname;

// Determine output path based on locale
const outputFile = targetLocale ? `${outdir}/${targetLocale}/index.js` : `${outdir}/index.js`;

// Build plugins array
const plugins = [
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  resolve({
    browser: true, // prefer browser-compatible versions
    preferBuiltins: false, // don't use Node built-ins
  }),
  commonjs(),
  minifyHTML(),
  terser(),
];

export default {
  input: tmpEntrypoint,
  output: {
    file: outputFile,
    format: 'esm',
    sourcemap: true,
  },
  plugins,
};
