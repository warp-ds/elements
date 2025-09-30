// Build for package exports
// Basically just strips types and builds api script
// We could probably replace this with just a TS compile
// Depends on custom element manifest file first being generated with:
// custom-elements-manifest analyze --config .cem/custom-element-manifest.config.js

import { existsSync, mkdirSync } from 'node:fs';

import esbuild from 'esbuild';

import manifest from '../dist/custom-elements.json' with { type: 'json' };

const toastApiPath = new URL('../packages/toast/api.js', import.meta.url).pathname;
const outdir = new URL('../dist', import.meta.url).pathname;

const esbuildDefaults = {
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'es2018',
  minify: true,
  external: ['lit', 'lit-html', 'lit-element'],
};

if (!existsSync(outdir)) {
  mkdirSync(outdir, { recursive: true });
}

manifest.modules.map(async (item) => {
  try {
    await esbuild.build({
      entryPoints: [item.path],
      outfile: `${outdir}/${item.path.replace('.ts', '.js')}`,
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
