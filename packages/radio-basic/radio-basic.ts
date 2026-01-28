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

          if (!isRequired) {
            return { message: '', isValid: true, invalidKeys: [] as ('valueMissing')[] };
          }

          // For radio groups, check if ANY radio in the group is checked
          if (element.name) {
            const root = element.getRootNode() as Document | ShadowRoot;
            const allRadios = Array.from(
              root.querySelectorAll<WarpRadioBasic>(`w-radio-basic[name="${element.name}"]`),
            );
            const hasCheckedRadio = allRadios.some((radio) => radio.checked);

            if (hasCheckedRadio) {
              return { message: '', isValid: true, invalidKeys: [] as ('valueMissing')[] };
            }
          } else if (element.checked) {
            // Single radio (no group) - just check if it's checked
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
    this.addEventListener('keydown', this.#handleKeyDown);
    // Defer tabindex sync to after all radios in the group have connected
    requestAnimationFrame(() => this.#syncGroupTabIndex());
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.#handleKeyDown);
  }

  /**
   * Syncs tabindex across all radios in the same group.
   * Only the checked radio (or first enabled if none checked) should be tabbable.
   */
  #syncGroupTabIndex() {
    if (!this.name) {
      // No group, this radio is independently tabbable
      this.#setInputTabIndex(this.disabled ? -1 : 0);
      return;
    }

    const root = this.getRootNode() as Document | ShadowRoot;
    const allRadios = Array.from(
      root.querySelectorAll<WarpRadioBasic>(`w-radio-basic[name="${this.name}"]`),
    );

    const enabledRadios = allRadios.filter((radio) => !radio.disabled);
    const checkedRadio = enabledRadios.find((radio) => radio.checked);

    for (const radio of allRadios) {
      if (radio.disabled) {
        radio.#setInputTabIndex(-1);
      } else if (checkedRadio) {
        // If there's a checked radio, only it should be tabbable
        radio.#setInputTabIndex(radio === checkedRadio ? 0 : -1);
      } else {
        // No checked radio - first enabled radio should be tabbable
        radio.#setInputTabIndex(radio === enabledRadios[0] ? 0 : -1);
      }
    }
  }

  #setInputTabIndex(value: number) {
    const input = this.shadowRoot?.querySelector('input');
    if (input) {
      input.tabIndex = value;
    }
  }

  #handleKeyDown = (event: KeyboardEvent) => {
    // Handle Space key to select the focused radio
    if (event.key === ' ') {
      if (this.disabled || this.checked) {
        return;
      }

      event.preventDefault();

      // Select this radio
      this.checked = true;
      this.hasInteracted = true;

      // Uncheck other radios in the group
      if (this.name) {
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
          detail: { checked: true, value: this.value },
          bubbles: true,
          composed: true,
        }),
      );
      return;
    }

    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      return;
    }

    if (this.disabled || !this.name) {
      return;
    }

    const root = this.getRootNode() as Document | ShadowRoot;
    const allRadios = Array.from(
      root.querySelectorAll<WarpRadioBasic>(`w-radio-basic[name="${this.name}"]`),
    ).filter((radio) => !radio.disabled);

    if (allRadios.length <= 1) {
      return;
    }

    event.preventDefault();

    const currentIndex = allRadios.indexOf(this);
    const direction = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
    let nextIndex = currentIndex + direction;

    // Wrap around
    if (nextIndex < 0) {
      nextIndex = allRadios.length - 1;
    } else if (nextIndex >= allRadios.length) {
      nextIndex = 0;
    }

    const nextRadio = allRadios[nextIndex];

    // Select and focus the next radio
    nextRadio.checked = true;
    nextRadio.focus();

    // Uncheck current radio
    if (nextRadio !== this) {
      this.checked = false;
      this.updateFormValue();
    }

    // Update form value and dispatch change event for the newly checked radio
    nextRadio.updateFormValue();
    nextRadio.dispatchEvent(
      new CustomEvent('change', {
        detail: { checked: true, value: nextRadio.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  updateFormValue() {
    if (this.checked && this.value) {
      this.setValue(this.value);
    } else if (!this.checked) {
      this.setValue(null);
    }
    this.updateValidity();

    // Also update validity for all other radios in the group
    // so they all reflect the correct validation state
    if (this.name && this.checked) {
      const root = this.getRootNode() as Document | ShadowRoot;
      const siblings = root.querySelectorAll<WarpRadioBasic>(`w-radio-basic[name="${this.name}"]`);
      for (const radio of siblings) {
        if (radio !== this) {
          radio.updateValidity();
        }
      }
    }
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

    if (changedProperties.has('checked') || changedProperties.has('disabled')) {
      // Sync tabindex after the update completes
      this.updateComplete.then(() => this.#syncGroupTabIndex());
    }
  }

  render() {
    return html`
      <input
        type="radio"
        part="control"
        id=${this.#uniqueId}
        .name=${this.name ?? ''}
        .value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @change=${this._handleChange}
      />
      <label part="label" for=${this.#uniqueId}><slot></slot></label>
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
