import { css } from 'lit';

export const wSliderStyles = css`
  .w-slider {
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

    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .w-slider__slider {
    width: 100%;
    position: relative;
    user-select: none;
    touch-action: pan-y;
    padding-inline: var(--w-slider-thumb-size);
    display: flex;
    align-items: center;
    height: var(--w-slider-thumb-size);
  }
`;
