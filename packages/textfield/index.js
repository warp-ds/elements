import { css, html } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { FormControlMixin } from '@open-wc/form-control';
import { input as ccInput, label as ccLabel, helpText as ccHelpText } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { ifDefined } from 'lit/directives/if-defined.js';

import { kebabCaseAttributes } from '../utils';

class WarpTextField extends FormControlMixin(kebabCaseAttributes(WarpElement)) {
  static properties = {
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    id: { type: String },
    label: { type: String },
    helpText: { type: String },
    size: { type: String },
    max: { type: Number },
    min: { type: Number },
    minLength: { type: Number },
    maxLength: { type: Number },
    pattern: { type: String },
    placeholder: { type: String },
    readOnly: { type: Boolean },
    required: { type: Boolean },
    type: { type: String },
    value: { type: String },
    name: { type: String },
    _hasPrefix: { state: true },
    _hasSuffix: { state: true },
  };

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [
    WarpElement.styles,
    css`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `,
  ];

  constructor() {
    super();
    this.type = 'text';
  }

  get _inputStyles() {
    return classNames([
      ccInput.base,
      this._hasSuffix && ccInput.suffix,
      this._hasPrefix && ccInput.prefix,
      !this.invalid && !this.disabled && !this.readOnly && ccInput.default,
      this.invalid && !this.disabled && !this.readOnly && ccInput.invalid,
      !this.invalid && this.disabled && !this.readOnly && ccInput.disabled,
      !this.invalid && !this.disabled && this.readOnly && ccInput.readOnly,
    ]);
  }

  get _helpTextStyles() {
    return classNames([ccHelpText.base, this.invalid ? ccHelpText.colorInvalid : ccHelpText.color]);
  }

  get _label() {
    if (this.label) {
      return html`<label for="${this._id}" class=${ccLabel.base}>${this.label}</label>`;
    }
  }

  get _helpId() {
    if (this.helpText) return `${this._id}__hint`;
  }

  get _id() {
    return 'textfield';
  }

  get _error() {
    if (this.invalid && this._helpId) return this._helpId;
  }

  handler(e) {
    const { name, value } = e.target;
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

  prefixSlotChange(e) {
    const el = this.renderRoot.querySelector('slot[name=prefix]');
    const affixes = el.assignedElements();
    if (affixes.length) this._hasPrefix = true;
  }

  suffixSlotChange(e) {
    const el = this.renderRoot.querySelector('slot[name=suffix]');
    const affixes = el.assignedElements();
    if (affixes.length) this._hasSuffix = true;
  }

  render() {
    return html`
      ${this._label}
      <div class="${ccInput.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputStyles}"
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
      ${this.helpText && html`<div class="${this._helpTextStyles}" id="${this._helpId}">${this.helpText}</div>`}
    `;
  }
}

if (!customElements.get('w-textfield')) {
  customElements.define('w-textfield', WarpTextField);
}

export { WarpTextField };
