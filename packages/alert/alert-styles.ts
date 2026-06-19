import { css } from 'lit';

/**
 * Alert component styles using component token pattern.
 *
 * Public API tokens (customizable):
 * - Layout: --w-c-alert-padding, --w-c-alert-gap, --w-c-alert-border-width, --w-c-alert-border-radius
 * - Colors: --w-c-alert-bg-*, --w-c-alert-border-*, --w-c-alert-icon-* (per variant)
 * - Typography: --w-c-alert-font-size, --w-c-alert-line-height
 */

export const alertStyles = css`
  :host {
    /* Internal tokens - not part of public API */

    /* Layout */
    --_padding: var(--w-c-alert-padding, 1.6rem);
    --_gap: var(--w-c-alert-gap, 0.8rem);
    --_border-width: var(--w-c-alert-border-width, 1px);
    --_border-left-width: var(--w-c-alert-border-left-width, 4px);
    --_border-radius: var(--w-c-alert-border-radius, 4px);

    /* Icon */
    --_icon-size: var(--w-c-alert-icon-size, 1.6rem);

    /* Typography */
    --_font-size: var(--w-c-alert-font-size, var(--w-font-size-s));
    --_line-height: var(--w-c-alert-line-height, var(--w-line-height-s));
    --_text-color: var(--w-c-alert-text-color, var(--w-s-color-text));

    /* Variant colors - info (default) */
    --_bg: var(--w-c-alert-bg-info, var(--w-s-color-background-info-subtle));
    --_border-color: var(--w-c-alert-border-color-info, var(--w-s-color-border-info-subtle));
    --_border-left-color: var(--w-c-alert-border-left-color-info, var(--w-s-color-border-info));
    --_icon-color: var(--w-c-alert-icon-color-info, var(--w-s-color-icon-info));
  }

  /* Variant: positive */
  :host([variant='positive']) {
    --_bg: var(--w-c-alert-bg-positive, var(--w-s-color-background-positive-subtle));
    --_border-color: var(--w-c-alert-border-color-positive, var(--w-s-color-border-positive-subtle));
    --_border-left-color: var(--w-c-alert-border-left-color-positive, var(--w-s-color-border-positive));
    --_icon-color: var(--w-c-alert-icon-color-positive, var(--w-s-color-icon-positive));
  }

  /* Variant: warning */
  :host([variant='warning']) {
    --_bg: var(--w-c-alert-bg-warning, var(--w-s-color-background-warning-subtle));
    --_border-color: var(--w-c-alert-border-color-warning, var(--w-s-color-border-warning-subtle));
    --_border-left-color: var(--w-c-alert-border-left-color-warning, var(--w-s-color-border-warning));
    --_icon-color: var(--w-c-alert-icon-color-warning, var(--w-s-color-icon-warning));
  }

  /* Variant: negative */
  :host([variant='negative']) {
    --_bg: var(--w-c-alert-bg-negative, var(--w-s-color-background-negative-subtle));
    --_border-color: var(--w-c-alert-border-color-negative, var(--w-s-color-border-negative-subtle));
    --_border-left-color: var(--w-c-alert-border-left-color-negative, var(--w-s-color-border-negative));
    --_icon-color: var(--w-c-alert-icon-color-negative, var(--w-s-color-icon-negative));
  }

  [part='base'] {
    display: flex;
    padding: var(--_padding);
    gap: var(--_gap);
    background-color: var(--_bg);
    border: var(--_border-width) solid var(--_border-color);
    border-left: var(--_border-left-width) solid var(--_border-left-color);
    border-radius: var(--_border-radius);
    color: var(--_text-color);
    font-size: var(--_font-size);
    line-height: var(--_line-height);
  }

  [part='icon'] {
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
    width: var(--_icon-size);
    min-width: var(--_icon-size);
    color: var(--_icon-color);
  }

  [part='content'] {
    flex: 1;
    min-width: 0;
  }

  [part='content'] ::slotted(*:last-child) {
    margin-bottom: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --w-c-alert-transition: none;
    }
  }
`;
