import { css } from 'lit';

export const wSliderStyles = css`
  /* ==========================================================================
   Component: w-slider
   ==========================================================================
   TODOs:
   3. Double-check styling and colors against Figma sketches.
   Sections:
   1. Public override points
   2. Base layout and structure
   3. Internal variable resolution (scoped fallback mapping: --_w-slider-*)
   4. Interaction states (hover, focus)
   5. Modifiers: disabled (.w-slider--is-disabled)
   ========================================================================== */

  /* 1. Public override points (can be safely overridden externally) */
  .w-slider {
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

  /* 2. Base layout and structure */
  .w-slider__slider-regular {
    width: 100%;
    position: relative;
    user-select: none;
    touch-action: pan-y;
    padding-inline: var(--w-slider-thumb-offset); /* Pull track half a thumb size in from the edges */
  }

  .w-slider__slider-range {
    width: 100%;
    position: relative;
    user-select: none;
    touch-action: pan-y;
    padding-inline: var(--w-slider-thumb-size);
  }

  .w-slider__wrap {
    display: flex;
    align-items: center;
    height: var(--w-slider-thumb-size);
    position: relative;
  }

  /* 3. Internal variable resolution (scoped where used) */
  .w-slider__track-range {
    --_w-slider-track-background: var(--w-slider-track-background);
    display: flex;
    height: var(--w-slider-track-height);
    border-radius: 4px;
    background-color: var(--_w-slider-track-background);
    position: absolute;
    left: -2px;
    right: -2px;
  }

  .w-slider__track-regular {
    --_w-slider-track-background: var(--w-slider-track-background);
    display: flex;
    height: var(--w-slider-track-height);
    border-radius: 4px;
    background-color: var(--_w-slider-track-background);
    position: absolute;
    left: calc(-1 * var(--w-slider-thumb-offset));
    right: calc(-1 * var(--w-slider-thumb-offset));
  }

  .w-slider__track-active {
    --_w-slider-track-active-background: var(--w-slider-track-active-background);
    height: 6px; /* Use a different height for the active track */
    border-radius: inherit;
    flex-grow: 0;
    background-color: var(--_w-slider-track-active-background);
    position: absolute;
    top: -1px;
    bottom: -1px;
  }

  .w-slider__track-inactive {
    top: 12px;
    left: 0px;
    right: 0px;
    --_w-slider-track-background: var(--w-slider-track-background);
    display: flex;
    height: var(--w-slider-track-height);
    border-radius: 4px;
    background-color: var(--_w-slider-track-background);
    position: absolute;
  }

  .w-slider__thumb {
    --_w-slider-thumb-background: var(--w-slider-thumb-background);
    --_w-slider-thumb-shadow: var(--w-slider-thumb-shadow);
    --_w-slider-thumb-size: var(--w-slider-thumb-size);
    position: absolute;
    height: var(--_w-slider-thumb-size);
    width: var(--_w-slider-thumb-size);
    border-radius: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    background-color: var(--_w-slider-thumb-background);
    box-shadow: var(--_w-slider-thumb-shadow);
  }

  /* 4. Interaction states (sets public tokens) */

  .w-slider__thumb:hover,
  .w-slider__thumb:focus {
    outline: none;
    --w-slider-thumb-shadow: var(--w-shadow-slider-handle-hover);
    --w-slider-thumb-background: var(--w-slider-thumb-background-hover);
  }

  .w-slider__thumb:focus-visible {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
    --w-slider-thumb-shadow: none;
  }

  .w-slider__thumb:active {
    --w-slider-thumb-background: var(--w-s-color-background-primary-active);
    --w-slider-thumb-shadow: var(--w-shadow-slider-handle-active);
  }

  /* 5. Modifiers */
  .w-slider--is-disabled {
    pointer-events: none;

    --w-slider-track-background: var(--w-s-color-background-disabled);
    --w-slider-thumb-background: var(--w-s-color-background-disabled);
    --w-slider-track-active-background: var(--w-s-color-background-disabled);
    --w-slider-thumb-border: var(--w-s-color-border-disabled);
  }

  .w-slider__ticks {
    margin-top: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 4px;
  }

  .w-slider__ticks--left {
    justify-self: start; /* align to the left */
  }

  .w-slider__ticks--right {
    justify-self: end; /* align to the right */
  }

  .w-slider__tick {
    --_w-slider-tick-color: var(--w-slider-tick-color);
    width: 2px;
    height: 10px;
    background-color: var(--_w-slider-tick-color);
    border-radius: 1px;
  }

  .w-slider__min-value,
  .w-slider__max-value {
    --_w-slider-tick-value-color: var(--w-slider-tick-value-color);
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    color: var(--_w-slider-tick-value-color);
    position: relative;
  }

  .w-slider__label {
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: bold;
    cursor: pointer;
    padding-bottom: 8px;
    color: var(--w-s-color-text);
    position: relative;
    display: block;
  }

  .w-slider__input {
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }
`;
