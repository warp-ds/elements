import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from "./util"
import WarpElement from '@warp-ds/elements-core'
import { html } from 'lit'
import { modalV2 as cc } from './component-classes.js'

export class ModalFooter extends CanCloseMixin(ProvidesCanCloseToSlotsMixin(WarpElement)) {
  render() {
    return html`
      <div class="${cc.footerSlot}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `
  }
  static styles = [
    WarpElement.styles,
  ]
}
