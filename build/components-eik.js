// Backwards compatibility build for individual components.
// This should only build for the existing 14 components as of time of writing and should
// not include any components added after that point.
// We want teams to move away from importing individual components and only import the entire bundle

import { existsSync, mkdirSync } from 'node:fs';
import * as eik from '@eik/esbuild-plugin';
import esbuild from 'esbuild';

await eik.load({ urls: ['https://assets.finn.no/map/lit/v3'] });

const modules = [
  'packages/affix/index.ts',
  'packages/alert/index.ts',
  'packages/attention/index.ts',
  'packages/badge/index.ts',
  'packages/box/index.ts',
  'packages/breadcrumbs/index.ts',
  'packages/button/index.ts',
  'packages/card/index.ts',
  'packages/expandable/index.ts',
  'packages/modal/index.ts',
  'packages/pill/index.ts',
  'packages/select/index.ts',
  'packages/textfield/index.ts',
  'packages/toast/index.ts',
];

const toastApiPath = new URL('../packages/toast/api.js', import.meta.url).pathname;
const outdir = new URL('../eik', import.meta.url).pathname;

const esbuildDefaults = {
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'es2018',
  minify: true,
  plugins: [eik.plugin()],
};

if (!existsSync(outdir)) {
  mkdirSync(outdir, { recursive: true });
}

modules.map(async (item) => {
  try {
    await esbuild.build({
      entryPoints: [item],
      outfile: `${outdir}/${item.replace('.ts', '.js')}`,
      ...esbuildDefaults,
    });
  } catch (err) {
    console.error(err);
  }
});

try {
  await esbuild.build({
    entryPoints: [toastApiPath],
    outfile: `${outdir}/api.js`,
    ...esbuildDefaults,
  });
} catch (err) {
  console.error(err);
}
