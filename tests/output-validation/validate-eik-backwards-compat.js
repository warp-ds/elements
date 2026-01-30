#!/usr/bin/env node

/**
 * Validation script for backwards-compatible eik builds
 *
 * Validates that:
 * 1. Each legacy component has an index.js file at eik/packages/{component}/index.js
 * 2. The toast API functions (toast, removeToast, updateToast) are exported from eik/index.js
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '../..');
const eikDir = join(rootDir, 'eik');
const eikPackagesDir = join(eikDir, 'packages');

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

// These API functions must be exported from eik/index.js for backwards compatibility
// Previously exported via packages/toast/index.ts in the CEM manifest
const REQUIRED_EXPORTS = ['toast', 'removeToast', 'updateToast'];

function validateLegacyComponentPaths() {
  log(`Validating ${LEGACY_COMPONENTS.length} legacy component paths...`);

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
    log(`  Found ${found.length}/${LEGACY_COMPONENTS.length} component paths`, GREEN);
  }

  return missing;
}

function validateBundleExports() {
  log(`Validating ${REQUIRED_EXPORTS.length} required exports in eik/index.js...`);

  const indexPath = join(eikDir, 'index.js');

  if (!existsSync(indexPath)) {
    log('  eik/index.js not found', RED);
    return REQUIRED_EXPORTS.map((name) => ({ name, reason: 'eik/index.js not found' }));
  }

  const indexContent = readFileSync(indexPath, 'utf-8');

  // Look for exports in the minified bundle
  // The format is: export{...,Xx as toast,...} or export{...,toast,...}
  const missing = [];
  const found = [];

  for (const exportName of REQUIRED_EXPORTS) {
    // Match patterns like "as toast" or ",toast," or "{toast," or ",toast}"
    const exportPattern = new RegExp(`(as ${exportName}[,}]|[{,]${exportName}[,}])`);

    if (exportPattern.test(indexContent)) {
      found.push(exportName);
    } else {
      missing.push({ name: exportName, reason: `'${exportName}' not found in exports` });
    }
  }

  if (found.length > 0) {
    log(`  Found ${found.length}/${REQUIRED_EXPORTS.length} required exports: ${found.join(', ')}`, GREEN);
  }

  return missing;
}

function validateEikBackwardsCompat() {
  log('');
  log('=== Backwards Compatibility Validation ===');
  log('');

  let hasErrors = false;

  // Validate legacy component paths
  const missingPaths = validateLegacyComponentPaths();
  if (missingPaths.length > 0) {
    hasErrors = true;
    log('');
    log('MISSING COMPONENT PATHS:', RED);
    for (const { component, expectedPath } of missingPaths) {
      log(`  ${component}: Expected ${expectedPath}`, RED);
    }
  }

  log('');

  // Validate bundle exports
  const missingExports = validateBundleExports();
  if (missingExports.length > 0) {
    hasErrors = true;
    log('');
    log('MISSING BUNDLE EXPORTS:', RED);
    for (const { name, reason } of missingExports) {
      log(`  ${name}: ${reason}`, RED);
    }
  }

  log('');

  if (hasErrors) {
    log('Validation FAILED', RED);
    log('');
    if (missingPaths.length > 0) {
      log('Run `pnpm build:eik-components-backwards-compat` to generate component files.', RED);
    }
    if (missingExports.length > 0) {
      log('Check build/entrypoint.js to ensure required exports are included.', RED);
    }
    process.exit(1);
  }

  log('All backwards compatibility checks passed', GREEN);
  log('Validation PASSED', GREEN);
  process.exit(0);
}

validateEikBackwardsCompat();
