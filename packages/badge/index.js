import { css, html, LitElement } from 'lit';
import { classes } from '../utils';
import { badge as ccBadge } from '@warp-ds/css/component-classes';

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
