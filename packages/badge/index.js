import { html } from 'lit';

import { badge as ccBadge } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';

import { classes } from '../utils';

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
    return classes({
      [ccBadge.base]: true,
      [ccBadge[this.variant]]: true,
      [ccBadge.positionBase]: !!this.position,
      [ccBadge.positionTL]: this.position === 'top-left',
      [ccBadge.positionTR]: this.position === 'top-right',
      [ccBadge.positionBR]: this.position === 'bottom-right',
      [ccBadge.positionBL]: this.position === 'bottom-left',
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
