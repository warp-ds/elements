/**
 * Lint check: detect css`` tagged template literals with backslash-escaped selectors.
 *
 * @rollup/plugin-swc corrupts backslash escaping inside css`` tagged template
 * literals (e.g. \\[ becomes \[), breaking CSS selectors like .bg-\[--w-color-...\].
 * Files with backslash selectors must use unsafeCSS() instead.
 *
 * This check becomes unnecessary once UnoCSS migration to hand-written styles
 * is complete, as hand-written styles don't use backslash-escaped selectors.
 *
 * Usage: node build/lint-css-escaping.js
 */

import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const files = globSync('packages/**/*style*.ts', { cwd: root, ignore: ['**/node_modules/**', '**/*.test.*', '**/*.stories.*'] });

let failed = false;

for (const file of files) {
  const content = readFileSync(resolve(root, file), 'utf8');

  // Extract all css`` tagged template literal bodies
  const cssTagRegex = /\bcss`([^`]*)`/g;
  let match;
  while ((match = cssTagRegex.exec(content)) !== null) {
    const cssBody = match[1];
    if (/\\[:\[\]()]/.test(cssBody)) {
      console.error(`ERROR: ${file} has a css\`\` block with backslash-escaped selectors.`);
      console.error('       SWC will corrupt these. Use unsafeCSS() instead.');
      console.error();
      failed = true;
      break;
    }
  }
}

if (failed) {
  console.error('Fix: replace css`` with unsafeCSS() for files with backslash selectors.');
  console.error('See PR #685 for context.');
  process.exit(1);
} else {
  console.log('OK: no css`` blocks with backslash selectors found.');
}
