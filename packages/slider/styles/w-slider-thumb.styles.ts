import { css } from 'lit';

/* For some reason the pseudoselectors for webkit and moz must be separate blocks :shrug: */

export const wSliderThumbStyles = css`
  :host {
    position: relative; /* Set for the fallback positioning of the tooltip ([anchor]) */
  }

  /* Uncomment to debug this invisible target */
  .w-slider-thumb__tooltip-target {
    border: 2px solid lime;
    border-radius: 20px;
  }

  .w-slider__range {
    appearance: none;
    height: 44px; /* touch target */
    background-color: transparent;
  }

  .w-slider__range::-webkit-slider-runnable-track {
    pointer-events: none; /* let clicks pass through for range slider where we place two inputs over each other */
    background: var(--w-slider-track-background);
    border-radius: 4px;
    box-shadow: none;
    color: var(--w-s-color-text);
    height: var(--w-slider-track-height);
  }

  .w-slider__range::-webkit-slider-thumb::hover::-webkit-slider-thumb {
    background: var(--w-s-color-background-primary-hover);
  }

  /*
    Use anchor positioning to place the tooltip target in relation to the slider thumb.
    Browsers that don't support CSS anchors (older Safari, Firefox at time of writing)
    show the tooltip placed in the middle of the slider ([anchor]).
   */
  .w-slider__range::-webkit-slider-thumb {
    anchor-name: --thumb;

    appearance: none;
    border-radius: calc(calc(var(--w-slider-thumb-size)) / 2);
    background: var(--w-s-color-background-primary);
    box-shadow: var(--w-slider-thumb-shadow);
    height: var(--w-slider-thumb-size);
    margin-top: calc(-1 * calc(var(--w-slider-thumb-offset) - calc(var(--w-slider-track-height) / 2)));
    width: var(--w-slider-thumb-size);
  }
  .w-slider__range::-moz-range-thumb {
    anchor-name: --thumb;

    background: var(--w-s-color-background-primary);
    box-shadow: var(--w-slider-thumb-shadow);
    height: var(--w-slider-thumb-size);
    margin-top: calc(-1 * var(--w-slider-thumb-offset));
    width: var(--w-slider-thumb-size);
  }

  @supports (position-area: start) {
    .w-slider-thumb__tooltip-target {
      display: block;
      pointer-events: none;
      position: absolute;
      width: 10px;
      height: 10px;
      position-anchor: --thumb;
      position-area: center; /* Position the tooltip target right on the range thumb */
    }
  }

  /* [anchor] Fallback for browsers without CSS anchors. */
  @supports not (position-area: start) {
    .w-slider-thumb__tooltip-target {
      position: absolute;
      left: 50%;
      right: 50%;
    }
  }
`;
