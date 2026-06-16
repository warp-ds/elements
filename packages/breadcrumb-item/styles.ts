/* packages/button/styles.ts */
import { css } from 'lit';

/**.
 * These define the internal CSS variables that map component tokens to semantic tokens.
 */
export const styles = css`
    :host {
      display: inline-block;

      /* Internal resolved vars (defaults) */
      --_link-color: var(--w-c-breadcrumb-item-link-color, var(--w-s-color-text-link));
      --_text-color: var(--w-c-breadcrumb-item-text-color, var(--w-s-color-text));
      --_separator-color: var(--w-c-breadcrumb-item-separator-color, var(--w-s-color-icon));
      --_separator-spacing: var(--w-c-breadcrumb-item-separator-spacing, 0.8rem);
      --_font-size: var(--w-c-breadcrumb-item-font-size);
      --_line-height: var(--w-c-breadcrumb-item-line-height, 1.5);
      --_font-weight: var(--w-c-breadcrumb-item-font-weight, 400);
      --_padding-x: var(--w-c-breadcrumb-item-padding-x, 0);
      --_padding-y: var(--w-c-breadcrumb-item-padding-y, 0);
      --_link-color-hover: var(--w-c-breadcrumb-item-link-color-hover);
      --_link-color-active: var(--w-c-breadcrumb-item-link-color-active);
      --_outline-color: var(--w-c-breadcrumb-item-outline-color);
      --_outline-width: var(--w-c-breadcrumb-item-outline-width);
      --_outline-offset: var(--w-c-breadcrumb-item-outline-offset);
    }

    .s-text{
      color: var(--_text-color);
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
    }
    .s-text-link{
      color: var(--_link-color);
      text-decoration: none;
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
      padding-left: var(--_padding-x);
      padding-right: var(--_padding-x);
      padding-top: var(--_padding-y);
      padding-bottom: var(--_padding-y);
    }
    .s-text-link:hover {
      text-decoration: underline;
      color: var(--_link-color-hover);
    }
    .s-text-link:active {
      color: var(--_link-color-active);
    }
    .s-text-link:focus {
      outline-color: var(--_outline-color);
      outline-width: var(--_outline-width);
      outline-offset: var(--_outline-offset);
    }
    .separator{
      color: var(--_separator-color);
      -webkit-user-select: none;
      user-select: none;
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
      margin-left: var(--_separator-spacing);
      margin-right: var(--_separator-spacing);
    }
`;