import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { BaseFormAssociatedElement } from '../radio/form-associated-element.js';

import { styles } from './styles.js';

/**
 * A basic radio button component using a native input styled with CSS.
 *
 * This component uses `appearance: none` to remove default browser styling
 * and applies custom CSS to achieve the desired look while maintaining
 * full native radio behavior and accessibility.
 *
 * @slot - The label content for the radio button
 */
export class WarpRadioBasic extends BaseFormAssociatedElement {
  static css = [styles];

  static shadowRootOptions = { ...BaseFormAssociatedElement.shadowRootOptions, delegatesFocus: true };

  /** Static counter for generating unique IDs */
  static #idCounter = 0;

  static get validators() {
    return [
      ...super.validators,
      {
        observedAttributes: ['required', 'disabled'],
        checkValidity: (element: WarpRadioBasic) => {
          // Disabled elements should not be validated
          if (element.disabled) {
            return { message: '', isValid: true, invalidKeys: [] as ('valueMissing')[] };
          }

          const isRequired = element.required || element.hasAttribute('required');

          if (!isRequired || element.checked) {
            return { message: '', isValid: true, invalidKeys: [] as ('valueMissing')[] };
          }

          return {
            message: 'Please select an option.',
            isValid: false,
            invalidKeys: ['valueMissing'] as ('valueMissing')[],
          };
        },
      },
    ];
  }

  /** Unique ID for this radio instance, used to connect input and label */
  #uniqueId = `w-radio-basic-${WarpRadioBasic.#idCounter++}`;

  /** The value of the radio button. */
  @property({ type: String, reflect: true })
  value = '';

  /** Whether the radio button is checked. */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Whether the radio button is required. */
  @property({ type: Boolean, reflect: true })
  required = false;

  #initialChecked: boolean | null = null;

  connectedCallback(): void {
    this.#initialChecked = this.checked;
    super.connectedCallback();
    this.updateFormValue();
  }

  private updateFormValue() {
    if (this.checked && this.value) {
      this.setValue(this.value);
    } else if (!this.checked) {
      this.setValue(null);
    }
    this.updateValidity();
  }

  private _handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.hasInteracted = true;

    // Uncheck other radios with the same name (manual grouping since shadow DOM isolates them)
    if (this.checked && this.name) {
      const root = this.getRootNode() as Document | ShadowRoot;
      const siblings = root.querySelectorAll<WarpRadioBasic>(`w-radio-basic[name="${this.name}"]`);
      for (const radio of siblings) {
        if (radio !== this && radio.checked) {
          radio.checked = false;
          radio.updateFormValue();
        }
      }
    }

    this.updateFormValue();

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  formResetCallback() {
    this.checked = this.#initialChecked ?? false;
    super.formResetCallback();
    this.updateFormValue();
  }

  protected willUpdate(changedProperties: Map<PropertyKey, unknown>): void {
    super.willUpdate(changedProperties);

    if (changedProperties.has('checked') || changedProperties.has('value')) {
      this.updateFormValue();
    }
  }

  render() {
    return html`
      <input
        id=${this.#uniqueId}
        type="radio"
        .name=${this.name ?? ''}
        .value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @change=${this._handleChange}
      />
      <label for=${this.#uniqueId}><slot></slot></label>
    `;
  }
}

if (!customElements.get('w-radio-basic')) {
  customElements.define('w-radio-basic', WarpRadioBasic);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-radio-basic': WarpRadioBasic;
  }
}
