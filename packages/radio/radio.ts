import { FormControlMixin } from '@open-wc/form-control';
import type { PropertyValues } from 'lit';
import { html, LitElement } from 'lit';

import { property } from 'lit/decorators.js';
import { reset } from '../styles';
import { styles as hostStyles } from './host-styles';
import { styles as radioStyles } from './radio-styles';

export class WRadio extends FormControlMixin(LitElement) {
  static styles = [hostStyles, reset, radioStyles];

  /** @internal Used by radio group to force disable radios while preserving their original disabled state. */
  @property({ type: Boolean }) forceDisabled = false;

  /** The name of the radio, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name = '';

  /** The radio's value. When selected, the radio group will receive this value. */
  @property({ reflect: true }) value: string | null = null;

  /** Draws the radio in a checked state (reflected to attribute). */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Disables the radio. */
  @property({ type: Boolean }) disabled = false;

  /** Makes the radio a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the radio in an invalid state. */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** The default value of the form control. Used for resetting. */
  #defaultChecked = false;

  // Track whether invalid state was set by required validation.
  #invalidFromRequired = false;

  // Track whether the user has interacted with the radio.
  #hasInteracted = false;

  // Track whether tabindex was set automatically.
  #autoTabIndex = false;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
    this.addEventListener('invalid', this.handleInvalid);
    this.addEventListener('keydown', this.handleKeyDown);
  }

  connectedCallback() {
    super.connectedCallback();
    // kept for compat with old shared styling approach
    this.setAttribute('type', 'radio');
    this.value = this.getAttribute('value') ?? 'on';
    this.#defaultChecked = this.hasAttribute('checked');
    this.checked = this.#defaultChecked;
    this.setAttribute('role', 'radio');
    if (!this.hasAttribute('tabindex')) {
      this.#autoTabIndex = true;
      this.tabIndex = 0;
    }
    this.syncAriaDisabled();
    this.syncTabIndex();
    this.syncFormValue();
    this.updateValidity();
  }

  private syncAriaDisabled() {
    this.setAttribute('aria-disabled', this.disabled || this.forceDisabled ? 'true' : 'false');
  }

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    if (changedProperties.has('checked')) {
      this[this.checked ? 'setAttribute' : 'removeAttribute']('checked-ui', '');
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
      if (this.checked && !this.isInGroup()) {
        this.uncheckOtherRadios();
      }
      this.syncTabIndex();
    }

    if (changedProperties.has('disabled') || changedProperties.has('forceDisabled')) {
      const effectivelyDisabled = this.disabled || this.forceDisabled;
      this[effectivelyDisabled ? 'setAttribute' : 'removeAttribute']('disabled-ui', '');
      this.syncAriaDisabled();
      this.syncTabIndex();
    }

    if (changedProperties.has('invalid')) {
      if (this.invalid) {
        this.setAttribute('aria-invalid', 'true');
      } else {
        this.removeAttribute('aria-invalid');
      }
    }

    if (changedProperties.has('name')) {
      if (this.checked && !this.isInGroup()) {
        this.uncheckOtherRadios();
      }
    }

    if (this.shouldSyncFormState(changedProperties)) {
      this.syncFormValue();
      this.updateValidity();
    }
  }

  private handleClick = () => {
    if (this.isInGroup()) return;
    if (this.disabled || this.forceDisabled) return;
    this.#hasInteracted = true;
    this.checked = true;
    this.updateComplete.then(() => {
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    });
  };

  private handleInvalid = () => {
    this.#hasInteracted = true;
    this.updateValidity();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.isInGroup()) return;
    if (this.disabled || this.forceDisabled) return;
    if (event.defaultPrevented) return;
    if (event.key !== ' ' && event.key !== 'Spacebar' && event.key !== 'Enter') return;
    event.preventDefault();
    this.click();
  };

  resetFormControl(): void {
    this.checked = this.#defaultChecked;
    this.syncFormValue();
    this.updateValidity();
  }

  /** Returns the validation message if the radio is invalid, otherwise an empty string */
  get validationMessage(): string {
    return this.internals.validationMessage;
  }

  /** Returns the validity state of the radio */
  get validity(): ValidityState {
    return this.internals.validity;
  }

  /** Checks whether the radio passes constraint validation */
  checkValidity(): boolean {
    this.updateValidity();
    return this.internals.checkValidity();
  }

  /** Checks validity and shows the browser's validation message if invalid */
  reportValidity(): boolean {
    this.#hasInteracted = true;
    this.updateValidity();
    return this.internals.checkValidity();
  }

  private isInGroup(): boolean {
    return Boolean(this.closest('w-radio-group'));
  }

  private getRadioScope(): ParentNode {
    return this.internals.form ?? this.closest('form') ?? document;
  }

  private uncheckOtherRadios(): void {
    if (!this.name) return;
    const scope = this.getRadioScope();
    const radios = Array.from(scope.querySelectorAll<WRadio>(`w-radio[name="${this.name}"]`));
    radios.forEach((radio) => {
      if (radio === this) return;
      if (radio.closest('w-radio-group')) return;
      if (radio.checked) {
        radio.checked = false;
      }
    });
  }

  private updateValidity(): void {
    if (this.disabled || this.forceDisabled || this.isInGroup()) {
      this.internals.setValidity({});
      return;
    }

    const requiredInvalid = this.required && !this.checked;
    // this means that invalid was set via the invalid attribute, not by required validation
    const externalInvalid = this.invalid && !this.#invalidFromRequired;

    if (requiredInvalid) {
      this.#invalidFromRequired = true;
      this.invalid = this.#hasInteracted;
      // Use a non-empty message to avoid native popovers while satisfying ElementInternals.
      this.internals.setValidity({ valueMissing: true }, this.internals.validationMessage || ' ');
      return;
    }

    if (this.#invalidFromRequired) {
      this.invalid = false;
      this.#invalidFromRequired = false;
    }

    if (externalInvalid) {
      this.internals.setValidity({ customError: true }, this.internals.validationMessage || ' ');
      return;
    }

    this.internals.setValidity({});
  }

  private syncFormValue(): void {
    if (this.disabled || this.forceDisabled) {
      this.setValue(null);
      return;
    }

    this.setValue(this.checked ? this.value : null);
  }

  private syncTabIndex(): void {
    if (this.isInGroup()) {
      if (this.disabled || this.forceDisabled) {
        this.tabIndex = -1;
      }
      return;
    }
    const hasTabIndexAttr = this.hasAttribute('tabindex');
    if (hasTabIndexAttr && !this.#autoTabIndex) return;
    const effectivelyDisabled = this.disabled || this.forceDisabled;
    this.tabIndex = effectivelyDisabled ? -1 : 0;
    this.#autoTabIndex = true;
  }

  private shouldSyncFormState(changedProperties: PropertyValues<this>): boolean {
    return (
      changedProperties.has('checked') ||
      changedProperties.has('value') ||
      changedProperties.has('disabled') ||
      changedProperties.has('required') ||
      changedProperties.has('invalid') ||
      changedProperties.has('forceDisabled')
    );
  }

  render() {
    return html`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-radio')) {
  customElements.define('w-radio', WRadio);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-radio': WRadio;
  }
}
