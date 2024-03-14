import WarpElement from '@warp-ds/elements-core'
import { html, css } from 'lit'
import { modalV2 as cc } from './component-classes.js'

export class ModalHeaderBar extends CanCloseMixin(WarpElement) {
  static properties = {
    title: { type: String },
    close: { type: Function },
  }
  render() {
    return html`
      <h1 class="${cc.titleBarText}">${this.title}</h1>
    `
  }
  static styles = [
    WarpElement.styles,
    css`@unocss-placeholder`,
  ]
}

