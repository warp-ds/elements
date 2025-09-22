import { css } from 'lit';

export const wSliderStyles = css`
  .w-slider {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;

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
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: bold;
    padding-bottom: 8px;
    color: var(--w-s-color-text);
  }

  .w-slider__body {
    width: 100%;
  }
`;
