import { css } from 'lit';

export const styles = css`
  :host {
    /* Component tokens with semantic fallbacks */
    --_color: var(--w-c-label-color, var(--w-s-color-text));
    --_font-size: var(--w-c-label-font-size, var(--w-font-size-s));
    --_line-height: var(--w-c-label-line-height, var(--w-line-height-s));
    --_font-weight: var(--w-c-label-font-weight, 700);
    --_padding-bottom: var(--w-c-label-padding-bottom, 0.4rem);
    --_cursor: var(--w-c-label-cursor, pointer);
    --_display: var(--w-c-label-display, block);
  }

  label[part='base'] {
    display: var(--_display);
    position: relative;
    align-items: baseline;
    font-size: var(--_font-size);
    line-height: var(--_line-height);
    font-weight: var(--_font-weight);
    padding-bottom: var(--_padding-bottom);
    cursor: var(--_cursor);
    color: var(--_color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Optional text styling */
  :host([optional]) span[part='optional'] {
    padding-left: var(--w-c-label-optional-padding-left, 0.8rem);
    font-weight: var(--w-c-label-optional-font-weight, 400);
    font-size: var(--w-c-label-optional-font-size, var(--w-font-size-s));
    line-height: var(--w-c-label-optional-line-height, var(--w-line-height-s));
    color: var(--w-c-label-optional-color, var(--w-s-color-text-subtle));
  }
`;
