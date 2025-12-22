#!/usr/bin/env node

/**
 * Build script that produces:
 * 1. Per-language bundles: eik/{locale}/index.js for each supported locale
 * 2. Backwards-compatible all-languages bundle: eik/index.js
 *
 * This runs the Rollup build multiple times with different WARP_LOCALE values.
 */

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';

const supportedLocales = ['en', 'nb', 'fi', 'da', 'sv'];
const outdir = new URL('../eik', import.meta.url).pathname;

// Ensure output directories exist
for (const locale of supportedLocales) {
  const localeDir = `${outdir}/${locale}`;
  if (!existsSync(localeDir)) {
    mkdirSync(localeDir, { recursive: true });
  }
}

console.log('Building per-language bundles...\n');

// Build per-language bundles
for (const locale of supportedLocales) {
  console.log(`Building bundle for locale: ${locale}`);
  try {
    execSync(`WARP_LOCALE=${locale} rollup -c ./build/bundle.js`, {
      stdio: 'inherit',
      cwd: new URL('..', import.meta.url).pathname,
    });
    console.log(`✓ Built eik/${locale}/index.js\n`);
  } catch (error) {
    console.error(`✗ Failed to build bundle for locale: ${locale}`);
    process.exit(1);
  }
}

// Build backwards-compatible all-languages bundle
console.log('Building backwards-compatible all-languages bundle...');
try {
  execSync('rollup -c ./build/bundle.js', {
    stdio: 'inherit',
    cwd: new URL('..', import.meta.url).pathname,
  });
  console.log('✓ Built eik/index.js\n');
} catch (error) {
  console.error('✗ Failed to build all-languages bundle');
  process.exit(1);
}

console.log('All bundles built successfully!');
