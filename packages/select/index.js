import { html, LitElement, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { classNames } from '@chbphone55/classnames';
import { select as ccSelect, helpText as ccHelpText, label as ccLabel } from "@warp-ds/css/component-classes"
import { kebabCaseAttributes } from '../utils';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { messages as nbMessages} from './locales/nb/messages.mjs';
import { messages as enMessages} from './locales/en/messages.mjs';
import { messages as fiMessages} from './locales/fi/messages.mjs';
import { activateI18n } from '../i18n';
export class WarpSelect extends kebabCaseAttributes(LitElement) {
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

    _options: { state: true },
  };

  static styles = css`
    @unocss-placeholder
  `;

  get #classes() {
    return classNames({
      [ccSelect.default]: true,
      [ccSelect.invalid]: this.invalid
    });
  }

  get #labelClasses() {
    return classNames({
      [ccLabel.label]: true,
      [ccLabel.labelInvalid]: this.invalid
    })
  }

  get #helpTextClasses() {
    return classNames({
      [ccHelpText.helpText]: true,
      [ccHelpText.helpTextInvalid]: this.invalid
    })
  }

  get #chevronClasses() {
    return classNames({
      [ccSelect.chevron]: true,
      [ccSelect.chevronDisabled]: this.disabled,
    })
  }

  get #id() {
    return 'select_id';
  }

  get #helpId() {
    return this.hint ? `${this.#id}__hint` : undefined;
  }

  constructor() {
    super();
    this._options = this.innerHTML;
  }

  connectedCallback() {
    super.connectedCallback();
    activateI18n(enMessages, nbMessages, fiMessages);
  }

  render() {
    return html`<div class="${ccSelect.wrapper}">
      ${when(
        this.label,
        () =>
          html`<label class="${this.#labelClasses}" for="${this.#id}">
            ${this.label}
            ${when(
              this.optional,
              () =>
                html`<span class="${ccLabel.optional}">${i18n._(
                  {
                    id: 'select.label.optional',
                    message: '(optional)',
                    comment: 'Shown behind label when marked as optional',
                  },
                )}</span>`,
            )}</label
          >`,
      )}
      <div class="${ccSelect.selectWrapper}">
        <select
          class="${this.#classes}"
          id="${this.#id}"
          ?autofocus=${this.autoFocus}
          aria-describedby="${ifDefined(this.#helpId)}"
          aria-invalid="${ifDefined(this.invalid)}"
          aria-errormessage="${ifDefined(this.invalid && this.#helpId)}"
        >
          ${unsafeHTML(this._options)}
        </select>
        <div class="${this.#chevronClasses}">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M2.5 5.5L8 11L13.5 5.5"
            />
          </svg>
        </div>
      </div>
      ${when(
        this.always || this.invalid,
        () => html`<div id="${this.#helpId}" class="${this.#helpTextClasses}">${this.hint}</div>`,
      )}
    </div>`;
  }
}

if (!customElements.get('w-select')) {
  customElements.define('w-select', WarpSelect);
}
