// @warp-css;
import { html, LitElement } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { when } from 'lit/directives/when.js';

import { activateI18n } from '../i18n.js';
import { reset } from '../styles.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { styles } from './styles.js';

import '@warp-ds/icons/elements/chevron-down-16';

export const ccSelect = {
  base: 'block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current',
  default: 's-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active',
  disabled:
    's-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none',
  invalid:
    's-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!',
  readOnly: 's-text bg-transparent pl-0 border-0 pointer-events-none before:hidden',
  wrapper: 'relative',
  selectWrapper: `relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none `,
  chevron: 'block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer',
  chevronDisabled: 'opacity-25',
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
 * A dropdown component for selecting a single value.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-select--docs)
 */
export class WarpSelect extends FormControlMixin(LitElement) {
  /** Whether the element should receive focus on render */
  @property({ attribute: 'auto-focus', type: Boolean, reflect: true })
  autoFocus: boolean;

  /** Renders the field in an invalid state. Often paired with `hint` to provide feedback about the error */
  @property({ type: Boolean, reflect: true })
  invalid: boolean;

  /** Whether to always show a hint */
  @property({ type: Boolean, reflect: true })
  always: boolean;

  /** The content displayed as the help text */
  @property({ reflect: true })
  hint: string;

  /** The content to disply as the label */
  @property({ reflect: true })
  label: string;

  /** Whether to show optional text */
  @property({ type: Boolean, reflect: true })
  optional: boolean;

  /** Renders the field in a disabled state. */
  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  /** Renders the field in a readonly state. */
  @property({ attribute: 'read-only', type: Boolean, reflect: true })
  readOnly: boolean;

  /** @internal */
  @property({ state: true })
  _options: string;

  @property({ reflect: true })
  name: string;

  @property({ reflect: true })
  value: string;

  static styles = [reset, styles];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
    this._options = this.innerHTML;
  }

  /** @internal */
  _setValue = (value: string) => {
    this.value = value;
    this.setValue(value);
  };

  firstUpdated() {
    // autofocus doesn't seem to behave properly in Safari and FireFox, therefore we set the focus here:
    if (this.autoFocus) this.shadowRoot.querySelector('select').focus();

    // Set initial value based on any slotted options that are selected
    Array.from(this.children).map((child: HTMLOptionElement) => {
      if (child.selected) {
        this._setValue(child.value);
      }
    });
  }

  handleKeyDown(event: KeyboardEvent) {
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

declare global {
  interface HTMLElementTagNameMap {
    "w-select": WarpSelect
  }
}