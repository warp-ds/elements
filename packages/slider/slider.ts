import { html, LitElement, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { activateI18n } from '../i18n.js';
import type { WarpSliderThumb, SliderSlot} from '../slider-thumb/slider-thumb.js';
import { reset } from '../styles.js';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
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
class WarpSlider extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [reset, wSliderStyles];

  /**
   * The slider fieldset label. Required for proper accessibility.
   *
   * If you need to display HTML, use the `label` slot instead (f. ex. `<legend class="sr-only" slot="label">Production year</legend>`)
   */
  @property({ reflect: true })
  label: string;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Whether or not to allow values outside the range such as "Before 1950" and "2025+".
   */
  @property({ type: Boolean, attribute: 'open-ended' })
  openEnded = false;

  @property({ type: String, reflect: true })
  error = '';

  @property({ type: String, reflect: true, attribute: 'help-text' })
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
  suffix = '';

  @property({ type: Boolean, reflect: true, attribute: 'hidden-textfield' })
  hiddenTextfield = false;

  /** Formatter for the tooltip and input mask values. */
  @property({ attribute: false })
  valueFormatter: (value: string, slot: SliderSlot) => string;

  /** Replaces {@link valueFormatter} for the tooltip. Use in open-ended sliders to show for example "300+ hk" instead of "Max" in the tooltip. */
  @property({ attribute: false })
  tooltipFormatter: (value: string, slot: SliderSlot) => string;

  /** Formatter for the min and max labels below the range. */
  @property({ attribute: false })
  labelFormatter: (slot: SliderSlot) => string;

  @state()
  _invalidMessage = '';

  @state()
  _hasInternalError = false;

  @state()
  _showError = false;

  @state()
  _tabbableElements: Array<HTMLElement> = [];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
  }

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
      thumb.labelFormatter = this.labelFormatter;
      thumb.valueFormatter = this.valueFormatter;
      thumb.tooltipFormatter = this.tooltipFormatter;
      thumb.openEnded = this.openEnded;
      thumb._hiddenTextfield = this.hiddenTextfield;

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

      thumb.disabled = this.disabled;
      thumb.invalid = Boolean(this.errorText);

      this.#updateActiveTrack(thumb);
    }

    // Missing a CSS-only way to detect if something is slotted in the named slots
    const fieldset = this.shadowRoot.querySelector('fieldset');
    if (usedNamedSlots) {
      fieldset.style.setProperty('--active-range-inline-start-padding', 'var(--w-slider-thumb-size, 28px)');
      fieldset.style.setProperty('--active-range-inline-end-padding', 'var(--w-slider-thumb-size, 28px)');
    } else {
      fieldset.style.setProperty('--active-range-border-radius', '4px');
    }
  }

  get edgeMin() {
    return this.openEnded ? (Number(this.min) - 1).toString() : this.min;
  }
  get edgeMax() {
    return this.openEnded ? (Number(this.max) + 1).toString() : this.max;
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

    if (this.openEnded) {
      this.style.setProperty('--over-under-offset', '1');
    }

    const sliderThumbs = this.querySelectorAll<WarpSliderThumb>('w-slider-thumb');
    const isRangeSlider = sliderThumbs.length === 2;
    if (isRangeSlider) {
      this.style.setProperty('--range-slider-magic-pixel', '1px');

      const sliderThumbsArr = Array.from(sliderThumbs);
      this._tabbableElements[0] = sliderThumbsArr[0].shadowRoot.querySelector('input');
      this._tabbableElements[1] = sliderThumbsArr[1].shadowRoot.querySelector('input');
      this._tabbableElements[2] = sliderThumbsArr[0].shadowRoot.querySelector('w-textfield');
      this._tabbableElements[3] = sliderThumbsArr[1].shadowRoot.querySelector('w-textfield');
    } else {
      const sliderThumbsArr = Array.from(sliderThumbs);
      this._tabbableElements[0] = sliderThumbsArr[0].shadowRoot.querySelector('input');
      this._tabbableElements[1] = sliderThumbsArr[0].shadowRoot.querySelector('w-textfield');
    }

    if (this.invalid && this.error) {
      this._showError = true;
    }

    this.#syncSliderThumbs();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('required') ||
      changedProperties.has('min') ||
      changedProperties.has('step') ||
      changedProperties.has('max') ||
      changedProperties.has('suffix') ||
      changedProperties.has('labelFormatter') ||
      changedProperties.has('valueFormatter') ||
      changedProperties.has('_invalidMessage') ||
      changedProperties.has('_hasInternalError')
    ) {
      this.#syncSliderThumbs();
    }

    if (changedProperties.has('error') || changedProperties.has('invalid')) {
      if (this.error && this.invalid) {
        this._showError = true;
      } else {
        this._showError = false;
      }
      this.#syncSliderThumbs();
    }
  }

  #onInput(e: InputEvent) {
    const input = e.target as WarpSliderThumb;
    this.#updateActiveTrack(input);

    const isRangeSlider = input.slot;
    if (isRangeSlider) {
      this.#doValidation();
    }
  }

  #onBlur() {
    if (this.componentHasError) {
      this._showError = true;
    } else {
      this._showError = false;
    }

    this.#syncSliderThumbs();
  }

  #handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Tab') {
      const knownFocusableElementIndex = this._tabbableElements.indexOf(
        (e.target as WarpSliderThumb).shadowRoot.activeElement as HTMLElement,
      );
      if (knownFocusableElementIndex === -1) {
        return; // shouldn't really happen, but don't prevent anything
      }

      const direction = e.shiftKey ? -1 : +1;

      const nextFocusableElement = this._tabbableElements[knownFocusableElementIndex + direction];
      if (!nextFocusableElement) {
        return;
      }
      e.preventDefault();
      nextFocusableElement.focus();
    }
  }

  #doValidation() {
    // In a range slider changing the value in one input can change the validity
    // of the second input. Specifically, what was a value outside the mininum or
    // maximum can become inside those limits when the limits change, by changing
    // the from or to values. Check to see if a field is invalid, but should be
    // valid based on those rules.

    let from: WarpSliderThumb;
    let to: WarpSliderThumb;
    const sliderThumbs = this.querySelectorAll<WarpSliderThumb>('w-slider-thumb');
    for (const thumb of sliderThumbs.values()) {
      if (thumb.slot === 'from') from = thumb;
      if (thumb.slot === 'to') to = thumb;
    }

    if (!from || !to) {
      // Not a range slider, nothing to do here.
      return;
    }
    if (!from.invalid && !to.invalid) {
      // Both are valid, nothing to do here
      return;
    }
  }

  #onSliderValidity(e: CustomEvent) {
    e.stopPropagation();

    const didHaveInternalError = this._hasInternalError || this.invalid;

    const triggeredThumb = e.target as WarpSliderThumb;

    this._hasInternalError = Boolean(e.detail.invalid) || this.invalid;
    this._invalidMessage = e.detail.invalid;

    if (didHaveInternalError === true && this._hasInternalError === false) {
      const sliderThumbs = this.querySelectorAll<WarpSliderThumb>('w-slider-thumb');
      for (const thumb of sliderThumbs.values()) {
        if (thumb !== triggeredThumb) {
          thumb.updateFieldAfterValidation();
        }
      }
    }
  }

  #getEdgeValue(boundary: string, input: WarpSliderThumb): string {
    if (input.value === undefined || input.value === null) {
      input.value = this.openEnded ? '' : boundary;
    }
    // Use boundary for CSS positioning when value is empty
    return input.value === '' ? boundary : input.value;
  }

  /**
   * We use CSS variables to fill the active track with a background color.
   */
  #updateActiveTrack(input: WarpSliderThumb) {
    const slotName = input.slot;

    if (!slotName) {
      this.style.setProperty('--from', '0');
    }

    if (slotName === 'from') {
      this.style.setProperty('--from', this.#getEdgeValue(this.edgeMin, input));
    }

    if (!slotName || slotName === 'to') {
      this.style.setProperty('--to', this.#getEdgeValue(this.edgeMax, input));
    }
  }

  get componentHasError(): boolean {
    return this.invalid || this._hasInternalError;
  }

  get errorText(): string {
    if (!this._showError) {
      return '';
    }

    return this.error || this._invalidMessage;
  }

  render() {
    return html`
      <fieldset
        id="fieldset"
        class="w-slider"
        @input="${this.#onInput}"
        @focusout="${this.#onBlur}"
        @slidervalidity="${this.#onSliderValidity}"
        @keydown="${this.#handleKeyDown}"
        aria-invalid="${this.errorText ? 'true' : nothing}"
        ?disabled="${this.disabled}"
      >
        ${
          this.label
            ? html`<legend class="w-slider__label">
              <slot id="label" name="label">${this.label}</slot>
            </legend>`
            : html`<slot id="label" name="label"></slot>`
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
        ${
          this.errorText
            ? html`<p class="w-slider__error" aria-describes="fieldset">
              ${this.errorText}
            </p>`
            : this.helpText
              ? html`<p class="w-slider__help-text" aria-describes="fieldset">
                ${this.helpText}
              </p>`
              : nothing
        }
      </fieldset>
    `;
  }
}

if (!customElements.get('w-slider')) {
  customElements.define('w-slider', WarpSlider);
}

export { WarpSlider };
