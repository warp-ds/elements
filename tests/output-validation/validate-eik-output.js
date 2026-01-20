#!/usr/bin/env node

/**
 * Output validation script for eik build output
 *
 * Validates that:
 * 1. eik/index.js includes a customElements.define for every component in the manifest
 * 2. Each manifest component has exactly 2 matching :not(:defined) calls in eik/styles.css
 *    - One individual rule: `w-button:not(:defined){opacity:0;}`
 *    - One in the .warp-cloak:has() selector
 * 3. No additional tags are in styles.css that aren't registered in index.js
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '../..');
const eikDir = join(rootDir, 'eik');
const distDir = join(rootDir, 'dist');

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const NC = '\x1b[0m';

function log(message, color = NC) {
  console.log(`${color}${message}${NC}`);
}

/**
 * Get the custom element tag name from a manifest entry
 * (Matches the logic in build/utils.js)
 */
function getTagName(entry) {
  if (entry.tagName) {
    return entry.tagName;
  }

  if (entry.customElement?.tagName) {
    return entry.customElement.tagName;
  }

  if (Array.isArray(entry.declarations)) {
    for (const decl of entry.declarations) {
      if (decl.tagName) {
        return decl.tagName;
      }
    }
  }

  return null;
}

function validateEikOutput() {
  const indexPath = join(eikDir, 'index.js');
  const stylesPath = join(eikDir, 'styles.css');
  const manifestPath = join(distDir, 'custom-elements.json');

  // Check files exist
  const missingFiles = [];
  if (!existsSync(indexPath)) missingFiles.push(indexPath);
  if (!existsSync(stylesPath)) missingFiles.push(stylesPath);
  if (!existsSync(manifestPath)) missingFiles.push(manifestPath);

  if (missingFiles.length > 0) {
    log('Error: Required files not found. Run the build first.', RED);
    for (const file of missingFiles) {
      log(`  Missing: ${file}`, RED);
    }
    process.exit(1);
  }

  const indexContent = readFileSync(indexPath, 'utf-8');
  const stylesContent = readFileSync(stylesPath, 'utf-8');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));

  // Get expected components from manifest (matching cloak.js logic)
  const manifestComponents = new Set(
    manifest.modules.map(getTagName).filter(Boolean)
  );

  log(`Found ${manifestComponents.size} components in custom-elements.json manifest`);

  // Extract all customElements.define calls from index.js
  const defineRegex = /customElements\.define\("(w-[^"]+)"/g;
  const definedElements = new Set();
  let match;

  while ((match = defineRegex.exec(indexContent)) !== null) {
    definedElements.add(match[1]);
  }

  log(`Found ${definedElements.size} customElements.define calls in eik/index.js`);

  // Extract all :not(:defined) selectors from styles.css
  const notDefinedRegex = /(w-[a-z0-9-]+):not\(:defined\)/g;
  const notDefinedCounts = new Map();

  while ((match = notDefinedRegex.exec(stylesContent)) !== null) {
    const tagName = match[1];
    notDefinedCounts.set(tagName, (notDefinedCounts.get(tagName) || 0) + 1);
  }

  log(`Found ${notDefinedCounts.size} unique components with :not(:defined) in eik/styles.css`);
  log('');

  let hasErrors = false;
  const errors = [];
  const warnings = [];

  // Validate manifest components are registered in index.js
  for (const tagName of manifestComponents) {
    if (!definedElements.has(tagName)) {
      errors.push(`${tagName}: In manifest but missing customElements.define in eik/index.js`);
      hasErrors = true;
    }
  }

  // Validate manifest components have exactly 2 :not(:defined) entries in styles.css
  for (const tagName of manifestComponents) {
    const count = notDefinedCounts.get(tagName) || 0;

    if (count === 0) {
      errors.push(`${tagName}: Missing from styles.css (expected 2 :not(:defined) rules, found 0)`);
      hasErrors = true;
    } else if (count === 1) {
      errors.push(`${tagName}: Only 1 :not(:defined) rule found in styles.css (expected 2)`);
      hasErrors = true;
    } else if (count > 2) {
      warnings.push(`${tagName}: Found ${count} :not(:defined) rules in styles.css (expected 2)`);
    }
  }

  // Check for orphaned :not(:defined) entries in styles.css that aren't registered in index.js
  for (const [tagName] of notDefinedCounts) {
    if (!definedElements.has(tagName)) {
      errors.push(`${tagName}: Found in styles.css but not registered via customElements.define in index.js`);
      hasErrors = true;
    } else if (!manifestComponents.has(tagName)) {
      warnings.push(`${tagName}: Found in styles.css but not in manifest`);
    }
  }

  // Report results
  if (errors.length > 0) {
    log('ERRORS:', RED);
    for (const error of errors) {
      log(`  ${error}`, RED);
    }
    log('');
  }

  if (warnings.length > 0) {
    log('WARNINGS:', YELLOW);
    for (const warning of warnings) {
      log(`  ${warning}`, YELLOW);
    }
    log('');
  }

  if (hasErrors) {
    log('Validation FAILED', RED);
    process.exit(1);
  }

  log(`All ${manifestComponents.size} manifest components are properly registered and styled`, GREEN);
  log('Validation PASSED', GREEN);
  process.exit(0);
}

validateEikOutput();
