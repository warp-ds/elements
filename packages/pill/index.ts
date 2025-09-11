// @warp-css;

import { html, LitElement } from 'lit';
import '@warp-ds/icons/elements/close-16';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { property } from 'lit/decorators.js';

import { activateI18n } from '../i18n';
import { reset } from '../styles.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { styles } from './styles.js';

export const pillStyles = {
  wrapper: 'flex items-center',
  button: 'inline-flex items-center focusable text-xs transition-all',
  suggestion:
    'bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold',
  filter: 's-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted',
  label: 'pl-12 py-8 rounded-l-full',
  labelWithoutClose: 'pr-12 rounded-r-full',
  labelWithClose: 'pr-2',
  close: 'pr-12 pl-4 py-8 rounded-r-full',
  closeIcon: 'h-16',
  a11y: 'sr-only',
};

/**
 * Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/buttons-pill--docs)
 */
class WarpPill extends LitElement {
  @property({ attribute: 'can-close', type: Boolean }) canClose: boolean;
  @property({ attribute: 'suggestion', type: Boolean }) suggestion: boolean;
  /**
   * @deprecated Used "open-arial-label" instead.
   */
  @property({ attribute: 'open-sr-label', type: String }) openSrLabel: string;
  @property({ attribute: 'open-aria-label', type: String }) openAriaLabel: string;
  /**
   * @deprecated Used "close-arial-label" instead.
   */
  @property({ attribute: 'close-sr-label', type: String }) closeSrLabel: string;
  @property({ attribute: 'close-aria-label', type: String }) closeAriaLabel: string;

  /** @internal */
  openFilterSrText: string;
  /** @internal */
  removeFilterSrText: string;

  static styles = [reset, styles];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
    this.canClose = false;
    this.suggestion = false;

    this.openFilterSrText = i18n._({
      id: 'pill.aria.openFilter',
      message: 'Open filter',
      comment: 'Fallback screen reader message for open filter',
    });

    this.removeFilterSrText = i18n._({
      id: 'pill.aria.removeFilter',
      message: 'Remove filter {label}',
      comment: 'Fallback screen reader message for removal of the filter',
    });
  }

  /** @internal */
  get _labelClasses() {
    return classNames([
      pillStyles.button,
      pillStyles.label,
      this.suggestion ? pillStyles.suggestion : pillStyles.filter,
      this.canClose ? pillStyles.labelWithClose : pillStyles.labelWithoutClose,
    ]);
  }

  /** @internal */
  get _closeClasses() {
    return classNames([pillStyles.button, pillStyles.close, this.suggestion ? pillStyles.suggestion : pillStyles.filter]);
  }

  /** @internal */
  _onClick() {
    this.dispatchEvent(new CustomEvent('w-pill-click', { bubbles: true, composed: true }));
  }

  /** @internal */
  _onClose() {
    this.dispatchEvent(new CustomEvent('w-pill-close', { bubbles: true, composed: true }));
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.openSrLabel) {
      this.openAriaLabel = this.openSrLabel;
    }
    if (this.closeSrLabel) {
      this.closeAriaLabel = this.closeSrLabel;
    }
  }

  render() {
    return html`
      <div class="${pillStyles.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${pillStyles.a11y}">${this.openAriaLabel ? this.openAriaLabel : this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose
          ? html` <button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${pillStyles.a11y}">${this.closeAriaLabel ? this.closeAriaLabel : this.removeFilterSrText}</span>
              <w-icon-close-16 class="${pillStyles.closeIcon}"></w-icon-close-16>
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

declare global {
  interface HTMLElementTagNameMap {
    "w-pill": WarpPill
  }
}