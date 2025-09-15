import { html, LitElement } from 'lit';

import { FormControlMixin } from '@open-wc/form-control';
import WarpElement from '@warp-ds/elements-core';
import { property } from 'lit/decorators.js';

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
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property()
  label: string;

  // Inspo:
  //   https://css-tricks.com/multi-thumb-sliders-particular-two-thumb-case/
  //   https://css-tricks.com/multi-thumb-sliders-general-case/
  //   https://css-tricks.com/lets-make-a-multi-thumb-slider-that-calculates-the-width-between-thumbs/
  render() {
    return html`<div></div>`;
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
