import { css } from 'lit';

/* For some reason the pseudoselectors for webkit and moz must be separate blocks :shrug: */

export const wSliderThumbStyles = css`
  .w-slider-thumb {
    position: relative;
    display: grid;
    pointer-events: none; /* For range inputs we position two of these on top of each other. Let clicks go through the top one. */
    grid-template-areas:
      "slider slider slider"
      "frommarker . tomarker"
      "fromtextfield . totextfield";
    grid-template-columns: 1fr 24px 1fr;
  }

  .w-slider-thumb__range {
    appearance: none;
    background-color: transparent;
    grid-area: slider;
    height: 44px; /* touch target */
    margin-left: 0;
    pointer-events: none; /* let clicks pass through for range slider where we place two inputs over each other */
  }

  .w-slider-thumb__range::-webkit-slider-runnable-track {
    box-shadow: none;
    color: var(--w-s-color-text);
    height: var(--w-slider-track-height);
  }

  /*
    Use anchor positioning to place the tooltip target in relation to the slider thumb.
    We use a polyfill to bring support to older Safari, Firefox at time of writing.
   */
  .w-slider-thumb__range::-webkit-slider-thumb {
    anchor-name: --thumb;

    appearance: none;
    cursor: pointer;
    background: var(--w-slider-thumb-background);
    border-radius: 50%;
    height: var(--w-slider-thumb-size);
    margin-top: calc(
      -1 * calc(var(--w-slider-thumb-offset) - calc(
              var(--w-slider-track-height) / 2
            ))
    );
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
    z-index: 1;
  }

  .w-slider-thumb__range[disabled]::-webkit-slider-thumb{
    cursor: auto;
  }

  .w-slider-thumb__range::-moz-range-thumb {
    anchor-name: --thumb;

    appearance: none;
    cursor: pointer;
    background: var(--w-slider-thumb-background);
    border-radius: 50%;
    border-color: transparent;
    height: var(--w-slider-thumb-size);
    margin-top: calc(
      -1 * calc(var(--w-slider-thumb-offset) - calc(
              var(--w-slider-track-height) / 2
            ))
    );
    pointer-events: initial;
    width: var(--w-slider-thumb-size);
    z-index: 1;

    box-shadow: none;
  }

  .w-slider-thumb__range[disabled]::-moz-range-thumb{
    cursor: auto;
  }

  .w-slider-thumb__range:active::-webkit-slider-thumb,
  .w-slider-thumb__range:hover::-webkit-slider-thumb {
    background: var(--w-slider-thumb-background);
    box-shadow: var(--w-shadow-slider-handle-hover);
  }

  .w-slider-thumb__range:focus,
  .w-slider-thumb__range:focus-visible {
    outline: none;
  }

  .w-slider-thumb__range:focus-visible::-webkit-slider-thumb {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
    box-shadow: none;
  }

  .w-slider-thumb__range:active::-moz-range-thumb,
  .w-slider-thumb__range:hover::-moz-range-thumb {
    background: var(--w-s-color-background-primary-hover);
    box-shadow: var(--w-shadow-slider-handle-hover);
  }

  .w-slider-thumb__range:focus-visible::-moz-range-thumb {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
    box-shadow: none;
  }

  .w-slider-thumb__tooltip-target {
    display: block;
    pointer-events: none;
    position: absolute;
    border: 2px solid transparent;
    border-radius: 20px;
    width: 8px;
    height: 8px;
    position-anchor: --thumb;
    position-area: center; /* Position the tooltip target right on the range thumb */
  }

  /* Uncomment this to debug the invisible anchor target */
  /* .w-slider-thumb__tooltip-target { border-color: lime; } */

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
    margin-top: 12px;
    pointer-events: auto;
    grid-row: 3 / 4;
    grid-column: 1 / 3; /* Single sliders should have the text field use the fromtextfield _and_ gap portion of the CSS grid. */
  }

  :host([name="from"]) .w-slider-thumb__textfield {
    grid-column: 1 / 2; /* Range sliders should leave the gap empty. */
  }

  :host([name="from"]) .w-slider-thumb__range {
    margin-left: var(--w-slider-thumb-size);
  }

  :host([name="to"]) .w-slider-thumb__range {
    margin-right: var(--w-slider-thumb-size);
  }

  :host([name="from"]) .w-slider-thumb__range::-webkit-slider-thumb,
  :host([name="from"]) .w-slider-thumb__tooltip-target {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size) - 1px));
  }

  :host([name="from"]) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(-1 * var(--w-slider-thumb-size) - 1px));
  }

  :host([name="to"]) .w-slider-thumb__textfield {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }

  :host([name="to"]) .w-slider-thumb__tooltip-target,
  :host([name="to"]) .w-slider-thumb__range::-webkit-slider-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size) - 1px));
  }

  :host([name="to"]) .w-slider-thumb__range::-moz-range-thumb {
    transform: translateX(calc(var(--w-slider-thumb-size) - 1px));
  }
`;
