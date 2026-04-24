import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

import manifest from '../dist/custom-elements.json' with { type: 'json' };

const COMPONENT_CLASS_PREFIX = 'Warp';

const PRIMITIVE_TYPES = new Set([
  'string',
  'number',
  'boolean',
  'any',
  'unknown',
  'void',
  'undefined',
  'null',
  'never',
  'object',
  'symbol',
  'bigint',
]);

const toTypeAnchorSlug = (typeName) => typeName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const shouldLinkType = (normalizedTypeName, typesMap) => {
  if (!normalizedTypeName) {
    return false;
  }

  if (PRIMITIVE_TYPES.has(normalizedTypeName.toLowerCase())) {
    return false;
  }

  return typesMap.has(normalizedTypeName);
};

const renderType = (typeName, typesMap) => {
  const normalized = normalizeText(typeName, 'unknown').trim();
  if (shouldLinkType(normalized, typesMap)) {
    return `[\`${normalized}\`](#${toTypeAnchorSlug(normalized)})`;
  }

  return `\`${normalized}\``;
};

const normalizeText = (value, fallback = '') => {
  if (value === undefined || value === null) {
    return fallback;
  }

  return String(value);
};

const readOptionalFile = (path) => {
  if (!existsSync(path)) {
    return '';
  }

  return readFileSync(path, { encoding: 'utf8' }).trim();
};

const buildTypesMap = (members = []) => {
  const map = new Map();

  members.forEach((item) => {
    if (!item?.type?.text || !item?.parsedType?.text) {
      return;
    }

    const typeName = normalizeText(item.type.text, '').trim();
    if (!typeName || PRIMITIVE_TYPES.has(typeName.toLowerCase())) {
      return;
    }

    if (!map.has(typeName)) {
      map.set(typeName, item.parsedType.text);
    }
  });

  return map;
};

const buildPropertyTable = (members = [], typesMap = new Map()) => {
  let table = '| Name | Type | Default | Summary |\n|-|-|-|-|\n';

  members.forEach((item) => {
    if (item.kind === 'field' && item.privacy !== 'private') {
      table += `| ${normalizeText(item.name, '-')}`;
      table += ` | ${renderType(item.type?.text, typesMap)}`;
      table += ` | \`${normalizeText(item.default, '-')}\``;
      table += ` | ${normalizeText(item.summary, '-')} |\n`;
    }
  });

  return table;
};

const buildPropertyDetails = (members = [], typesMap = new Map()) => {
  let details = '';

  members.forEach((item) => {
    if (item.kind === 'field' && item.privacy !== 'private') {
      details += `#### ${normalizeText(item.name, '-')}\n\n`;
      details += `${normalizeText(item.description, '')}\n\n`;
      details += `- Type: ${renderType(item.type?.text, typesMap)}\n`;
      details += `- Default: \`${normalizeText(item.default, '-')}\`\n\n`;
    }
  });

  return details;
};

const buildTypes = (typesMap = new Map()) => {
  if (!typesMap.size) {
    return 'No types documented.\n';
  }

  let types = '';
  Array.from(typesMap.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .forEach(([typeName, parsedType]) => {
      types += `#### ${typeName}\n\n`;
      types += `\`${normalizeText(parsedType, 'unknown')}\`\n\n`;
    });

  return types;
};

const components = [];

manifest.modules.forEach((module) => {
  module.declarations?.forEach((declaration) => {
    if (!declaration.tagName || !declaration.name?.startsWith(COMPONENT_CLASS_PREFIX)) {
      return;
    }

    const packageName = module.path.split('/')[1];
    if (!packageName) {
      return;
    }

    components.push({
      declaration,
      packageName,
    });
  });
});

components.forEach(({ declaration, packageName }) => {
  const docsDir = new URL(`../dist/docs/${packageName}/`, import.meta.url);
  const docsDirPath = docsDir.pathname;

  if (!existsSync(docsDirPath)) {
    mkdirSync(docsDirPath, { recursive: true });
  }

  try {
    copyFileSync(new URL(`../packages/${packageName}/docs/usage.md`, import.meta.url), new URL('./usage.md', docsDir));
  } catch (error) {
    console.warn(`Warning: Could not copy some documentation files for ${packageName}. Please ensure that usage.md, accessibility.md, and examples.md exist in the ${packageName}/docs directory.`);
  }
  try {
    copyFileSync(new URL(`../packages/${packageName}/docs/accessibility.md`, import.meta.url), new URL('./accessibility.md', docsDir));

  } catch (error) {
    console.warn(`Warning: Could not copy some documentation files for ${packageName}. Please ensure that usage.md, accessibility.md, and examples.md exist in the ${packageName}/docs directory.`);
  }
  try {
    copyFileSync(new URL(`../packages/${packageName}/docs/examples.md`, import.meta.url), new URL('./examples.md', docsDir));
  } catch (error) {
    console.warn(`Warning: Could not copy some documentation files for ${packageName}. Please ensure that usage.md, accessibility.md, and examples.md exist in the ${packageName}/docs directory.`);
  }

  const usageContent = readOptionalFile(new URL('./usage.md', docsDir));
  const accessibilityContent = readOptionalFile(new URL('./accessibility.md', docsDir));
  const examplesContent = readOptionalFile(new URL('./examples.md', docsDir));

  const componentName = declaration.name.replace(COMPONENT_CLASS_PREFIX, '');
  const description = normalizeText(declaration.description, 'No description available.');

  const typesMap = buildTypesMap(declaration.members);
  const propertyTable = buildPropertyTable(declaration.members, typesMap);
  const propertyDetails = buildPropertyDetails(declaration.members, typesMap);
  const types = buildTypes(typesMap);

  let apiDocs = '## API Documentation\n\n';
  apiDocs += `### Properties\n\n${propertyTable}\n`;
  apiDocs += `### Property Details\n\n${propertyDetails || 'No public fields documented.\n\n'}`;
  apiDocs += `### Types\n\n${types}`;

  let generatedDocument = `# ${componentName} (${declaration.tagName})\n\n`;
  generatedDocument += `## Description\n\n${description}\n\n`;

  if (usageContent) {
    generatedDocument += `${usageContent}\n\n`;
  }

  if (accessibilityContent) {
    generatedDocument += `${accessibilityContent}\n\n`;
  }

  if (examplesContent) {
    generatedDocument += `${examplesContent}\n\n`;
  }

  generatedDocument += apiDocs;

  writeFileSync(new URL('./api.md', docsDir), apiDocs, { encoding: 'utf8' });
  writeFileSync(new URL(`./${packageName}.md`, docsDir), generatedDocument, { encoding: 'utf8' });
});

console.log(`Generated docs for ${components.length} components.`);
