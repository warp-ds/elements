import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';

import { styles } from './styles.js';

/**
 * A label component for form fields.
 *
 * Used internally by textfield, textarea, and select components.
 */
class WarpLabel extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * The ID of the form field this label is for
   */
  @property({ reflect: true })
  for: string;

  /**
   * Whether to show optional text
   */
  @property({ type: Boolean, reflect: true })
  optional = false;

  /**
   * Custom text for optional indicator (defaults to localized "(optional)")
   */
  @property({ reflect: true, attribute: 'optional-text' })
  optionalText: string;

  static styles = [reset, styles];

  render() {
    return html`
      <label part="base" for="${this.for}">
        <slot></slot>
        ${this.optional ? html`<span part="optional">${this.optionalText || '(optional)'}</span>` : nothing}
      </label>
    `;
  }
}

if (!customElements.get('w-label')) {
  customElements.define('w-label', WarpLabel);
}

export { WarpLabel };
