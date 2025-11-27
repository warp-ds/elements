import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, nothing, PropertyValues } from 'lit';
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
 * @slot description - Optional description between the label and slider.
 * @slot from - Range sliders need to place a `<w-slider-thumb>` in the from and to slots.
 * @slot to - Range sliders need to place a `<w-slider-thumb>` in the from and to slots.
 */
class WarpSlider extends FormControlMixin(LitElement) {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [reset, wSliderStyles];

  /**
   * The slider fieldset label. Required for proper accessibility.
   *
   * If you need to display HTML, use the `label` slot instead.
   */
  @property({ reflect: true })
  label: string;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, attribute: 'allow-values-outside-range' })
  allowValuesOutsideRange = false;

  // TODO Implement error texts
  @property({ reflect: true })
  helpText = '';

  @property({ type: Boolean, reflect: true })
  invalid = false;

  /** Ensures a child slider thumb has a value before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ reflect: true })
  min: string;

  @property({ reflect: true })
  max: string;

  /** Pass a value similar to step to create visual markers at that interval */
  @property({ type: Number, reflect: true })
  markers: number;

  @property({ type: Number, reflect: true })
  step: number;

  /** Suffix used in text input fields and for the min and max values of the slider. */
  @property({ reflect: true })
  suffix: string;

  /** Function to format the to- and from labels and value in the slider thumb tooltip. */
  @property({ attribute: false })
  formatter: (value: string, type: 'to' | 'from') => string;

  #syncSliderThumbs(): void {
    const sliderThumbs = this.querySelectorAll<WarpSliderThumb>('w-slider-thumb');
    let usedNamedSlots = false;
    for (const thumb of sliderThumbs.values()) {
      // Set attributes that should be in sync between slider thumbs
      thumb.min = this.edgeMin;
      thumb.max = this.edgeMax;
      thumb.step = this.step;
      thumb.suffix = this.suffix;
      thumb.required = this.required;
      thumb.formatter = this.formatter;
      thumb.allowValuesOutsideRange = this.allowValuesOutsideRange;

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

      if (thumb.slot === 'from' || thumb.slot === 'to') {
        usedNamedSlots = true;
      }

      // Set forceDisabled state based on slider component disabled state
      thumb.forceDisabled = this.disabled;
      thumb.forceInvalid = this.invalid;

      this.#updateActiveTrack(thumb);
    }

    // Missing a CSS-only way to detect if something is slotted in the named slots
    const fieldset = this.shadowRoot.querySelector('fieldset');
    if (usedNamedSlots) {
      fieldset.style.setProperty('--active-range-inline-start-padding', 'var(--w-slider-thumb-size)');
      fieldset.style.setProperty('--active-range-inline-end-padding', 'var(--w-slider-thumb-size)');
    } else {
      fieldset.style.setProperty('--active-range-border-radius', '4px');
    }
  }

  get edgeMin() {
    return this.allowValuesOutsideRange ? (Number(this.min) - 1).toString() : this.min;
  }
  get edgeMax() {
    return this.allowValuesOutsideRange ? (Number(this.max) + 1).toString() : this.max;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    if (this.step) {
      this.style.setProperty('--step', String(this.step));
    }
    this.style.setProperty('--min', this.edgeMin);
    this.style.setProperty('--max', this.max);
    if (this.markers) {
      this.style.setProperty('--markers', String(this.markers));
    }

    this.#syncSliderThumbs();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('invalid') ||
      changedProperties.has('required') ||
      changedProperties.has('min') ||
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

  #onSliderValidity(e: CustomEvent) {
    e.stopPropagation();
    this.invalid = e.detail.invalid;
  }

  /**
   * We use CSS variables to fill the active track with a background color.
   */
  #updateActiveTrack(input: WarpSliderThumb) {
    const slotName = input.slot;

    // Helper to initialize value if needed and return CSS value
    const initializeValue = (boundary: string): string => {
      if (input.value === undefined || input.value === null) {
        input.value = this.allowValuesOutsideRange ? '' : boundary;
      }
      // Use boundary for CSS positioning when value is empty
      return input.value === '' ? boundary : input.value;
    };

    if (!slotName) {
      this.style.setProperty('--from', '0');
    }

    if (slotName === 'from') {
      this.style.setProperty('--from', initializeValue(this.edgeMin));
    }

    if (!slotName || slotName === 'to') {
      this.style.setProperty('--to', initializeValue(this.edgeMax));
    }
  }

  render() {
    return html`
      <fieldset
        id="fieldset"
        class="w-slider"
        @input="${this.#onInput}"
        @slidervalidity="${this.#onSliderValidity}"
        aria-invalid="${this.invalid ? 'true' : nothing}"
        aria-describedby="${this.invalid ? 'error-slot' : nothing}"
      >
        ${
          this.label
            ? html`<legend class="w-slider__label">
              <slot id="label" name="label">${this.label}</slot>
            </legend>`
            : nothing
        }
        <slot class="w-slider__description" name="description"></slot>
        ${this.markers ? html`<div class="w-slider__markers"></div>` : nothing}
        <div class="w-slider__range">
          <div class="w-slider__active-range"></div>
        </div>
        <slot
          class="w-slider__slider"
          @slotchange=${this.#syncSliderThumbs}
        ></slot>
        <slot
          class="w-slider__slider"
          name="from"
          @slotchange=${this.#syncSliderThumbs}
        ></slot>
        <slot
          class="w-slider__slider"
          name="to"
          @slotchange=${this.#syncSliderThumbs}
        ></slot>
        <slot
          class="w-slider__error"
          id="error-slot"
          name="error"
          aria-describes="fieldset"
        ></slot>
      </fieldset>
    `;
  }
}

if (!customElements.get('w-slider')) {
  customElements.define('w-slider', WarpSlider);
}

export { WarpSlider };
