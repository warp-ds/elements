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

  // Track whether tabindex was set automatically.
  #autoTabIndex = false;

  connectedCallback() {
    super.connectedCallback();
    // kept for compat with old shared styling approach
    this.setAttribute('type', 'checkbox');
    const attrValue = this.getAttribute('value');
    this.value = attrValue ?? 'on';
    this.#defaultChecked = this.hasAttribute('checked');
    this.checked = this.#defaultChecked;
    this.#syncTabIndex();
    this.addEventListener('invalid', this.#handleInvalid);
    this.addEventListener('keydown', this.#handleKeyDown);
    this.#syncFormValue();
  }

  /* @internal */
  private handleClick() {
    if (this.disabled) return;
    this.#markInteracted();
    this.checked = !this.checked;
    this.indeterminate = false;
    this.updateComplete.then(() => {
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    });
  }

  /* @internal */
  #handleInvalid = () => {
    this.#markInteracted();
    this.#updateValidity();
  };

  /* @internal */
  #handleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled) return;
    if (event.defaultPrevented) return;
    if (event.key !== ' ' && event.key !== 'Spacebar' && event.key !== 'Enter') return;
    if (event.composedPath()[0] === this.input) return;
    event.preventDefault();
    this.click();
  };

  updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('checked') || changedProperties.has('indeterminate')) {
      this.#syncInputState();
    }

    if (this.#shouldSyncFormState(changedProperties)) {
      this.#syncFormValue();
      this.#updateValidity();
    }

    if (changedProperties.has('disabled')) {
      this.#syncTabIndex();
    }
  }

  resetFormControl(): void {
    this.checked = this.#defaultChecked;
    this.#syncFormValue();
    this.#updateValidity();
  }

  /* @internal */
  click() {
    if (this.disabled) return;
    this.input?.click();
  }

  /* @internal */
  focus(options?: FocusOptions) {
    this.input?.focus(options);
  }

  /* @internal */
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
    this.#markInteracted();
    this.#updateValidity();
    return this.internals.checkValidity();
  }

  /** @internal */
  #markInteracted(): void {
    this.#hasInteracted = true;
  }

  /** @internal */
  #getValidityMessage(): string {
    // Use a non-empty message to avoid native popovers while satisfying ElementInternals.
    return this.input?.validationMessage || ' ';
  }

  /** @internal */
  #getValidityAnchor(): HTMLInputElement | undefined {
    return this.input ?? undefined;
  }

  /** @internal */
  #setInvalidState(state: ValidityStateFlags): void {
    this.internals.setValidity(state, this.#getValidityMessage(), this.#getValidityAnchor());
  }

  /** @internal */
  #updateValidity(): void {
    if (this.disabled) {
      this.internals.setValidity({});
      return;
    }

    const requiredInvalid = this.required && !this.checked;
    // this means that invalid was set via the invalid attribute, not by required validation
    const externalInvalid = this.invalid && !this.#invalidFromRequired;

    if (requiredInvalid) {
      this.#invalidFromRequired = true;
      this.invalid = this.#hasInteracted;
      this.#setInvalidState({ valueMissing: true });
      return;
    }

    if (this.#invalidFromRequired) {
      this.invalid = false;
      this.#invalidFromRequired = false;
    }

    if (externalInvalid) {
      this.#setInvalidState({ customError: true });
      return;
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

  /** @internal */
  #syncInputState(): void {
    if (!this.input) return;
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
  }

  /** @internal */
  #syncTabIndex(): void {
    const hasTabIndexAttr = this.hasAttribute('tabindex');
    if (hasTabIndexAttr && !this.#autoTabIndex) return;
    this.tabIndex = this.disabled ? -1 : 0;
    this.#autoTabIndex = true;
  }

  /** @internal */
  #shouldSyncFormState(changedProperties: PropertyValues<this>): boolean {
    return (
      changedProperties.has('checked') ||
      changedProperties.has('value') ||
      changedProperties.has('disabled') ||
      changedProperties.has('required') ||
      changedProperties.has('invalid')
    );
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
