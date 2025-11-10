import type { PropertyValues } from 'lit';
import { html } from 'lit';

import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BaseFormAssociatedElement } from './form-associated-element';
import { uniqueId } from './math';
import './radio';
import type { WRadio } from './radio';
// eslint-disable-next-line
// @ts-ignore
import { styles } from './radio-group-styles';
import { RequiredValidator } from './required-validator';
import { HasSlotController } from './slot';

/**
 * @slot label - Alternative to the `label` attribute should you need custom HTML.
 */
export class WRadioGroup extends BaseFormAssociatedElement {
  static css = [styles];

  static get validators() {
    const validators = [
      RequiredValidator({
        validationElement: Object.assign(document.createElement('input'), {
          required: true,
          type: 'radio',
          // we need an id that's guaranteed to be unique; users will never see this
          name: uniqueId('__w-radio'),
        }),
      }),
    ];
    return [...super.validators, ...validators];
  }

  private readonly hasSlotController = new HasSlotController(this, 'hint', 'label');

  @state() hasRadioButtons = false;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  /**
   * The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = '';

  /** The radio groups's hint. If you need to display HTML, use the `hint` slot instead. */
  @property({ attribute: 'hint' }) hint = '';

  /** The name of the radio group, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name: string | null = null;

  /** Disables the radio group and all child radios. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The orientation in which to show radio items. */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

  private _value: string | null = null;

  get value() {
    if (this.valueHasChanged) {
      return this._value;
    }

    return this._value ?? this.defaultValue;
  }

  /** The current value of the radio group, submitted as a name/value pair with form data. */
  @state()
  set value(val: string | number | null) {
    if (typeof val === 'number') val = String(val);
    this.valueHasChanged = true;
    this._value = val;
  }

  /** The default value of the form control. Primarily used for resetting the form control. */
  @property({ attribute: 'value', reflect: true }) defaultValue: string | null = this.getAttribute('value') || null;

  /** The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Ensures a child radio is checked before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * Used for SSR. if true, will show slotted label on initial render.
   */
  @property({ type: Boolean, attribute: 'with-label' }) withLabel = false;

  /**
   * Used for SSR. if true, will show slotted hint on initial render.
   */
  @property({ type: Boolean, attribute: 'with-hint' }) withHint = false;

  //
  // We need this because if we don't have it, FormValidation yells at us that it's "not focusable".
  //   If we use `this.tabIndex = -1` we can't focus the radio inside.
  //
  static shadowRootOptions = { ...BaseFormAssociatedElement.shadowRootOptions, delegatesFocus: true };

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleRadioClick);
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
    if (changedProperties.has('disabled') || changedProperties.has('value')) {
      this.syncRadioElements();
    }
  }

  formResetCallback(...args: Parameters<BaseFormAssociatedElement['formResetCallback']>) {
    this.value = this.defaultValue;

    super.formResetCallback(...args);

    this.syncRadioElements();
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

  render() {
    const hasLabelSlot = this.hasUpdated ? this.hasSlotController.test('label') : this.withLabel;
    const hasHintSlot = this.hasUpdated ? this.hasSlotController.test('hint') : this.withHint;
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHint = this.hint ? true : !!hasHintSlot;

    return html`
      <fieldset
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control-radio-group': true,
          'form-control-has-label': hasLabel,
          'has-radio-buttons': this.hasRadioButtons,
        })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}>
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${classMap({
            'has-slotted': hasHint,
          })}
          aria-hidden=${hasHint ? 'false' : 'true'}
          >${this.hint}</slot
        >
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w-radio-group': WRadioGroup;
  }
}
