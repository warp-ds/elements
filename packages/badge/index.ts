// @warp-css;
import { html, LitElement } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { property } from 'lit/decorators.js';

import { reset } from '../styles';

import { styles } from './styles';

class WarpBadge extends LitElement {
  @property({ type: String, reflect: true })
  variant: 'neutral' | 'info' | 'positive' | 'warning' | 'negative' | 'disabled' | 'price' | 'sponsored' = 'neutral';

  @property({ type: String, reflect: true })
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

  static styles = [reset, styles];

  /** @internal */
  get _class() {
    return classNames([
      'py-4 px-8 border-0 rounded-4 text-xs inline-flex',
      this.variant === 'neutral' && 'bg-[--w-color-badge-neutral-background] s-text',
      this.variant === 'info' && 'bg-[--w-color-badge-info-background] s-text',
      this.variant === 'positive' && 'bg-[--w-color-badge-positive-background] s-text',
      this.variant === 'warning' && 'bg-[--w-color-badge-warning-background] s-text',
      this.variant === 'negative' && 'bg-[--w-color-badge-negative-background] s-text',
      this.variant === 'disabled' && 's-bg-disabled s-text',
      this.variant === 'price' && 'bg-[--w-black/70] s-text-inverted-static',
      this.variant === 'sponsored' && 'bg-[--w-color-badge-sponsored-background] s-text',
      !!this.position && 'absolute backdrop-blur',
      this.position === 'top-left' && 'rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0',
      this.position === 'top-right' && 'rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0',
      this.position === 'bottom-right' && 'rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0',
      this.position === 'bottom-left' && 'rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0',
    ]);
  }

  render() {
    return html`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-badge')) {
  customElements.define('w-badge', WarpBadge);
}

export { WarpBadge };
