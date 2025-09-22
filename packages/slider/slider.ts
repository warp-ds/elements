import { html, LitElement, PropertyValues } from 'lit';

import { FormControlMixin } from '@open-wc/form-control';
import WarpElement from '@warp-ds/elements-core';
import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';

import type { WarpSliderThumb } from './slider-thumb.js';
import { wSliderStyles } from './styles/w-slider.styles.js';

// Inspo:
//   https://css-tricks.com/multi-thumb-sliders-particular-two-thumb-case/
//   https://css-tricks.com/multi-thumb-sliders-general-case/
//   https://css-tricks.com/lets-make-a-multi-thumb-slider-that-calculates-the-width-between-thumbs/

/**
 * Parent component for sliders (both single and range sliders). Used in combination with a `<w-slider-thumb>`.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-slider-and-range-slider--docs)
 *
 * @slot - For single sliders place a `<w-slider-thumb>` in the default slot.
 * @slot label - Label for the slider or range slider as a whole.
 * @slot body - Optional body text between the label and slider.
 * @slot from - Range sliders need to place a `<w-slider-thumb>` in the from and to slots.
 * @slot to - Range sliders need to place a `<w-slider-thumb>` in the from and to slots.
 *
 * @cssproperty [--w-slider-track-background=var(--w-s-color-background-disabled-subtle)] - Unfilled background color of the slider track.
 * @cssproperty [--w-slider-track-active-background=var(--w-s-color-background-primary)] - Filled background color of the slider track.
 * @cssproperty [--w-slider-track-height=4px] - Height of the unfilled slider track.
 * @cssproperty [--w-slider-track-active-height=6px] - Height of the filled slider track.
 * @cssproperty [--w-slider-thumb-background=var(--w-s-color-background-primary)] - Background color of the slider thumb (draggable circle).
 * @cssproperty [--w-slider-thumb-background-hover=var(--w-s-color-background-primary-hover)] - Background color when hovered of the slider thumb (draggable circle).
 * @cssproperty [--w-slider-thumb-shadow=none] - Shadow under the slider thumb (draggable circle).
 * @cssproperty [--w-slider-thumb-size=28px] - Size of the slider thumb (draggable circle).
 * @cssproperty [--w-slider-thumb-offset=calc(var(--w-slider-thumb-size) / 2)] - Position of the slider thumb (draggable circle).
 * @cssproperty [--w-slider-tick-color=var(--w-s-color-background-disabled-subtle)] - Color of the slider track ticks (indicator lines).
 * @cssproperty [--w-slider-tick-value-color=var(--w-s-color-text-subtle)] - Color of the labels for slider track ticks (indicator lines).
 */
class WarpSlider extends FormControlMixin(LitElement) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [reset, wSliderStyles];

  /**
   * The slider fieldset label. Required for proper accessibility.
   *
   * If you need to display HTML, use the `label` slot instead.
   */
  @property()
  label: string;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Ensures a child slider thumb has a value before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ reflect: true })
  min: string;

  @property({ reflect: true })
  max: string;

  /** Pass a comma-separated list of numbers to show markers at those values. */
  @property()
  markers: string;

  /** Suffix used in text input fields and for the min and max values of the slider. */
  @property()
  suffix: string;

  #formatter: (value: string) => string;

  /** JS hook to help you format the numeric value how you want. */
  get formatter() {
    return this.#formatter;
  }

  set formatter(fmt) {
    this.#formatter = fmt;
    this.#syncSliderThumbs();
  }

  #syncSliderThumbs(): void {
    const sliderThumbs = this.querySelectorAll<WarpSliderThumb>('w-slider-thumb');
    for (const thumb of sliderThumbs.values()) {
      // Used to style the width of the input field, which is wider in the single slider.
      thumb.isRange = sliderThumbs.length > 1;

      // Set attributes that should be in sync between slider thumbs
      thumb.min = this.min;
      thumb.markers = this.markers;
      thumb.max = this.max;
      if (this.suffix) {
        thumb.suffix = this.suffix;
      }
      thumb.formatter = this.formatter;

      // Set forceDisabled state based on radio group's disabled state
      thumb.forceDisabled = this.disabled;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.#syncSliderThumbs();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('required') ||
      changedProperties.has('min') ||
      changedProperties.has('markers') ||
      changedProperties.has('max') ||
      changedProperties.has('suffix') ||
      changedProperties.has('formatter')
    ) {
      this.#syncSliderThumbs();
    }
  }

  render() {
    return html`
      <fieldset class="w-slider">
        <legend class="w-slider__label">
          <slot id="label" name="label">${this.label}</slot>
        </legend>
        <div class="w-slider__body">
          <slot name="body"></slot>
          <slot @slotchange=${this.#syncSliderThumbs}></slot>
          <slot name="from" @slotchange=${this.#syncSliderThumbs}></slot>
          <slot name="to" @slotchange=${this.#syncSliderThumbs}></slot>
        </div>
      </fieldset>
    `;
  }
}

if (!customElements.get('w-slider')) {
  customElements.define('w-slider', WarpSlider);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-slider': WarpSlider;
  }
}

export { WarpSlider };
