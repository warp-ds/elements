import { css, html } from 'lit';
import WarpElement from '@warp-ds/elements-core';
import { input, label as l, helpText as h } from '@warp-ds/css/component-classes';
import { ifDefined } from 'lit/directives/if-defined.js';
import { fclasses } from '../utils';

class WarpTextField extends WarpElement {
  static properties = {
    disabled: { type: Boolean },
    invalid: { type: Boolean },
    id: { type: String },
    label: { type: String },
    helpText: { type: String, attribute: 'help-text' },
    size: { type: String },
    max: { type: Number },
    min: { type: Number },
    minLength: { type: Number, attribute: 'min-length' },
    maxLength: { type: Number, attribute: 'max-length' },
    name: { type: String },
    pattern: { type: String },
    placeholder: { type: String },
    readOnly: { type: Boolean, attribute: 'read-only' },
    required: { type: Boolean },
    type: { type: String },
    value: { type: String },
    _hasPrefix: { state: true },
    _hasSuffix: { state: true },
  };

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [WarpElement.styles,
    css`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
      .warp-input-with-prefix {
        padding-left:var(--w-prefix-width, 40px);
      }
    `,
  ];

  constructor() {
    super();
    this.type = 'text';
  }

  get _inputStyles() {
    return fclasses({
      [input.default]: true,
      [input.invalid]: this.invalid,
      [input.disabled]: this.disabled,
      [input.readOnly]: this.readOnly,
      [input.suffix]: this._hasSuffix,
      // we style input with prefix here because we cannot use
      // arbitrary values with commas in UnoCSS like pl-[var(--w-prefix-width, 40px)]
      'warp-input-with-prefix': this._hasPrefix,
    });
  }

  get _helpTextStyles() {
    return fclasses({
      [h.helpText]: true,
      [h.helpTextInvalid]: this.invalid,
    });
  }

  get _labelStyles() {
    return fclasses({
      [l.label]: true,
      [l.labelInvalid]: this.invalid,
    });
  }

  get _label() {
    if (this.label) {
      return html`<label for="${this._id}" class=${this._labelStyles}>${this.label}</label>`;
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
      <div class="${input.wrapper}">
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
          @focus="${this.handler}"
        />
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      ${this.helpText &&
      html`<div class="${this._helpTextStyles}" id="${this._helpId}">${this.helpText}</div>`}
    `;
  }
}

if (!customElements.get('w-textfield')) {
  customElements.define('w-textfield', WarpTextField);
}

export { WarpTextField };
