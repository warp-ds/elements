// @warp-css;

import { LitElement, html, PropertyValues, nothing } from 'lit';

import { classNames as classnames } from '@chbphone55/classnames';
import { FormControlMixin } from '@open-wc/form-control';
import WarpElement from '@warp-ds/elements-core';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { reset } from '../styles.js';

import { wTextfieldStyles } from './styles/w-textfield.styles.js';
import { styles } from './styles.js';
import { classMap } from 'lit/directives/class-map.js';

export const ccinput = {
  // input classes
  base: 'block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current', // true
  default: 'border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected', // !isInvalid && !isDisabled && !isReadOnly
  disabled: 'border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none', // !isInvalid && isDisabled && !isReadOnly
  invalid: 'border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!', // isInvalid && !isDisabled && !isReadOnly
  readOnly: 'pl-0 bg-transparent pointer-events-none', // !isInvalid && !isDisabled && isReadOnly
  placeholder: 'placeholder:s-text-placeholder',
  suffix: 'pr-40',
  prefix: 'pl-[var(--w-prefix-width,_40px)]',
  // textarea classes
  textArea: 'min-h-[42] sm:min-h-[45]',
};

export const ccLabel = {
  base: 'antialiased block relative text-s font-bold pb-4 cursor-pointer s-text',
  optional: 'pl-8 font-normal text-s s-text-subtle',
};

export const ccHelpText = {
  base: 'text-xs mt-4 block',
  color: 's-text-subtle',
  colorInvalid: 's-text-negative',
};

/**
 * A single line text input element.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-textfield--docs)
 */
class WarpTextField extends FormControlMixin(LitElement) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ type: Boolean, reflect: true })
  invalid: boolean;

  @property({ type: String, reflect: true })
  id: string;

  @property({ type: String, reflect: true })
  label: string;

  @property({ type: String, reflect: true, attribute: 'help-text' })
  helpText: string;

  @property({ type: String, reflect: true })
  size: string;

  @property({ type: Number, reflect: true })
  max: number;

  @property({ type: Number, reflect: true })
  min: number;

  @property({ type: Number, reflect: true, attribute: 'min-length' })
  minLength: number;

  @property({ type: Number, reflect: true, attribute: 'max-length' })
  maxLength: number;

  @property({ type: String, reflect: true })
  pattern: string;

  @property({ type: String, reflect: true })
  placeholder: string;

  @property({ type: Boolean, reflect: true, attribute: 'read-only' })
  readOnly: boolean;

  @property({ type: Boolean, reflect: true })
  required: boolean;

  @property({ type: String, reflect: true })
  type = 'text';

  @property({ type: String, reflect: true })
  value: string;

  @property({ type: String, reflect: true })
  name: string;

  /**
   * Function to format value when the input field.
   *
   * Only active when the input field does not have focus,
   * similar to the accessible input masking example from Filament Group
   *
   * https://css-tricks.com/input-masking/
   * https://filamentgroup.github.io/politespace/demo/demo.html
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

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
    if (this.formatter && this.value) {
      this.mask.innerText = this.formatter(this.value);
    }
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
      !this.invalid && !this.disabled && !this.readOnly && ccinput.default,
      this.invalid && !this.disabled && !this.readOnly && ccinput.invalid,
      !this.invalid && this.disabled && !this.readOnly && ccinput.disabled,
      !this.invalid && !this.disabled && this.readOnly && ccinput.readOnly,
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
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <div class="w-textfield__input-wrapper">
          ${this.formatter ? html`<div class="w-textfield__mask"></div>` : nothing}
          <input
            class="${this._inputstyles}"
            type="${this.type}"
            min="${ifDefined(this.min)}"
            max="${ifDefined(this.max)}"
            size="${ifDefined(this.size)}"
            minlength="${ifDefined(this.minLength)}"
            maxlength="${ifDefined(this.maxLength)}"
            name="${ifDefined(this.name)}"
            pattern="${ifDefined(this.pattern)}"
            placeholder="${ifDefined(this.placeholder)}"
            .value="${this.value || ''}"
            aria-describedby="${ifDefined(this._helpId || (this.ariaDescription ? 'aria-description' : undefined))}"
            aria-errormessage="${ifDefined(this._error)}"
            aria-invalid="${ifDefined(this.invalid)}"
            id="${this._id}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readOnly}"
            ?required="${this.required}"
            @blur="${this.handler}"
            @change="${this.handler}"
            @input="${this.handler}"
            @focus="${this.handler}" />
        </div>
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

declare global {
  interface HTMLElementTagNameMap {
    'w-textfield': WarpTextField;
  }
}
