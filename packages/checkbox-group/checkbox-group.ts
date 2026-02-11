import { i18n } from '@lingui/core';
import { css, html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export class WCheckboxGroup extends LitElement {
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

  @state()
  private _validationMessage: string | null = null;

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
    const helpId = this.helpText || this._validationMessage ? 'checkbox-group__help' : undefined;
    const labelId = this.label ? 'checkbox-group__label' : undefined;
    const helpText = this._validationMessage ?? this.helpText;
    const ariaInvalid = this._validationMessage ? 'true' : undefined;

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
        ${helpText ? html`<div class="${this._validationMessage ? 'help-text error' : 'help-text'}" id="${helpId}">${helpText}</div>` : nothing}
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('change', this.#handleChange);
  }

  disconnectedCallback(): void {
    this.removeEventListener('change', this.#handleChange);
    super.disconnectedCallback();
  }

  /** Checks whether the group passes constraint validation */
  checkValidity(): boolean {
    if (!this.required) return true;
    return this.#getCheckedCount() > 0;
  }

  /** Checks validity and shows the validation message if invalid */
  reportValidity(): boolean {
    const valid = this.checkValidity();
    if (valid) {
      this._validationMessage = null;
      return true;
    }

    this._validationMessage = 'At least one selection is required.';
    return false;
  }

  #handleChange = () => {
    if (!this.required) return;

    if (this.#getCheckedCount() > 0) {
      this._validationMessage = null;
      return;
    }

    this._validationMessage = 'At least one selection is required.';
  };

  #getCheckedCount(): number {
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    return assigned.filter(el => (el as { checked?: boolean }).checked).length;
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
