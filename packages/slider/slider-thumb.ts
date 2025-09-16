import { html, nothing, PropertyValues } from 'lit';

import { property, query, state } from 'lit/decorators.js';

import { BaseFormAssociatedElement } from '../rip-and-tear-radio/form-associated-element.js';
import type { WarpTextField } from '../textfield/index.js';

/**
 * Component to place inside a `<w-slider>`.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-slider-and-range-slider--docs)
 */
class WarpSliderThumb extends BaseFormAssociatedElement {
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
  min: string;

  /** Set by `<w-slider>` */
  @state()
  max: string;

  /** Set by `<w-slider>` */
  @state()
  suffix: string;

  /** Set by `<w-slider>`. True if there is more than one `<w-slider-thumb>`, e.g. we are a range slider. */
  @state()
  isRange: boolean;

  @state()
  forceDisabled: boolean;

  /** JS hook to help you format the numeric value how you want. */
  @state()
  formatter: (value: string) => string;

  @query('input[type="range"]')
  range: HTMLInputElement;

  #onInput(e: InputEvent | CustomEvent): void {
    const value = (e as CustomEvent<{ value: string }>).detail?.value || (e.currentTarget as WarpTextField).value;
    this.value = String(value);

    // Need to set value this way as well, not just via the attribute,
    // to trigger visual update when changing the textfield.
    this.range.value = this.value;
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  render() {
    return html`
      <label for="range">${this.label}</label>
      <!-- TODO: this doesn't visually update when I set the value with the text field :( It should work, I/Lit must have broken something -->
      <input
        id="range"
        type="range"
        value="${this.value}"
        min="${this.min}"
        max="${this.max}"
        name="${this.name}"
        .disabled="${this.disabled || this.forceDisabled}"
        @input="${this.#onInput}" />

      <!-- TODO: hide from screen readers, use aria-label instead? -->
      <p>${this.formatter ? this.formatter(this.min) : this.min} ${this.suffix}</p>
      <p>${this.formatter ? this.formatter(this.max) : this.max} ${this.suffix}</p>

      <!-- TODO: this input field should get validation error styling in a few cases, see Slider.mdx -->
      <!-- TODO: masking function in textfield would be nice -->
      <w-textfield label="${this.label}" type="text" value="${this.value}" @input="${this.#onInput}">
        ${this.suffix ? html`<w-affix slot="suffix" label="${this.suffix}"></w-affix>` : nothing}
      </w-textfield>
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
