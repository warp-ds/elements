import { html } from 'lit';

import { modalElement as ccModal } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';

import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util';

export class ModalFooter extends CanCloseMixin(ProvidesCanCloseToSlotsMixin(WarpElement)) {
  render() {
    return html`
      <div class="${ccModal.footer}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `;
  }
  static styles = [WarpElement.styles];
}
