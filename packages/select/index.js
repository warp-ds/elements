import { html, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { classNames } from '@chbphone55/classnames';
import { kebabCaseAttributes } from '../utils';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { styles } from '../../dist/elements.min.js';

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

  static styles = [styles];

  get #classes() {
    return classNames('input mb-0', {
      'input--is-invalid': this.invalid,
    });
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

  render() {
    return html`<div class="${this.#classes}">
      ${when(
        this.label,
        () =>
          html`<label for="${this.#id}">
            ${this.label}
            ${when(
              this.optional,
              () =>
                html`<span className="pl-8 font-normal text-14 text-gray-500">(valgfritt)</span>`,
            )}</label
          >`,
      )}
      <div class="input--select__wrap">
        <select
          id="${this.#id}"
          ?autofocus=${this.autoFocus}
          aria-describedby="${ifDefined(this.#helpId)}"
          aria-invalid="${ifDefined(this.invalid)}"
          aria-errormessage="${ifDefined(this.invalid && this.#helpId)}"
        >
          ${unsafeHTML(this._options)}
        </select>
      </div>
      ${when(
        this.always || this.invalid,
        () => html`<div id="${this.#helpId}" class="input__sub-text">${this.hint}</div>`,
      )}
    </div>`;
  }
}

if (!customElements.get('f-select')) {
  customElements.define('f-select', WarpSelect);
}
