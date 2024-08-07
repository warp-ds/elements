import '@warp-ds/icons/elements/close-16';

import { html } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { pill as ccPill } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';

import { activateI18n } from '../i18n';
import { kebabCaseAttributes } from '../utils';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';

class WarpPill extends kebabCaseAttributes(WarpElement) {
  static styles = [WarpElement.styles];

  static properties = {
    canClose: { type: Boolean },
    suggestion: { type: Boolean },
    openSrLabel: { type: String },
    closeSrLabel: { type: String },
  };

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages);
    this.canClose = false;
    this.suggestion = false;

    this.openFilterSrText = i18n._({
      id: 'pill.aria.openFilter',
      message: 'Open filter',
      comment: 'Fallback screenreader message for open filter',
    });

    this.removeFilterSrText = i18n._({
      id: 'pill.aria.removeFilter',
      message: 'Remove filter {label}',
      comment: 'Fallback screenreader message for removal of the filter',
    });
  }

  get _labelClasses() {
    return classNames([
      ccPill.button,
      ccPill.label,
      this.suggestion ? ccPill.suggestion : ccPill.filter,
      this.canClose ? ccPill.labelWithClose : ccPill.labelWithoutClose,
    ]);
  }

  get _closeClasses() {
    return classNames([ccPill.button, ccPill.close, this.suggestion ? ccPill.suggestion : ccPill.filter]);
  }

  _onClick() {
    this.dispatchEvent(new CustomEvent('w-pill-click', { bubbles: true, composed: true }));
  }

  _onClose() {
    this.dispatchEvent(new CustomEvent('w-pill-close', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="${ccPill.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${ccPill.a11y}">${this.openSrLabel ? this.openSrLabel : this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose
          ? html`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${ccPill.a11y}">${this.closeSrLabel ? this.closeSrLabel : this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`
          : null}
      </div>
    `;
  }
}

if (!customElements.get('w-pill')) {
  customElements.define('w-pill', WarpPill);
}

export { WarpPill };
