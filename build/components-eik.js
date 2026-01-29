// Backwards compatibility build for individual components.
// This should only build for the existing 14 components as of time of writing and should
// not include any components added after that point.
// We want teams to move away from importing individual components and only import the entire bundle

import { existsSync, mkdirSync } from 'node:fs';
import * as eik from '@eik/esbuild-plugin';
import esbuild from 'esbuild';

await eik.load({ urls: ['https://assets.finn.no/map/lit/v3'] });

const modules = [
  'packages/affix/affix.ts',
  'packages/alert/alert.ts',
  'packages/attention/attention.ts',
  'packages/badge/badge.ts',
  'packages/box/box.ts',
  'packages/breadcrumbs/breadcrumbs.ts',
  'packages/button/button.ts',
  'packages/card/card.ts',
  'packages/expandable/expandable.ts',
  'packages/modal/index.ts',
  'packages/pill/pill.ts',
  'packages/select/select.ts',
  'packages/slider/slider.ts',
  'packages/slider-thumb/slider-thumb.ts',
  'packages/textfield/textfield.ts',
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
