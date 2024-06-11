import { html, css } from 'lit';

import WarpElement from '@warp-ds/elements-core';

import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util';

export class ModalFooter extends CanCloseMixin(ProvidesCanCloseToSlotsMixin(WarpElement)) {
  render() {
    return html`
      <div class="flex justify-end shrink-0 px-16 sm:px-32">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `;
  }
  static styles = [
    css`
      @unocss-placeholder;
    `,
  ];
}
