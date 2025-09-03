import type { PropertyValues } from 'lit';
import { html } from 'lit';

import { property, state } from 'lit/decorators.js';

import { BaseFormAssociatedElement } from './form-associated-element';
import styles from './radio.css?inline';

export class WRadio extends BaseFormAssociatedElement {
  static css = [styles];

  @state() checked = false;

  /** @internal Used by radio group to force disable radios while preserving their original disabled state. */
  @state() forceDisabled = false;

  /**
   * The string pointing to a form's id.
   */
  @property({ reflect: true }) form: string | null = null;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property({ reflect: true }) value: string;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property({ reflect: true }) appearance: 'default' | 'button' | 'clickable' = 'default';

  /**
   * The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
   * attribute can typically be omitted.
   */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the radio. */
  @property({ type: Boolean }) disabled = false;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }

  private setInitialAttributes() {
    this.setAttribute('role', 'radio');
    this.tabIndex = 0;
    this.setAttribute('aria-disabled', this.disabled || this.forceDisabled ? 'true' : 'false');
  }

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    if (changedProperties.has('checked')) {
      this.customStates.set('checked', this.checked);
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
      // Only set tabIndex if not disabled
      if (!this.disabled && !this.forceDisabled) {
        this.tabIndex = this.checked ? 0 : -1;
      }
    }

    if (changedProperties.has('disabled') || changedProperties.has('forceDisabled')) {
      const effectivelyDisabled = this.disabled || this.forceDisabled;
      this.customStates.set('disabled', effectivelyDisabled);
      this.setAttribute('aria-disabled', effectivelyDisabled ? 'true' : 'false');

      // Set tabIndex based on disabled state
      if (effectivelyDisabled) {
        this.tabIndex = -1;
      } else {
        // Restore proper tabIndex - this will be managed by the radio group
        this.tabIndex = this.checked ? 0 : -1;
      }
    }
  }

  /**
   * @override
   */
  setValue(): void {
    // We override `setValue` because we don't want to set form values from here. We want to do that in "RadioGroup" itself.
  }

  // Update the handleClick method (around line 75)
  private handleClick = () => {
    if (!this.disabled && !this.forceDisabled) {
      this.checked = true;
    }
  };

  render() {
    return html`
      <span part="control" class="control"></span>
      <slot part="label" class="label"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w-radio': WRadio;
  }
}
