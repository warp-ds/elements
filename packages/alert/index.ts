// @warp-css;

import { css, html, LitElement } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { property } from 'lit/decorators.js';

import '@warp-ds/icons/elements/info-16';
import '@warp-ds/icons/elements/warning-16';
import '@warp-ds/icons/elements/error-16';
import '@warp-ds/icons/elements/success-16';
import { reset } from '../styles.js';

import { styles } from './styles.js';

const ccAlert = {
  wrapper: 'flex p-16 border border-l-4 rounded-4 s-text',
  willChangeHeight: 'will-change-height',
  textWrapper: 'last-child:mb-0 text-s',
  title: 'text-s',
  icon: 'w-16 mr-8 min-w-16',
  negative: 's-border-negative-subtle s-border-l-negative s-bg-negative-subtle',
  negativeIcon: 's-icon-negative',
  positive: 's-border-positive-subtle s-border-l-positive s-bg-positive-subtle',
  positiveIcon: 's-icon-positive',
  warning: 's-border-warning-subtle s-border-l-warning s-bg-warning-subtle',
  warningIcon: 's-icon-warning',
  info: 's-border-info-subtle s-border-l-info s-bg-info-subtle',
  infoIcon: 's-icon-info',
};

type AlertVariants = 'negative' | 'positive' | 'warning' | 'info';

const alertVariants = {
  negative: 'negative',
  positive: 'positive',
  warning: 'warning',
  info: 'info',
};

class WarpAlert extends LitElement {
  @property({ reflect: true })
  variant: AlertVariants = 'info';

  @property({ type: Boolean, reflect: true })
  show: boolean = true;

  @property({ reflect: true })
  role: string = 'alert';

  constructor() {
    super();
    this.show = false;
    this.role = 'alert';
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.variant || !alertVariants[this.variant]) {
      throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:\nnegative, positive, warning, info.`);
    }
  }

  get _wrapperClasses() {
    return classNames([ccAlert.wrapper, ccAlert[this.variant]]);
  }

  get _iconClasses() {
    const activeIconClassNames = ccAlert[`${this.variant}Icon`];

    return classNames([ccAlert.icon, activeIconClassNames]);
  }

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [
    reset,
    styles,
    css`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `,
  ];

  get _icon() {
    if (this.variant === alertVariants.info) {
      return html` <w-icon-info-16></w-icon-info-16>`;
    }
    if (this.variant === alertVariants.warning) {
      return html` <w-icon-warning-16></w-icon-warning-16>`;
    }
    if (this.variant === alertVariants.negative) {
      return html` <w-icon-error-16></w-icon-error-16>`;
    }
    if (this.variant === alertVariants.positive) {
      return html` <w-icon-success-16></w-icon-success-16>`;
    } else return '';
  }

  render() {
    return html`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${ccAlert.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `;
  }
}

if (!customElements.get('w-alert')) {
  customElements.define('w-alert', WarpAlert);
}

export { WarpAlert };
