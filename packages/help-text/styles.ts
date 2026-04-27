import { css } from 'lit';

export const styles = css`
  :host {
    /* Component tokens with semantic fallbacks */
    --_color: var(--w-c-help-text-color, var(--w-s-color-text-subtle));
    --_font-size: var(--w-c-help-text-font-size, var(--w-font-size-xs));
    --_line-height: var(--w-c-help-text-line-height, var(--w-line-height-xs));
    --_margin-top: var(--w-c-help-text-margin-top, 0.4rem);
    --_display: var(--w-c-help-text-display, block);
  }

  /* Invalid state overrides color */
  :host([invalid]) {
    --_color: var(--w-c-help-text-color-invalid, var(--w-s-color-text-negative));
  }

  div[part='base'] {
    font-size: var(--_font-size);
    line-height: var(--_line-height);
    margin-top: var(--_margin-top);
    display: var(--_display);
    color: var(--_color);
  }
`;
