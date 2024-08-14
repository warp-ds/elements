import { html } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { badge as ccBadge } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';

class WarpBadge extends WarpElement {
  static properties = {
    variant: {
      type: 'neutral' | 'info' | 'positive' | 'warning' | 'negative' | 'disabled' | 'notification' | 'price',
    },
    position: {
      type: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left',
    },
  };

  static styles = [WarpElement.styles];

  constructor() {
    super();

    this.variant = 'neutral';
  }

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
