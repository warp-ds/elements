import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import { reset } from '../styles';
import { styles } from './styles';

export class WCheckbox extends FormControlMixin(LitElement) {
  static styles = [reset, styles];

  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  @query('input[type="checkbox"]') input: HTMLInputElement | null;

  /** The name of the checkbox, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name = '';

  /** The value of the checkbox, submitted as a name/value pair with form data. */
  @property({ reflect: true }) value: string | null = null;

  /** Draws the checkbox in an indeterminate state. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** Draws the checkbox in a checked state (reflected to attribute). */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Disables the checkbox. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the checkbox in an invalid state. */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** The default value of the form control. Used for resetting. */
  #defaultChecked = false;

  // Track whether invalid state was set by required validation.
  #invalidFromRequired = false;

  // Track whether the user has interacted with the checkbox.
  #hasInteracted = false;

  connectedCallback() {
    super.connectedCallback();
    // kept for compat with old shared styling approach
    this.setAttribute('type', 'checkbox');
    const attrValue = this.getAttribute('value');
    this.value = attrValue ?? 'on';
    this.#defaultChecked = this.hasAttribute('checked');
    this.checked = this.#defaultChecked;
    this.addEventListener('invalid', this.#handleInvalid);
    this.#syncFormValue();
  }

  disconnectedCallback(): void {
    this.removeEventListener('invalid', this.#handleInvalid);
    super.disconnectedCallback();
  }

  private handleClick() {
    if (this.disabled) return;
    this.#hasInteracted = true;
    this.checked = !this.checked;
    this.indeterminate = false;
    this.updateComplete.then(() => {
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    });
  }

  #handleInvalid = () => {
    this.#hasInteracted = true;
    this.#updateValidity();
  };

  updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('checked') || changedProperties.has('indeterminate')) {
      if (this.input) {
        this.input.checked = this.checked;
        this.input.indeterminate = this.indeterminate;
      }
    }

    if (
      changedProperties.has('checked') ||
      changedProperties.has('value') ||
      changedProperties.has('disabled') ||
      changedProperties.has('required') ||
      changedProperties.has('invalid')
    ) {
      this.#syncFormValue();
      this.#updateValidity();
    }
  }

  resetFormControl(): void {
    this.checked = this.#defaultChecked;
    this.#syncFormValue();
    this.#updateValidity();
  }

  /** Simulates a click on the checkbox. */
  click() {
    if (this.disabled) return;
    this.input?.click();
  }

  /** Sets focus on the checkbox. */
  focus(options?: FocusOptions) {
    this.input?.focus(options);
  }

  /** Removes focus from the checkbox. */
  blur() {
    this.input?.blur();
  }

  /** Returns the validation message if the checkbox is invalid, otherwise an empty string */
  get validationMessage(): string {
    return this.internals.validationMessage;
  }

  /** Returns the validity state of the checkbox */
  get validity(): ValidityState {
    return this.internals.validity;
  }

  /** Checks whether the checkbox passes constraint validation */
  checkValidity(): boolean {
    this.#updateValidity();
    return this.internals.checkValidity();
  }

  /** Checks validity and shows the browser's validation message if invalid */
  reportValidity(): boolean {
    this.#hasInteracted = true;
    this.#updateValidity();
    return this.internals.checkValidity();
  }

  /** @internal */
  #updateValidity(): void {
    if (this.disabled) {
      this.internals.setValidity({});
      return;
    }

    if (this.required && !this.checked) {
      this.#invalidFromRequired = true;
      if (this.#hasInteracted) {
        this.invalid = true;
      } else {
        this.invalid = false;
      }
      const message = this.input?.validationMessage || ' ';
      const anchor = this.input ?? undefined;
      this.internals.setValidity({ valueMissing: true }, message, anchor);
      return;
    }

    if (this.invalid && !this.#invalidFromRequired) {
      const message = this.input?.validationMessage || ' ';
      const anchor = this.input ?? undefined;
      this.internals.setValidity({ customError: true }, message, anchor);
      return;
    }

    if (this.#invalidFromRequired) {
      this.invalid = false;
      this.#invalidFromRequired = false;
    }

    this.internals.setValidity({});
  }

  /** @internal */
  #syncFormValue(): void {
    if (this.disabled) {
      this.setValue(null);
      return;
    }

    const value = this.checked ? this.value : null;
    this.setValue(value);
  }

  render() {
    const isIndeterminate = !this.checked && this.indeterminate;
    const ariaChecked = isIndeterminate ? 'mixed' : this.checked ? 'true' : 'false';

    return html`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            part="input"
            class="input hide-toggle"
            type="checkbox"
            name=${this.name}
            value=${ifDefined(this.value)}
            .indeterminate=${live(this.indeterminate)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${ariaChecked}
            aria-invalid=${ifDefined(this.invalid ? 'true' : undefined)}
            @click=${this.handleClick} />
          ${isIndeterminate ? '–' : ''}
        </span>

        <slot part="label"></slot>
      </label>
    `;
  }
}

if (!customElements.get('w-checkbox')) {
  customElements.define('w-checkbox', WCheckbox);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-checkbox': WCheckbox;
  }
}
