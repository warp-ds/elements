/**
 * Massages storybook args before being spread to HTML attributes.
 *
 * - Empty strings are treated as not set.
 * - Boolean false don't get set.
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
  const newArgs = {
    ...args,
  };
  for (const field of Object.keys(newArgs)) {
    const value = args[field];

    // Add Lit syntax for boolean attributes
    if (typeof value === 'boolean') {
      newArgs[`?${field}`] = value;
      delete newArgs[field];
    }

    // Add Lit syntax for complex properties
    if (typeof value === 'object') {
      newArgs[`.${field}`] = value;
      delete newArgs[field];
    }

    // The manifest has a bunch of default empty strings (which we should probably investigate)
    // that turn on features that should be off in Storybook canvases.
    // Remove the empty strings.
    if (newArgs[field] === '') {
      delete newArgs[field];
    }
  }
  return newArgs;
}
