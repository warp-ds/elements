// Produce final production bundle using Rollup so we can use Lit's
// official template minification plugin.
// We inline Lit so there are no Eik dependencies

// expects that we first compile TS to JS into .tmp with:
// tsc --project tsconfig.json --outDir .tmp --declaration false --sourceMap true

import { writeFileSync } from 'node:fs';

import minifyHTML from '@lit-labs/rollup-plugin-minify-html-literals';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

import manifest from '../dist/custom-elements.json' with { type: 'json' };

const tmpEntrypoint = new URL('../.tmp/entrypoint.js', import.meta.url).pathname;
const outdir = new URL('../eik', import.meta.url).pathname;

// write entrypoint file
const componentExports = manifest.modules.map((item) => `export * from './${item.path.replace('.ts', '.js')}';`);
writeFileSync(tmpEntrypoint, componentExports.join('\n'), { encoding: 'utf8' });

export default {
  input: tmpEntrypoint,
  output: {
    file: `${outdir}/index.js`,
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'), // or "development"
    }),
    resolve({
      browser: true, // prefer browser-compatible versions
      preferBuiltins: false, // don't use Node built-ins
    }),
    commonjs(),
    minifyHTML(),
    terser(),
  ],
};
