import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { activateI18n } from '../i18n';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

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

  // Track whether the user has interacted with the group.
  #hasInteracted = false;

  // Track whether we've warned about missing name in a form.
  #hasWarnedMissingName = false;

  // Track whether we set tabindex automatically for invalid focusability.
  #autoTabIndex = false;

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
    const hasSelection = this.#getCheckedCount() > 0;
    const requiredInvalid = this.required && !hasSelection;
    const showRequiredError = requiredInvalid && this.#hasInteracted;
    const isInvalid = this.invalid || showRequiredError;
    const helpText = isInvalid ? this.#getRequiredMessage() : this.helpText;
    const helpId = helpText ? 'checkbox-group__help' : undefined;
    const labelId = this.label ? 'checkbox-group__label' : undefined;
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
    this.#markInteracted();
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
    this.#markInteracted();
    this.#updateValidity();
    this.requestUpdate();
  };

  #handleInvalid = () => {
    this.#markInteracted();
    this.#updateValidity();
    this.requestUpdate();
  };

  #handleSlotChange = () => {
    this.#applyGroupName();
    this.#updateValidity();
    this.requestUpdate();
  };

  #markInteracted(): void {
    this.#hasInteracted = true;
  }

  #getCheckedCount(): number {
    return this.#getAssignedElements().filter(el => (el as { checked?: boolean }).checked).length;
  }

  #applyGroupName(): void {
    if (!this.name) return;
    for (const el of this.#getAssignedElements()) {
      const checkbox = el as { name?: string };
      if (checkbox && typeof checkbox === 'object' && !checkbox.name) {
        checkbox.name = this.name;
      }
    }
  }

  #syncChildInvalid(isInvalid: boolean): void {
    for (const el of this.#getAssignedElements()) {
      if ('invalid' in el) {
        (el as { invalid: boolean }).invalid = isInvalid;
      }
    }
  }

  #getValidationAnchor(): HTMLElement | undefined {
    return this.#getAssignedElements()[0] as HTMLElement | undefined;
  }

  #getAssignedElements(): Element[] {
    const slot = this.shadowRoot?.querySelector('slot');
    return slot?.assignedElements({ flatten: true }) ?? [];
  }

  #getRequiredMessage(): string {
    return REQUIRED_MESSAGE();
  }

  updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (this.#shouldUpdateValidity(changedProperties)) {
      if (changedProperties.has('name')) {
        this.#applyGroupName();
      }
      this.#updateValidity();
    }
  }

  #shouldUpdateValidity(changedProperties: PropertyValues<this>): boolean {
    return (
      changedProperties.has('invalid') ||
      changedProperties.has('required') ||
      changedProperties.has('helpText') ||
      changedProperties.has('name')
    );
  }

  #setValidityState(state: ValidityStateFlags): void {
    // Suppress native validation popovers (Safari) and provide a focusable anchor.
    const anchor = this.#getValidationAnchor();
    this.internals.setValidity(state, ' ', anchor ?? undefined);
  }

  #syncHostTabIndex(shouldBeFocusable: boolean): void {
    const hasTabIndexAttr = this.hasAttribute('tabindex');
    if (hasTabIndexAttr && !this.#autoTabIndex) return;

    if (shouldBeFocusable) {
      this.tabIndex = 0;
      this.#autoTabIndex = true;
      return;
    }

    if (this.#autoTabIndex) {
      this.removeAttribute('tabindex');
      this.#autoTabIndex = false;
    }
  }

  #updateValidity(): void {
    this.#warnIfMissingName();
    const hasSelection = this.#getCheckedCount() > 0;
    const requiredInvalid = this.required && !hasSelection;
    const externalInvalid = this.invalid;
    const showRequiredError = requiredInvalid && this.#hasInteracted;
    const showInvalidUi = externalInvalid || showRequiredError;

    this.#syncHostTabIndex(showInvalidUi);

    if (requiredInvalid) {
      this.#setValidityState({ valueMissing: true });
      this.#syncChildInvalid(showInvalidUi);
      return;
    }

    if (externalInvalid) {
      this.#setValidityState({ customError: true });
      this.#syncChildInvalid(true);
      return;
    }

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
