// @warp-css;

import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, nothing, PropertyValues } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { WarpAttention } from '../attention/attention.js';
import { styles as unoStyles } from '../slider/styles.js';
import { reset } from '../styles.js';
import type { WarpTextField } from '../textfield/textfield.js';
import { wSliderThumbStyles } from './styles/w-slider-thumb.styles.js';

/**
 * Component to place inside a `<w-slider>`.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-slider-and-range-slider--docs)
 */
class WarpSliderThumb extends FormControlMixin(LitElement) {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [reset, unoStyles, wSliderThumbStyles];

  @property({ attribute: 'aria-label', reflect: true })
  ariaLabel: string;

  @property({ attribute: 'aria-description', reflect: true })
  ariaDescription: string;

  @property({ reflect: true })
  label: string;

  @property({ reflect: true })
  name: string;

  @property({ reflect: true })
  value: string;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  /** Set by `<w-slider>` */
  @property({ attribute: false, reflect: false })
  allowValuesOutsideRange = false;

  @property({ reflect: true })
  placeholder: string;

  /** Set by `<w-slider>` */
  @state()
  markers: string;

  /** Set by `<w-slider>` */
  @state()
  required: boolean;

  /** Set by `<w-slider>` */
  @state()
  step: number;

  /** Set by `<w-slider>` */
  @state()
  min: string;

  /** Set by `<w-slider>` */
  @state()
  max: string;

  /** Set by `<w-slider>` */
  @state()
  suffix = '';

  /** JS hook to help you format the numeric value how you want. */
  @state()
  formatter: (value: string, type: 'from-value' | 'to-value' | 'from-label' | 'to-label') => string;

  @query('input[type="range"]')
  range: HTMLInputElement;

  @query('w-textfield')
  textfield: WarpTextField;

  /** @internal */
  @state()
  _showTooltip = false;

  /** @internal */
  @state()
  _inputHasFocus = false;

  /** @internal */
  @state()
  _hiddenTextfield = false;

  // capture the initial value using connectedCallback and #initialValue
  #initialValue: string | null = null;

  resetFormControl(): void {
    this.value = this.#initialValue;
  }

  /**
   * Reference to the anchor positioning style element used by the polyfill.
   * @internal
   */
  anchorPositioningStyleElement: HTMLStyleElement | null = null;

  #showTooltip(): void {
    this._showTooltip = true;
    (this.shadowRoot.querySelector('w-attention') as WarpAttention).handleDone();
  }

  #hideTooltip(): void {
    this._showTooltip = false;
  }

  // Synchronizes the range input's value with the form value
  #syncRangeValue(): void {
    if (!this.range) return;

    if (this.value === '') {
      this.range.value = this.boundaryValue;
    } else if (this.value) {
      this.range.value = this.value;
    }
  }

  #handleValidity(error: string) {
    this.dispatchEvent(
      new CustomEvent('slidervalidity', {
        bubbles: true,
        detail: { invalid: error, slot: this.slot },
      }),
    );
  }

  async updateFieldAfterValidation() {
    const input = this.shadowRoot.querySelector('w-textfield') as HTMLInputElement;
    await this.#handleValueChange(input.value, true);
  }

  async #handleValueChange(
    value: string,
    isFromTextInput: boolean,
  ): Promise<{ shouldCancel: boolean; originalValue?: string }> {
    let valueNum = Number.parseInt(value);

    if (this.allowValuesOutsideRange && !isFromTextInput && this.step) {
      const valueIsCloseToSliderEdge =
        (this.slot === 'to' && valueNum >= Number(this.max) - 1) ||
        (this.slot === 'from' && valueNum <= Number(this.min) + 1);

      if (!valueIsCloseToSliderEdge) {
        const multiplier = 1 / this.step;
        valueNum = Math.round(valueNum * multiplier) / multiplier;
        value = valueNum.toString();
      }
    }

    // Update validation state
    // Check that the user hasn't typed in a value beyond max or min
    const maxNum = Number.parseInt(this.max);
    const minNum = Number.parseInt(this.min);
    if (!this.allowValuesOutsideRange && (valueNum > maxNum || valueNum < minNum)) {
      this.#handleValidity(
        i18n.t({
          id: 'slider.error.out_of_bounds',
          message: 'Value must be between {min} and {max}',
          values: {
            min: `${this.min} ${this.suffix}`.trim(),
            max: `${this.max} ${this.suffix}`.trim(),
          },
        }),
      );
      return { shouldCancel: true };
    }

    if (value === '' && this.required) {
      this.#handleValidity(
        i18n.t({
          id: 'slider.error.required',
          message: 'This field is required',
        }),
      );
    }

    this.value = value;

    const valueIsAtTheSliderEdge = value === this.max || value === this.min;

    // Stop a range slider's from value from reaching past the to value and vice versa
    // by updating the other component's min and max values.
    // Skip this check when typing in textfield with allowValuesOutsideRange enabled
    let shouldCancel = false;
    if (this.slot) {
      const toThumb = this.parentElement.querySelector('w-slider-thumb[slot="to"]') as WarpSliderThumb;
      const fromThumb = this.parentElement.querySelector('w-slider-thumb[slot="from"]') as WarpSliderThumb;

      const toValue = toThumb.textfield.value || this.max;
      const fromValue = fromThumb.textfield.value || this.min;

      const numericToValue = Number.parseInt(toValue);
      const numericFromValue = Number.parseInt(fromValue);

      const numberOverLapError = i18n.t({
        id: 'slider.error.overlap',
        message: 'The maximum value cannot be less than the minimum',
      });

      if (this.slot === 'from') {
        // Check that the from value is not about to be dragged past the --to value

        const toBoundary =
          this.allowValuesOutsideRange && numericToValue > maxNum
            ? numericToValue
            : Math.min(numericToValue, this.allowValuesOutsideRange ? maxNum - 1 : maxNum);

        if (valueNum > toBoundary) {
          shouldCancel = true;
          // The user might have moved the slider so fast that this.value is far away from overlapping.
          // Set it to be equal to the to/from value, depending on what slider the user's moving.
          if (this.allowValuesOutsideRange && valueIsAtTheSliderEdge) {
            this.value = String(toBoundary);
          } else {
            this.value = toValue;
          }

          if (isFromTextInput) {
            this.#handleValidity(numberOverLapError);
            // Don't override the user's input in the textfield
            await this.updateComplete;
            this.textfield.value = value;
          }
        }
      } else {
        // Check that the to value is not about to be dragged past the --from value
        const fromBoundary =
          this.allowValuesOutsideRange && numericFromValue < minNum
            ? numericFromValue
            : Math.max(Number.parseInt(fromValue), this.allowValuesOutsideRange ? minNum + 1 : minNum);

        if (valueNum < fromBoundary) {
          shouldCancel = true;
          // The user might have moved the slider so fast that this.value is far away from overlapping.
          // Set it to be equal to the to/from value, depending on what slider the user's moving.
          if (this.allowValuesOutsideRange && valueIsAtTheSliderEdge) {
            this.value = String(fromBoundary);
          } else {
            this.value = fromValue;
          }

          if (isFromTextInput) {
            this.#handleValidity(numberOverLapError);
            // Don't override the user's input in the textfield
            await this.updateComplete;
            this.textfield.value = value;
          }
        }
      }
    }

    if (shouldCancel) {
      return { shouldCancel: true };
    }

    this.#handleValidity('');

    this.range.value = Math.min(Math.max(Number(value), Number(this.min)), Number(this.max)).toString();
    this.value = this.allowValuesOutsideRange && !isFromTextInput && valueIsAtTheSliderEdge ? '' : value;

    (this.shadowRoot.querySelector('w-attention') as WarpAttention).handleDone();

    return { shouldCancel: false };
  }

  async #onInput(e: InputEvent | CustomEvent): Promise<boolean> {
    const isFromTextInput = (e.currentTarget as HTMLElement).tagName === 'W-TEXTFIELD';
    if (e instanceof CustomEvent) return; // We rely on the InputEvent event that fires right after the CustomEvent

    const value = (e.currentTarget as HTMLInputElement).value;
    const result = await this.#handleValueChange(value, isFromTextInput);

    if (result.shouldCancel) {
      e.preventDefault();
      // Needed to stop slider from moving independendtly of the value when we cancel the event
      return false;
    }

    return true;
  }

  async #onRangeSliderKeyDown(e: KeyboardEvent): Promise<void> {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

    const currentValue = Number(this.range.value);
    const stepValue = this.step || 1;

    let newValue: number;
    if (e.key === 'ArrowLeft') {
      newValue = currentValue - stepValue;
    } else {
      newValue = currentValue + stepValue;
    }

    newValue = Math.min(Math.max(newValue, Number(this.min)), Number(this.max));

    const result = await this.#handleValueChange(newValue.toString(), false);
    if (result.shouldCancel) {
      e.preventDefault();
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    this.#initialValue = this.value;
    this.setValue(this.value);

    if (this.slot && !this.ariaDescription) {
      if (this.slot === 'from') {
        this.ariaDescription = i18n.t({
          id: 'slider.label.from',
          comment: "Accessible label for the 'from value' input field in a range slider",
          message: 'From',
        });
      } else if (this.slot === 'to') {
        this.ariaDescription = i18n.t({
          id: 'slider.label.to',
          comment: "Accessible label for the 'to value' input field in a range slider",
          message: 'To',
        });
      }
    }

    if (!('anchorName' in document.documentElement.style)) {
      // Load the polyfill for CSS anchor positioning by @oddbird for browsers without native support.
      const dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf('/'));
      try {
        const [{ default: polyfill }] = await Promise.all([
          import(
            /* @vite-ignore */
            `${dirname}/oddbird-css-anchor-positioning.js`
          ),
          this.updateComplete,
        ]);

        // We need to work around a limitation in the polyfill. It doesn't support constructed stylesheets.
        // This is based on the approach in Fluent UI: https://github.com/microsoft/fluentui/pull/32852/files#diff-7b316dca1b4391eae93d5edf48e9689e83d39f1c82cb3f8d61450dfad6f3c59eR73
        if (!this.anchorPositioningStyleElement) {
          this.anchorPositioningStyleElement = document.createElement('style');
          this.shadowRoot.prepend(this.anchorPositioningStyleElement);
        }

        this.anchorPositioningStyleElement.textContent = `
        /*
         * The polyfill can only anchor to ::before and ::after pseudo elements, not the pseudo element slider thumb.
         * We work around that by recreating a transparent version of the active range
         * so that we can position relative to that, without crossing the shadow root boundary.
         */
        .polyfill-range {
          align-self: center;
          background: transparent;
          height: var(--w-slider-track-active-height);
          position: absolute;
          padding-inline-start: var(--active-range-inline-start-padding, 0);
          padding-inline-end: var(--active-range-inline-end-padding, 0);
          top: var(--_range-top);
          left: 0;
          right: 0;
          grid-area: slider;
        }

        .polyfill-active-range {
          anchor-name: --polyfilled-thumb;

          box-sizing: content-box;
          background: transparent;
          height: var(--w-slider-track-active-height);

          border-start-start-radius: var(--active-range-border-radius, 0);
          border-end-start-radius: var(--active-range-border-radius, 0);

          margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--active-range-inline-start-padding, 0px));
          width: calc(calc(var(--_filled-values) * 1%) + var(--active-range-inline-end-padding, 0px));
        }

        #target {
          position: absolute;
          top: anchor(--polyfilled-thumb top);
          right: anchor(--polyfilled-thumb right);
          margin-right: 12px;
        }

        :host([name='from']) .polyfill-active-range {
          margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--active-range-inline-start-padding, 0px));
          width: calc(calc(var(--_filled-values) * 1%) + var(--active-range-inline-end-padding, 0px));
        }

        :host([name='from']) #target {
          left: anchor(--polyfilled-thumb left);
          margin-left: 38px;
        }
      `;

        await polyfill({
          roots: [this.shadowRoot],
          elements: [this.anchorPositioningStyleElement],
        });
      } catch (e) {
        console.error(
          new Error('Error registering the CSS anchor positioning polyfill. The UI will look broken.', { cause: e }),
        );
      }
    } else {
      await this.updateComplete;
    }
    this.#syncRangeValue();
  }

  // The boundary value for this thumb (min for 'from', max for 'to' or default)
  get boundaryValue(): string {
    return this.slot === 'from' ? this.min : this.max;
  }

  /** Value to display in the textfield (shows boundary when focused on empty value) */
  get textFieldDisplayValue() {
    if (this._inputHasFocus) {
      // When focused, show the range's clamped value if the form value is empty (slider at boundary)
      // This allows users to see and edit the actual min/max value
      if (this.value !== '') {
        return this.value;
      }

      if (!this.range?.value) {
        return '';
      }

      return Math.min(Math.max(Number(this.range.value), Number(this.min) + 1), Number(this.max) - 1).toString();
    }

    // When not focused, display the value as-is:
    // - Empty string if slider set it to empty (at boundary)
    // - Actual value if user typed it (even if it equals min/max)
    return this.value;
  }

  /** Value to display in the tooltip */
  get tooltipDisplayValue(): string | number {
    let value: string | number = 0;
    if (this.formatter) {
      value = this.formatter(this.value, (this.slot + '-label' || 'to-label') as 'from-label' | 'to-label');
    } else if (this.value === '') {
      value = this.range?.value ?? this.boundaryValue;
    } else {
      value = this.value || 0;
    }
    return value;
  }

  get ariaDescriptionText() {
    let prefix = '';
    const description = this.ariaDescription || '';

    const showPlaceholder = this.value === '';
    if (this.allowValuesOutsideRange && showPlaceholder) {
      prefix =
        this.slot === 'from'
          ? i18n.t({
              id: 'slider.placeholder.from',
              message: 'Min',
            })
          : i18n.t({
              id: 'slider.placeholder.to',
              message: 'Max',
            });
    }

    if (prefix) {
      return `${prefix}, ${description}`;
    }
    return description;
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('allowValuesOutsideRange')) {
      if (this.allowValuesOutsideRange && !this.placeholder) {
        if (this.slot === 'to' || this.slot === '') {
          this.placeholder = i18n.t({
            id: 'slider.placeholder.to',
            message: 'Max',
            comment: 'Max as in short for Maximum',
          });
        } else if (this.slot === 'from') {
          this.placeholder = i18n.t({
            id: 'slider.placeholder.from',
            message: 'Min',
            comment: 'Min as in short for Minimum',
          });
        }
      }
    }

    if (changedProperties.has('value')) {
      this.setValue(this.value);
      this.#syncRangeValue();
    }
  }

  render() {
    return html`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>
        ${
          !('anchorName' in document.documentElement.style)
            ? html`<div class="polyfill-range">
              <div class="polyfill-active-range"></div>
            </div>`
            : nothing
        }
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${ifDefined(this.ariaDescription ? 'aria-description' : undefined)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          aria-valuetext="${this.tooltipDisplayValue}"
          min="${this.min}"
          max="${this.max}"
          step="${ifDefined(!this.allowValuesOutsideRange && this.step ? this.step : undefined)}"
          ?disabled="${this.disabled}"
          @mousedown="${this.#showTooltip}"
          @mouseup="${this.#hideTooltip}"
          @touchstart="${this.#showTooltip}"
          @touchend="${this.#hideTooltip}"
          @focus="${this.#showTooltip}"
          @blur="${this.#hideTooltip}"
          @input="${this.#onInput}"
          @keydown="${this.allowValuesOutsideRange ? this.#onRangeSliderKeyDown : nothing}"
        />

        ${
          this.slot === 'from' || !this.slot
            ? // avoid including these labels twice, for screen readers
              html`
              <span class="sr-only">
                ${
                  i18n.t({
                    id: 'slider.label.from',
                    message: 'From',
                  }) +
                  ' ' +
                  (this.formatter
                    ? this.formatter(this.allowValuesOutsideRange ? '' : this.min, 'from-label')
                    : this.min) +
                  ', ' +
                  i18n.t({
                    id: 'slider.label.to',
                    message: 'To',
                  }) +
                  ' ' +
                  (this.formatter ? this.formatter(this.allowValuesOutsideRange ? '' : this.max, 'to-label') : this.max)
                }
              </span>`
            : nothing
        }

        <span
          aria-hidden="true"
          class="w-slider-thumb__from-marker"
        >
          ${this.formatter ? this.formatter(this.allowValuesOutsideRange ? '' : this.min, 'from-label') : this.min}
        </span>
        <span
          aria-hidden="true"
          class="w-slider-thumb__to-marker"
        >
          ${this.formatter ? this.formatter(this.allowValuesOutsideRange ? '' : this.max, 'to-label') : this.max}
        </span>

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${ifDefined(this.ariaDescriptionText)}"
          class="${classMap({
            'w-slider-thumb__textfield': true,
            'sr-only': this._hiddenTextfield,
          })}"
          type="number"
          tabindex="${this._hiddenTextfield ? -1 : nothing}"
          placeholder="${this.placeholder}"
          .value="${this.textFieldDisplayValue}"
          min="${this.allowValuesOutsideRange ? nothing : this.min}"
          max="${this.allowValuesOutsideRange ? nothing : this.max}"
          step="${ifDefined(this.step)}"
          ?invalid="${Boolean(this.invalid)}"
          @input="${this.#onInput}"
          ?disabled="${this.disabled}"
        >
          ${this.suffix ? html`<w-affix slot="suffix" label="${this.suffix}"></w-affix>` : nothing}
        </w-textfield>
        <w-attention
          tooltip
          placement="top"
          flip
          distance="24"
          .show="${this._showTooltip}"
        >
          <output
            id="target"
            class="w-slider-thumb__tooltip-target"
            slot="target"
          ></output>
          <span slot="message">
            ${this.tooltipDisplayValue}${this.suffix ? html`&nbsp;${this.suffix}` : nothing}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description">
          ${this.ariaDescriptionText}
        </span>
      </div>
    `;
  }
}

if (!customElements.get('w-slider-thumb')) {
  customElements.define('w-slider-thumb', WarpSliderThumb);
}

export { WarpSliderThumb };
