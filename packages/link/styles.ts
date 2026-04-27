import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-block;

    /* Same resolved vars as w-button */
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
      color 150ms cubic-bezier(0.4,0,0.2,1),
      background-color 150ms cubic-bezier(0.4,0,0.2,1),
      border-color 150ms cubic-bezier(0.4,0,0.2,1)
    );

    --w-c-button-icon-color: var(--w-s-color-icon);
  }

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

  :host(:focus-visible) { outline: none; }
  :host(:focus-visible) a[part='base'] {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  /* ===== Variants ===== */
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
    --w-c-button-color: var(--w-s-color-text-inverted);
    --w-c-button-radius: 9999px;
    --w-c-button-border-width: 0px;
  }

  :host([variant='overlayQuiet']) {
    --w-c-button-bg: transparent;
    --w-c-button-bg-hover: var(--w-s-color-background-hover);
    --w-c-button-bg-active: var(--w-s-color-background-active);
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

  /* Optional compat: "link" variant if it still exists in stories */
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

  :host([variant='link']) a[part='base'] {
    display: inline;
    padding: 0;
  }

  :host([variant='link']:not([disabled])) a[part='base']:hover {
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
  }

  /* Sizes */
  :host([small]) {
    --w-c-button-padding-x: 12px;
    --w-c-button-padding-y: 8px;
    --w-c-button-font-size: var(--w-font-size-xs);
    --w-c-button-line-height: var(--w-line-height-xs);
  }

  /* Layout */
  :host([full-width]) a[part='base'] { width: 100%; }

  /* Disabled */
  :host([disabled]) {
    pointer-events: none;

    --w-c-button-bg: var(--w-s-color-background-disabled);
    --w-c-button-bg-hover: var(--w-s-color-background-disabled);
    --w-c-button-bg-active: var(--w-s-color-background-disabled);

    --w-c-button-color: var(--w-s-color-text-inverted);
    --w-c-button-border-width: 0px;
  }
`;