import { css, html } from 'lit';

import { i18n } from '@lingui/core';
import { toast as ccToast } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { expand, collapse } from 'element-collapse';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import '@warp-ds/icons/elements/warning-16';
import '@warp-ds/icons/elements/error-16';
import '@warp-ds/icons/elements/success-16';
import '@warp-ds/icons/elements/close-16';

import { activateI18n } from '../i18n';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';

const classes = (definition) => {
  const defn = {};
  for (const [key, value] of Object.entries(definition)) {
    for (const className of key.split(' ')) {
      defn[className] = value;
    }
  }
  return classMap(defn);
};

const toastType = {
  success: 'success',
  error: 'error',
  warning: 'warning',
};

export class WarpToast extends WarpElement {
  static styles = [
    WarpElement.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  static properties = {
    id: { type: String, attribute: true, reflect: true },
    type: { type: String, attribute: true, reflect: true },
    text: { type: String, attribute: true, reflect: true },
    canclose: { type: Boolean, attribute: true, reflect: true },
  };

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages);

    this.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    this.type = 'success';
    this.text = '';
    this.canclose = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  updated() {
    if (!this._expanded && this._wrapper) expand(this._wrapper, () => (this._expanded = true));
  }

  get _primaryClasses() {
    return classes({
      [ccToast.toast]: true,
      [ccToast.positive]: this.type === toastType.success,
      [ccToast.warning]: this.type === toastType.warning,
      [ccToast.negative]: this.type === toastType.error,
    });
  }

  get _iconClasses() {
    return classes({
      [ccToast.icon]: true,
      [ccToast.iconPositive]: this.type === toastType.success,
      [ccToast.iconWarning]: this.type === toastType.warning,
      [ccToast.iconNegative]: this.type === toastType.error,
    });
  }

  get _wrapper() {
    return this.renderRoot?.querySelector(`section`) ?? null;
  }

  get _warning() {
    return this.type === toastType.warning;
  }

  get _error() {
    return this.type === toastType.error;
  }

  get _role() {
    return this._error || this._warning ? 'alert' : 'status';
  }

  get _typeLabel() {
    if (this._warning) {
      return i18n._({
        id: 'toast.aria.warning',
        message: 'Warning',
        comment: 'Default screenreader message for warning in toast component',
      });
    }
    if (this._error) {
      return i18n._({
        id: 'toast.aria.error',
        message: 'Error',
        comment: 'Default screenreader message for error in toast component',
      });
    } else {
      return i18n._({
        id: 'toast.aria.successful',
        message: 'Successful',
        comment: 'Default screenreader message for successful in toast component',
      });
    }
  }

  get _iconMarkup() {
    if (this._warning) return html`<w-icon-warning-16></w-icon-warning-16>`;
    if (this._error) return html`<w-icon-error-16></w-icon-error-16>`;
    else return html`<w-icon-success-16></w-icon-success-16>`;
  }

  async collapse() {
    return new Promise((resolve) => {
      if (this._expanded && this._wrapper) collapse(this._wrapper, resolve);
      else resolve();
    });
  }

  close() {
    const event = new CustomEvent('close', {
      detail: { id: this.id },
      bubbles: true,
      composed: true,
    });
    this.updateComplete.then(() => this.dispatchEvent(event));
  }

  render() {
    if (!this.text) return html``;
    return html` <section class="${ccToast.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this._primaryClasses}">
        <div class="${this._iconClasses}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${ccToast.content}">
          <p>${this.text}</p>
        </div>
        ${when(
          this.canclose === true,
          () => html`
            <button class="${ccToast.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `,
        )}
      </div>
    </section>`;
  }
}

if (!customElements.get('w-toast')) {
  customElements.define('w-toast', WarpToast);
}
