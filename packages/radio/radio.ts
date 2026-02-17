import { FormControlMixin } from '@open-wc/form-control';
import type { PropertyValues } from 'lit';
import { html, LitElement } from 'lit';

import { property } from 'lit/decorators.js';
import { reset } from '../styles';
import { styles as hostStyles } from './host-styles';
// eslint-disable-next-line
// @ts-ignore
import { toggleStyles } from '../toggle-styles';

export class WRadio extends FormControlMixin(LitElement) {
  static styles = [hostStyles, reset, toggleStyles];

  /** @internal Used by radio group to force disable radios while preserving their original disabled state. */
  @property({ type: Boolean }) forceDisabled = false;

  /**
   * The string pointing to a form's id.
   */
  @property({ reflect: true }) form: string | null = null;

  /** The name of the radio, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name = '';

  /** The radio's value. When selected, the radio group will receive this value. */
  @property({ reflect: true }) value: string | null = null;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property({ reflect: true }) appearance: 'default' | 'button' | 'clickable' = 'default';

  /**
   * The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
   * attribute can typically be omitted.
   */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

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
    const attrValue = this.getAttribute('value');
    this.value = attrValue ?? 'on';
    this.#defaultChecked = this.hasAttribute('checked');
    this.checked = this.#defaultChecked;
    this.setInitialAttributes();
    this.syncTabIndex();
    this.syncFormValue();
    this.updateValidity();
  }

  private setInitialAttributes() {
    this.setAttribute('role', 'radio');
    if (!this.hasAttribute('tabindex')) {
      this.#autoTabIndex = true;
      this.tabIndex = 0;
    }
    this.setAttribute('aria-disabled', this.disabled || this.forceDisabled ? 'true' : 'false');
  }

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    if (changedProperties.has('checked')) {
      this[this.checked ? 'setAttribute' : 'removeAttribute']('checked-ui', '');
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
      this.syncTabIndex();
    }

    if (changedProperties.has('disabled') || changedProperties.has('forceDisabled')) {
      const effectivelyDisabled = this.disabled || this.forceDisabled;
      this[effectivelyDisabled ? 'setAttribute' : 'removeAttribute']('disabled-ui', '');
      this.setAttribute('aria-disabled', effectivelyDisabled ? 'true' : 'false');
      this.syncTabIndex();
    }

    if (changedProperties.has('invalid')) {
      if (this.invalid) {
        this.setAttribute('aria-invalid', 'true');
      } else {
        this.removeAttribute('aria-invalid');
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
    this.markInteracted();
    this.checked = true;
    this.updateComplete.then(() => {
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    });
  };

  private handleInvalid = () => {
    this.markInteracted();
    this.updateValidity();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.isInGroup()) {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();
        const group = this.closest('w-radio-group') as { handleKeyDown?: (event: KeyboardEvent) => void } | null;
        group?.handleKeyDown?.(event);
      }
      return;
    }
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
    this.markInteracted();
    this.updateValidity();
    return this.internals.checkValidity();
  }

  private markInteracted(): void {
    this.#hasInteracted = true;
  }

  private isInGroup(): boolean {
    return Boolean(this.closest('w-radio-group'));
  }

  private getValidityMessage(): string {
    // Use a non-empty message to avoid native popovers while satisfying ElementInternals.
    return this.internals.validationMessage || ' ';
  }

  private setInvalidState(state: ValidityStateFlags): void {
    this.internals.setValidity(state, this.getValidityMessage());
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
      this.setInvalidState({ valueMissing: true });
      return;
    }

    if (this.#invalidFromRequired) {
      this.invalid = false;
      this.#invalidFromRequired = false;
    }

    if (externalInvalid) {
      this.setInvalidState({ customError: true });
      return;
    }

    this.internals.setValidity({});
  }

  private syncFormValue(): void {
    if (this.disabled || this.forceDisabled || this.isInGroup()) {
      this.setValue(null);
      return;
    }

    const value = this.checked ? this.value : null;
    this.setValue(value);
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
