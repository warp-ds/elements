import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import { reset } from '../styles';
import { toggleStyles } from '../toggle-styles';

export class WCheckbox extends FormControlMixin(LitElement) {
  static styles = [reset, toggleStyles];

  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  @query('input[type="checkbox"]') input: HTMLInputElement | null;

  /** The name of the checkbox, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name = '';

  private _value: string | null = this.getAttribute('value') ?? null;

  /** The value of the checkbox, submitted as a name/value pair with form data. */
  get value(): string | null {
    return this._value ?? 'on';
  }

  @property({ reflect: true })
  set value(val: string | null) {
    this._value = val;
  }

  /** Draws the checkbox in an indeterminate state. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, attribute: false }) checked: boolean = this.hasAttribute('checked');

  /** The default value of the form control. Primarily used for resetting the form control. */
  @property({ type: Boolean, reflect: true, attribute: 'checked' }) defaultChecked: boolean =
    this.hasAttribute('checked');

  /** Disables the checkbox. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  // Track whether the user has interacted with the control.
  #hasInteracted = false;

  connectedCallback() {
    super.connectedCallback();
    // NB: not from WA, this eases shared-styling
    this.setAttribute('type', 'checkbox');
    this.#syncFormValue();
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

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    super.willUpdate(changedProperties);

    if (changedProperties.has('defaultChecked')) {
      if (!this.#hasInteracted) {
        this.checked = this.defaultChecked;
      }
    }
  }

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
      changedProperties.has('required')
    ) {
      this.#syncFormValue();
      this.#updateValidity();
    }
  }

  resetFormControl(): void {
    this.checked = this.defaultChecked;
    this.#hasInteracted = false;
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
      const message = this.input?.validationMessage || 'Please fill out this field.';
      const anchor = this.input ?? undefined;
      this.internals.setValidity({ valueMissing: true }, message, anchor);
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

  render() {
    const isIndeterminate = !this.checked && this.indeterminate;

    return html`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            class="input hide-toggle"
            type="checkbox"
            name=${this.name}
            value=${ifDefined(this._value)}
            .indeterminate=${live(this.indeterminate)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? 'true' : 'false'}
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
