import { CanCloseMixin } from './util.js'
import WarpElement from '@warp-ds/elements-core'
import { css, html } from 'lit'
import { modalV2 as cc } from './component-classes.js'

export class ModalTitleClose extends CanCloseMixin(WarpElement) {
  static properties = {
    title: { type: String }
  }
  render() {
    return html`
      <div class="${cc.titleCloseSlot}">
        <!-- TODO: wire up a11y and i18n -->
        <button class="${cc.titleButton} ${cc.titleCloseButton} ${cc.titleButtonRight} new-pill" @click="${this.close}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9M3.5 3.5l9 9"></path></svg>
        </button>
      </div>
    `
  }
  static styles = [
    WarpElement.styles,
    css`@unocss-placeholder`,
    // TODO: kill
    css`
      .new-pill {
        transition: 0.3s ease;
        background-color: rgba(255,255,255, 0.5);
      }
      .new-pill:hover {
        background-color: rgba(255,255,255, 0.75);
      }
      .new-pill:active {
        background-color: rgba(255,255,255, 0.25);
      }
    `
  ]
}
