import { CanCloseMixin } from './util.js'
import WarpElement from '@warp-ds/elements-core'
import { html } from 'lit'
import { modalV2 as cc } from './component-classes.js'

export class ModalTitleBar extends CanCloseMixin(WarpElement) {
  static properties = {
    title: { type: String }
  }
  render() {
    return html`
      <div class="${cc.titleBarSlot}">
        <h1 class="${cc.titleBarText}">${this.title}</h1>
        <!-- TODO: wire up a11y and i18n -->
        <button class="${cc.titleButton} ${cc.titleBarButton} ${cc.titleButtonRight}" @click="${this.close}">
          <!-- TODO: try bringing in the WC icon again -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9M3.5 3.5l9 9"></path></svg>
        </button>
      </div>
    `
  }
  static styles = [
    WarpElement.styles,
  ]
}