// @warp-css;

import { html, LitElement, nothing, PropertyValues } from 'lit';

import { FormControlMixin } from '@open-wc/form-control';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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
  suffix: string;

  /** @internal */
  @state()
  forceDisabled: boolean;

  /** @internal */
  @state()
  forceInvalid: boolean;

  /** JS hook to help you format the numeric value how you want. */
  @state()
  formatter: (value: string) => string;

  @query('input[type="range"]')
  range: HTMLInputElement;

  @query('w-textfield')
  textfield: WarpTextField;

  /** @internal */
  @state()
  _invalid = false;

  /** @internal */
  @state()
  _showTooltip = false;

  /**
   * Reference to the anchor positioning style element used by the polyfill.
   * @internal
   */
  anchorPositioningStyleElement: HTMLStyleElement | null = null;

  #showTooltip(): void {
    this._showTooltip = true;
  }

  #hideTooltip(): void {
    this._showTooltip = false;
  }

  #onInput(e: InputEvent | CustomEvent): boolean {
    const isFromTextInput = (e.currentTarget as HTMLElement).tagName === 'W-TEXTFIELD';
    if (e instanceof CustomEvent) return; // We rely on the InputEvent event that fires right after the CustomEvent

    const value = (e.currentTarget as HTMLInputElement).value;
    if (value === '') {
      if (this.required) {
        this._invalid = true;
      }
      return false;
    }

    if (isFromTextInput && this._invalid) this._invalid = false;
    const valueNum = Number.parseInt(value);

    // Update validation state
    // Check that the user hasn't typed in a value beyond max or min
    const maxNum = Number.parseInt(this.max);
    const minNum = Number.parseInt(this.min);
    if (valueNum > maxNum || valueNum < minNum) {
      this._invalid = true;
    }

    // Stop a range slider's from value from reaching past the to value and vice versa
    // by updating the other component's min and max values.
    let shouldCancel = false;
    if (this.slot) {
      const computedStyle = getComputedStyle(this);
      if (this.slot === 'from') {
        const toValue = computedStyle.getPropertyValue('--to');
        // Check that the from value is not about to go past the --to value
        if (valueNum > Number.parseInt(toValue)) {
          if (isFromTextInput) {
            this._invalid = true;
            return false;
          }
          shouldCancel = true;
          // The user might have moved the slider so fast that this.value is far away from overlapping.
          // Set it to be equal to the to/from value, depending on what slider the user's moving.
          this.value = toValue;
        }
      } else {
        const fromValue = computedStyle.getPropertyValue('--from');
        // Check that the to value is not about to go past the --from value
        if (valueNum < Number.parseInt(fromValue)) {
          if (isFromTextInput) {
            this._invalid = true;
            return false;
          }
          shouldCancel = true;
          // The user might have moved the slider so fast that this.value is far away from overlapping.
          // Set it to be equal to the to/from value, depending on what slider the user's moving.
          this.value = fromValue;
        }
      }
    }

    if (shouldCancel) {
      e.preventDefault();
      // Needed to stop slider from moving independendtly of the value when we cancel the event
      this.range.value = this.value;
      return false;
    }
    this.value = value;
    return true;
  }

  async connectedCallback() {
    super.connectedCallback();
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
         * The polyfill can only anchor to ::before and ::after pseudo elements.
         * We work around that by recreating a transparent version of the active range
         * so that we can position relative to that, without crossing the shadow root boundary.
         */
        #anchor {
          anchor-name: --polyfilled-thumb;

          /* We have to compensate for the width of the thumb inside the track to find its center. */
          --_value: var(--_to-as-percent-of-max);
          --_offset-origin: 50; /* at this point the offset is zero */
          --_thumb-offset-percent: calc(var(--_value) - var(--_offset-origin));
          --_thumb-offset-pixels: calc(var(--w-slider-thumb-size) * calc(var(--_thumb-offset-percent) / 100));

          align-self: center;
          background: transparent;
          position: absolute;
          top: var(--_range-top);
          height: var(--w-slider-track-active-height);
          left: 0;
          right: 0;
          grid-area: slider;
          margin-left: calc(var(--_blank-values-before) * 1%);
          width: calc(calc(var(--_filled-values) * 1%) - var(--_thumb-offset-pixels));
        }

        #target {
          position: absolute;

          position-anchor: --polyfilled-thumb;
          bottom: calc(anchor(top) + 16px);
          left: anchor(--polyfilled-thumb right);
        }

        :host([name='from']) #anchor {
          --_value: var(--_from-as-percent-of-max);

          margin-left: calc(calc(var(--_blank-values-before) * 1%) - var(--_thumb-offset-pixels));
          width: calc(calc(var(--_filled-values) * 1%) - var(--w-slider-thumb-size));
        }

        :host([name='from']) #target {
          left: anchor(--polyfilled-thumb left);
        }
      `;

        await polyfill({ roots: [this.shadowRoot], elements: [this.anchorPositioningStyleElement] });
      } catch (e) {
        console.error(new Error('Error registering the CSS anchor positioning polyfill. The UI will look broken.', { cause: e }));
      }
    } else {
      await this.updateComplete;
    }
    this.range.value = this.value ?? this.max;
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
      if (!('anchorName' in document.documentElement.style)) {
        // Center the tooltip visually since the polyfill workaround doesn't let us do that.
        // Calculate the width of the tooltip and set a negative left margin of half that.
        const target = this.shadowRoot.querySelector('#target') as HTMLOutputElement;
        const computedWidthPx = getComputedStyle(target).getPropertyValue('width');
        const margin = Number.parseFloat(computedWidthPx.replace('px', '')) / 2;
        target.style.setProperty('margin-left', `-${margin}px`);
      }
    }
    if (changedProperties.has('_invalid')) {
      this.dispatchEvent(new CustomEvent('slidervalidity', { bubbles: true, detail: { invalid: this._invalid } }));
    }
  }

  render() {
    return html`
      <div class="w-slider-thumb">
        <label for="range">${this.label}</label>
        ${!('anchorName' in document.documentElement.style) ? html`<div id="anchor"></div>` : nothing}
        <input
          id="range"
          aria-label="${this.ariaLabel}"
          aria-describedby="${ifDefined(this.ariaDescription ? 'aria-description' : undefined)}"
          class="w-slider-thumb__range"
          type="range"
          .value="${this.value}"
          min="${this.min}"
          max="${this.max}"
          name="${this.name}"
          step="${ifDefined(this.step ? this.step : undefined)}"
          ?disabled="${this.disabled || this.forceDisabled}"
          @mousedown="${this.#showTooltip}"
          @mouseup="${this.#hideTooltip}"
          @touchstart="${this.#showTooltip}"
          @touchend="${this.#hideTooltip}"
          @focus="${this.#showTooltip}"
          @blur="${this.#hideTooltip}"
          @input="${this.#onInput}" />

        <span class="w-slider-thumb__from-marker">${this.formatter ? this.formatter(this.min) : this.min} ${this.suffix}</span>
        <span class="w-slider-thumb__to-marker">${this.formatter ? this.formatter(this.max) : this.max} ${this.suffix}</span>

        <w-textfield
          aria-label="${this.ariaLabel}"
          aria-description="${ifDefined(this.ariaDescription)}"
          class="w-slider-thumb__textfield"
          type="number"
          min="${this.min}"
          max="${this.max}"
          .formatter=${this.formatter}
          .value="${this.value}"
          ?invalid="${this.forceInvalid || this._invalid}"
          @input="${this.#onInput}">
          ${this.suffix ? html`<w-affix slot="suffix" label="${this.suffix}"></w-affix>` : nothing}
        </w-textfield>

        <div id="target" class="${classMap({ 'w-slider-thumb__tooltip': true, 'w-slider-thumb__tooltip--visible': this._showTooltip })}">
          ${this.value ? (this.formatter ? this.formatter(this.value) : this.value) : 0}${this.suffix
            ? html`&nbsp;${this.suffix}`
            : nothing}
        </div>

        <!-- aria-description is still not recommended for general use, so make a visually hidden element and refer to it with aria-describedby -->
        <span class="sr-only" id="aria-description">${this.ariaDescription}</span>
      </div>
    `;
  }
}

if (!customElements.get('w-slider-thumb')) {
  customElements.define('w-slider-thumb', WarpSliderThumb);
}

export { WarpSliderThumb };
