import { html, PropertyValues } from 'lit';

import { property, queryAll, state } from 'lit/decorators.js';

import { BaseFormAssociatedElement } from '../rip-and-tear-radio/form-associated-element';

import type { WarpSliderThumb } from './slider-thumb';

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
 */
class WarpSlider extends BaseFormAssociatedElement {
  static shadowRootOptions = { ...BaseFormAssociatedElement.shadowRootOptions, delegatesFocus: true };

  @property({ reflect: true })
  min: string;

  @property({ reflect: true })
  max: string;

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

  async #syncSliderThumbs(): Promise<void> {
    const sliderThumbs = this.querySelectorAll<WarpSliderThumb>('w-slider-thumb');
    for (const thumb of sliderThumbs.values()) {
      // Used to style the width of the input field, which is wider in the single slider.
      thumb.isRange = sliderThumbs.length > 1;

      // Set attributes that should be in sync between slider thumbs
      thumb.min = this.min;
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
    this.#syncSliderThumbs();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('min') ||
      changedProperties.has('max') ||
      changedProperties.has('suffix') ||
      changedProperties.has('formatter')
    ) {
      this.#syncSliderThumbs();
    }
  }

  formResetCallback(...args: Parameters<BaseFormAssociatedElement['formResetCallback']>) {
    super.formResetCallback(...args);
    this.#syncSliderThumbs();
  }

  // Inspo:
  //   https://css-tricks.com/multi-thumb-sliders-particular-two-thumb-case/
  //   https://css-tricks.com/multi-thumb-sliders-general-case/
  //   https://css-tricks.com/lets-make-a-multi-thumb-slider-that-calculates-the-width-between-thumbs/
  render() {
    // Div with role group to be able to style it as a CSS grid
    // (fieldset does not support that in chrome apparently).
    return html`
      <div role="group" aria-labelledby="label">
        <slot id="label" name="label"></slot>
        <slot name="body"></slot>
        <slot @slotchange=${this.#syncSliderThumbs}></slot>
        <slot name="from" @slotchange=${this.#syncSliderThumbs}></slot>
        <slot name="to" @slotchange=${this.#syncSliderThumbs}></slot>
      </div>
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
