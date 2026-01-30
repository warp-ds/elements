#!/usr/bin/env node

/**
 * Validation script for backwards-compatible eik component paths
 *
 * Validates that after running `build:eik-components-backwards-compat`,
 * each legacy component has an index.js file at eik/packages/{component}/index.js
 */

import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '../..');
const eikPackagesDir = join(rootDir, 'eik/packages');

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const NC = '\x1b[0m';

function log(message, color = NC) {
  console.log(`${color}${message}${NC}`);
}

// These are the 14 legacy components that must have backwards-compatible paths
// This list should NOT be modified - new components should not be added here
const LEGACY_COMPONENTS = [
  'affix',
  'alert',
  'attention',
  'badge',
  'box',
  'breadcrumbs',
  'button',
  'card',
  'expandable',
  'modal',
  'pill',
  'select',
  'textfield',
  'toast',
];

function validateEikBackwardsCompat() {
  log(`Validating ${LEGACY_COMPONENTS.length} legacy component paths...`);
  log('');

  const missing = [];
  const found = [];

  for (const component of LEGACY_COMPONENTS) {
    const expectedPath = join(eikPackagesDir, component, 'index.js');

    if (existsSync(expectedPath)) {
      found.push(component);
    } else {
      missing.push({ component, expectedPath });
    }
  }

  // Report found components
  if (found.length > 0) {
    log(`Found ${found.length}/${LEGACY_COMPONENTS.length} components:`, GREEN);
    for (const component of found) {
      log(`  eik/packages/${component}/index.js`, GREEN);
    }
    log('');
  }

  // Report missing components
  if (missing.length > 0) {
    log('MISSING:', RED);
    for (const { component, expectedPath } of missing) {
      log(`  ${component}: Expected ${expectedPath}`, RED);
    }
    log('');
    log('Validation FAILED', RED);
    log('Run `pnpm build:eik-components-backwards-compat` to generate the files.', RED);
    process.exit(1);
  }

  log('All legacy component paths are correct', GREEN);
  log('Validation PASSED', GREEN);
  process.exit(0);
}

validateEikBackwardsCompat();
