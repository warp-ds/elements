/**
 * Converts camelCase to kebab-case.
 * @example camelToKebab('openOnFocus') // 'open-on-focus'
 */
function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Massages storybook args before being spread to HTML attributes.
 *
 * - Empty strings are treated as not set.
 * - Boolean false don't get set.
 * - camelCase property names are converted to kebab-case attribute names.
 *
 * @example
 * ```ts
 * import { html } from 'lit';
 * import { spread } from '@open-wc/lit-helpers';
 * import { prespread } from '../../.storybook/utilities.js';
 *
 * type Args = {
 *   required: boolean;
 * };
 *
 * const meta: Meta<Args> = {
 *   component: 'w-component',
 *   render(args) {
 *     return html`<w-component ${spread(prespread(args))}></w-component>`;
 *   },
 *   argTypes: {
 *     required: { type: 'boolean' },
 *   },
 * };
 * ```
 */
export function prespread(args: Record<string, unknown>): Record<string, unknown> {
  const newArgs: Record<string, unknown> = {};

  for (const field of Object.keys(args)) {
    const value = args[field];

    // Skip empty strings
    if (value === '') {
      continue;
    }

    // Convert camelCase to kebab-case for attribute names
    const attrName = camelToKebab(field);

    // Add Lit syntax for boolean attributes
    if (typeof value === 'boolean') {
      newArgs[`?${attrName}`] = value;
      continue;
    }

    // Add Lit syntax for complex properties (keep camelCase for properties)
    if (typeof value === 'object') {
      newArgs[`.${field}`] = value;
      continue;
    }

    // String and number values use kebab-case attribute names
    newArgs[attrName] = value;
  }

  return newArgs;
}
