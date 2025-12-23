#!/usr/bin/env node

/**
 * Build script that produces:
 * 1. eik/index.js - Runtime multilingual bundle (all translations, uses setLocale())
 * 2. eik/{locale}/index.js - Per-locale bundles with baked-in translations (transform mode)
 */

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const supportedLocales = ['en', 'nb', 'fi', 'da', 'sv'];
const outdir = join(rootDir, 'eik');
const litLocalesDir = join(rootDir, 'lit-locales');
const generatedDir = join(rootDir, 'packages/generated');

// Ensure output directories exist
for (const locale of supportedLocales) {
  const localeDir = `${outdir}/${locale}`;
  if (!existsSync(localeDir)) {
    mkdirSync(localeDir, { recursive: true });
  }
}

console.log('=== Building Warp Elements bundles ===\n');

// Step 1: Generate runtime translation modules
console.log('Step 1: Generating runtime translation modules...');
try {
  execSync('npx lit-localize build --config lit-localize-runtime.json', {
    stdio: 'inherit',
    cwd: rootDir,
  });
  console.log('✓ Runtime translation modules generated\n');
} catch (error) {
  console.error('✗ Failed to generate runtime translation modules');
  process.exit(1);
}

// Step 2: Build runtime multilingual bundle (eik/index.js)
console.log('Step 2: Building runtime multilingual bundle (eik/index.js)...');
try {
  // Compile TypeScript to .tmp (includes localization.ts and generated modules)
  execSync('npx tsc --project tsconfig.json --outDir .tmp --declaration false --sourceMap true', {
    stdio: 'inherit',
    cwd: rootDir,
  });
  // Bundle with rollup
  execSync('WARP_RUNTIME=true npx rollup -c ./build/bundle.js', {
    stdio: 'inherit',
    cwd: rootDir,
  });
  console.log('✓ Built eik/index.js (runtime multilingual)\n');
} catch (error) {
  console.error('✗ Failed to build runtime multilingual bundle');
  process.exit(1);
}

// Step 3: Run lit-localize build (transform mode) for per-locale bundles
console.log('Step 3: Running lit-localize build (transform mode) for per-locale bundles...');
try {
  execSync('npx lit-localize build', {
    stdio: 'inherit',
    cwd: rootDir,
  });
  console.log('✓ Transform mode build completed\n');
} catch (error) {
  console.error('✗ Failed to run lit-localize build');
  process.exit(1);
}

// Step 4: Build per-locale bundles from transformed sources
console.log('Step 4: Building per-locale bundles...\n');

for (const locale of supportedLocales) {
  console.log(`Building bundle for locale: ${locale}`);

  const localeSrcDir = join(litLocalesDir, locale);

  try {
    execSync(`WARP_LOCALE=${locale} WARP_TMP_DIR="${localeSrcDir}" npx rollup -c ./build/bundle.js`, {
      stdio: 'inherit',
      cwd: rootDir,
    });
    console.log(`✓ Built eik/${locale}/index.js\n`);
  } catch (error) {
    console.error(`✗ Failed to build bundle for locale: ${locale}`);
    process.exit(1);
  }
}

// Step 5: Clean up temporary directories
console.log('Step 5: Cleaning up...');
if (existsSync(litLocalesDir)) {
  rmSync(litLocalesDir, { recursive: true });
}
if (existsSync(join(rootDir, '.tmp'))) {
  rmSync(join(rootDir, '.tmp'), { recursive: true });
}
console.log('✓ Cleaned up temporary directories\n');

console.log('=== All bundles built successfully! ===');
