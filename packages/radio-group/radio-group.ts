import type { PropertyValues } from 'lit';
import { html, LitElement } from 'lit';

import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../radio/radio.js';
import type { WRadio } from '../radio/radio.js';
import { activateI18n } from '../i18n';
import { messages as daMessages } from '../checkbox-group/locales/da/messages.mjs';
import { messages as enMessages } from '../checkbox-group/locales/en/messages.mjs';
import { messages as fiMessages } from '../checkbox-group/locales/fi/messages.mjs';
import { messages as nbMessages } from '../checkbox-group/locales/nb/messages.mjs';
import { messages as svMessages } from '../checkbox-group/locales/sv/messages.mjs';
// eslint-disable-next-line
// @ts-ignore
import { styles } from './radio-group-styles.js';
import { styles as hostStyles } from '../radio/host-styles.js';

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

const REQUIRED_MESSAGE = () =>
  i18n._({
    id: 'checkbox-group.validation.required',
    message: 'At least one selection is required.',
    comment: 'Shown when required radio group has no selections',
  });

/**
 * @slot label - Alternative to the `label` attribute should you need custom HTML.
 * @slot help-text - Alternative to the `help-text` attribute should you need custom HTML.
 */
export class WRadioGroup extends FormControlMixin(LitElement) {
  static styles = [hostStyles, styles];

  @state() hasRadioButtons = false;
  @state() hasInteracted = false;
  @state() hasWarnedMissingName = false;
  @state() autoTabIndex = false;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  /**
   * The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = '';

  /** The radio group's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** @deprecated Use `help-text` instead. */
  @property({ attribute: 'hint' }) hint = '';

  /** Optional indicator for the label. */
  @property({ type: Boolean, reflect: true }) optional = false;

  /** Marks the radio group as invalid. */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** The name of the radio group, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name: string | null = null;

  /** Disables the radio group and all child radios. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The orientation in which to show radio items. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

  /** The current value of the radio group, submitted as a name/value pair with form data. */
  @property({ attribute: 'value', reflect: true }) value: string | null = null;

  /** The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Ensures a child radio is checked before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * Used for SSR. if true, will show slotted label on initial render.
   */
  @property({ type: Boolean, attribute: 'with-label' }) withLabel = false;

  /**
   * Used for SSR. if true, will show slotted help text on initial render.
   */
  @property({ type: Boolean, attribute: 'with-hint' }) withHint = false;

  private defaultValue: string | null = null;
  private slottedHintText: string | null = null;
  private unsubscribeI18n?: () => void;

  //
  // We need this because if we don't have it, FormValidation yells at us that it's "not focusable".
  //   If we use `this.tabIndex = -1` we can't focus the radio inside.
  //
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleRadioClick);
    this.addEventListener('invalid', this.handleInvalid);
  }

  /**
   * We use the first available radio as the validationTarget similar to native HTML that shows the validation popup on
   * the first radio element.
   */
  get validationTarget() {
    const radio = this.querySelector<WRadio>(':is(w-radio):not([disabled])');
    if (!radio) return undefined;

    return radio;
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('value') ||
      changedProperties.has('name') ||
      changedProperties.has('required') ||
      changedProperties.has('invalid') ||
      changedProperties.has('helpText')
    ) {
      this.syncRadioElements();
      this.syncFormValue();
      this.updateValidity();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
    this.syncSlottedHintText();
    this.syncFormValue();
    this.updateValidity();
    this.unsubscribeI18n = i18n.on('change', this.handleI18nChange);
    this.warnIfMissingName();
  }

  disconnectedCallback() {
    this.unsubscribeI18n?.();
    this.unsubscribeI18n = undefined;
    super.disconnectedCallback();
  }

  resetFormControl() {
    this.value = this.defaultValue;
    this.syncRadioElements();
    this.syncFormValue();
    this.updateValidity();
  }

  private handleRadioClick = (e: Event) => {
    const clickedRadio = (e.target as HTMLElement).closest<WRadio>('w-radio');
    /* eslint-disable */
    if (!clickedRadio || clickedRadio.disabled || (clickedRadio as any).forceDisabled || this.disabled) {
      return;
    }

    const oldValue = this.value;
    this.value = clickedRadio.value;
    clickedRadio.checked = true;

    const radios = this.getAllRadios();
    for (const radio of radios) {
      if (clickedRadio === radio) {
        continue;
      }

      radio.checked = false;
      radio.setAttribute('tabindex', '-1');
    }

    if (this.value !== oldValue) {
      this.updateComplete.then(() => {
        this.hasInteracted = true;
        this.syncFormValue();
        this.updateValidity();
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
      });
    }
  };

  private getAllRadios() {
    return [...this.querySelectorAll<WRadio>('w-radio')];
  }

  private handleLabelClick() {
    this.focus();
  }

  private handleInvalid = (event: Event) => {
    // Prevent native validation popover. We'll surface errors via help text.
    event.preventDefault();
    this.hasInteracted = true;
    this.updateValidity();
  };

  private handleHintSlotChange = () => {
    this.syncSlottedHintText();
    this.requestUpdate();
  };

  private handleI18nChange = () => {
    this.requestUpdate();
  };

  private async syncRadioElements() {
    const radios = this.getAllRadios();
    let hasRadioButtons = false;

    // Add data attributes to support styling
    radios.forEach((radio, index) => {
      if (radio.appearance === 'button') hasRadioButtons = true;
      radio.setAttribute('size', this.size);
      radio.toggleAttribute('data-w-radio-horizontal', this.orientation !== 'vertical');
      radio.toggleAttribute('data-w-radio-vertical', this.orientation === 'vertical');
      radio.toggleAttribute('data-w-radio-first', index === 0);
      radio.toggleAttribute('data-w-radio-inner', index !== 0 && index !== radios.length - 1);
      radio.toggleAttribute('data-w-radio-last', index === radios.length - 1);

      // Set forceDisabled state based on radio group's disabled state
      (radio as WRadio).forceDisabled = this.disabled;

      if (this.name && !radio.getAttribute('name')) {
        radio.setAttribute('name', this.name);
      }
    });

    // If at least one radio button exists, we assume it's a radio button group
    this.hasRadioButtons = hasRadioButtons;

    await Promise.all(
      radios.map(async (radio) => {
        await radio.updateComplete;

        if (!radio.disabled && radio.value === this.value) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      }),
    );

    // Manage tabIndex based on disabled state and checked status
    if (this.disabled) {
      // If radio group is disabled, all radios should not be tabbable
      radios.forEach((radio) => {
        radio.tabIndex = -1;
      });
    } else {
      // Normal tabbing behavior
      const enabledRadios = radios.filter((radio) => !radio.disabled);
      const checkedRadio = enabledRadios.find((radio) => radio.checked);

      if (enabledRadios.length > 0) {
        if (checkedRadio) {
          // If there's a checked radio, it should be tabbable
          enabledRadios.forEach((radio) => {
            radio.tabIndex = radio.checked ? 0 : -1;
          });
        } else {
          // If no radio is checked, first enabled radio should be tabbable
          enabledRadios.forEach((radio, index) => {
            radio.tabIndex = index === 0 ? 0 : -1;
          });
        }
      }

      // Disabled radios should never be tabbable
      radios
        .filter((radio) => radio.disabled)
        .forEach((radio) => {
          radio.tabIndex = -1;
        });
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key) || this.disabled) {
      return;
    }

    const radios = this.getAllRadios().filter((radio) => !radio.disabled);

    if (radios.length <= 0) {
      return;
    }

    event.preventDefault();

    const oldValue = this.value;

    const checkedRadio = radios.find((radio) => radio.checked) ?? radios[0];
    const incr = event.key === ' ' ? 0 : ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
    let index = radios.indexOf(checkedRadio) + incr;

    if (!index) index = 0;

    if (index < 0) {
      index = radios.length - 1;
    }

    if (index > radios.length - 1) {
      index = 0;
    }

    const hasRadioButtons = radios.some((radio) => radio.tagName.toLowerCase() === 'w-radio-button');

    this.getAllRadios().forEach((radio) => {
      radio.checked = false;

      if (!hasRadioButtons) {
        radio.setAttribute('tabindex', '-1');
      }
    });

    this.value = radios[index].value;
    radios[index].checked = true;

    if (!hasRadioButtons) {
      radios[index].setAttribute('tabindex', '0');
      radios[index].focus();
    } else {
      radios[index].shadowRoot?.querySelector('button')?.focus();
    }

    if (this.value !== oldValue) {
      this.updateComplete.then(() => {
        this.hasInteracted = true;
        this.syncFormValue();
        this.updateValidity();
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
      });
    }

    event.preventDefault();
  }

  /** Sets focus on the radio group. */
  public focus(options?: FocusOptions) {
    if (this.disabled) return;

    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const firstEnabledRadio = radios.find((radio) => !radio.disabled);
    const radioToFocus = checked || firstEnabledRadio;

    // Call focus for the checked radio. If no radio is checked, focus the first one that isn't disabled.
    if (radioToFocus) {
      radioToFocus.focus(options);
    }
  }

  checkValidity() {
    this.updateValidity();
    return this.internals.checkValidity();
  }

  reportValidity() {
    this.hasInteracted = true;
    this.updateValidity();
    return this.internals.checkValidity();
  }

  private getHasSlotted(name: 'label' | 'help-text') {
    if (this.querySelector(`[slot="${name}"]`)) {
      return true;
    }
    const slot = this.shadowRoot?.querySelector(`slot[name="${name}"]`) as HTMLSlotElement | null;
    if (!slot) return false;
    return slot.assignedNodes({ flatten: true }).some((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) return true;
      if (node.nodeType === Node.TEXT_NODE) return Boolean(node.textContent?.trim());
      return false;
    });
  }

  private syncFormValue() {
    if (this.disabled || !this.name) {
      this.setValue(null);
      return;
    }

    if (!this.value) {
      this.setValue(null);
      return;
    }

    this.setValue(this.value);
  }

  private syncSlottedHintText() {
    const slottedHint = this.querySelector<HTMLElement>('[slot="help-text"]');
    if (!slottedHint) {
      this.slottedHintText = null;
      return;
    }

    this.slottedHintText = slottedHint.textContent?.trim() || null;
  }

  private updateValidity() {
    this.warnIfMissingName();

    if (this.disabled) {
      this.internals.setValidity({});
      this.syncChildInvalid(false);
      this.syncHostTabIndex(false);
      return;
    }

    const requiredInvalid = this.required && !this.value;
    const externalInvalid = this.invalid;
    const showRequiredError = requiredInvalid && this.hasInteracted;
    const showInvalidUi = externalInvalid || showRequiredError;

    this.syncHostTabIndex(showInvalidUi);

    if (requiredInvalid) {
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

  private syncChildInvalid(isInvalid: boolean) {
    this.getAllRadios().forEach((radio) => {
      if ('invalid' in radio) {
        (radio as { invalid: boolean }).invalid = isInvalid;
      }
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
      this.tabIndex = 0;
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
    const hasLabelSlot = this.getHasSlotted('label') || this.withLabel;
    const hasHintSlot = this.getHasSlotted('help-text') || this.withHint;
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const combinedHelpText = this.helpText || this.hint;
    const hasHint = combinedHelpText ? true : !!hasHintSlot;
    const isRequiredInvalid = this.required && !this.value;
    const showRequiredError = isRequiredInvalid && this.hasInteracted;
    const showInvalidError = this.invalid || showRequiredError;
    const isInvalid = showInvalidError;
    const hintText = showInvalidError ? REQUIRED_MESSAGE() : combinedHelpText;
    const shouldShowHint = showInvalidError || hasHint;
    const describedBy = shouldShowHint ? 'help-text' : undefined;
    const hintAriaLabel = this.slottedHintText || undefined;

    return html`
      <fieldset
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control-radio-group': true,
          'form-control-has-label': hasLabel,
          'has-radio-buttons': this.hasRadioButtons,
          'radio-group-required': this.required,
        })}
        role="radiogroup"
        aria-labelledby=${ifDefined(hasLabel ? 'label' : undefined)}
        aria-describedby=${ifDefined(describedBy)}
        aria-errormessage="error-message"
        aria-invalid=${isInvalid ? 'true' : undefined}
        aria-orientation=${this.orientation}>
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
          ${this.optional
            ? html` <span class="optional">
                ${i18n._({
                  id: 'checkbox-group.label.optional',
                  message: 'Optional',
                  comment: 'Shown behind label when marked as optional',
                })}
              </span>`
            : null}
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        ${shouldShowHint
          ? html`
              <div
                id="help-text"
                part="hint"
                class=${classMap({
                  'has-slotted': hasHint,
                  error: isInvalid,
                })}
                aria-hidden=${shouldShowHint ? 'false' : 'true'}
                aria-label=${hintAriaLabel}>
                <slot name="help-text" @slotchange=${this.handleHintSlotChange}>${hintText}</slot>
              </div>
            `
          : null}
      </fieldset>
    `;
  }
}

if (!customElements.get('w-radio-group')) {
  customElements.define('w-radio-group', WRadioGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-radio-group': WRadioGroup;
  }
}
