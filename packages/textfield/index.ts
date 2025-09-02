import { LitElement, html, PropertyValues } from 'lit';

import { classNames as classnames } from '@chbphone55/classnames';
import { FormControlMixin } from '@open-wc/form-control';
import { input as ccinput, label as ccLabel, helpText as ccHelpText } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { components, reset } from '../styles.js';

class WarpTextField extends FormControlMixin(LitElement) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true })
  disabled: false;

  @property({ type: Boolean, reflect: true })
  invalid: false;

  @property({ type: String, reflect: true })
  id: string;

  @property({ type: String, reflect: true })
  label: string;

  @property({ type: String, reflect: true })
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
  readOnly: false;

  @property({ type: Boolean, reflect: true })
  required: false;

  @property({ type: String, reflect: true })
  type = 'text';

  @property({ type: String, reflect: true })
  value: string;

  @property({ type: String, reflect: true })
  name: string;

  @property({ type: Boolean })
  _hasPrefix = false;

  @property({ type: Boolean })
  _hasSuffix = false;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  // Note about styling slotted elements:
  // https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted
  // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM#styling_slotted_elements
  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [reset, components];

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

  get _helptextstyles() {
    return classnames([ccHelpText.base, this.invalid ? ccHelpText.colorInvalid : ccHelpText.color]);
  }

  get _label() {
    if (this.label) {
      return html`<label for="${this._id}" class=${ccLabel.base}>${this.label}</label>`;
    }
    return undefined;
  }

  get _helpId() {
    if (this.helpText) return `${this._id}__hint`;
    return undefined;
  }

  get _id() {
    return 'textfield';
  }

  get _error() {
    if (this.invalid && this._helpId) return this._helpId;
    return undefined;
  }

  handler(e: Event) {
    const { name, value } = e.currentTarget as HTMLInputElement;
    this.setValue(value);
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
      <div class="${ccinput.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
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
          value="${ifDefined(this.value)}"
          aria-describedby="${ifDefined(this._helpId)}"
          aria-errormessage="${ifDefined(this._error)}"
          aria-invalid="${ifDefined(this.invalid)}"
          id="${this._id}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readOnly}"
          ?required="${this.required}"
          @blur="${this.handler}"
          @change="${this.handler}"
          @focus="${this.handler}" />
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      ${this.helpText && html`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `;
  }
}

if (!customElements.get('w-textfield')) {
  customElements.define('w-textfield', WarpTextField);
}

export { WarpTextField };
