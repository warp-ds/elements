/* packages/button/styles.ts */
import { css } from 'lit';

/**
 * Shared base tokens used by both w-button and w-link.
 * These define the internal CSS variables that map component tokens to semantic tokens.
 */
export const buttonSharedBase = css`
  :host {
    display: inline-block;

    /* Internal resolved vars (defaults) */
    --_bg: var(--w-c-button-bg, var(--w-s-color-background));
    --_bg-hover: var(--w-c-button-bg-hover, var(--w-s-color-background-hover));
    --_bg-active: var(--w-c-button-bg-active, var(--w-s-color-background-active));

    --_color: var(--w-c-button-color, var(--w-s-color-text-link));
    --_color-hover: var(--w-c-button-color-hover, var(--_color));
    --_color-active: var(--w-c-button-color-active, var(--_color));

    --_border-width: var(--w-c-button-border-width, 2px);
    --_border-color: var(--w-c-button-border-color, var(--w-s-color-border));
    --_border-color-hover: var(--w-c-button-border-color-hover, var(--w-s-color-border-hover));
    --_border-color-active: var(--w-c-button-border-color-active, var(--w-s-color-border-active));

    --_radius: var(--w-c-button-radius, 8px);

    --_font-size: var(--w-c-button-font-size, var(--w-font-size-m));
    --_line-height: var(--w-c-button-line-height, var(--w-line-height-m));
    --_font-weight: var(--w-c-button-font-weight, 700);

    --_pad-x: var(--w-c-button-padding-x, 16px);
    --_pad-y: var(--w-c-button-padding-y, 13px);

    --_outline-width: var(--w-c-button-outline-width, 2px);
    --_outline-color: var(--w-c-button-outline-color, var(--w-s-color-border-focus));
    --_outline-offset: var(--w-c-button-outline-offset, var(--w-outline-offset, 1px));

    --_transition: var(
      --w-c-button-transition,
      color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)
    );

    /* Icon color for pill/icon-only variants (semantic; default dark grey icon) */
    --w-c-button-icon-color: var(--w-s-color-icon);
  }

  :host(:focus-visible) {
    outline: none;
  }
`;

/**
 * Shared variant styles used by both w-button and w-link.
 * These set component tokens for different visual styles.
 */
export const buttonSharedVariants = css`
  :host([variant='primary']) {
    --w-c-button-bg: var(--w-s-color-background-primary);
    --w-c-button-bg-hover: var(--w-s-color-background-primary-hover);
    --w-c-button-bg-active: var(--w-s-color-background-primary-active);
    --w-c-button-color: var(--w-s-color-text-inverted);
    --w-c-button-border-width: 0px;
  }

  :host([variant='negative']) {
    --w-c-button-bg: var(--w-s-color-background-negative);
    --w-c-button-bg-hover: var(--w-s-color-background-negative-hover);
    --w-c-button-bg-active: var(--w-s-color-background-negative-active);
    --w-c-button-color: var(--w-s-color-text-inverted);
    --w-c-button-border-width: 0px;
  }

  :host([variant='negativeQuiet']) {
    --w-c-button-bg: transparent;
    --w-c-button-bg-hover: var(--w-s-color-background-negative-subtle-hover);
    --w-c-button-bg-active: var(--w-s-color-background-negative-subtle-active);
    --w-c-button-color: var(--w-s-color-text-negative);
    --w-c-button-border-width: 0px;
  }

  :host([variant='utility']) {
    --w-c-button-bg: var(--w-s-color-background);
    --w-c-button-color: var(--w-s-color-text);
    --w-c-button-radius: 4px;
    --w-c-button-border-width: 1px;
  }

  :host([variant='utilityQuiet']) {
    --w-c-button-bg: transparent;
    --w-c-button-color: var(--w-s-color-text);
    --w-c-button-border-width: 0px;
  }

  :host([variant='quiet']) {
    --w-c-button-bg: transparent;
    --w-c-button-border-width: 0px;
  }

  :host([variant='overlay']) {
    --w-c-button-bg: var(--w-s-color-background);
    --w-c-button-bg-hover: var(--w-s-color-background-hover);
    --w-c-button-bg-active: var(--w-s-color-background-active);
    --w-c-button-color: var(--w-s-color-text);
    --w-c-button-radius: 9999px;
    --w-c-button-border-width: 0px;
  }

  :host([variant='overlayInverted']) {
    --w-c-button-bg: var(--w-s-color-background-inverted);
    --w-c-button-bg-hover: var(--w-s-color-background-inverted-hover);
    --w-c-button-bg-active: var(--w-s-color-background-inverted-active);
    --w-c-button-color: var(--w-s-color-text-inverted);
    --w-c-button-radius: 9999px;
    --w-c-button-border-width: 0px;
  }

  :host([variant='overlayQuiet']) {
    --w-c-button-bg: transparent;
    --w-c-button-bg-hover: var(--w-s-color-background-hover);
    --w-c-button-bg-active: var(--w-s-color-background-active);
    --w-c-button-color: var(--w-s-color-text);
    --w-c-button-radius: 9999px;
    --w-c-button-border-width: 0px;
  }

  :host([variant='overlayInvertedQuiet']) {
    --w-c-button-bg: transparent;
    --w-c-button-bg-hover: var(--w-s-color-background-inverted-hover);
    --w-c-button-bg-active: var(--w-s-color-background-inverted-active);
    --w-c-button-color: var(--w-s-color-text-inverted);
    --w-c-button-radius: 9999px;
    --w-c-button-border-width: 0px;
  }

  :host([variant='link']) {
    --w-c-button-bg: transparent;
    --w-c-button-border-width: 0px;
    --w-c-button-padding-x: 0px;
    --w-c-button-padding-y: 0px;
    --w-c-button-font-weight: 400;

    --w-c-button-bg-hover: transparent;
    --w-c-button-bg-active: transparent;

    --w-c-button-color: var(--w-s-color-text-link);
    --w-c-button-color-hover: var(--w-s-color-text-link-hover, var(--w-c-button-color));
    --w-c-button-color-active: var(--w-s-color-text-link-active, var(--w-c-button-color));
  }
`;

/**
 * Shared sizing styles used by both w-button and w-link.
 */
export const buttonSharedSizing = css`
  :host([small]) {
    --w-c-button-padding-x: 12px;
    --w-c-button-padding-y: 8px;
    --w-c-button-font-size: var(--w-font-size-xs);
    --w-c-button-line-height: var(--w-line-height-xs);
  }
`;

/**
 * Shared disabled state used by both w-button and w-link.
 */
export const buttonSharedDisabled = css`
  :host([disabled]) {
    pointer-events: none;

    --w-c-button-bg: var(--w-s-color-background-disabled);
    --w-c-button-bg-hover: var(--w-s-color-background-disabled);
    --w-c-button-bg-active: var(--w-s-color-background-disabled);

    --w-c-button-color: var(--w-s-color-text-inverted);
    --w-c-button-border-width: 0px;
  }
`;

/**
 * Complete w-button styles (shared + button-specific).
 */
export const wButtonStyles = css`
  ${buttonSharedBase}

  /* ============================================================
   * Base element (NATIVE button mode ONLY)
   * ============================================================ */
  button[part='base'] {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    cursor: pointer;

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

  /* Optional: helps avoid "grew a bit" from slot typography differences */
  button[part='base'] ::slotted(*) {
    line-height: inherit;
  }

  /* ============================================================
   * Link mode wrapper (w-link host carries part="base" in button.ts)
   * Keep it layout-only to avoid double chrome.
   * ============================================================ */
  :host > w-link[part='base'] {
    display: inline-block;
    padding: 0;
    border: 0;
    background: transparent;
  }

  /* Hover / active (native button mode only) */
  :host(:not([disabled]):not([loading])) button[part='base']:hover {
    background-color: var(--_bg-hover);
    border-color: var(--_border-color-hover);
    color: var(--_color-hover);
  }

  :host(:not([disabled]):not([loading])) button[part='base']:active {
    background-color: var(--_bg-active);
    border-color: var(--_border-color-active);
    color: var(--_color-active);
  }

  :host(:focus-visible) button[part='base'] {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  /* ============================================================
   * Variants (shared + button-specific quiet mappings)
   * ============================================================ */
  ${buttonSharedVariants}

  /* Button-specific: quiet attribute backwards compatibility */
  :host([variant='negative'][quiet]) {
    --w-c-button-bg: transparent;
    --w-c-button-bg-hover: var(--w-s-color-background-negative-subtle-hover);
    --w-c-button-bg-active: var(--w-s-color-background-negative-subtle-active);
    --w-c-button-color: var(--w-s-color-text-negative);
    --w-c-button-border-width: 0px;
  }

  :host([variant='utility'][quiet]) {
    --w-c-button-bg: transparent;
    --w-c-button-color: var(--w-s-color-text);
    --w-c-button-border-width: 0px;
  }

  /* Button-specific: pill variant */
  :host([variant='pill']) {
    --w-c-button-bg: transparent;
    --w-c-button-radius: 50%;
    --w-c-button-border-width: 0px;
    --w-c-button-padding-x: 14px;
    --w-c-button-padding-y: 14px;

    /* pill uses semantic icon color (dark grey by default) */
    --w-c-button-color: var(--w-c-button-icon-color, var(--w-s-color-icon));
  }

  /* Button-specific: link variant element styles */
  :host([variant='link']) button[part='base'] {
    display: inline;
    padding: 0;
  }

  :host([variant='link']:not([disabled]):not([loading])) button[part='base']:hover {
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
    color: var(--w-c-button-color-hover);
  }

  /* ===== Size ===== */
  ${buttonSharedSizing}

  :host([small][variant='pill']) {
    --w-c-button-padding-x: 8px;
    --w-c-button-padding-y: 8px;
  }

  /* ===== Layout ===== */

  :host([full-width]) button[part='base'],
  :host([full-width]) > w-link[part='base'] {
    width: 100%;
  }

  :host([icon-only]) button[part='base'] {
    aspect-ratio: 1 / 1;
    padding-left: calc(var(--w-c-button-padding-y) - var(--w-c-button-border-width, 0px));
    padding-right: calc(var(--w-c-button-padding-y) - var(--w-c-button-border-width, 0px));
  }

  /* ============================================================
   * STATE OVERRIDES (must be last so they win over variants)
   * Disabled first, Loading last (loading is disabled-like + visuals)
   *
   * IMPORTANT:
   * Some variant selectors are more specific (e.g. [variant='negative']:not([quiet])).
   * To ensure states always win, we match similar specificity via extra attribute selectors.
   * ============================================================ */

  /* ===== Disabled ===== */
  ${buttonSharedDisabled}

  /* Additional specificity for button to override quiet variants */
  :host([disabled][variant]),
  :host([disabled][quiet]) {
    --w-c-button-bg: var(--w-s-color-background-disabled);
    --w-c-button-bg-hover: var(--w-s-color-background-disabled);
    --w-c-button-bg-active: var(--w-s-color-background-disabled);

    --w-c-button-color: var(--w-s-color-text-inverted);

    --w-c-button-border-width: 0px;
    --w-c-button-border-color: transparent;
    --w-c-button-border-color-hover: transparent;
    --w-c-button-border-color-active: transparent;

    --w-c-button-color-hover: var(--w-s-color-text-inverted);
    --w-c-button-color-active: var(--w-s-color-text-inverted);
  }

  /* ===== Loading (wins over everything) ===== */
  :host([loading]),
  :host([loading][variant]),
  :host([loading][quiet]) {
    pointer-events: none;

    /* Strong overrides so variants can't leak through */
    --w-c-button-bg: var(--w-s-color-background-subtle);
    --w-c-button-bg-hover: var(--w-s-color-background-subtle);
    --w-c-button-bg-active: var(--w-s-color-background-subtle);

    --w-c-button-color: var(--w-s-color-text);
    --w-c-button-color-hover: var(--w-s-color-text);
    --w-c-button-color-active: var(--w-s-color-text);

    --w-c-button-border-width: 0px;
    --w-c-button-border-color: transparent;
    --w-c-button-border-color-hover: transparent;
    --w-c-button-border-color-active: transparent;
  }

  /* Loading stripes (native button mode only) */
  :host([loading]) button[part='base'] {
    background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.05) 50%,
      rgba(0, 0, 0, 0.05) 75%,
      transparent 75%,
      transparent
    );
    background-size: 30px 30px;
    animation: animate-inprogress 3s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    :host([loading]) button[part='base'] {
      animation: none;
    }
  }

  @keyframes animate-inprogress {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 60px 0;
    }
  }
`;
