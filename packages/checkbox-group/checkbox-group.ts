import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
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

export class WarpCheckboxGroup extends FormControlMixin(LitElement) {
  // Use delegatesFocus so focus delegates to an internal focusable element
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * The group label displayed above the checkboxes.
   *
   * Use this to describe the shared question or topic for the checkbox options. The label is connected to the internal group for assistive technologies.
   */
  @property({ type: String, reflect: true })
  label: string;

  /**
   * The name applied to child checkboxes when they do not provide one.
   *
   * Use this when the grouped checkboxes should submit values under the same form field name. Individual checkboxes can still override the group name with their own `name`.
   */
  @property({ type: String, reflect: true })
  name: string;

  /**
   * Whether to show optional text next to the label.
   *
   * Use this to indicate that selecting an option from the group is not required.
   */
  @property({ type: Boolean, reflect: true })
  optional = false;

  /**
   * Help text displayed below the checkbox group.
   *
   * Use this for supporting guidance or validation feedback. When required validation fails, the group replaces this text with the localized required message.
   */
  @property({ type: String, reflect: true, attribute: 'help-text' })
  helpText: string;

  /**
   * Whether at least one checkbox in the group must be selected.
   *
   * Required validation is managed by the group. The individual checkboxes provide the submitted form values.
   */
  @property({ type: Boolean, reflect: true })
  required = false;

  /**
   * Whether the checkbox group is visually invalid.
   *
   * Use this to show an externally managed validation error for the group. The invalid state is also shared with child checkboxes for consistent styling and accessibility state.
   */
  @property({ type: Boolean, reflect: true })
  invalid = false;

  // Track whether the user has interacted with the group.
  #hasInteracted = false;

  // Track whether we've warned about missing name in a form.
  #hasWarnedMissingName = false;

  // Internal tabindex for the focusable wrapper element (reactive)
  @state()
  private _internalTabIndex = -1;

  #unsubscribeI18n?: () => void;

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
      <div class="wrapper" tabindex="${this._internalTabIndex}">
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
    this.#unsubscribeI18n = i18n.on('change', this.#handleI18nChange);
    this.setValue(null);
    this.#warnIfMissingName();
  }

  disconnectedCallback(): void {
    this.#unsubscribeI18n?.();
    this.#unsubscribeI18n = undefined;
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

  #handleI18nChange = () => {
    this.requestUpdate();
  };

  #getCheckedCount(): number {
    return this.#getAssignedElements().filter(el => (el as { checked?: boolean }).checked).length;
  }

  #applyGroupName(): void {
    if (!this.name) return;
    for (const el of this.#getAssignedElements()) {
      // Use non-reflecting _groupName to avoid DOM changes during hydration
      const checkbox = el as { _groupName?: string; name?: string };
      if (checkbox && typeof checkbox === 'object' && !checkbox.name) {
        checkbox._groupName = this.name;
      }
    }
  }

  #syncChildInvalid(isInvalid: boolean): void {
    for (const el of this.#getAssignedElements()) {
      // Use non-reflecting _groupInvalid to avoid DOM changes during hydration
      if ('_groupInvalid' in el) {
        (el as { _groupInvalid: boolean })._groupInvalid = isInvalid;
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

  #syncInternalTabIndex(shouldBeFocusable: boolean): void {
    // Use internal tabindex to avoid DOM changes on host during hydration
    this._internalTabIndex = shouldBeFocusable ? 0 : -1;
  }

  #updateValidity(): void {
    this.#warnIfMissingName();
    const hasSelection = this.#getCheckedCount() > 0;
    const requiredInvalid = this.required && !hasSelection;
    const externalInvalid = this.invalid;
    const showRequiredError = requiredInvalid && this.#hasInteracted;
    const showInvalidUi = externalInvalid || showRequiredError;

    this.#syncInternalTabIndex(showInvalidUi);

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

/** @deprecated Use WarpCheckboxGroup */
export const WCheckboxGroup = WarpCheckboxGroup;

if (!customElements.get('w-checkbox-group')) {
  customElements.define('w-checkbox-group', WarpCheckboxGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-checkbox-group': WarpCheckboxGroup;
  }
}
