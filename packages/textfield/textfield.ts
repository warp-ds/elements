// @warp-css;

import { classNames as classnames } from '@chbphone55/classnames';
import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, nothing, PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { reset } from '../styles.js';

import { wTextfieldStyles } from './styles/w-textfield.styles.js';
import { styles } from './styles.js';

const ccinput = {
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
};

const ccLabel = {
  base: 'antialiased block relative text-s font-bold pb-4 cursor-pointer s-text',
  optional: 'pl-8 font-normal text-s s-text-subtle',
};

const ccHelpText = {
  base: 'text-xs mt-4 block',
  color: 's-text-subtle',
  colorInvalid: 's-text-negative',
};

/**
 * A single-line input component used for entering and editing textual or numeric data.
 * 
 * @slot suffix - Use with `<w-affix>` to include a suffix, for example the unit for a number (e. g. km or sek).
 * @slot prefix - Use with `<w-affix>` to include a prefix, for example a search icon.
 */
class WarpTextField extends FormControlMixin(LitElement) {
  /** @internal */
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Keep in mind that using disabled in its current form is an anti-pattern.
   * 
   * There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons.
   * 
   * Please consider more informative alternatives before choosing to use disabled on an element.
   * 
   * @summary Makes the element not focusable and hides it from form submits
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Mark the form field as invalid. Make sure to also set a `help-text` to help users fix the validation problem.
   * 
   * @summary Mark the form field as invalid.
   */
  @property({ type: Boolean, reflect: true })
  invalid = false;

  /**
   * Either a `label` or an `aria-label` must be provided.
   */
  @property({ type: String, reflect: true })
  label: string;

  /**
   * Use in combination with `invalid` to show as a validation error message,
   * or on its own to show a help text.
   * 
   * @summary Description shown below the input field
   */
  @property({ type: String, reflect: true, attribute: 'help-text' })
  helpText: string;

  /**
   * Sets the [size](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#size) (width) of the input field to fit the expected length of inputs.
   */
  @property({ type: String, reflect: true })
  size: string;

  /**
   * Use with `type="number"` to set the [maximum allowed value](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#maxlength).
   */
  @property({ type: Number, reflect: true })
  max: number;

  /**
   * Use with `type="number"` to set the [minimum allowed value](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#minlength).
   */
  @property({ type: Number, reflect: true })
  min: number;

  /**
   * @deprecated Use the native `minlength` attribute
   */
  @property({ type: Number, reflect: true, attribute: 'min-length' })
  minLength: number;
  
  /**
   * For `text`, `search`, `url`, `tel`, `email` and `password` fields, sets the [minimum string length](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#minlength) required.
   */
  @property({ type: Number, reflect: true })
  minlength: number;
  
  /**
   * @deprecated Use the native `maxlength` attribute
   */
  @property({ type: Number, reflect: true, attribute: 'max-length' })
  maxLength: number;

  /**
   * For `text`, `search`, `url`, `tel`, `email` and `password` fields, sets the [maximum string length](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#maxlength) allowed.
   */
  @property({ type: Number, reflect: true })
  maxlength: number;

  /**
   * Sets a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) that the input's value must [match to pass validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#pattern)
   */
  @property({ type: String, reflect: true })
  pattern: string;

  /**
   * Set a text that is shown in the textfield when it doesn't have a value.
   * 
   * Placeholder text should not be used as a substitute for labeling the element with a visible label.
   * 
   * @summary Shown in the textfield when it doesn't have a value
   */
  @property({ type: String, reflect: true })
  placeholder: string;

  /** 
   * @deprecated Use the native readonly attribute instead.
   */
  @property({ type: Boolean, reflect: true, attribute: 'read-only' })
  readOnly = false;

  /**
   * Whether the input can be selected but not changed by the user.
   */
  @property({ type: Boolean, reflect: true })
  readonly = false;

  /**
   * Whether user input is required on the input before form submission.
   */
  @property({ type: Boolean, reflect: true })
  required = false;

  /**
   * The [type of input](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   */
  @property({ type: String, reflect: true })
  type: string;

  /**
   * Lets you set the current value.
   */
  @property({ type: String, reflect: true })
  value: string;

  /**
   * The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name) of the input field when submitting the form.
   */
  @property({ type: String, reflect: true })
  name: string;

  /**
   * When used with `number` this attribute forces inputs to be a whole number of `step`.
   * 
   * For example with a `step="5"` only values that divide evenly on 5 are allowed.
   * Using arrow up and down in the input field increments and decrements by 5.
   * 
   * @summary Forces `number` inputs to be a whole number of `step`
   */
  @property({ type: Number, reflect: true })
  step: number;

  /**
   * A space-separated string that hints to browsers [what type of content it can suggest](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete#value) to autofill.
   */
  @property({ type: String, reflect: true })
  autocomplete?: string;

  /**
   * Function to format value when the input field.
   *
   * Only active when the input field does not have focus,
   * similar to the accessible input [masking example from Filament Group](https://filamentgroup.github.io/politespace/demo/demo.html).
   *
   * @summary Function to format value when the input field
   * @link https://css-tricks.com/input-masking/
  */
  @property({ attribute: false })
  formatter: (value: string) => string;

  /** @internal */
  @query('.w-textfield__mask')
  mask: HTMLDivElement;

  /** @internal */
  @property({ type: Boolean })
  _hasPrefix = false;

  /** @internal */
  @property({ type: Boolean })
  _hasSuffix = false;

  #onKeyDownHandler(e: KeyboardEvent) {
    if (e.key === 'Enter' && this.internals.form) {
      (this.internals.form as HTMLFormElement).requestSubmit();
    }
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
      if (this.formatter) {
        this.mask.innerText = this.formatter(this.value);
      }
    }
  }

  // capture the initial value using firstUpdated and #initialValue
  #initialValue: string | null = null;

  firstUpdated(changedProps: Map<string, unknown>) {
    this.#initialValue = this.value;
  }

  resetFormControl(): void {
    this.value = this.#initialValue;
  }

  // Note about styling slotted elements:
  // https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted
  // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM#styling_slotted_elements
  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [reset, styles, wTextfieldStyles];

  /** @internal */
  get _inputstyles() {
    return classnames([
      ccinput.base,
      this._hasSuffix && ccinput.suffix,
      this._hasPrefix && ccinput.prefix,
      !this.invalid && !this.disabled && !(this.readonly || this.readOnly) && ccinput.default,
      this.invalid && !this.disabled && !(this.readonly || this.readOnly) && ccinput.invalid,
      !this.invalid && this.disabled && !(this.readonly || this.readOnly) && ccinput.disabled,
      !this.invalid && !this.disabled && (this.readonly || this.readOnly) && ccinput.readOnly,
    ]);
  }

  /** @internal */
  get _helptextstyles() {
    return classnames([ccHelpText.base, this.invalid ? ccHelpText.colorInvalid : ccHelpText.color]);
  }

  /** @internal */
  get _label() {
    if (this.label) {
      return html`<label for="${this._id}" class=${ccLabel.base}>${this.label}</label>`;
    }
    return undefined;
  }

  /** @internal */
  get _helpId() {
    if (this.helpText) return `${this._id}__hint`;
    return undefined;
  }

  /** @internal */
  get _id() {
    return 'textfield';
  }

  /** @internal */
  get _error() {
    if (this.invalid && this._helpId) return this._helpId;
    return undefined;
  }

  handler(e: Event) {
    const { name, value } = e.currentTarget as HTMLInputElement;
    this.value = value;
    const event = new CustomEvent(e.type, {
      detail: {
        name,
        value,
        target: e.target,
      },
    });
    this.dispatchEvent(event);
  }

  prefixSlotChange() {
    const el: HTMLSlotElement = this.renderRoot.querySelector('slot[name=prefix]');
    const affixes = el.assignedElements();
    if (affixes.length) this._hasPrefix = true;
  }

  suffixSlotChange() {
    const el: HTMLSlotElement = this.renderRoot.querySelector('slot[name=suffix]');
    const affixes = el.assignedElements();
    if (affixes.length) this._hasSuffix = true;
  }

  render() {
    return html`
      ${this._label}
      <div
        class="${classMap({
          'w-textfield': true,
          // This could likely be replaced in the future by
          // https://developer.mozilla.org/en-US/docs/Web/CSS/:has-slotted
          'w-textfield--has-prefix': this._hasPrefix,
          'w-textfield--has-suffix': this._hasSuffix,
        })}">
        <div class="w-textfield__input-wrapper">
          ${this.formatter ? html`<div class="w-textfield__mask"></div>` : nothing}
          <input
            class="${this._inputstyles}"
            type="${this.type || 'text'}"
            min="${ifDefined(this.min)}"
            max="${ifDefined(this.max)}"
            size="${ifDefined(this.size)}"
            minlength="${ifDefined(this.minLength || this.minlength)}"
            maxlength="${ifDefined(this.maxLength || this.maxlength)}"
            name="${ifDefined(this.name)}"
            pattern="${ifDefined(this.pattern)}"
            placeholder="${ifDefined(this.placeholder)}"
            .value="${this.value || ''}"
            aria-describedby="${ifDefined(this._helpId || (this.ariaDescription ? 'aria-description' : undefined))}"
            aria-errormessage="${ifDefined(this._error)}"
            aria-invalid="${ifDefined(this.invalid)}"
            id="${this._id}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly || this.readOnly}"
            ?required="${this.required}"
            autocomplete="${ifDefined(this.autocomplete)}"
            step="${ifDefined(this.step)}"
            @blur="${this.handler}"
            @change="${this.handler}"
            @input="${this.handler}"
            @focus="${this.handler}"
            @keydown="${this.#onKeyDownHandler}" />
        </div>
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      <span class="sr-only" id="aria-description">${this.ariaDescription}</span>
      ${this.helpText && html`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `;
  }
}

if (!customElements.get('w-textfield')) {
  customElements.define('w-textfield', WarpTextField);
}

export { WarpTextField };
