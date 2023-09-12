import { css, html, LitElement } from 'lit';
import { classes } from '../utils';
//import { badge as ccBadge } from '@warp-ds/css/component-classes';
const ccBadge = {
  base: 'py-4 px-8 border-0 rounded-4 text-xs inline-flex',
  neutral: 'i-bg-$color-badge-neutral-background i-text-$color-badge-neutral-text',
  info: 'i-bg-$color-badge-info-background i-text-$color-badge-info-text',
  positive: 'i-bg-$color-badge-positive-background i-text-$color-badge-positive-text',
  warning: 'i-bg-$color-badge-warning-background i-text-$color-badge-warning-text',
  negative: 'i-bg-$color-badge-negative-background i-text-$color-badge-negative-text',
  disabled: 'i-bg-$color-badge-disabled-background i-text-$color-badge-disabled-text',
  price: 'i-bg-$color-badge-price-background i-text-$color-badge-price-text',
  notification: 'i-bg-$color-badge-notification-background i-text-$color-badge-notification-text',
  positionBase: 'absolute backdrop-blur',
  positionTL: 'rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0  wtf wtf2 wtf3',
  positionTR: 'rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0',
  positionBR: 'rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0',
  positionBL: 'rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0',
};

class WarpBadge extends LitElement {
  static properties = {
    type: { type: 'neutral' | 'info' | 'positive' | 'warning' |'negative' | 'disabled' | 'notification' | 'price' },
    position: { type: 'tl' | 'tr' | 'br' | 'bl' },
  };

  static styles =
    css`
      @unocss-placeholder
      `;

  constructor() {
    super();

    this.type = 'neutral';
  }

  get _class() {
    return classes({
      [this.position]: true,
      [ccBadge.base]: true,
      [ccBadge[this.type]]: true,
      [ccBadge.positionBase]: !!this.position,
      [ccBadge.positionTL]: this.position === 'tl',
      [ccBadge.positionTR]: this.position === 'tr',
      [ccBadge.positionBR]: this.position === 'br',
      [ccBadge.positionBL]: this.position === 'bl',
    });
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
