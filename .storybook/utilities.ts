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
    // allow the number value 0 which is falsy in JS
    if (typeof newArgs[field] !== 'number' && !newArgs[field]) {
      delete newArgs[field];
    }
  }
  return newArgs;
}
