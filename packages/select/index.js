import { html } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { select as ccSelect, helpText as ccHelpText, label as ccLabel } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { when } from 'lit/directives/when.js';

import { activateI18n } from '../i18n';
import { kebabCaseAttributes } from '../utils';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

import '@warp-ds/icons/elements/chevron-down-16';

export class WarpSelect extends FormControlMixin(kebabCaseAttributes(WarpElement)) {
  static properties = {
    // Whether the element should receive focus on render
    autoFocus: { type: Boolean, reflect: true },

    // Renders the field in an invalid state. Often paired with `hint` to provide feedback about the error
    invalid: { type: Boolean, reflect: true },

    // Whether to always show a hint
    always: { type: Boolean, reflect: true },

    // The content displayed as the help text
    hint: { type: String, reflect: true },

    // The content to disply as the label
    label: { type: String, reflect: true },

    // Whether to show optional text
    optional: { type: Boolean, reflect: true },

    // Renders the field in a disabled state.
    disabled: { type: Boolean, reflect: true },

    // Renders the field in a readonly state.
    readOnly: { type: Boolean, relfect: true },

    _options: { state: true },
    name: { type: String, reflect: true },
    value: { type: String, reflect: true },
  };

  static styles = [WarpElement.styles];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
    this._options = this.innerHTML;
  }

  _setValue = (value) => {
    this.value = value;
    this.setValue(value);
  };

  firstUpdated() {
    // autofocus doesn't seem to behave properly in Safari and FireFox, therefore we set the focus here:
    this.autoFocus && this.shadowRoot.querySelector('select').focus();

    // Set initial value based on any slotted options that are selected
    Array.from(this.children).map((child) => {
      if (child.selected) {
        this._setValue(child.value);
      }
    });
  }

  handleKeyDown(event) {
    if (this.readOnly && (event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      event.preventDefault();
    }
  }

  get #classes() {
    return classNames([
      ccSelect.base,
      !this.invalid && !this.disabled && !this.readOnly && ccSelect.default,
      this.invalid && ccSelect.invalid,
      this.disabled && ccSelect.disabled,
      this.readOnly && ccSelect.readOnly,
    ]);
  }

  get #helpTextClasses() {
    return classNames([ccHelpText.base, this.invalid ? ccHelpText.colorInvalid : ccHelpText.color]);
  }

  get #chevronClasses() {
    return classNames([ccSelect.chevron, this.disabled && ccSelect.chevronDisabled]);
  }

  get #id() {
    return 'select_id';
  }

  get #helpId() {
    return this.hint ? `${this.#id}__hint` : undefined;
  }

  // // Fire a custom 'change' event, used when the dropdown changes state.
  onChange({ target }) {
    this._setValue(target.value);
    const event = new CustomEvent('change', { detail: target.value });
    this.dispatchEvent(event);
  }

  render() {
    return html`<div class="${ccSelect.wrapper}">
      ${when(
        this.label,
        () =>
          html`<label class="${ccLabel.base}" for="${this.#id}">
            ${this.label}
            ${when(
              this.optional,
              () =>
                html`<span class="${ccLabel.optional}"
                  >${i18n._({
                    id: 'select.label.optional',
                    message: '(optional)',
                    comment: 'Shown behind label when marked as optional',
                  })}</span
                >`,
            )}</label
          >`,
      )}
      <div class="${ccSelect.selectWrapper}">
        <select
          class="${this.#classes}"
          id="${this.#id}"
          ?disabled=${this.disabled}
          aria-describedby="${ifDefined(this.#helpId)}"
          aria-invalid="${ifDefined(this.invalid)}"
          aria-errormessage="${ifDefined(this.invalid && this.#helpId)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${unsafeHTML(this._options)}
        </select>
        <div class="${this.#chevronClasses}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${when(this.always || this.invalid, () => html`<div id="${this.#helpId}" class="${this.#helpTextClasses}">${this.hint}</div>`)}
    </div>`;
  }
}

if (!customElements.get('w-select')) {
  customElements.define('w-select', WarpSelect);
}
