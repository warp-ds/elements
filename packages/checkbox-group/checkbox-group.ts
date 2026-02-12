import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

const REQUIRED_MESSAGE = () =>
  i18n._({
    id: 'checkbox-group.validation.required',
    message: 'At least one selection is required.',
    comment: 'Shown when required checkbox group has no selections',
  });

export class WCheckboxGroup extends FormControlMixin(LitElement) {
  /** The group label displayed above the checkboxes. */
  @property({ type: String, reflect: true })
  label: string;

  /** The name applied to child checkboxes when they do not provide one. */
  @property({ type: String, reflect: true })
  name: string;

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

  // Track whether the user has interacted with the group.
  #hasInteracted = false;

  // Track whether we've warned about missing name in a form.
  #hasWarnedMissingName = false;

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
    const helpText = this._validationMessage ?? (this.invalid ? REQUIRED_MESSAGE() : this.helpText);
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
    this.addEventListener('invalid', this.#handleInvalid);
    this.addEventListener('slotchange', this.#handleSlotChange);
    if (!this.hasAttribute('tabindex')) {
      this.tabIndex = -1;
    }
    this.setValue(null);
    this.#warnIfMissingName();
  }

  disconnectedCallback(): void {
    this.removeEventListener('change', this.#handleChange);
    this.removeEventListener('invalid', this.#handleInvalid);
    this.removeEventListener('slotchange', this.#handleSlotChange);
    super.disconnectedCallback();
  }

  /** Checks whether the group passes constraint validation */
  checkValidity(): boolean {
    this.#updateValidity();
    return this.internals.checkValidity();
  }

  /** Checks validity and shows the validation message if invalid */
  reportValidity(): boolean {
    this.#hasInteracted = true;
    this.#updateValidity();
    return this.internals.checkValidity();
  }

  /** Sets focus on the checkbox group. */
  focus(options?: FocusOptions) {
    const anchor = this.#getValidationAnchor() as HTMLElement | undefined;
    if (anchor?.focus) {
      anchor.focus(options);
      return;
    }
    HTMLElement.prototype.focus.call(this, options);
  }

  #handleChange = () => {
    this.#hasInteracted = true;
    this.#updateValidity();
  };

  #handleInvalid = () => {
    this.#hasInteracted = true;
    this.#updateValidity();
  };

  #handleSlotChange = () => {
    this.#applyGroupName();
    this.#updateValidity();
  };

  #getCheckedCount(): number {
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    return assigned.filter(el => (el as { checked?: boolean }).checked).length;
  }

  #applyGroupName(): void {
    if (!this.name) return;
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    for (const el of assigned) {
      const checkbox = el as { name?: string };
      if (checkbox && typeof checkbox === 'object' && !checkbox.name) {
        checkbox.name = this.name;
      }
    }
  }

  #syncChildInvalid(isInvalid: boolean): void {
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    for (const el of assigned) {
      if ('invalid' in el) {
        (el as { invalid: boolean }).invalid = isInvalid;
      }
    }
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
      changedProperties.has('helpText') ||
      changedProperties.has('name')
    ) {
      if (changedProperties.has('name')) {
        this.#applyGroupName();
      }
      if (changedProperties.has('name')) {
        this.#warnIfMissingName();
      }
      this.#updateValidity();
    }
  }

  #updateValidity(): void {
    this.#warnIfMissingName();
    const hasSelection = this.#getCheckedCount() > 0;

    if (this.required && !hasSelection) {
      this.#invalidFromRequired = true;

      // Always block form submission, but only show UI after interaction.
      if (this.#hasInteracted) {
        const message = REQUIRED_MESSAGE();
        this.invalid = true;
        this._validationMessage = message;
      } else {
        this.invalid = false;
        this._validationMessage = null;
      }

      // ensure the popover validation bubble doesnt show up in safari
      this.internals.setValidity({ valueMissing: true }, ' ');
      this.#syncChildInvalid(this.invalid);
      return;
    }

    if (this.#invalidFromRequired) {
      this.invalid = false;
      this.#invalidFromRequired = false;
    }

    if (this.invalid) {
      const message = REQUIRED_MESSAGE();
      this._validationMessage = message;
      // ensure the popover validation bubble doesnt show up in safari
      this.internals.setValidity({ customError: true }, ' ');
      this.#syncChildInvalid(true);
      return;
    }

    this._validationMessage = null;
    this.internals.setValidity({});
    this.#syncChildInvalid(false);
  }

  #warnIfMissingName(): void {
    if (this.#hasWarnedMissingName) return;
    if (!this.internals.form) return;
    if (this.name && this.name.trim().length > 0) return;
    console.warn('w-checkbox-group: "name" is required for form submission.');
    this.#hasWarnedMissingName = true;
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
