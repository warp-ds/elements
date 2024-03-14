import { CanCloseMixin } from './util.js'
import WarpElement from '@warp-ds/elements-core'
import { html, css, nothing } from 'lit'
import { modalV2 as cc } from './component-classes.js'

export class ModalHeader extends CanCloseMixin(WarpElement) {
  static properties = {
    title: { type: String },
    back: { type: Boolean },
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
          ${this.backButton}
          <h1 class="${this.titleClasses}">${this.title}</h1>
          ${this._hasTopContent ? this.topCloseButton : this.normalCloseButton}
        </div>
      </div>
    `
  }
  async willUpdate(changedProperties) {
    if (changedProperties.has('back')) {
      await this.updateComplete
      console.log("BACKED")
    }
  }
  get titleClasses() {
    return [
      cc.titleBarText,
      this.back ? cc.titleTextWithBackButton : cc.titleTextWithoutBackButton,
      this._hasTopContent ? cc.titleTextWithTopArea : ''
    ].join(' ')
  }
  get backButton() {
    return this.back ? html`
      <button class="${cc.titleButton} ${cc.titleBarButton} ${cc.titleButtonLeft}" @click="${this.close}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="s-icon"><title>Leftward-pointing arrow</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>
      </button>`
    : nothing
  }
  // TODO: wire up a11y and i18n
  get normalCloseButton() {
    return html`
      <button class="${cc.titleButton} ${cc.titleBarButton} ${cc.titleButtonRight}" @click="${this.close}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9M3.5 3.5l9 9"></path></svg>
      </button>`
  }
  // TODO: wire up a11y and i18n
  get topCloseButton() {
    return html`
      <button class="${cc.titleButton} ${cc.titleCloseButton} ${cc.titleButtonRight} new-pill" @click="${this.close}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9M3.5 3.5l9 9"></path></svg>
      </button>`
  }
  handleTopSlotChange(slotEvent) {
    const topContent = slotEvent.target.assignedElements({ flatten: true })
    this._hasTopContent = !!topContent.length
  }
  static styles = [
    WarpElement.styles,
    css`@unocss-placeholder`,
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
