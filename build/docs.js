import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

import manifest from '../dist/custom-elements.json' with { type: 'json' };

const COMPONENT_CLASS_PREFIX = 'Warp';
const DOCS_OUTPUT_DIR = new URL('../dist/docs/', import.meta.url);
const STORYBOOK_USAGE_LINK_PATTERN = /\s*\[See Storybook for usage examples\]\([^)]+\)\s*/gi;

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

const toTypeAnchorSlug = (typeName) =>
  typeName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

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

const stripStorybookUsageLinks = (value) => normalizeText(value).replace(STORYBOOK_USAGE_LINK_PATTERN, '\n').trim();

const stripMarkdownLinks = (value) => normalizeText(value).replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

const normalizeDescription = (value, fallback = 'No description available.') =>
  stripStorybookUsageLinks(value) || fallback;

const normalizeSummary = (value, fallback = 'No description available.') =>
  stripMarkdownLinks(normalizeDescription(value, fallback)).replace(/\s+/g, ' ').trim() || fallback;

const escapeTableCell = (value) => normalizeText(value).replaceAll('|', '\\|').replace(/\s+/g, ' ').trim();

const toDisplayName = (packageName) =>
  packageName
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const getSummary = (item, fallback = '') => {
  if (item.summary) return item.summary;
  if (item.description) {
    return item.description
      .split("\n")
      .at(0);
  }
  return fallback;
}

const readOptionalFile = (path) => {
  if (!existsSync(path)) {
    return '';
  }

  return readFileSync(path, { encoding: 'utf8' }).trim();
};

const getMarkdownParagraphs = (content) =>
  normalizeText(content)
    .replace(/```[\s\S]*?```/g, '\n')
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split('\n')
        .map((line) => line.trim())
        .filter(
          (line) =>
            line && !line.startsWith('#') && !line.startsWith('<') && !line.startsWith('|') && !line.startsWith('- '),
        )
        .join(' '),
    )
    .map((block) => stripMarkdownLinks(block).replace(/\s+/g, ' ').trim())
    .filter(Boolean);

const getDocsSummary = (content, identifiers = []) => {
  const paragraphs = getMarkdownParagraphs(content);
  const normalizedIdentifiers = identifiers.map((identifier) => identifier?.toLowerCase()).filter(Boolean);

  return (
    paragraphs.find((paragraph) => {
      const normalizedParagraph = paragraph.toLowerCase();
      return normalizedIdentifiers.some((identifier) => normalizedParagraph.includes(identifier));
    }) ??
    paragraphs[0] ??
    ''
  );
};

const getPackageNameFromTagName = (tagName = '') => tagName.replace(/^w-/, '');

const getDescriptionFallback = ({ declaration, packageName, usageContent }) => {
  const ownSummary = getDocsSummary(usageContent, [declaration.tagName, packageName.replaceAll('-', ' '), packageName]);
  if (ownSummary) {
    return ownSummary;
  }

  const parentPackageName = getPackageNameFromTagName(declaration.parent?.name);
  if (!parentPackageName || parentPackageName === packageName) {
    return 'No description available.';
  }

  const parentUsageContent = readOptionalFile(
    new URL(`../packages/${parentPackageName}/docs/usage.md`, import.meta.url),
  );
  return (
    getDocsSummary(parentUsageContent, [declaration.tagName, packageName.replaceAll('-', ' '), packageName]) ||
    'No description available.'
  );
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

  members
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    .forEach((item) => {
      if (item.privacy !== 'private') {
        table += `| ${normalizeText(item.attribute ?? item.name, '-')}${!item.attribute ? ' (JS only)' : ''}`;
        table += ` | ${renderType(item.type?.text, typesMap).replaceAll("|", "\\|")}`;
        table += ` | \`${normalizeText(item.default, '-')}\``;

        let summary = getSummary(item);
        if (item.deprecated && !summary) {
          summary = `**Deprecated**: ${item.deprecated}`;
        } else if (item.deprecated && summary) {
          summary = `${summary}${summary.endsWith('.') ? '' : '.'} **Deprecated**: ${item.deprecated}`;
        } else if (!summary) {
          summary = "-";
        }
        table += ` | ${summary} |\n`;
      }
    });

  return table;
};

const buildPropertyDetails = (members = [], typesMap = new Map(), hasParent = false) => {
  let details = '';

  members
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    .forEach((item) => {
      if (item.privacy !== 'private') {
        details += `####${hasParent ? '#' : ''} ${normalizeText(item.attribute ?? item.name, '-')}${!item.attribute ? ' (JS only)' : ''}\n\n`;
        if (item.deprecated) {
          details += `**Deprecated**: ${item.deprecated}\n\n`;
        }
        details += `${normalizeText(item.description, '')}\n\n`;
        details += `- Type: ${renderType(item.type?.text, typesMap)}\n`;
        details += `- Default: \`${normalizeText(item.default, '-')}\`\n\n`;
      }
    });

  return details;
};

const buildEventsDetails = (events = [], typesMap = new Map(), hasParent = false) => {
  let details = '';

  events
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    .forEach((item) => {
      details += `####${hasParent ? '#' : ''} ${normalizeText(item.name, '-')}\n\n`;
      details += `${normalizeText(item.description, '')}\n\n`;
      details += `- Type: ${renderType(item.type?.text, typesMap)}\n`;
    });

  return details;
};

const buildTypes = (typesMap = new Map(), hasParent = false) => {
  if (!typesMap.size) {
    return 'No types documented.\n';
  }

  let types = '';
  Array.from(typesMap.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .forEach(([typeName, parsedType]) => {
      types += `####${hasParent ? '#' : ''} ${typeName}\n\n`;
      types += `\`${normalizeText(parsedType, 'unknown')}\`\n\n`;
    });

  return types;
};

const components = [];
const docsIndexEntries = [];

const addDocsIndexEntry = ({ description, exportPath, packageName, tagName }) => {
  docsIndexEntries.push({
    description: normalizeSummary(description),
    docFile: `${packageName}.md`,
    exportPath,
    name: toDisplayName(packageName),
    packageName,
    tagName,
  });
};

const buildDocsIndex = () => {
  const rows = docsIndexEntries
    .sort((a, b) => a.packageName.localeCompare(b.packageName))
    .map((entry) => {
      const api = entry.tagName ? `\`<${entry.tagName}>\`` : `\`${entry.exportPath}\``;
      const docs = `[${entry.docFile}](./${entry.packageName}/${entry.docFile})`;
      return `| ${escapeTableCell(entry.name)} | ${api} | \`${entry.packageName}\` | ${escapeTableCell(entry.description)} | ${docs} |`;
    })
    .join('\n');

  let index = '# Warp Elements Component Documentation\n\n';
  index +=
    'Generated by `pnpm build:docs`. This file indexes the Markdown documentation shipped with `@warp-ds/elements`.\n\n';
  index += '- Package export: `@warp-ds/elements/docs`\n';
  index += '- Component docs export pattern: `@warp-ds/elements/docs/<component>/<component>.md`\n\n';
  index += '## Components\n\n';
  index += '| Component | Element / API | Package | Summary | Docs |\n';
  index += '|-|-|-|-|-|\n';
  index += `${rows}\n`;

  writeFileSync(new URL('./index.md', DOCS_OUTPUT_DIR), index, { encoding: 'utf8' });
};

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
  const docsDir = new URL(`./${packageName}/`, DOCS_OUTPUT_DIR);
  const docsDirPath = docsDir.pathname;

  if (!existsSync(docsDirPath)) {
    mkdirSync(docsDirPath, { recursive: true });
  }

  const hasParent = Boolean(declaration.parent);

  try {
    copyFileSync(new URL(`../packages/${packageName}/docs/usage.md`, import.meta.url), new URL('./usage.md', docsDir));
  } catch (error) {
    if (!hasParent) {
      // We assume the parent's docs cover usage, a11y and examples
      console.warn(`Warning: Could not copy some documentation files for ${packageName}. Please ensure that usage.md, accessibility.md, and examples.md exist in the ${packageName}/docs directory.`);
    }
  }
  try {
    copyFileSync(
      new URL(`../packages/${packageName}/docs/accessibility.md`, import.meta.url),
      new URL('./accessibility.md', docsDir),
    );
  } catch (error) {
    if (!hasParent) {
      console.warn(`Warning: Could not copy some documentation files for ${packageName}. Please ensure that usage.md, accessibility.md, and examples.md exist in the ${packageName}/docs directory.`);
    }
  }
  try {
    copyFileSync(
      new URL(`../packages/${packageName}/docs/examples.md`, import.meta.url),
      new URL('./examples.md', docsDir),
    );
  } catch (error) {
    if (!hasParent) {
      console.warn(`Warning: Could not copy some documentation files for ${packageName}. Please ensure that usage.md, accessibility.md, and examples.md exist in the ${packageName}/docs directory.`);
    }
  }

  try {
    copyFileSync(new URL(`../packages/${packageName}/docs/styling.md`, import.meta.url), new URL('./styling.md', docsDir));
  } catch (error) {
    if (!hasParent) {
      // We assume the parent's docs cover usage, a11y, styling and examples
      console.warn(`Warning: Could not copy some documentation files for ${packageName}. Please ensure that usage.md, accessibility.md, styling.md, and examples.md exist in the ${packageName}/docs directory.`);
    }
  }

  const usageContent = readOptionalFile(new URL('./usage.md', docsDir));
  const accessibilityContent = readOptionalFile(new URL('./accessibility.md', docsDir));
  const examplesContent = readOptionalFile(new URL('./examples.md', docsDir));
  const stylingContent = readOptionalFile(new URL('./styling.md', docsDir));

  const componentName = declaration.name.replace(COMPONENT_CLASS_PREFIX, '');
  const description = normalizeDescription(
    declaration.description,
    getDescriptionFallback({ declaration, packageName, usageContent }),
  );

  const typesMap = buildTypesMap([...declaration.members, ...(declaration.events || [])]);
  const propertyTable = buildPropertyTable(declaration.members, typesMap);
  const propertyDetails = buildPropertyDetails(declaration.members, typesMap, hasParent);
  const types = buildTypes(typesMap, hasParent);

  let apiDocs = `##${hasParent ? '#' : ''} \`<${declaration.tagName}>\` API\n\n`;
  if (!hasParent) {
    // don't repeat the message for child components
    apiDocs += 'Unless otherwise noted all properties are HTML attributes (as opposed to JavaScript object properties).\n\n';
  }
  apiDocs += `###${hasParent ? '#' : ''} Properties\n\n${propertyTable}\n`;
  apiDocs += `###${hasParent ? '#' : ''} Property Details\n\n${propertyDetails || 'No public fields documented.\n\n'}`;

  if (declaration.events) {
    const eventsDetails = buildEventsDetails(declaration.events, typesMap, hasParent);
    apiDocs += `###${hasParent ? '#' : ''} Events\n\n`;
    apiDocs += `${eventsDetails}\n\n`;
  }

  if (typesMap.size) {
    apiDocs += `###${hasParent ? '#' : ''} Types\n\n${types}`;
  }

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
  
  if (stylingContent) {
    generatedDocument += `${stylingContent}\n\n`;
  }

  generatedDocument += apiDocs;

  writeFileSync(new URL('./api.md', docsDir), apiDocs, { encoding: 'utf8' });
  writeFileSync(new URL(`./${packageName}.md`, docsDir), generatedDocument, { encoding: 'utf8' });

  addDocsIndexEntry({
    description,
    exportPath: `@warp-ds/elements/components/${packageName}`,
    packageName,
    tagName: declaration.tagName,
  });
});

// toast gets some custom treatment what with its JS-only API,
// custom element manifest isn't available
(function buildToastDocs() {
  const docsDir = new URL('./toast/', DOCS_OUTPUT_DIR);
  const docsDirPath = docsDir.pathname;
  if (!existsSync(docsDirPath)) {
    mkdirSync(docsDirPath, { recursive: true });
  }
  copyFileSync(new URL('../packages/toast/docs/accessibility.md', import.meta.url), new URL('./accessibility.md', docsDir));
  copyFileSync(new URL('../packages/toast/docs/usage.md', import.meta.url), new URL('./usage.md', docsDir));
  copyFileSync(new URL('../packages/toast/docs/examples.md', import.meta.url), new URL('./examples.md', docsDir));
  copyFileSync(new URL('../packages/toast/docs/api.md', import.meta.url), new URL('./api.md', docsDir));

  const usageContent = readOptionalFile(new URL('./usage.md', docsDir));
  const accessibilityContent = readOptionalFile(new URL('./accessibility.md', docsDir));
  const examplesContent = readOptionalFile(new URL('./examples.md', docsDir));
  const apiContent = readOptionalFile(new URL('./api.md', docsDir));


  let generatedDocument = '# Toast\n\n';
  generatedDocument += '## Description\n\nToasts are brief user feedback messages that overlay content.\n\n';

  generatedDocument += `${usageContent}\n\n`;
  generatedDocument += `${accessibilityContent}\n\n`;
  generatedDocument += `${examplesContent}\n\n`;
  generatedDocument += `${apiContent}\n\n`;

  writeFileSync(new URL('./toast.md', docsDir), generatedDocument, { encoding: 'utf8' });

  addDocsIndexEntry({
    description: 'Toasts are brief user feedback messages that overlay content.',
    exportPath: '@warp-ds/elements/toast',
    packageName: 'toast',
  });
})();

buildDocsIndex();

console.log(`Generated docs for ${components.length} components and ${docsIndexEntries.length} index entries.`);
