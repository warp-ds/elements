import { html, LitElement } from 'lit';

import { FormControlMixin } from '@open-wc/form-control';

/**
 * Component to place inside a `<w-slider>`.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-slider-and-range-slider--docs)
 */
class WarpSliderThumb extends FormControlMixin(LitElement) {
  render() {
    return html`<div></div>`;
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
