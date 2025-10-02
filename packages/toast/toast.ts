import { css, html, LitElement } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { expand, collapse } from 'element-collapse';
import { property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import '@warp-ds/icons/elements/warning-16';
import '@warp-ds/icons/elements/error-16';
import '@warp-ds/icons/elements/success-16';
import '@warp-ds/icons/elements/close-16';

import { activateI18n } from '../i18n';
import { reset } from '../styles';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { styles } from './styles';
import type { ToastType } from './types';

const ccToast = {
  wrapper: 'relative overflow-hidden w-full',
  base: 'flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all',
  positive: 's-bg-positive-subtle s-border-positive-subtle s-text',
  warning: 's-bg-warning-subtle s-border-warning-subtle s-text',
  negative: 's-bg-negative-subtle s-border-negative-subtle s-text',
  iconBase: 'shrink-0 rounded-full w-[16px] h-[16px] m-[8px]',
  iconPositive: 's-icon-positive',
  iconWarning: 's-icon-warning',
  iconNegative: 's-icon-negative',
  iconLoading: 'animate-bounce',
  content: 'self-center mr-8 py-4 last-child:mb-0',
  close: 'bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active',
};

/**
 * You should probably not include this component in HTML markup.
 *
 * As long as the element definition is imported in your application you can use the toast JS API to create toasts.
 *
 * ```js
 * import from '@warp-ds/elements/components/toast';
 * import { toast, removeToast, updateToast } from '@warp-ds/elements/toast';
 * ```
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/overlays-toast--docs)
 *
 * @internal
 */

export class WarpToast extends LitElement {
  static styles = [
    reset,
    styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: String, attribute: true, reflect: true })
  id: string = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

  @property({ type: String, attribute: true, reflect: true })
  type: ToastType = 'success';

  @property({ type: String, attribute: true, reflect: true })
  text: string = '';

  @property({ type: Boolean, attribute: true, reflect: true })
  canclose: boolean = false;

  @state()
  private _expanded: boolean = false;

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
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

  get #primaryClasses() {
    return classNames([
      ccToast.base,
      this.type === 'success' && ccToast.positive,
      this.type === 'warning' && ccToast.warning,
      this.type === 'error' && ccToast.negative,
    ]);
  }

  get #iconClasses() {
    return classNames([
      ccToast.iconBase,
      this.type === 'success' && ccToast.iconPositive,
      this.type === 'warning' && ccToast.iconWarning,
      this.type === 'error' && ccToast.iconNegative,
    ]);
  }

  /** @internal */
  get _wrapper() {
    return this.renderRoot?.querySelector(`section`) ?? null;
  }

  /** @internal */
  get _warning() {
    return this.type === 'warning';
  }

  /** @internal */
  get _error() {
    return this.type === 'error';
  }

  /** @internal */
  get _role() {
    return this._error || this._warning ? 'alert' : 'status';
  }

  /** @internal */
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

  /** @internal */
  get _iconMarkup() {
    if (this._warning) return html`<w-icon-warning-16></w-icon-warning-16>`;
    if (this._error) return html`<w-icon-error-16></w-icon-error-16>`;
    else return html`<w-icon-success-16></w-icon-success-16>`;
  }

  async collapse() {
    return new Promise<void>((resolve) => {
      if (this._expanded && this._wrapper) {
        collapse(this._wrapper, resolve);
      } else {
        resolve();
      }
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
      <div class="${this.#primaryClasses}">
        <div class="${this.#iconClasses}">${this._iconMarkup}</div>
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

declare global {
  interface HTMLElementTagNameMap {
    'w-toast': WarpToast;
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'w-toast': WarpToast;
    }
  }
}