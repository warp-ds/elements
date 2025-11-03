import { css } from 'lit';

/* For some reason the pseudoselectors for webkit and moz must be separate blocks :shrug: */

export const wTextfieldStyles = css`
  .w-textfield {
    --_input-padding-top: 12px;
    --_input-padding-left: 8px;
    --_input-padding-right: 8px;
    position: relative;
  }

  .w-textfield--has-prefix {
    --_input-padding-left: 40px;
  }

  .w-textfield--has-suffix {
    --_input-padding-right: var(--w-prefix-width, 40px);
  }

  .w-textfield__input-wrapper {
    position: relative;
    overflow: hidden;
  }

  .w-textfield__input-wrapper:focus-within .w-textfield__mask {
    display: none;
  }

  /* Hide the native browser controls */
  input[type="number"] {
    -moz-appearance:textfield;
  }

  input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }

  /* Could also consider giving the input mask a background color instead of this */
  .w-textfield__input-wrapper:has(.w-textfield__mask):not(:focus-within) input {
    color: transparent;
  }

  .w-textfield__mask {
    display: block;
    border: 1px solid transparent;
    top: var(--_input-padding-top);
    left: var(--_input-padding-left);
    right: var(--_input-padding-right);
    position: absolute;
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1;
  }
`;
