#!/usr/bin/env node

/**
 * Validation script for backwards-compatible eik builds
 *
 * Validates that:
 * 1. Each legacy component has an index.js file at eik/packages/{component}/index.js
 * 2. The toast API functions (toast, removeToast, updateToast) are exported from eik/index.js
 * 3. The toast API functions are exported from eik/api.js
 * 4. The ./toast export in package.json has correct types and import fields
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

// These API functions must be exported for backwards compatibility
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

  if (found.length > 0) {
    log(`  Found ${found.length}/${LEGACY_COMPONENTS.length} component paths`, GREEN);
  }

  return missing;
}

function validateFileExports(filePath, displayName) {
  log(`Validating ${REQUIRED_EXPORTS.length} required exports in ${displayName}...`);

  if (!existsSync(filePath)) {
    log(`  ${displayName} not found`, RED);
    return REQUIRED_EXPORTS.map((name) => ({ name, reason: `${displayName} not found` }));
  }

  const content = readFileSync(filePath, 'utf-8');

  const missing = [];
  const found = [];

  for (const exportName of REQUIRED_EXPORTS) {
    // Match patterns like "as toast" or ",toast," or "{toast," or ",toast}"
    const exportPattern = new RegExp(`(as ${exportName}[,}]|[{,]${exportName}[,}])`);

    if (exportPattern.test(content)) {
      found.push(exportName);
    } else {
      missing.push({ name: exportName, reason: `'${exportName}' not found in ${displayName}` });
    }
  }

  if (found.length > 0) {
    log(`  Found ${found.length}/${REQUIRED_EXPORTS.length} required exports: ${found.join(', ')}`, GREEN);
  }

  return missing;
}

function validatePackageJsonExports() {
  log('Validating package.json exports...');

  const packageJsonPath = join(rootDir, 'package.json');

  if (!existsSync(packageJsonPath)) {
    log('  package.json not found', RED);
    return [{ field: './toast', reason: 'package.json not found' }];
  }

  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  const exports = packageJson.exports || {};

  const errors = [];

  // Check that ./toast export exists and has correct structure
  const toastExport = exports['./toast'];
  const expectedImport = './dist/api.js';
  const expectedTypes = './dist/packages/toast/api.d.ts';

  if (!toastExport) {
    errors.push({ field: './toast', reason: 'export not found in package.json' });
  } else if (typeof toastExport === 'string') {
    // Old format without types - this is an error now
    errors.push({
      field: './toast',
      reason: `must be an object with "types" and "import" fields, got string "${toastExport}"`,
    });
  } else {
    // Check import field
    if (toastExport.import !== expectedImport) {
      errors.push({
        field: './toast.import',
        reason: `expected "${expectedImport}", got "${toastExport.import}"`,
      });
    } else {
      log(`  "./toast".import correctly points to "${expectedImport}"`, GREEN);
    }

    // Check types field
    if (!toastExport.types) {
      errors.push({
        field: './toast.types',
        reason: 'missing "types" field - TypeScript users will get errors',
      });
    } else if (toastExport.types !== expectedTypes) {
      errors.push({
        field: './toast.types',
        reason: `expected "${expectedTypes}", got "${toastExport.types}"`,
      });
    } else {
      log(`  "./toast".types correctly points to "${expectedTypes}"`, GREEN);
    }
  }

  return errors;
}

function validateEikBackwardsCompat() {
  log('');
  log('=== Backwards Compatibility Validation ===');
  log('');

  let hasErrors = false;
  const allErrors = [];

  // 1. Validate legacy component paths
  const missingPaths = validateLegacyComponentPaths();
  if (missingPaths.length > 0) {
    hasErrors = true;
    allErrors.push({
      category: 'MISSING COMPONENT PATHS',
      errors: missingPaths.map(({ component, expectedPath }) => `${component}: Expected ${expectedPath}`),
      fix: 'Run `pnpm build:eik-components-backwards-compat` to generate component files.',
    });
  }

  log('');

  // 2. Validate eik/index.js exports
  const missingIndexExports = validateFileExports(join(eikDir, 'index.js'), 'eik/index.js');
  if (missingIndexExports.length > 0) {
    hasErrors = true;
    allErrors.push({
      category: 'MISSING eik/index.js EXPORTS',
      errors: missingIndexExports.map(({ name, reason }) => `${name}: ${reason}`),
      fix: 'Check build/entrypoint.js to ensure required exports are included.',
    });
  }

  log('');

  // 3. Validate eik/api.js exports
  const missingApiExports = validateFileExports(join(eikDir, 'api.js'), 'eik/api.js');
  if (missingApiExports.length > 0) {
    hasErrors = true;
    allErrors.push({
      category: 'MISSING eik/api.js EXPORTS',
      errors: missingApiExports.map(({ name, reason }) => `${name}: ${reason}`),
      fix: 'Check build/components-eik.js to ensure api.js is built correctly.',
    });
  }

  log('');

  // 4. Validate package.json exports
  const packageJsonErrors = validatePackageJsonExports();
  if (packageJsonErrors.length > 0) {
    hasErrors = true;
    allErrors.push({
      category: 'INVALID package.json EXPORTS',
      errors: packageJsonErrors.map(({ field, reason }) => `${field}: ${reason}`),
      fix: 'Update package.json "./toast" export to include both "types" and "import" fields.',
    });
  }

  log('');

  if (hasErrors) {
    for (const { category, errors, fix } of allErrors) {
      log(`${category}:`, RED);
      for (const error of errors) {
        log(`  ${error}`, RED);
      }
      log(`  Fix: ${fix}`, RED);
      log('');
    }
    log('Validation FAILED', RED);
    process.exit(1);
  }

  log('All backwards compatibility checks passed', GREEN);
  log('Validation PASSED', GREEN);
  process.exit(0);
}

validateEikBackwardsCompat();
