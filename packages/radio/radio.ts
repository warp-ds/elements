import type { PropertyValues } from 'lit';
import { html, LitElement } from 'lit';

import { property, state } from 'lit/decorators.js';
import { reset } from '../styles';
import { styles as hostStyles } from './host-styles';
// eslint-disable-next-line
// @ts-ignore
import { toggleStyles } from '../toggle-styles';

export class WRadio extends LitElement {
  static styles = [hostStyles, reset, toggleStyles];

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
      this[this.checked ? 'setAttribute' : 'removeAttribute']('checked-ui', '');
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
      // Only set tabIndex if not disabled
      if (!this.disabled && !this.forceDisabled) {
        this.tabIndex = this.checked ? 0 : -1;
      }
    }

    if (changedProperties.has('disabled') || changedProperties.has('forceDisabled')) {
      const effectivelyDisabled = this.disabled || this.forceDisabled;
      this[effectivelyDisabled ? 'setAttribute' : 'removeAttribute']('disabled-ui', '');
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

  // Update the handleClick method (around line 75)
  private handleClick = () => {
    if (!this.disabled && !this.forceDisabled) {
      this.checked = true;
    }
  };

  render() {
    return html`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-radio')) {
  customElements.define('w-radio', WRadio);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-radio': WRadio;
  }
}
