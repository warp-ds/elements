// TODO: replace text-14 with a token

import { css, html, LitElement } from 'lit';
import { alert as ccAlert } from '@warp-ds/css/component-classes';
import { classNames } from '@chbphone55/classnames';

const variants = {
  negative: 'negative',
  positive: 'positive',
  warning: 'warning',
  info: 'info'
};

class WarpAlert extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    show: { type: Boolean, reflect: true },
    role: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.show = false;
    this.role = 'alert';
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.variant || !variants[this.variant]) {
      throw new Error(
        'Invalid "variant" attribute. Set its value to one of the following:\nnegative, positive, warning, info.'
      );
    }
  }

  get _wrapperClasses() {
    return classNames({
      [ccAlert.alert]: true,
      [ccAlert[this.variant]]: true,
    });
  }

  get _iconClasses() {
    const activeIconClassNames = ccAlert[`${this.variant}Icon`];

    return classNames({
      [ccAlert.icon]: true,
      [activeIconClassNames]: true,
    });
  }

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = css`
    @unocss-placeholder
    :host {
      display: block;
    }
    ::slotted(:first-child) {
      margin-top: 0px;
    }
    ::slotted(:last-child) {
      margin-bottom: 0px !important;
    }
  `;

  get _icon() {
    if (this.variant === variants.info) return html`<w-icon-alert-info-16></w-icon-alert-info-16>`;
    if (this.variant === variants.warning) return html`<w-icon-alert-warning-16></w-icon-alert-warning-16>`;
    if (this.variant === variants.negative) return html`<w-icon-alert-error-16></w-icon-alert-error-16>`;
    if (this.variant === variants.positive) return html`<w-icon-alert-success-16></w-icon-alert-success-16>`;
    else return '';
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
