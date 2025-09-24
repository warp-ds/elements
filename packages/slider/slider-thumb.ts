// @warp-css;

import { html, LitElement, nothing, PropertyValues } from 'lit';

import { FormControlMixin } from '@open-wc/form-control';
import WarpElement from '@warp-ds/elements-core';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { reset } from '../styles.js';
import type { WarpTextField } from '../textfield/index.js';

import { wSliderThumbStyles } from './styles/w-slider-thumb.styles.js';
import { styles as unoStyles } from './styles.js';

/**
 * Component to place inside a `<w-slider>`.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-slider-and-range-slider--docs)
 */
class WarpSliderThumb extends FormControlMixin(LitElement) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [reset, unoStyles, wSliderThumbStyles];

  @property({ attribute: 'aria-label' })
  ariaLabel: string;

  @property({ attribute: 'aria-description' })
  ariaDescription: string;

  @property()
  label: string;

  @property()
  name: string;

  @property({ reflect: true })
  value: string;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  /** Set by `<w-slider>` */
  @state()
  markers: string;

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
  suffix: string;

  @state()
  forceDisabled: boolean;

  /** JS hook to help you format the numeric value how you want. */
  @state()
  formatter: (value: string) => string;

  @query('input[type="range"]')
  range: HTMLInputElement;

  /** @internal */
  @state()
  _showTooltip = false;

  #showTooltip(): void {
    this._showTooltip = true;
  }

  #hideTooltip(): void {
    this._showTooltip = false;
  }

  #onInput(e: InputEvent | CustomEvent): void {
    const value = (e as CustomEvent<{ value: string }>).detail?.value || (e.currentTarget as WarpTextField).value;
    this.value = String(value);

    // Need to set value this way as well, not just via the attribute,
    // to trigger visual update when changing the textfield.
    this.range.value = this.value;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.range.value = this.value ?? this.max;
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  render() {
    return html`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>

        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${ifDefined(this.ariaDescription ? 'aria-description' : undefined)}"
          class="w-slider-thumb__range"
          type="range"
          value="${this.value}"
          min="${this.min}"
          max="${this.max}"
          name="${this.name}"
          step="${ifDefined(this.step ? this.step : undefined)}"
          list="${ifDefined(this.markers ? 'markers' : undefined)}"
          .disabled="${this.disabled || this.forceDisabled}"
          @mousedown="${this.#showTooltip}"
          @mouseup="${this.#hideTooltip}"
          @touchstart="${this.#showTooltip}"
          @touchend="${this.#hideTooltip}"
          @focus="${this.#showTooltip}"
          @blur="${this.#hideTooltip}"
          @input="${this.#onInput}" />

        ${this.markers
          ? // Set up a native datalist to use as markers: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#adding_tick_marks
            // Has to be inside the same shadow root as the input element since the relationship uses IDs,
            // which don't work across shadow root boundaries.
            html`<datalist id="markers">${this.markers.split(',').map((csv) => html`<option value="${csv.trim()}"></option>`)}</datalist> `
          : nothing}

        <span class="w-slider-thumb__from-marker"> ${this.formatter ? this.formatter(this.min) : this.min} ${this.suffix} </span>
        <span class="w-slider-thumb__to-marker">${this.formatter ? this.formatter(this.max) : this.max} ${this.suffix}</span>

        <!-- TODO: this input field should get validation error styling in a few cases, see Slider.mdx -->
        <!-- TODO: masking function in textfield would be nice, not available at time of writing -->
        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${ifDefined(this.ariaDescription)}"
          class="w-slider-thumb__textfield"
          type="text"
          value="${this.value}"
          @input="${this.#onInput}">
          ${this.suffix ? html`<w-affix slot="suffix" label="${this.suffix}"></w-affix>` : nothing}
        </w-textfield>

        <w-attention tooltip placement="top" flip distance="24" .show="${this._showTooltip}">
          <output class="w-slider-thumb__tooltip-target" slot="target"></output>
          <span slot="message">
            ${this.value ? (this.formatter ? this.formatter(this.value) : this.value) : 0}${this.suffix
              ? html`&nbsp;${this.suffix}`
              : nothing}
          </span>
        </w-attention>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description">${this.ariaDescription}</span>
      </div>
    `;
  }
}

if (!customElements.get('w-slider-thumb')) {
  customElements.define('w-slider-thumb', WarpSliderThumb);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-slider-thumb': WarpSliderThumb;
  }
}

export { WarpSliderThumb };
