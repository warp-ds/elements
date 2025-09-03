function ifDefined(attribute: string, args: Record<string, unknown>): string {
  if (!args[attribute]) {
    return '';
  }
  if (args[attribute] === false) {
    return '';
  }
  if (args[attribute] === true) {
    return attribute;
  }
  return `${attribute}="${args[attribute]}"`;
}

/**
 * Maps storybook args to HTML attributes.
 *
 * Boolean false is rendered as the empty string.
 *
 * @example
 * ```ts
 * import { toAttributeString } from '../../.storybook/utilities.js';
 *
 * type Args = {
 *   required: boolean;
 * };
 *
 * const meta: Meta<Args> = {
 *   component: 'w-component',
 *   render(args) {
 *     return `<w-component ${toAttributeString(args)}></w-component>`;
 *   },
 *   argTypes: {
 *     required: { type: 'boolean' },
 *   },
 * };
 * ```
 */
export function toAttributeString(args: Record<string, unknown>): string {
  return Object.keys(args)
    .map((attribute) => ifDefined(attribute, args))
    .join(' ');
}
