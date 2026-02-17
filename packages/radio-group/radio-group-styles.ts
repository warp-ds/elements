import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: grayscale;
    cursor: pointer;
    padding-bottom: 16px;
    color: var(--w-s-color-text);
    display: block;
  }

  .optional {
    font-weight: 400;
    color: var(--w-s-color-text-subtle);
    margin-inline-start: 0.5rem;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 16px;
  }

  /* Help text */
  [part~='help-text'] {
    margin-block-start: 16px;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
    color: var(--w-s-color-text-subtle);
  }

  :host([disabled]) [part~='help-text'] {
    color: var(--w-s-color-text-disabled);
  }

  [part~='help-text'].error {
    color: var(--w-s-color-text-negative);
  }

`;
