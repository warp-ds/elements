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

  /**
   * The name of the checkbox.
   *
   * When the checkbox is checked and belongs to a form, this name is submitted with the checkbox value. If the checkbox is inside a `w-checkbox-group` with a name, the group name is used when the checkbox does not have its own name.
   */
  @property({ reflect: true })
  set name(value: string | undefined) {
    this._ownName = value;
  }
  get name(): string | undefined {
    return this._ownName || this._groupName;
  }
  private _ownName: string | undefined;

  /**
   * The value submitted when the checkbox is checked.
   *
   * If no value attribute is set, the checkbox defaults to `on`. Unchecked and disabled checkboxes do not submit a value.
   */
  @property({ reflect: true }) value: string | null = null;

  /**
   * Whether the checkbox is visually indeterminate.
   *
   * Use this for parent options that represent a mixed set of child selections. Clicking the checkbox clears the indeterminate state and sets the checkbox to checked.
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /**
   * Whether the checkbox is checked.
   *
   * Checked checkboxes submit their value with form data. The property is reflected to the `checked` attribute.
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Whether the checkbox is disabled.
   *
   * Disabled checkboxes cannot be focused, changed, or submitted with form data.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Whether the checkbox must be checked before form submission.
   *
   * A required checkbox is invalid until it is checked. For requiring at least one option in a set, use `required` on `w-checkbox-group`.
   */
  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * Whether the checkbox is visually invalid.
   *
   * Use this to show an externally managed validation error. Required validation also sets the invalid state after the user interacts with the checkbox or tries to submit the form.
   */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /**
   * Internal invalid state managed by parent checkbox-group.
   * Non-reflecting to avoid DOM changes during hydration.
   */
  @property({ attribute: false })
  private _groupInvalid: boolean | undefined;

  /**
   * Internal name managed by parent checkbox-group.
   * Non-reflecting to avoid DOM changes during hydration.
   */
  @property({ attribute: false })
  private _groupName: string | undefined;

  /** The default value of the form control. Used for resetting. */
  #defaultChecked = false;

  // Track whether invalid state was set by required validation.
  #invalidFromRequired = false;

  // Track whether the user has interacted with the checkbox.
  #hasInteracted = false;

  /** Computed invalid state: combines own invalid with group invalid */
  get _computedInvalid(): boolean {
    return this.invalid || this._groupInvalid === true;
  }

  connectedCallback() {
    super.connectedCallback();
    const attrValue = this.getAttribute('value');
    this.value = attrValue ?? 'on';
    this.#defaultChecked = this.hasAttribute('checked');
    this.checked = this.#defaultChecked;
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
    if (event.key === 'Enter' && this.internals.form) {
      (this.internals.form as HTMLFormElement).requestSubmit();
      return;
    }
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
            name=${ifDefined(this.name || undefined)}
            value=${ifDefined(this.value)}
            .indeterminate=${live(this.indeterminate)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${ariaChecked}
            aria-invalid=${ifDefined(this._computedInvalid ? 'true' : undefined)}
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
