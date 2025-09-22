import { css } from 'lit';

export const wSliderThumbStyles = css`
  :host {
    position: relative; /* Set for the fallback positioning of the tooltip ([anchor]) */
  }

  .w-slider__range {
    border-radius: 4px;
    height: var(--w-slider-track-height);
    background-color: var(--w-slider-track-background);
  }

  /*
    Use anchor positioning to place the tooltip target in relation to the slider thumb.
    Browsers that don't support CSS anchors (older Safari, Firefox at time of writing)
    show the tooltip placed in the middle of the slider ([anchor]).
   */
  input[type="range" i]::-webkit-slider-thumb {
    anchor-name: --thumb;
  }
  input[type="range" i]::-moz-range-thumb {
    anchor-name: --thumb;
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
      /* Uncomment to debug this invisible target */
      border: 2px solid lime;
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
