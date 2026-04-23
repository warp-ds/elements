import { readFileSync, writeFileSync } from 'node:fs';

import manifest from '../../../dist/custom-elements.json' with { type: 'json' };

const name = 'WarpAlert';

let meta;
manifest.modules.forEach((module) => {
  if (module.declarations) {
    // console.log(module.declarations);
    module.declarations.forEach((declaration) => {
      if (declaration.name === name) {
        meta = declaration;
      }
    });
  }
});

const componentName = meta?.name.replace('Warp', '');
const cemDescription = meta?.description;
const usageContent = readFileSync(new URL('./usage.md', import.meta.url), { encoding: 'utf8' });
const accessibilityContent = readFileSync(new URL('./accessibility.md', import.meta.url), { encoding: 'utf8' });
const examplesContent = readFileSync(new URL('./examples.md', import.meta.url), { encoding: 'utf8' });

let cemPropertyTable = '| Name | Type | Default | Description |\n|-|-|-|-|\n';
meta.members.forEach((item) => {
    if (item.kind === 'field' && item.privacy !== 'private') {
        cemPropertyTable += `| ${item.name} | \`${item.type.text}\` | \`${item.default}\` | ${item.description} |\n`;
    }
});

let cemPropertyDescriptions = '';
meta.members.forEach((item) => {
    console.log('item', item);
    if (item.kind === 'field' && item.privacy !== 'private') {
        cemPropertyDescriptions += `#### ${item.name}\n\n`;
        cemPropertyDescriptions += `${item.description}\n\n`;

        console.log('item.type', item.type);
        cemPropertyDescriptions += `- Type: \`${item.type.text}\`\n`;
        cemPropertyDescriptions += `- Default: \`${item.default}\`\n`;
        cemPropertyDescriptions += '\n';
    }
});

let cemTypesDescriptions = '';
meta.members.forEach((item) => {
    if (item.parsedType) {
        cemTypesDescriptions += `${item.type.text} - ${item.parsedType.text}\n`;
    }
});

let generatedDocument = `# ${componentName} (${meta.tagName})\n\n`;

generatedDocument += `## Description\n\n${cemDescription}\n\n`;

generatedDocument += `${usageContent}\n\n`;

generatedDocument += `${accessibilityContent}\n\n`;

generatedDocument += `${examplesContent}\n\n`;

let apiDocs = `## API Documentation\n\n`;
apiDocs += `### Properties\n\n${cemPropertyTable}\n\n`;
apiDocs += `### Property Details\n\n${cemPropertyDescriptions}\n\n`;
apiDocs += `### Types${cemTypesDescriptions}\n\n`;

generatedDocument += apiDocs;

writeFileSync(new URL(`./api.md`, import.meta.url), apiDocs, { encoding: 'utf8' });
writeFileSync(new URL(`./${componentName.replace('Warp', '').toLowerCase()}.md`, import.meta.url), generatedDocument, { encoding: 'utf8' });

