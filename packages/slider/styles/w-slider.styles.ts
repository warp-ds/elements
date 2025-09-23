import { css } from 'lit';

export const wSliderStyles = css`
  .w-slider {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
    display: grid;
    width: 100%;
    grid-template-areas:
      'label'
      'description'
      'slider';
    grid-template-columns: 1fr;

    /* Public override points (can be safely overridden externally) */
    --w-slider-track-background: var(--w-s-color-background-disabled-subtle);
    --w-slider-track-active-background: var(--w-s-color-background-primary);
    --w-slider-track-height: 4px;
    --w-slider-track-active-height: 6px;
    --w-slider-thumb-background: var(--w-s-color-background-primary);
    --w-slider-thumb-background-hover: var(--w-s-color-background-primary-hover);
    --w-slider-thumb-shadow: none;
    --w-slider-thumb-size: 28px;
    --w-slider-thumb-offset: calc(var(--w-slider-thumb-size) / 2);
    --w-slider-tick-color: var(--w-s-color-background-disabled-subtle);
    --w-slider-tick-value-color: var(--w-s-color-text-subtle);
  }

  .w-slider__label {
    grid-area: label;
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: bold;
    padding-bottom: 8px;
    color: var(--w-s-color-text);
  }

  .w-slider__description {
    grid-area: description;
  }

  .w-slider__active-range {
    align-self: center;
    background: var(--w-slider-track-background);
    border-radius: 4px;
    position: absolute;
    top: calc(var(--w-slider-thumb-size) / 2 + calc(var(--w-slider-track-active-height) - calc(var(--w-slider-track-height) / 2) + 1px));
    left: 0;
    right: 0;
    grid-area: slider;
  }

  .w-slider__active-range::before {
    background: var(--w-slider-track-active-background);
    border-radius: 4px;
    content: '';
    display: block;
    height: var(--w-slider-track-active-height);
    /* Position the starting point of the fill in the case of a non-zero --from value */
    --_blank-values-before: calc(var(--from) - var(--min));
    margin-left: calc(var(--_blank-values-before) * 1%);
    /* Set the width of the fill as a percentage. */
    --_filled-values: calc(var(--to) - var(--from));
    width: calc(var(--_filled-values) * 1%);
  }

  slot[name='from']::slotted(w-slider-thumb),
  slot[name='to']::slotted(w-slider-thumb) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    grid-area: slider;
  }
`;
