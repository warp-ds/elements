import { html, LitElement, PropertyValues } from 'lit';

import { FormControlMixin } from '@open-wc/form-control';
import WarpElement from '@warp-ds/elements-core';
import { property, query } from 'lit/decorators.js';

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
 * @slot description - Optional description between the label and slider.
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

  @property({ type: Number })
  step: number;

  /** Suffix used in text input fields and for the min and max values of the slider. */
  @property()
  suffix: string;

  /** Function to format the to- and from labels and value in the slider thumb tooltip. */
  @property({ attribute: false })
  formatter: (value: string) => string;

  #syncSliderThumbs(): void {
    const sliderThumbs = this.querySelectorAll<WarpSliderThumb>('w-slider-thumb');
    for (const thumb of sliderThumbs.values()) {
      // Set attributes that should be in sync between slider thumbs
      thumb.min = this.min;
      thumb.max = this.max;
      thumb.step = this.step;
      thumb.markers = this.markers;
      thumb.suffix = this.suffix;
      thumb.formatter = this.formatter;

      if (!thumb.ariaLabel) {
        if (!thumb.slot) {
          thumb.ariaLabel = this.label;
        }
        if (thumb.slot === 'from') {
          thumb.ariaLabel = `${this.label} min`;
        }
        if (thumb.slot === 'to') {
          thumb.ariaLabel = `${this.label} max`;
        }
      }

      // Set forceDisabled state based on slider component disabled state
      thumb.forceDisabled = this.disabled;

      this.#updateActiveTrack(thumb);
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.style.setProperty('--min', this.min);
    this.style.setProperty('--max', this.max);
    this.#syncSliderThumbs();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('required') ||
      changedProperties.has('min') ||
      changedProperties.has('markers') ||
      changedProperties.has('step') ||
      changedProperties.has('max') ||
      changedProperties.has('suffix') ||
      changedProperties.has('formatter')
    ) {
      this.#syncSliderThumbs();
    }
  }

  #onInput(e: InputEvent) {
    const input = e.target as WarpSliderThumb;
    this.#updateActiveTrack(input);
  }

  /**
   * We use CSS variables to fill the active track with a background color.
   */
  #updateActiveTrack(input: WarpSliderThumb) {
    const slotName = input.slot;

    if (slotName === 'from') {
      // Default to the minimum value if no value has been chosen yet.
      const from = (input.value ??= this.min);
      this.style.setProperty('--from', from);
    }

    if (!slotName) {
      this.style.setProperty('--from', '0');
    }

    if (!slotName || slotName === 'to') {
      // Default to the maximum value if no value has been chosen yet.
      const to = (input.value ??= this.max);
      this.style.setProperty('--to', to);
    }
  }

  render() {
    return html`
      <fieldset id="fieldset" class="w-slider" @input="${this.#onInput}">
        <legend class="w-slider__label">
          <slot id="label" name="label">${this.label}</slot>
        </legend>
        <slot class="w-slider__description" name="description"></slot>
        <div class="w-slider__active-range"></div>
        <slot class="w-slider__slider" @slotchange=${this.#syncSliderThumbs}></slot>
        <slot class="w-slider__slider" name="from" @slotchange=${this.#syncSliderThumbs}></slot>
        <slot class="w-slider__slider" name="to" @slotchange=${this.#syncSliderThumbs}></slot>
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
