import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

const REQUIRED_MESSAGE = 'At least one selection is required.';

export class WCheckboxGroup extends FormControlMixin(LitElement) {
  /** The group label displayed above the checkboxes. */
  @property({ type: String, reflect: true })
  label: string;

  /** Whether to show optional text next to the label. */
  @property({ type: Boolean, reflect: true })
  optional: boolean;

  @property({ type: String, reflect: true, attribute: 'help-text' })
  helpText: string;

  /** Makes the checkbox group required. */
  @property({ type: Boolean, reflect: true })
  required: boolean;

  /** Marks the checkbox group as invalid. */
  @property({ type: Boolean, reflect: true })
  invalid: boolean;

  @state()
  private _validationMessage: string | null = null;

  // Track whether invalid state was set by required validation.
  #invalidFromRequired = false;

  static styles = css`
    .wrapper {
      display: inline-flex;
      flex-direction: column;
      gap: 16px;
    }

    .checkbox-group {
      display: grid;
      gap: 16px;
    }

    .label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: var(--w-font-size-s);
      line-height: var(--w-line-height-s);
      font-weight: 700;
      color: var(--w-s-color-text);
    }

    .optional {
      font-weight: 400;
      color: var(--w-s-color-text-subtle);
    }

    .help-text {
      display: block;
      font-size: var(--w-font-size-xs);
      line-height: var(--w-line-height-xs);
      color: var(--w-s-color-text-subtle);
    }

    .error {
      color: var(--w-s-color-text-negative);
    }
  `;

  render() {
    const isInvalid = this.invalid || this._validationMessage;
    const helpId = this.helpText || isInvalid ? 'checkbox-group__help' : undefined;
    const labelId = this.label ? 'checkbox-group__label' : undefined;
    const helpText = this._validationMessage ?? (this.invalid ? REQUIRED_MESSAGE : this.helpText);
    const ariaInvalid = isInvalid ? 'true' : undefined;

    return html`
      <div class="wrapper">
        ${this.label
          ? html`
              <div class="label" id="${labelId}">
                <span>${this.label}</span>
                ${this.optional
                  ? html`
                      <span class="optional">
                        ${i18n._({
                          id: 'checkbox-group.label.optional',
                          message: 'Optional',
                          comment: 'Shown behind label when marked as optional',
                        })}
                      </span>
                    `
                  : nothing}
              </div>
            `
          : nothing}
        <div
          class="checkbox-group"
          role="group"
          aria-labelledby=${ifDefined(labelId)}
          aria-describedby=${ifDefined(helpId)}
          aria-invalid=${ifDefined(ariaInvalid)}
        >
          <slot></slot>
        </div>
        ${helpText
          ? html`<div class="${isInvalid ? 'help-text error' : 'help-text'}" id="${helpId}">${helpText}</div>`
          : nothing}
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('change', this.#handleChange);
    this.setValue(null);
  }

  disconnectedCallback(): void {
    this.removeEventListener('change', this.#handleChange);
    super.disconnectedCallback();
  }

  /** Checks whether the group passes constraint validation */
  checkValidity(): boolean {
    this.#updateValidity();
    return this.internals.checkValidity();
  }

  /** Checks validity and shows the validation message if invalid */
  reportValidity(): boolean {
    this.#updateValidity();
    return this.internals.checkValidity();
  }

  #handleChange = () => {
    this.#updateValidity();
  };

  #getCheckedCount(): number {
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    return assigned.filter(el => (el as { checked?: boolean }).checked).length;
  }

  #getValidationAnchor(): HTMLElement | undefined {
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    return assigned[0] as HTMLElement | undefined;
  }

  updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (
      changedProperties.has('invalid') ||
      changedProperties.has('required') ||
      changedProperties.has('helpText')
    ) {
      this.#updateValidity();
    }
  }

  #updateValidity(): void {
    const hasSelection = this.#getCheckedCount() > 0;

    if (this.invalid && !this.#invalidFromRequired) {
      this._validationMessage = REQUIRED_MESSAGE;
      this.internals.setValidity({ customError: true }, REQUIRED_MESSAGE, this.#getValidationAnchor());
      return;
    }

    if (this.required && !hasSelection) {
      this.#invalidFromRequired = true;
      this.invalid = true;
      this._validationMessage = REQUIRED_MESSAGE;
      this.internals.setValidity({ valueMissing: true }, REQUIRED_MESSAGE, this.#getValidationAnchor());
      return;
    }

    if (this.#invalidFromRequired) {
      this.invalid = false;
      this.#invalidFromRequired = false;
    }

    this._validationMessage = null;
    this.internals.setValidity({});
  }
}

if (!customElements.get('w-checkbox-group')) {
  customElements.define('w-checkbox-group', WCheckboxGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-checkbox-group': WCheckboxGroup;
  }
}
