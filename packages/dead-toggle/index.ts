import { CSSResultGroup, html, LitElement } from 'lit';

import { property } from 'lit/decorators.js';

import { reset } from '../styles';
import { toggleStyles } from '../toggle-styles';

/**
 * Dead toggle can be used where the appearance of a checkbox or radio is needed - but for accessibility purposes an actual input element should not be present.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-dead-toggle--docs)
 */
export class WarpDeadToggle extends LitElement {
  @property({ type: String, reflect: true })
  type: 'radio' | 'checkbox' = 'radio';

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** @internal */
  get indeterminateMarker() {
    return !this.checked && this.indeterminate ? '–' : '';
  }

  render() {
    return html` <div class="control">${this.indeterminateMarker}</div> `;
  }

  static styles?: CSSResultGroup | undefined = [reset, toggleStyles];
}

if (!customElements.get('w-dead-toggle')) {
  customElements.define('w-dead-toggle', WarpDeadToggle);
}
