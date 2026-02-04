// @warp-css;

import { classNames as classnames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, nothing, PropertyValues } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { reset } from '../styles.js';
import { uniqueId } from '../utils.js';
import { styles } from './styles.js';

const ccInput = {
  // input classes
  base: 'block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current', // true
  default: 'border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected', // !isInvalid && !isDisabled && !isReadOnly
  disabled: 'border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none', // !isInvalid && isDisabled && !isReadOnly
  invalid:
    'border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!', // isInvalid && !isDisabled && !isReadOnly
  readOnly: 'pl-0 bg-transparent pointer-events-none', // !isInvalid && !isDisabled && isReadOnly
  placeholder: 'placeholder:s-text-placeholder',
  suffix: 'pr-40',
  prefix: 'pl-[var(--w-prefix-width,_40px)]',
  // textarea classes
  textArea: 'min-h-[42] sm:min-h-[45]',
  fixed: 'resize-none',
};

const ccLabel = {
  base: 'antialiased block relative text-s font-bold pb-4 cursor-pointer s-text flex',
  optional: 'pl-8 font-normal text-s s-text-subtle',
};

const ccHelpText = {
  base: 'text-xs mt-4 block',
  color: 's-text-subtle',
  colorInvalid: 's-text-negative',
};

/**
 * A single line text input element.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-textfield--docs)
 */
class WarpTextarea extends FormControlMixin(LitElement) {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ type: Boolean, reflect: true })
  invalid: boolean;

  @property({ type: String, reflect: true })
  label: string;

  @property({ type: String, reflect: true, attribute: 'help-text' })
  helpText: string;

  @property({ type: Number, reflect: true, attribute: 'maximum-rows' })
  maxRows: number;

  @property({ type: Number, reflect: true, attribute: 'minimum-rows' })
  minRows: number;

  @property()
  name: string;

  @property()
  placeholder: string;

  /** @deprecated Use the native readonly attribute instead. Here for API consistency with `w-textfield`. */
  @property({ type: Boolean, reflect: true, attribute: 'read-only' })
  readOnly: boolean;

  @property({ type: Boolean, reflect: true })
  readonly: boolean;

  @property({ type: Boolean, reflect: true })
  required: boolean;

  @property({ type: String, reflect: true })
  value: string;

  @property({ type: Boolean, reflect: true })
  optional: boolean;

  @state()
  minHeight = Number.NEGATIVE_INFINITY;

  @state()
  maxHeight = Number.POSITIVE_INFINITY;

  @query('textarea')
  private _textarea: HTMLTextAreaElement;

  // capture the initial value using connectedCallback and #initialValue
  #initialValue: string | null = null;

  // unique ID for this component instance
  #uniqueId = uniqueId('textarea-');

  // Track whether the current invalid/helpText state was set by validation
  #validationActive = false;

  // Store the original helpText to restore when validation passes
  #originalHelpText: string | undefined = undefined;

  // Track whether the user has interacted with the field
  #hasInteracted = false;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
    if (changedProperties.has('value') || changedProperties.has('required') || changedProperties.has('disabled')) {
      this.#updateValidity();
    }
  }

  resetFormControl(): void {
    this.value = this.#initialValue;
    this.#hasInteracted = false;
    this.#clearValidationState();
    this.#updateValidity();
  }

  /** Returns the validation message if the textarea is invalid, otherwise an empty string */
  get validationMessage(): string {
    return this.internals.validationMessage;
  }

  /** Returns the validity state of the textarea */
  get validity(): ValidityState {
    return this.internals.validity;
  }

  /** Checks whether the textarea passes constraint validation */
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

  /** Sets a custom validation message. Pass an empty string to clear. */
  setCustomValidity(message: string): void {
    if (message) {
      this.internals.setValidity({ customError: true }, message, this._textarea);
      this.#setValidationState(message);
    } else {
      this.#clearValidationState();
      this.#updateValidity();
    }
  }

  /** @internal */
  #setValidationState(message: string): void {
    if (!this.#validationActive) {
      this.#originalHelpText = this.helpText;
    }
    this.#validationActive = true;
    this.invalid = true;
    this.helpText = message;
  }

  /** @internal */
  #clearValidationState(): void {
    if (this.#validationActive) {
      this.invalid = false;
      this.helpText = this.#originalHelpText;
      this.#originalHelpText = undefined;
      this.#validationActive = false;
    }
  }

  /** @internal */
  #updateValidity(): void {
    // Skip validation if disabled
    if (this.disabled) {
      this.internals.setValidity({});
      this.#clearValidationState();
      return;
    }

    // Check required validation
    if (this.required && !this.value) {
      // Get the browser's native validation message from the internal textarea
      const message = this._textarea?.validationMessage || '';
      this.internals.setValidity({ valueMissing: true }, message, this._textarea);

      // Only show visual validation state after user interaction
      if (this.#hasInteracted) {
        this.#setValidationState(message);
      }
      return;
    }

    // Valid state
    this.internals.setValidity({});
    this.#clearValidationState();
  }

  static styles = [reset, styles];

  /** @internal */
  get _textareaStyles() {
    return classnames([
      ccInput.base,
      ccInput.textArea,
      !!this.placeholder && ccInput.placeholder,
      !this.invalid && !this.disabled && !(this.readonly || this.readOnly) && ccInput.default,
      this.invalid && !this.disabled && !(this.readonly || this.readOnly) && ccInput.invalid,
      !this.invalid && this.disabled && !(this.readonly || this.readOnly) && ccInput.disabled,
      !this.invalid && !this.disabled && (this.readonly || this.readOnly) && ccInput.readOnly,
      this.maxRows && ccInput.fixed,
    ]);
  }

  /** @internal */
  get _helptextstyles() {
    return classnames([ccHelpText.base, this.invalid ? ccHelpText.colorInvalid : ccHelpText.color]);
  }

  /** @internal */
  get _helpId() {
    if (this.helpText) return `${this._id}__hint`;
    return undefined;
  }

  /** @internal */
  get _id() {
    return this.#uniqueId;
  }

  /** @internal */
  get _error() {
    if (this.invalid && this._helpId) return this._helpId;
    return undefined;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.#initialValue = this.value;
    this.setValue(this.value);

    // Listen for invalid event on the host element (fired by form validation)
    this.addEventListener('invalid', this.#handleInvalid);

    await this.updateComplete;
    if (this.value || this.minRows) {
      // If the component starts with a value or minHeight,
      // resize it automatically to show all the content, or maxHeight.
      const textarea = this.shadowRoot?.querySelector('textarea');
      if (textarea) {
        this.#resize(textarea);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('invalid', this.#handleInvalid);
  }

  firstUpdated(changedProperties: PropertyValues<this>) {
    super.firstUpdated(changedProperties);
    // Initialize validity after the shadow DOM is ready
    this.#updateValidity();
  }

  handler(e: InputEvent) {
    const target = e.currentTarget as HTMLTextAreaElement;
    this.value = target.value;

    this.#resize(target);
  }

  /** @internal */
  #handleBlur() {
    this.#hasInteracted = true;
    this.#updateValidity();
  }

  /** @internal */
  #handleInvalid = (e: Event) => {
    // Prevent browser's native validation bubble
    e.preventDefault();
    // Mark as interacted and show validation state
    this.#hasInteracted = true;
    this.#updateValidity();
  };

  /** Calculate the new height for the area on input */
  #resize(target: HTMLTextAreaElement) {
    const style = getComputedStyle(target);
    const borderTopWidth = Number.parseFloat(style.getPropertyValue('border-top-width'));
    const borderBottomWidth = Number.parseFloat(style.getPropertyValue('border-bottom-width'));
    const lineHeight = Number.parseFloat(style.getPropertyValue('line-height'));
    const topPadding = Number.parseFloat(style.getPropertyValue('padding-top'));
    const bottomPadding = Number.parseFloat(style.getPropertyValue('padding-bottom'));
    const offset = topPadding + bottomPadding + borderBottomWidth + borderTopWidth;

    if (this.minRows) {
      this.minHeight = lineHeight * this.minRows + offset;
    }
    if (this.maxRows) {
      this.maxHeight = lineHeight * this.maxRows + offset;
    }

    const borderBoxHeight = target.scrollHeight + borderTopWidth + borderBottomWidth;
    const height = Math.min(this.maxHeight, Math.max(this.minHeight, borderBoxHeight));
    target.style.setProperty('height', height + 'px');
  }

  render() {
    return html`
        ${
          this.label
            ? html`
                <label for="${this._id}" class=${ccLabel.base}>
                  ${this.label}
                  ${
                    this.optional
                      ? html`
                          <span class="${ccLabel.optional}">
                            ${i18n._({
                              id: 'textarea.label.optional',
                              message: '(optional)',
                              comment: 'Shown behind label when marked as optional',
                            })}
                          </span>
                    `
                      : nothing
                  }
                </label>`
            : nothing
        }
        <textarea
          id="${this._id}"
          class="${this._textareaStyles}"
          name="${ifDefined(this.name)}"
          placeholder="${ifDefined(this.placeholder)}"
          .value="${this.value || ''}"
          aria-describedby="${ifDefined(this._helpId || (this.ariaDescription ? 'aria-description' : undefined))}"
          aria-errormessage="${ifDefined(this._error)}"
          aria-invalid=${this.invalid ? 'true' : nothing}
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly || this.readOnly}"
          ?required="${this.required}"
          @input="${this.handler}"
          @blur="${this.#handleBlur}">
        </textarea>
        ${this.helpText ? html`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>` : nothing}
    `;
  }
}

if (!customElements.get('w-textarea')) {
  customElements.define('w-textarea', WarpTextarea);
}

export { WarpTextarea };
