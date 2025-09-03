import { html, LitElement } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { badge as ccBadge } from '@warp-ds/css/component-classes';
import { property } from 'lit/decorators.js';

import { reset } from '../styles';

class WarpBadge extends LitElement {
  @property({ type: String, reflect: true })
  variant: 'neutral' | 'info' | 'positive' | 'warning' | 'negative' | 'disabled' | 'price' = 'neutral';

  @property({ type: String, reflect: true })
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

  static styles = [reset];

  get _class() {
    return classNames([
      ccBadge.base,
      ccBadge[this.variant],
      !!this.position && ccBadge.positionBase,
      this.position === 'top-left' && ccBadge.positionTL,
      this.position === 'top-right' && ccBadge.positionTR,
      this.position === 'bottom-right' && ccBadge.positionBR,
      this.position === 'bottom-left' && ccBadge.positionBL,
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
