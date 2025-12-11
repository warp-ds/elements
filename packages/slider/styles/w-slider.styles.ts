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
      "label"
      "description"
      "slider"
      "error";
    grid-template-columns: 1fr;

    --w-slider-track-background: var(--w-s-color-background-disabled-subtle);
    --w-slider-track-active-background: var(--w-s-color-background-primary);
    --w-slider-track-height: 4px;
    --w-slider-track-active-height: 6px;
    --w-slider-thumb-background: var(--w-s-color-background-primary);
    --w-slider-thumb-background-hover: var(
      --w-s-color-background-primary-hover
    );
    --w-slider-thumb-size: 28px;
    --w-slider-thumb-offset: calc(var(--w-slider-thumb-size) / 2);
    --w-slider-marker-color: var(--w-s-color-border);

    /* Math corner to calculate the fill of the slider and placement of markers. */

    /* The --min value can be non-zero, f. ex. choosing a year from 1950 to 2025. Normalize the values so we start at 0 and run to max - min. */
    --_value-range: calc(var(--max) - var(--min));

    /** Round up to the nearest --step, which defaults to 1 (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#step) */
    --_from-in-range: round(
      up,
      max(calc(var(--from) - var(--min)), 0),
      var(--step, 1)
    );

    /* limit to maximum value in range so typing a value larger than max doesn't explode layouts */
    --_to-in-range: round(
      up,
      min(calc(var(--to) - var(--min)), var(--_value-range)),
      var(--step, 1)
    );

    /* Position the starting point of the fill in the case of a non-zero --from value in a range slider.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the beginning of the range slider (dashes in this ASCII-range-slider: |---O******O|) */
    --_from-as-percent-of-max: calc(
      var(--_from-in-range) / var(--_value-range) * 100
    );
    --_blank-values-before: var(--_from-as-percent-of-max);

    /* Set the width of the fill as a percentage.
     * In other words, given a width of 100% how many percent should be left unfilled/blank
     * at the end of the slider (dashes in this ASCII-slider: |******O---|) */
    --_to-as-percent-of-max: calc(
      var(--_to-in-range) / var(--_value-range) * 100
    );
    --_filled-values: calc(
      var(--_to-as-percent-of-max) - var(--_blank-values-before)
    );

    /* Vertical position of range and markers */
    --_range-top: calc(
      var(--w-slider-thumb-size) / 2 +
        calc(
          var(--w-slider-track-active-height) - calc(
              var(--w-slider-track-height) / 2
            ) + 1px
        )
    );
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

  .w-slider__range {
    align-self: center;
    background: var(--w-slider-track-background);
    border-radius: 4px;
    height: var(--w-slider-track-active-height);
    position: absolute;
    /* For range sliders to avoid overlapping the slider thumbs we transform them to
    be visually to the left and right of their respective input[type="range"]. This
    padding is here so the active-range element is the same width as the input fields. */
    padding-inline-start: var(--active-range-inline-start-padding, 0);
    padding-inline-end: var(--active-range-inline-end-padding, 0);
    top: var(--_range-top);
    left: 0;
    right: 0;
    grid-area: slider;
  }

  .w-slider__active-range {
    box-sizing: content-box;
    background: var(--w-slider-track-active-background);
    height: var(--w-slider-track-active-height);

    border-start-start-radius: var(--active-range-border-radius, 0);
    border-end-start-radius: var(--active-range-border-radius, 0);

    margin-left: calc(
      calc(var(--_blank-values-before) * 1%) - var(
          --active-range-inline-start-padding,
          0px
        )
    );
    width: calc(
      calc(var(--_filled-values) * 1%) +
        var(--active-range-inline-end-padding, 0px)
    );
    z-index: 1;
  }

  .w-slider__markers {
    --_marker-height: 7px;
    --_marker-width: 1px;

    align-self: center;

    /* Creates a linear gradient with --_marker-width wide markers
       followed by enough transparent that we can repeat the gradient
       along the X axis and have markers visible where we want them. */
    background: linear-gradient(
        to right,
        var(--w-slider-marker-color) var(--_marker-width),
        rgba(0, 0, 0, 0) 1px calc(100% - 1px),
        var(--w-slider-marker-color) 100%
      )
      repeat-x;
    --_step-width-as-percent: calc(var(--markers) / var(--_value-range) * 100);
    background-size: calc(var(--_step-width-as-percent) * 1%)
      var(--_marker-height);

    background-position: bottom 0 left 8px right 8px;
    position: absolute;
    top: calc(var(--_range-top) + 2px);
    left: 1px;
    right: 1px;
    grid-area: slider;
    height: var(--_marker-height);
    margin-inline: var(--w-slider-thumb-offset);
  }

  .w-slider__error {
    grid-area: error;
    padding-top: 8px;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
    color: var(--w-s-color-text-negative);
  }

  .w-slider__help-text {
    grid-area: error;
    padding-top: 8px;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
  }

  slot::slotted(w-slider-thumb) {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    grid-area: slider;
  }
`;
