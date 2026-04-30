import { css } from 'lit';
import { buttonSharedBase, buttonSharedDisabled, buttonSharedSizing, buttonSharedVariants } from '../button/styles.js';

/**
 * w-link styles: a link that looks like a button.
 * Imports shared button styling and applies to <a> element.
 */
export const styles = css`
  ${buttonSharedBase}

  /* ============================================================
   * Link element (anchor with button styling)
   * ============================================================ */
  a[part='base'] {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    cursor: pointer;
    text-decoration: none;

    background-color: var(--_bg);
    color: var(--_color);

    border: var(--_border-width) solid var(--_border-color);
    border-radius: var(--_radius);

    padding: calc(var(--_pad-y) - var(--_border-width))
             calc(var(--_pad-x) - var(--_border-width));

    font-size: var(--_font-size);
    line-height: var(--_line-height);
    font-weight: var(--_font-weight);

    transition: var(--_transition);
  }

  :host(:not([disabled])) a[part='base']:hover {
    background-color: var(--_bg-hover);
    border-color: var(--_border-color-hover);
    color: var(--_color-hover);
  }

  :host(:not([disabled])) a[part='base']:active {
    background-color: var(--_bg-active);
    border-color: var(--_border-color-active);
    color: var(--_color-active);
  }

  :host(:focus-visible) a[part='base'] {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  /* ===== Variants (shared from button) ===== */
  ${buttonSharedVariants}

  /* Link-specific: link variant element styles */
  :host([variant='link']) a[part='base'] {
    display: inline;
    padding: 0;
  }

  :host([variant='link']:not([disabled])) a[part='base']:hover {
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
  }

  /* ===== Sizes (shared from button) ===== */
  ${buttonSharedSizing}

  /* ===== Layout ===== */
  :host([full-width]) a[part='base'] {
    width: 100%;
  }

  /* ===== Disabled (shared from button) ===== */
  ${buttonSharedDisabled}
`;
