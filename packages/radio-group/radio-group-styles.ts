import { css } from 'lit';

export const styles = css`
  :host {
    display: block;

    --_label-font-size: var(--w-c-radio-group-label-font-size, var(--w-font-size-s));
    --_label-line-height: var(--w-c-radio-group-label-line-height, var(--w-line-height-s));
    --_label-font-weight: var(--w-c-radio-group-label-font-weight, 700);
    --_label-color: var(--w-c-radio-group-label-color, var(--w-s-color-text));
    --_label-color-disabled: var(--w-c-radio-group-label-color-disabled, var(--w-s-color-text-disabled));
    --_label-padding-bottom: var(--w-c-radio-group-label-padding-bottom, 16px);

    --_optional-font-weight: var(--w-c-radio-group-optional-font-weight, 400);
    --_optional-color: var(--w-c-radio-group-optional-color, var(--w-s-color-text-subtle));
    --_optional-margin-inline-start: var(--w-c-radio-group-optional-margin-inline-start, 0.5rem);

    --_radios-gap: var(--w-c-radio-group-gap, 16px);

    --_help-text-margin-block-start: var(--w-c-radio-group-help-text-margin-block-start, 16px);
    --_help-text-font-size: var(--w-c-radio-group-help-text-font-size, var(--w-font-size-xs));
    --_help-text-line-height: var(--w-c-radio-group-help-text-line-height, var(--w-line-height-xs));
    --_help-text-color: var(--w-c-radio-group-help-text-color, var(--w-s-color-text-subtle));
    --_help-text-color-disabled: var(--w-c-radio-group-help-text-color-disabled, var(--w-s-color-text-disabled));
    --_help-text-color-error: var(--w-c-radio-group-help-text-color-error, var(--w-s-color-text-negative));
  }

  [part='form-control'] {
    position: relative;

    border: 0;
    padding: 0;
    margin: 0;

    min-inline-size: 0;
  }

  [part='form-control-label'] {
    display: block;
    cursor: pointer;

    font-size: var(--_label-font-size);
    line-height: var(--_label-line-height);
    font-weight: var(--_label-font-weight);
    color: var(--_label-color);

    padding-bottom: var(--_label-padding-bottom);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: grayscale;
  }

  :host([disabled]) [part='form-control-label'] {
    cursor: default;
    color: var(--_label-color-disabled);
  }

  :host([required]) [part='form-control-label']::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  .optional {
    font-weight: var(--_optional-font-weight);
    color: var(--_optional-color);
    margin-inline-start: var(--_optional-margin-inline-start);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: var(--_radios-gap);
  }

  [part~='help-text'] {
    margin-block-start: var(--_help-text-margin-block-start);
    font-size: var(--_help-text-font-size);
    line-height: var(--_help-text-line-height);
    color: var(--_help-text-color);
  }

  :host([disabled]) [part~='help-text'] {
    color: var(--_help-text-color-disabled);
  }

  :host([data-show-error]) [part~='help-text'] {
    color: var(--_help-text-color-error);
  }
`;