import { css } from 'lit';

/* For some reason the pseudoselectors for webkit and moz must be separate blocks :shrug: */

export const wSliderThumbStyles = css`
  .w-slider-thumb {
    position: relative; /* Set for the fallback positioning of the tooltip ([anchor]) */
    display: grid;
    pointer-events: none; /* For range inputs we position two of these on top of each other. Let clicks go through the top one. */
    grid-template-areas:
      'slider slider slider'
      'frommarker . tomarker'
      'fromtextfield . totextfield';
    grid-template-columns: 1fr 24px 1fr;
  }

  .w-slider-thumb__range {
    appearance: none;
    background-color: transparent;
    grid-area: slider;
    height: 44px; /* touch target */
    pointer-events: initial;
  }

  .w-slider-thumb__range {
    pointer-events: none; /* let clicks pass through for range slider where we place two inputs over each other */
  }

  .w-slider-thumb__range::-webkit-slider-runnable-track {
    box-shadow: none;
    color: var(--w-s-color-text);
    height: var(--w-slider-track-height);
  }

  .w-slider-thumb__range:hover::-webkit-slider-thumb {
    background: var(--w-s-color-background-primary-hover);
  }

  .w-slider-thumb__range:hover::-moz-range-thumb {
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
    border-radius: 50%;
    background: var(--w-s-color-background-primary);
    box-shadow: var(--w-slider-thumb-shadow);
    height: var(--w-slider-thumb-size);
    margin-top: calc(-1 * calc(var(--w-slider-thumb-offset) - calc(var(--w-slider-track-height) / 2)));
    pointer-events: auto;
    width: var(--w-slider-thumb-size);
    z-index: 1;
  }

  .w-slider-thumb__range::-moz-range-thumb {
    anchor-name: --thumb;

    appearance: none;
    background: var(--w-s-color-background-primary);
    border-radius: 50%;
    border-color: transparent;
    box-shadow: var(--w-slider-thumb-shadow);
    height: var(--w-slider-thumb-size);
    margin-top: calc(-1 * calc(var(--w-slider-thumb-offset) - calc(var(--w-slider-track-height) / 2)));
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
    z-index: 1;
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

  /* Uncomment this to debug the invisible anchor target */
  /* .w-slider-thumb__tooltip-target {
    border: 2px solid lime;
    width: 10px;
    height: 10px;
    border-radius: 20px;
  } */

  /* [anchor] Fallback for browsers without CSS anchors. */
  @supports not (position-area: start) {
    .w-slider-thumb__tooltip-target {
      position: absolute;
      top: 16px;
      left: 50%;
      right: 50%;
    }
  }

  .w-slider-thumb__from-marker,
  .w-slider-thumb__to-marker {
    margin-inline: 2px; /* visual alignment with input border, slider thumb */
    color: var(--w-s-color-text-subtle);
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
  }

  .w-slider-thumb__from-marker {
    grid-area: frommarker;
  }

  .w-slider-thumb__to-marker {
    grid-area: tomarker;
    text-align: right;
  }

  .w-slider-thumb__textfield {
    margin-top: 10px;
    pointer-events: auto;
    grid-row: 3 / 4;
    grid-column: 1 / 3; /* Single sliders should have the text field use the fromtextfield _and_ gap portion of the CSS grid. */
  }

  :host([name='from']) .w-slider-thumb__textfield {
    grid-column: 1 / 2; /* Range sliders should leave the gap empty. */
  }

  :host([name='to']) .w-slider-thumb__textfield {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }
`;
