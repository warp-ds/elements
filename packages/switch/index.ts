// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles';

import { styles } from './styles.js';

const ccSwitch = {
  base: 'block relative h-24 w-44 cursor-pointer group focusable rounded-full',
  disabled: 'pointer-events-none',

  track: 'absolute top-0 left-0 h-full w-full rounded-full transition-colors',
  trackActive: 's-bg-primary group-hover:s-bg-primary-hover',
  trackInactive: 's-bg border s-border-strong group-hover:s-bg-hover group-hover:s-border-strong-hover',

  trackDisabledOn: 's-bg-disabled',
  trackDisabledOff: 's-bg-disabled-subtle border s-border-disabled',

  handle: 'absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
  handleSelected: 'translate-x-20',

  // ON + enabled
  handleActive: 's-bg',

  // OFF + enabled
  handleNotDisabled: 'bg-[--w-s-color-border-strong] group-hover:bg-[--w-s-color-border-strong-hover]',

  handleDisabledOn: 's-bg-disabled-subtle',
  handleDisabledOff: 's-bg-disabled',

  a11y: 'sr-only',
};

export class WarpSwitch extends FormControlMixin(LitElement) {
  @property({ type: String, reflect: true })
  name = '';

  @property({ type: String, reflect: true })
  value = '';

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  // capture the initial state using connectedCallback and #initialState
  #initialState: boolean | null = null;

  static styles = [reset, styles];

  /** @internal */
  get _baseClasses() {
    return classNames([ccSwitch.base, this.disabled && ccSwitch.disabled]);
  }

  /** @internal */
  get _trackClasses() {
    return classNames([
      ccSwitch.track,
      this.disabled
        ? this.value
          ? ccSwitch.trackDisabledOn // disabled + ON
          : ccSwitch.trackDisabledOff // disabled + OFF
        : this.value
          ? ccSwitch.trackActive // enabled + ON
          : ccSwitch.trackInactive, // enabled + OFF
    ]);
  }

  /** @internal */
  get _handleClasses() {
    return classNames([
      ccSwitch.handle,
      this.checked && ccSwitch.handleSelected, // position (ON → translated)

      this.disabled
        ? this.checked
          ? ccSwitch.handleDisabledOn // disabled + ON
          : ccSwitch.handleDisabledOff // disabled + OFF
        : this.checked
          ? ccSwitch.handleActive // enabled + ON
          : ccSwitch.handleNotDisabled, // enabled + OFF
    ]);
  }

  /** @internal */
  _handleClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { checked: this.checked, value: this.value || null },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  connectedCallback(): void {
    this.#initialState = this.checked;
    super.connectedCallback();
    if (!this.disabled) {
      this.setValue(this.checked && this.value ? this.value : null);
    }
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('checked')) {
      if (!this.disabled) {
        this.setValue(this.checked && this.value ? this.value : null);
      }
    }
  }

  resetFormControl(): void {
    this.checked = this.#initialState;
  }

  render() {
    return html`
      <div>
        <button
          type="button"
          role="switch"
          aria-checked=${this.checked}
          class=${this._baseClasses}
          aria-disabled=${this.disabled}
          ?disabled=${this.disabled}
          @click=${this._handleClick}
        >
          <span data-testid="track" class=${this._trackClasses}></span>
          <span data-testid="handle" class=${this._handleClasses}></span>
        </button>
      </div>
    `;
  }
}

if (!customElements.get('w-switch')) {
  customElements.define('w-switch', WarpSwitch);
}
