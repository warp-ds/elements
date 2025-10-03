// @warp-css;

import { html, LitElement } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { property } from 'lit/decorators.js';

import { reset } from '../styles';

import { styles } from './styles.js';

const ccSwitch = {
  base: 'block relative h-24 w-44 cursor-pointer group focusable rounded-full',
  disabled: 'pointer-events-none',
  track: 'absolute top-0 left-0 h-full w-full rounded-full transition-colors',
  trackActive: 's-bg-primary group-hover:s-bg-primary-hover',
  trackInactive: 'bg-[--w-color-switch-track-background] group-hover:bg-[--w-color-switch-track-background-hover]',
  trackDisabled: 's-bg-disabled-subtle',
  handle: 'absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
  handleSelected: 'translate-x-20',
  handleNotDisabled: 's-bg shadow-s',
  handleDisabled: 's-bg-disabled',
  a11y: 'sr-only',
};

export class WarpSwitch extends LitElement {
  @property({ type: Boolean, reflect: true })
  value: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  static styles = [reset, styles];

  /** @internal */
  get _baseClasses() {
    return classNames([ccSwitch.base, this.disabled && ccSwitch.disabled]);
  }

  /** @internal */
  get _trackClasses() {
    return classNames([
      ccSwitch.track,
      this.disabled && ccSwitch.trackDisabled,
      !this.disabled && (this.value ? ccSwitch.trackActive : ccSwitch.trackInactive),
    ]);
  }

  /** @internal */
  get _handleClasses() {
    return classNames([
      ccSwitch.handle,
      this.value && ccSwitch.handleSelected,
      this.disabled ? ccSwitch.handleDisabled : ccSwitch.handleNotDisabled,
    ]);
  }

  /** @internal */
  _handleClick() {
    if (!this.disabled) {
      this.value = !this.value;
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  render() {
    return html`
      <div>
        <button
          type="button"
          role="switch"
          aria-checked=${this.value}
          class=${this._baseClasses}
          aria-disabled=${this.disabled}
          ?disabled=${this.disabled}
          @click=${this._handleClick}>
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
