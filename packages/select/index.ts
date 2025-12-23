// @warp-css;
import { css, html, LitElement, TemplateResult } from 'lit';
import { classNames } from '@chbphone55/classnames';
import { msg } from '@lit/localize';
import { FormControlMixin } from '@open-wc/form-control';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';

import { reset } from '../styles.js';
import { styles } from './styles.js';

import '@warp-ds/icons/elements/chevron-down-16';

const ccSelect = {
  base: 'block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current',
  default: 's-text s-bg pl-8 border-1 s-border-strong hover:s-border-strong-hover active:s-border-active',
  disabled:
    's-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none',
  invalid:
    's-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!',
  readOnly: 's-text bg-transparent pl-0 border-0 pointer-events-none before:hidden',
  wrapper: 'relative',
  selectWrapper:
    'relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ',
  chevron: 'block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer',
  chevronDisabled: 'opacity-25',
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
 * A dropdown component for selecting a single value.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-select--docs)
 */
export class WarpSelect extends FormControlMixin(LitElement) {
  /**
   * Whether the element should receive focus on render.
   * @deprecated Use the native `autofocus` attribute instead.
   */
  @property({ attribute: 'auto-focus', type: Boolean, reflect: true })
  autoFocus: boolean;

  /** Whether the element should receive focus on render */
  @property({ type: Boolean, reflect: true })
  autofocus: boolean;

  /**
   * The content displayed as the help text. Paired with `invalid` to show the text as a validation error.
   */
  @property({ attribute: 'help-text', reflect: true })
  helpText: string;

  /** Renders the field in an invalid state. Paired with `help-text` to provide feedback about the error. */
  @property({ type: Boolean, reflect: true })
  invalid: boolean;

  /**
   * Whether to always show a hint.
   * @deprecated Use `help-text` instead and only set it if you want to display the help text.
   */
  @property({ type: Boolean, reflect: true })
  always: boolean;

  /**
   * The content displayed as the help text.
   * @deprecated Use `help-text` instead.
   */
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

  /**
   * Renders the field in a readonly state.
   * @deprecated Use the native readonly attribute instead.
   */
  @property({ attribute: 'read-only', type: Boolean, reflect: true })
  readOnly: boolean;

  /** Renders the field in a readonly state. */
  @property({ type: Boolean, reflect: true })
  readonly: boolean;

  /** @internal */
  @property({ attribute: false, state: true })
  _options: Array<TemplateResult>;

  @property({ reflect: true })
  name: string;

  @property({ reflect: true })
  value: string;

  // capture the initial value using connectedCallback and #initialValue
  #initialValue: string | null = null;

  static styles = [
    reset,
    styles,
    css`
    /* if there is an option with an empty value and it is selected */
    select:has(option[value=""][selected]),
    /* if there is an option with an empty value, and no other options are selected */
    select:has(option[value=""]):not(:has(option[selected])) {
      color: var(--w-s-color-text-placeholder);
    }
  `,
  ];

  constructor() {
    super();
  }

  resetFormControl(): void {
    this.value = this.#initialValue;
  }

  /** @internal */
  _setValue = (value: string) => {
    this.value = value;
    this.setValue(value);
  };

  connectedCallback() {
    super.connectedCallback();

    this.#initialValue = this.value;

    // autofocus doesn't seem to behave properly in Safari and FireFox, therefore we set the focus here:
    if (this.autofocus || this.autoFocus) this.shadowRoot.querySelector('select').focus();

    // Gather both <option> and <w-option> children
    const optionNodes = Array.from(this.children).filter(
      (child) => child.tagName.toLowerCase() === 'option' || child.tagName.toLowerCase() === 'w-option',
    );

    // Convert them into HTML strings for the template
    const options = optionNodes.map((child: HTMLElement) => {
      const value = child.getAttribute('value') ?? '';
      const label = child.textContent ?? '';
      const selected = child.hasAttribute('selected');
      const disabled = child.hasAttribute('disabled');

      if (selected) {
        this._setValue(value);
      }

      return html`<option value="${value}" ?selected=${selected} ?disabled=${disabled}>${label}</option>`;
    });

    this._options = options;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (
      (this.readonly || this.readOnly) &&
      (event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp')
    ) {
      event.preventDefault();
    }
  }

  get #classes() {
    return classNames([
      ccSelect.base,
      !this.invalid && !this.disabled && !(this.readonly || this.readOnly) && ccSelect.default,
      this.invalid && ccSelect.invalid,
      this.disabled && ccSelect.disabled,
      (this.readonly || this.readOnly) && ccSelect.readOnly,
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

    // Gather both <option> and <w-option> children to update the selected attribute
    const optionNodes = Array.from(this.children).filter(
      (child) => child.tagName.toLowerCase() === 'option' || child.tagName.toLowerCase() === 'w-option',
    );

    // Convert them into HTML strings for the template
    const options = optionNodes.map((child: HTMLElement) => {
      const value = child.getAttribute('value') ?? '';
      const selected = value === target.value;

      const label = child.textContent ?? '';
      const disabled = child.hasAttribute('disabled');
      return html`<option value="${value}" ?selected=${selected} ?disabled=${disabled}>${label}</option>`;
    });
    this._options = options;

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
                  >${msg('(optional)', { id: 'select.label.optional' })}</span
                >`,
            )}</label
          >`,
      )}
      <div class="${ccSelect.selectWrapper}">
        <select
          class="${this.#classes}"
          id="${this.#id}"
          ?disabled=${this.disabled}
          aria-readonly="${this.readonly}"
          aria-describedby="${ifDefined(this.#helpId)}"
          aria-invalid="${ifDefined(this.invalid)}"
          aria-errormessage="${ifDefined(this.invalid && this.#helpId)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${this._options}
        </select>
        <div class="${this.#chevronClasses}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${
        // This when() can be removed in a future major when we drop `hint` and `always`.
        // A help text should always be visible.
        when(
          this.helpText || this.always || this.invalid,
          () => html`<div id="${this.#helpId}" class="${this.#helpTextClasses}">${this.helpText || this.hint}</div>`,
        )
      }
    </div>`;
  }
}

if (!customElements.get('w-select')) {
  customElements.define('w-select', WarpSelect);
}
