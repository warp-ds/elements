#!/usr/bin/env node
// Converts Lingui .po files to XLIFF format for @lit/localize.
// Reads all .po files, consolidates translations per locale, outputs XLIFF files.

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const packagesDir = join(rootDir, 'packages');
const xliffDir = join(rootDir, 'xliff');

const sourceLocale = 'en';
const targetLocales = ['nb', 'fi', 'da', 'sv'];

// Parse a .po file and extract messages.
// Returns an object: { [msgid]: { msgstr, comment } }
function parsePOFile(content) {
  const messages = {};
  const entries = content.split(/\n\n+/);

  for (const entry of entries) {
    const lines = entry.trim().split('\n');
    if (lines.length === 0) continue;

    let msgid = '';
    let msgstr = '';
    let comment = '';
    let inMsgid = false;
    let inMsgstr = false;

    for (const line of lines) {
      // Extract comments (lines starting with #.)
      if (line.startsWith('#.')) {
        const commentText = line.slice(2).trim();
        if (!commentText.includes('js-lingui-explicit-id')) {
          comment = comment ? `${comment} ${commentText}` : commentText;
        }
      }
      // msgid line
      else if (line.startsWith('msgid ')) {
        inMsgid = true;
        inMsgstr = false;
        msgid = line.slice(6).trim().replace(/^"|"$/g, '');
      }
      // msgstr line
      else if (line.startsWith('msgstr ')) {
        inMsgid = false;
        inMsgstr = true;
        msgstr = line.slice(7).trim().replace(/^"|"$/g, '');
      }
      // Continuation lines (wrapped strings)
      else if (line.startsWith('"') && line.endsWith('"')) {
        const value = line.slice(1, -1);
        if (inMsgid) {
          msgid += value;
        } else if (inMsgstr) {
          msgstr += value;
        }
      }
    }

    // Skip header entry (empty msgid) and entries without translations
    if (msgid && msgstr) {
      messages[msgid] = { msgstr, comment };
    }
  }

  return messages;
}

// Find all packages with locales directories.
function findPackagesWithLocales() {
  const packages = [];
  const packageDirs = readdirSync(packagesDir, { withFileTypes: true });

  for (const dir of packageDirs) {
    if (!dir.isDirectory()) continue;
    const localesPath = join(packagesDir, dir.name, 'locales');
    if (existsSync(localesPath)) {
      packages.push(dir.name);
    }
  }

  return packages;
}

// Collect all messages for a given locale from all packages.
function collectMessagesForLocale(packages, locale) {
  const allMessages = {};

  for (const pkg of packages) {
    const poPath = join(packagesDir, pkg, 'locales', locale, 'messages.po');
    if (!existsSync(poPath)) {
      console.warn(`  Warning: Missing ${locale} translations for ${pkg}`);
      continue;
    }

    const content = readFileSync(poPath, 'utf-8');
    const messages = parsePOFile(content);

    for (const [id, data] of Object.entries(messages)) {
      if (allMessages[id] && allMessages[id].msgstr !== data.msgstr) {
        console.warn(`  Warning: Duplicate message ID "${id}" with different translations`);
      }
      allMessages[id] = data;
    }
  }

  return allMessages;
}

// Escape XML special characters.
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Generate XLIFF content for a target locale.
function generateXLIFF(sourceMessages, targetMessages, targetLocale) {
  const transUnits = [];

  // Sort by message ID for consistent output
  const sortedIds = Object.keys(sourceMessages).sort();

  for (const id of sortedIds) {
    const source = sourceMessages[id];
    const target = targetMessages[id];

    if (!target) {
      console.warn(`  Warning: Missing ${targetLocale} translation for "${id}"`);
      continue;
    }

    let unit = `      <trans-unit id="${escapeXml(id)}">
        <source>${escapeXml(source.msgstr)}</source>
        <target>${escapeXml(target.msgstr)}</target>`;

    if (source.comment) {
      unit += `
        <note>${escapeXml(source.comment)}</note>`;
    }

    unit += `
      </trans-unit>`;

    transUnits.push(unit);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file target-language="${targetLocale}" source-language="${sourceLocale}" original="lit-localize-inputs" datatype="plaintext">
    <body>
${transUnits.join('\n')}
    </body>
  </file>
</xliff>
`;
}

// Main execution
console.log('Converting Lingui .po files to XLIFF format...\n');

// Find all packages with locales
const packages = findPackagesWithLocales();
console.log(`Found ${packages.length} packages with translations:`);
packages.forEach(pkg => console.log(`  - ${pkg}`));
console.log('');

// Ensure xliff directory exists
if (!existsSync(xliffDir)) {
  mkdirSync(xliffDir, { recursive: true });
}

// Collect source (English) messages
console.log(`Collecting source messages (${sourceLocale})...`);
const sourceMessages = collectMessagesForLocale(packages, sourceLocale);
console.log(`  Found ${Object.keys(sourceMessages).length} messages\n`);

// Generate XLIFF for each target locale
for (const locale of targetLocales) {
  console.log(`Processing ${locale}...`);
  const targetMessages = collectMessagesForLocale(packages, locale);
  const xliff = generateXLIFF(sourceMessages, targetMessages, locale);

  const outputPath = join(xliffDir, `${locale}.xlf`);
  writeFileSync(outputPath, xliff);
  console.log(`  Wrote ${outputPath}\n`);
}

console.log('Conversion complete!');
console.log(`\nGenerated XLIFF files in: ${xliffDir}`);
