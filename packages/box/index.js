import { css, html, nothing } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { box as ccBox } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';

class WarpBox extends WarpElement {
  static properties = {
    bleed: { type: Boolean },
    bordered: { type: Boolean },
    info: { type: Boolean },
    neutral: { type: Boolean },
    role: { type: String },
  };

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [
    WarpElement.styles,
    css`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `,
  ];

  get _class() {
    return classNames([
      ccBox.base,
      this.bleed && ccBox.bleed,
      this.info && ccBox.info,
      this.neutral && ccBox.neutral,
      this.bordered && ccBox.bordered,
    ]);
  }

  get _optOutRoleWithDefault() {
    return this.role === '' ? nothing : this.role ?? 'region';
  }

  render() {
    return html`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-box')) {
  customElements.define('w-box', WarpBox);
}

export { WarpBox };
