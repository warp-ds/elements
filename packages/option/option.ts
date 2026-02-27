import { LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * A lightweight data node used by components that accept option children.
 */
export class WarpOption extends LitElement {
  /**
   * The submitted value for this option.
   */
  @property({ type: String, reflect: true })
  value = '';

  /**
   * Optional label override. Falls back to text content when omitted.
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Optional unique key for keyed rendering in parent components.
   */
  @property({ type: String, reflect: true })
  key?: string;

  /**
   * Whether this option should be unavailable for selection.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  render() {
    return nothing;
  }
}

if (!customElements.get('w-option')) {
  customElements.define('w-option', WarpOption);
}
