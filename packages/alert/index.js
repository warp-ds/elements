// TODO: replace text-14 with a token

import { css, html, LitElement } from 'lit';
import { alert as ccAlert } from '@warp-ds/component-classes';
import { infoSvg, negativeSvg, positiveSvg, warningSvg } from './svgs';
import { classNames } from '@chbphone55/classnames';

const icons = {
  negative: negativeSvg(),
  positive: positiveSvg(),
  warning: warningSvg(),
  info: infoSvg(),
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
    if (!this.variant || !Object.keys(icons).includes(this.variant)) {
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
    /* @unocss-placeholder */
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
    return this.variant ? icons[this.variant] : {};
  }

  render() {
    return html`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class="last:mb-0 text-14">
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
