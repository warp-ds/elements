import { CanCloseMixin } from './util.js'
import WarpElement from '@warp-ds/elements-core'
import { html, css } from 'lit'
import { modalV2 as cc } from './component-classes.js'

export class ModalTitleBar extends CanCloseMixin(WarpElement) {
  static properties = {
    title: { type: String },
    _hasTopContent: { state: true },
  }
  constructor() {
    super()
    this._hasTopContent = false
  }
  render() {
    return html`
      <div class="${cc.titleSlot}">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${!this._hasTopContent && cc.titleBarSlot}">
          <h1 class="${cc.titleBarText}">${this.title}</h1>
          ${this._hasTopContent ? this.topCloseButton : this.normalCloseButton}
        </div>
      </div>
    `
  }
  // TODO: wire up a11y and i18n
  get normalCloseButton() {
    return html`
      <button class="${cc.titleButton} ${cc.titleBarButton} ${cc.titleButtonRight}" @click="${this.close}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9M3.5 3.5l9 9"></path></svg>
      </button>
    `
  }
  // TODO: wire up a11y and i18n
  get topCloseButton() {
    return html`
      <button class="${cc.titleButton} ${cc.titleCloseButton} ${cc.titleButtonRight} new-pill" @click="${this.close}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9M3.5 3.5l9 9"></path></svg>
      </button>
    `
  }
  handleTopSlotChange(slotEvent) {
    const topContent = slotEvent.target.assignedElements({ flatten: true })
    this._hasTopContent = !!topContent.length
  }
  static styles = [
    WarpElement.styles,
    css`@unocss-placeholder`,
  ]
}
