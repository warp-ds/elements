import type { PropertyValues } from 'lit';
import { html, LitElement } from 'lit';

import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../radio/radio.js';
import type { WarpRadio } from '../radio/radio.js';
import { activateI18n } from '../i18n';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
// eslint-disable-next-line
// @ts-ignore
import { styles } from './radio-group-styles.js';
import { styles as hostStyles } from '../radio/host-styles.js';

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

const REQUIRED_MESSAGE = () =>
  i18n._({
    id: 'radio-group.validation.required',
    message: 'Please select an option.',
    comment: 'Shown when required radio group has no selections',
  });

/**
 * Radios allow users to select a single option from a list of choices.
 * 
 * Use with `w-radio`.
 * 
 * @slot label - Alternative to the `label` attribute should you need custom HTML.
 * @slot help-text - Alternative to the `help-text` attribute should you need custom HTML.
 */
export class WarpRadioGroup extends FormControlMixin(LitElement) {
  static styles = [hostStyles, styles];

  /** @internal */
  @state()
  hasInteracted = false;

  private hasWarnedMissingName = false;
  private autoTabIndex = false;

  /**
   * Label for the radio group.
   */
  @property()
  label = '';
  
  /**
   * Help text for the radio group.
   * 
   * If you set `required` and `invalid` the group gets a default error message, but you can override it with this attribute.
   */
  @property({ attribute: 'help-text' })
  helpText = '';

  /**
   * Whether to show optional text next to the label. 
   */
  @property({ type: Boolean, reflect: true })
  optional = false;
  
  /**
   * Marks the radio group as invalid.
   */
  @property({ type: Boolean, reflect: true })
  invalid = false;
  
  /**
   * The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name) of the select when submitting the form.
   */
  @property({ reflect: true })
  name: string | null = null;
  
  /**
   * Disables the radio group and all child radios.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;
  
  /**
   * Makes selecting a radio in the the group required.
   */
  @property({ type: Boolean, reflect: true })
  required = false;

  private defaultCheckedValue: string | null | undefined = undefined;
  private slottedHelpText: string | null = null;
  private readonly nameManagedRadios = new WeakSet<WarpRadio>();
  private readonly disabledManagedRadios = new WeakSet<WarpRadio>();
  private unsubscribeI18n?: () => void;

  /** @internal */
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleRadioClick);
    this.addEventListener('invalid', this.handleInvalid);
  }

  /** @internal */
  get validationTarget() {
    const radio = this.querySelector<WarpRadio>(':is(w-radio):not([disabled])');
    return radio ?? undefined;
  }

  connectedCallback() {
    super.connectedCallback();
    this.syncSlottedHelpText();
    this.syncFormValue();
    this.updateValidity();
    this.unsubscribeI18n = i18n.on('change', this.handleI18nChange);
    this.warnIfMissingName();
    this.updateComplete.then(this.captureDefaultSelection);
  }

  disconnectedCallback() {
    this.unsubscribeI18n?.();
    this.unsubscribeI18n = undefined;
    super.disconnectedCallback();
  }

  async updated(changedProperties: PropertyValues<this>) {
    const shouldResync =
      changedProperties.has('disabled') ||
      changedProperties.has('name') ||
      changedProperties.has('required') ||
      changedProperties.has('invalid') ||
      changedProperties.has('helpText');

    if (shouldResync) {
      // Keep host validity/UI in sync in the same update cycle, before async child sync.
      this.syncFormValue();
      this.updateValidity();
      this.syncRadioElements();
      this.syncFormValue();
      this.updateValidity();
    }
  }

  /** @internal */
  resetFormControl() {
    const defaultValue = this.defaultCheckedValue ?? null;
    this.getAllRadios().forEach((radio) => {
      radio.checked = defaultValue ? radio.value === defaultValue : false;
    });
    this.syncRadioElements();
    this.syncFormValue();
    this.updateValidity();
  }

  private handleRadioClick = (e: Event) => {
    const clickedRadio = (e.target as HTMLElement).closest<WarpRadio>('w-radio');
    if (!clickedRadio || clickedRadio.disabled || this.disabled) return;

    const oldValue = this.getCheckedValue();
    const radios = this.getAllRadios();
    this.selectSingleRadio(clickedRadio, radios);

    const newValue = this.getCheckedValue();
    if (newValue !== oldValue) {
      this.updateComplete.then(this.emitSelectionChange);
    }
  };

  private getAllRadios() {
    return [...this.querySelectorAll<WarpRadio>('w-radio')];
  }

  private getCheckedValue(): string | null {
    const checked = this.getAllRadios().find((radio) => radio.checked);
    return checked?.value ?? null;
  }

  private getEnabledRadios(radios = this.getAllRadios()): WarpRadio[] {
    return radios.filter((radio) => !radio.disabled);
  }

  private selectSingleRadio(selected: WarpRadio, radios = this.getAllRadios()): void {
    radios.forEach((radio) => {
      const isSelected = radio === selected;
      radio.checked = isSelected;
      // Use non-reflecting property to avoid DOM changes during hydration
      radio._groupTabIndex = isSelected ? 0 : -1;
    });
  }

  private handleLabelClick() {
    this.focus();
  }

  private handleInvalid = (event: Event) => {
    event.preventDefault();
    this.hasInteracted = true;
    this.updateValidity();
  };

  private handleHelpTextSlotChange = () => {
    this.syncSlottedHelpText();
    this.requestUpdate();
  };

  private handleI18nChange = () => {
    this.requestUpdate();
  };

  private async syncRadioElements() {
    const radios = this.getAllRadios();

    radios.forEach((radio, index) => {
      radio.toggleAttribute('data-w-radio-first', index === 0);
      radio.toggleAttribute('data-w-radio-inner', index !== 0 && index !== radios.length - 1);
      radio.toggleAttribute('data-w-radio-last', index === radios.length - 1);

      this.syncRadioDisabledState(radio);

      if (this.name) {
        if (!radio.getAttribute('name') || this.nameManagedRadios.has(radio)) {
          radio.setAttribute('name', this.name);
          this.nameManagedRadios.add(radio);
        }
      } else if (this.nameManagedRadios.has(radio)) {
        radio.removeAttribute('name');
        this.nameManagedRadios.delete(radio);
      }
    });

    await Promise.all(radios.map(async (radio) => radio.updateComplete));
    this.normalizeCheckedRadios(radios);
    this.syncTabOrder(radios);
  }

  private syncRadioDisabledState(radio: WarpRadio): void {
    if (this.disabled) {
      if (!radio.disabled) {
        radio.disabled = true;
        this.disabledManagedRadios.add(radio);
      }
      return;
    }

    if (this.disabledManagedRadios.has(radio)) {
      radio.disabled = false;
      this.disabledManagedRadios.delete(radio);
    }
  }

  private syncTabOrder(radios: WarpRadio[]) {
    // Use non-reflecting _groupTabIndex property to avoid DOM changes during hydration
    if (this.disabled) {
      radios.forEach((radio) => (radio._groupTabIndex = -1));
      return;
    }

    const enabledRadios = this.getEnabledRadios(radios);
    const checkedRadio = enabledRadios.find((radio) => radio.checked);

    if (enabledRadios.length > 0) {
      if (checkedRadio) {
        enabledRadios.forEach((radio) => (radio._groupTabIndex = radio.checked ? 0 : -1));
      } else {
        enabledRadios.forEach((radio, index) => (radio._groupTabIndex = index === 0 ? 0 : -1));
      }
    }

    radios.filter((radio) => radio.disabled).forEach((radio) => (radio._groupTabIndex = -1));
  }

  private emitSelectionChange = () => {
    this.hasInteracted = true;
    this.syncFormValue();
    this.updateValidity();
    this.requestUpdate();
    this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  };

  private handleKeyDown(event: KeyboardEvent) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key) || this.disabled) return;

    const allRadios = this.getAllRadios();
    const radios = this.getEnabledRadios(allRadios);
    if (radios.length <= 0) return;

    event.preventDefault();

    const oldValue = this.getCheckedValue();
    const checkedRadio = radios.find((radio) => radio.checked) ?? radios[0];
    const incr = event.key === ' ' ? 0 : ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
    let index = radios.indexOf(checkedRadio) + incr;

    if (index < 0) index = radios.length - 1;
    if (index >= radios.length) index = 0;

    this.selectSingleRadio(radios[index], allRadios);
    radios[index].focus();

    const newValue = this.getCheckedValue();
    if (newValue !== oldValue) {
      this.updateComplete.then(this.emitSelectionChange);
    }
  }

  /** @internal */
  public focus(options?: FocusOptions) {
    if (this.disabled) return;

    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const firstEnabledRadio = radios.find((radio) => !radio.disabled);
    const radioToFocus = checked || firstEnabledRadio;

    if (radioToFocus) {
      radioToFocus.focus(options);
    }
  }

  /** @internal */
  checkValidity() {
    this.updateValidity();
    return this.internals.checkValidity();
  }

  /** @internal */
  reportValidity() {
    this.hasInteracted = true;
    this.updateValidity();
    return this.internals.checkValidity();
  }

  private hasSlottedContent(name: 'label' | 'help-text') {
    if (this.querySelector(`[slot="${name}"]`)) return true;
    const slot = this.shadowRoot?.querySelector(`slot[name="${name}"]`) as HTMLSlotElement | null;
    if (!slot) return false;
    return slot.assignedNodes({ flatten: true }).some((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) return true;
      if (node.nodeType === Node.TEXT_NODE) return Boolean(node.textContent?.trim());
      return false;
    });
  }

  private syncFormValue() {
    this.setValue(null);
  }

  private syncSlottedHelpText() {
    const slottedHelpText = this.querySelector<HTMLElement>('[slot="help-text"]');
    this.slottedHelpText = slottedHelpText?.textContent?.trim() || null;
  }

  private updateValidity() {
    this.warnIfMissingName();

    const isRequiredInvalid = this.required && !this.getCheckedValue();
    const showRequiredError = isRequiredInvalid && this.hasInteracted;
    const externalInvalid = this.invalid || this.hasAttribute('invalid');
    const showInvalidUi = externalInvalid || showRequiredError;

    this.toggleAttribute('data-show-error', showInvalidUi);

    if (this.disabled) {
      this.internals.setValidity({});
      this.syncChildInvalid(false);
      this.syncHostTabIndex(false);
      return;
    }

    this.syncHostTabIndex(showInvalidUi);

    if (isRequiredInvalid) {
      this.setValidityState({ valueMissing: true });
      this.syncChildInvalid(showInvalidUi);
      return;
    }

    if (externalInvalid) {
      this.setValidityState({ customError: true });
      this.syncChildInvalid(true);
      return;
    }

    this.internals.setValidity({});
    this.syncChildInvalid(false);
  }

  private normalizeCheckedRadios(radios: WarpRadio[]) {
    const checkedRadio = radios.find((radio) => radio.checked);
    if (!checkedRadio) return;
    radios.forEach((radio) => {
      if (radio !== checkedRadio) radio.checked = false;
    });
  }

  private captureDefaultSelection = () => {
    if (this.defaultCheckedValue === undefined) {
      this.defaultCheckedValue = this.getCheckedValue();
    }
  };

  private syncChildInvalid(isInvalid: boolean) {
    this.getAllRadios().forEach((radio) => {
      radio.invalid = isInvalid;
    });
  }

  private setValidityState(state: ValidityStateFlags) {
    const anchor = this.validationTarget;
    this.internals.setValidity(state, ' ', anchor ?? undefined);
  }

  private syncHostTabIndex(shouldBeFocusable: boolean) {
    const hasTabIndexAttr = this.hasAttribute('tabindex');
    if (hasTabIndexAttr && !this.autoTabIndex) return;

    if (shouldBeFocusable) {
      this.setAttribute('tabindex', '0');
      this.autoTabIndex = true;
      return;
    }

    if (this.autoTabIndex) {
      this.removeAttribute('tabindex');
      this.autoTabIndex = false;
    }
  }

  private warnIfMissingName() {
    if (this.hasWarnedMissingName) return;
    if (!this.internals.form) return;
    if (this.name && this.name.trim().length > 0) return;
    console.warn('w-radio-group: "name" is required for form submission.');
    this.hasWarnedMissingName = true;
  }

  render() {
    const hasLabelSlot = this.hasSlottedContent('label');
    const hasHelpTextSlot = this.hasSlottedContent('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    const isRequiredInvalid = this.required && !this.getCheckedValue();
    const showRequiredError = isRequiredInvalid && this.hasInteracted;
    const externalInvalid = this.invalid || this.hasAttribute('invalid');
    const showInvalidError = externalInvalid || showRequiredError;

    const helpText = showInvalidError
      ? externalInvalid && this.helpText ? this.helpText : REQUIRED_MESSAGE()
      : this.helpText;
    const shouldShowHelpText = showInvalidError || hasHelpText;

    const labelledBy = hasLabel ? 'label' : undefined;
    const describedBy = shouldShowHelpText ? 'help-text' : undefined;
    const helpTextAriaLabel = this.slottedHelpText || undefined;

    return html`
      <fieldset
        part="form-control"
        role="radiogroup"
        aria-labelledby=${ifDefined(labelledBy)}
        aria-describedby=${ifDefined(describedBy)}
        aria-errormessage="error-message"
        aria-invalid=${showInvalidError ? 'true' : undefined}>
        ${hasLabel
          ? html`
              <label part="form-control-label" id="label" @click=${this.handleLabelClick}>
                <slot name="label">${this.label}</slot>
                ${this.optional
                  ? html`<span class="optional">
                      ${i18n._({
                        id: 'radio-group.label.optional',
                        message: 'Optional',
                        comment: 'Shown behind label when marked as optional',
                      })}
                    </span>`
                  : null}
              </label>
            `
          : null}

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        ${shouldShowHelpText
          ? html`
              <div id="help-text" part="help-text" aria-label=${ifDefined(helpTextAriaLabel)}>
                <slot name="help-text" @slotchange=${this.handleHelpTextSlotChange}>${helpText}</slot>
              </div>
            `
          : null}
      </fieldset>
    `;
  }
}

/**
 * @deprecated Exported for backwards compatibility only, use `WarpRadioGroup`
 */
export const WRadioGroup = WarpRadioGroup;


if (!customElements.get('w-radio-group')) {
  customElements.define('w-radio-group', WarpRadioGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-radio-group': WarpRadioGroup;
  }
}
