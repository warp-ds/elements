import { css } from 'lit';

/* For some reason the pseudoselectors for webkit and moz must be separate blocks :shrug: */

export const wSliderThumbStyles = css`
  .w-slider-thumb {
    position: relative; /* Set for the fallback positioning of the tooltip ([anchor]) */
    display: grid;
    pointer-events: none; /* For range inputs we position two of these on top of each other. Let clicks go through the top one. */
    grid-template-areas:
      'slider slider'
      'frommarker tomarker'
      'fromtextfield totextfield';
  }

  .w-slider-thumb__range {
    appearance: none;
    height: 44px; /* touch target */
    background-color: transparent;
    pointer-events: initial;
    grid-area: slider;
  }

  .w-slider-thumb__active-range {
    align-self: center;
    grid-area: slider;
  }

  .w-slider-thumb__active-range::before {
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

  .w-slider-thumb__range::-webkit-slider-runnable-track {
    pointer-events: none; /* let clicks pass through for range slider where we place two inputs over each other */
    background: var(--w-slider-track-background);
    border-radius: 4px;
    box-shadow: none;
    color: var(--w-s-color-text);
    height: var(--w-slider-track-height);
  }

  .w-slider-thumb__range::-webkit-slider-thumb::hover::-webkit-slider-thumb {
    background: var(--w-s-color-background-primary-hover);
  }

  /*
    Use anchor positioning to place the tooltip target in relation to the slider thumb.
    Browsers that don't support CSS anchors (older Safari, Firefox at time of writing)
    show the tooltip placed in the middle of the slider ([anchor]).
   */
  .w-slider-thumb__range::-webkit-slider-thumb {
    anchor-name: --thumb;

    appearance: none;
    border-radius: calc(calc(var(--w-slider-thumb-size)) / 2);
    background: var(--w-s-color-background-primary);
    box-shadow: var(--w-slider-thumb-shadow);
    height: var(--w-slider-thumb-size);
    margin-top: calc(-1 * calc(var(--w-slider-thumb-offset) - calc(var(--w-slider-track-height) / 2)));
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
  }
  .w-slider-thumb__range::-moz-range-thumb {
    anchor-name: --thumb;

    appearance: none;
    background: var(--w-s-color-background-primary);
    border-radius: calc(calc(var(--w-slider-thumb-size)) / 2);
    box-shadow: var(--w-slider-thumb-shadow);
    height: var(--w-slider-thumb-size);
    margin-top: calc(-1 * var(--w-slider-thumb-offset));
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
  }

  @supports (position-area: start) {
    .w-slider-thumb__tooltip-target {
      display: block;
      pointer-events: none;
      position: absolute;
      width: 1px;
      height: 1px;
      position-anchor: --thumb;
      position-area: center; /* Position the tooltip target right on the range thumb */
    }
  }

  /* Uncomment to debug this invisible target */
  .w-slider-thumb__tooltip-target {
    border: 2px solid lime;
    width: 10px;
    height: 10px;
    border-radius: 20px;
  }

  /* [anchor] Fallback for browsers without CSS anchors. */
  @supports not (position-area: start) {
    .w-slider-thumb__tooltip-target {
      position: absolute;
      left: 50%;
      right: 50%;
    }
  }

  .w-slider-thumb__from-marker {
    grid-area: frommarker;
  }

  .w-slider-thumb__to-marker {
    grid-area: tomarker;
    text-align: right;
  }

  .w-slider-thumb__textfield {
    pointer-events: initial;
    grid-area: fromtextfield;
  }

  :host([name='to']) .w-slider-thumb__textfield {
    grid-area: totextfield;
  }
`;
