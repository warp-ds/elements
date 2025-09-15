import { LitElement } from 'lit';

import { FormControlMixin } from '@open-wc/form-control';

/**
 * Parent component for sliders (both single and range sliders). Used in combination with a `<w-slider-thumb>`.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-slider-and-range-slider--docs)
 *
 * @slot - For single sliders place a `<w-slider-thumb>` in the default slot.
 * @slot body - Optional body text between the label and slider.
 * @slot from - Range sliders need to place a `<w-slider-thumb>` in the from and to slots.
 * @slot to - Range sliders need to place a `<w-slider-thumb>` in the from and to slots.
 */
class WarpSlider extends FormControlMixin(LitElement) {
  constructor() {
    super();
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
