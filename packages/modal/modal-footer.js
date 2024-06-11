import { html, css } from 'lit';

import WarpElement from '@warp-ds/elements-core';

import { modalV2 as cc } from './component-classes.js';
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util';

export class ModalFooter extends CanCloseMixin(ProvidesCanCloseToSlotsMixin(WarpElement)) {
  render() {
    return html`
      <div class="${cc.footerSlot}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `;
  }
  static styles = [
    WarpElement.styles,
    css`
      @unocss-placeholder;
    `,
  ];
}
