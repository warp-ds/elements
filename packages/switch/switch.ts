import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles';
import { switchStyles } from './switch-styles.js';

export type WarpSwitchChangeEvent = CustomEvent<{
  checked: boolean;
  value: string | null;
}>;

/**
 * The Switch component allows users to toggle between two states.
 *
 * @event {WarpSwitchChangeEvent} change - Dispatched when the switch toggles. Includes boolean `checked` and string/null `value` on `details`.
 *
 * @slot - Label content for the switch (external - not slotted into shadow DOM)
 */
export class WarpSwitch extends FormControlMixin(LitElement) {
  /** 
   * Use delegatesFocus so focus is delegated to the button inside shadow DOM.
   * 
   * This avoids needing tabindex on the host element (prevents hydration mismatch).
   * @internal
   */
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Name used when submitting an HTML form.
   */
  @property({ type: String, reflect: true })
  name!: string;

  /**
   * Value submitted when the switch is checked.
   * 
   * The component reports `null` as the value in the `change` event when `value` is an empty string.
   */
  @property({ type: String, reflect: true })
  value!: string;

  /**
   * Whether the switch is on (checked).
   */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /**
   * Whether the switch is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  #initialState = false;

  static styles = [reset, switchStyles];

  /** @internal */
  _handleClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { checked: this.checked, value: this.value || null },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  /** @internal */
  _handleHostClick = (event: MouseEvent) => {
    if (this.disabled) return;
    if (event.composedPath()[0] === this) {
      this._handleClick();
    }
  };

  /** @internal */
  _handleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled) return;
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this._handleClick();
    }
  };


  connectedCallback(): void {
    this.#initialState = this.checked;
    super.connectedCallback();
    // Sync aria-label to internals (keep attribute for hydration compatibility)
    const ariaLabel = this.getAttribute('aria-label');
    if (ariaLabel) {
      this.internals.ariaLabel = ariaLabel;
    }
    if (!this.disabled) {
      this.setValue(this.checked && this.value ? this.value : null);
    }

    this.addEventListener('click', this._handleHostClick);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this._handleHostClick);
    this.removeEventListener('keydown', this._handleKeyDown);
    super.disconnectedCallback();
  }

  willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('checked')) {
      if (!this.disabled) {
        this.setValue(this.checked && this.value ? this.value : null);
      }
    }
  }

  resetFormControl(): void {
    this.checked = this.#initialState;
  }

  render() {
    return html`
      <button
        part="base"
        type="button"
        role="switch"
        tabindex=${this.disabled ? -1 : 0}
        aria-checked="${this.checked}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <span part="track"></span>
        <span part="handle"></span>
      </button>
    `;
  }
}

if (!customElements.get('w-switch')) {
  customElements.define('w-switch', WarpSwitch);
}
