import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';

import { styles } from './styles.js';

/**
 * A help text component for form fields.
 *
 * Used internally by textfield, textarea, and select components to display
 * help text or validation errors.
 */
class WarpHelpText extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Whether this help text represents an error/invalid state
   */
  @property({ type: Boolean, reflect: true })
  invalid = false;

  static styles = [reset, styles];

  render() {
    return html`
      <div part="base">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-help-text')) {
  customElements.define('w-help-text', WarpHelpText);
}

export { WarpHelpText };
