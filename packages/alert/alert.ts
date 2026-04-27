// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import '../icon/icon.js';
import { detectLocale } from '../i18n.js';
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

/**
 * Alert is an inline component used for displaying different types of messages.
 *
 * For accessibility reasons, alert should appear close to the element that triggered it.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/feedback-alert--docs)
 */
class WarpAlert extends LitElement {
  private _internals: ElementInternals;

  /**
   * @summary Visual style of the alert.
   *
   * @description Controls both the color treatment and icon used by the component. Accepted values are `info`, `warning`, `positive`, and `negative`. Use the variant that matches the message severity so users can quickly distinguish informative messages from warnings, errors, and confirmations.
   */
  @property({ reflect: true, useDefault: true })
  variant: AlertVariants = 'info';

  /**
   * @summary Whether the alert is visible.
   *
   * @description Alerts are hidden by default (`false`). Set this to `true` to render and expand the content. This is reflected as an attribute, so visibility can be controlled from markup (`show`) or from JavaScript (`element.show = true`).
   */
  @property({ type: Boolean, reflect: true, useDefault: true })
  show = false;

  /**
   * @summary ARIA role announced to assistive technology.
   *
   * @description Defaults to `alert` so urgent changes are announced by screen readers. Override this only when your use case requires a different announcement behavior, for example a less assertive live region strategy.
   */
  @property({ reflect: true, useDefault: true })
  role = 'alert';

  constructor() {
    super();
    this._internals = this.attachInternals();
    // Use ElementInternals for ARIA to avoid hydration mismatches
    this._internals.role = 'alert';
    // Don't set this.show here - let the attribute or explicit property set control it
    // Alerts default to hidden and are shown via the show attribute
  }

  connectedCallback() {
    super.connectedCallback();
    // Validate variant if explicitly set
    if (this.variant && !alertVariants[this.variant]) {
      throw new Error(
        `Invalid 'variant' attribute. Set its value to one of the following:\nnegative, positive, warning, info.`,
      );
    }
  }

  /** @internal */
  get _wrapperClasses() {
    const variant = this.variant;
    return classNames([ccAlert.wrapper, ccAlert[variant]]);
  }

  /** @internal */
  get _iconClasses() {
    const variant = this.variant;
    const activeIconClassNames = ccAlert[`${variant}Icon`];

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

  /** @internal */
  get _icon() {
    const locale = detectLocale();
    const variant = this.variant || 'info';
    if (variant === alertVariants.info) {
      return html`<w-icon name="Info" size="small" locale="${locale}" class="flex"></w-icon>`;
    }
    if (variant === alertVariants.warning) {
      return html`<w-icon name="Warning" size="small" locale="${locale}" class="flex"></w-icon>`;
    }
    if (variant === alertVariants.negative) {
      return html`<w-icon name="Error" size="small" locale="${locale}" class="flex"></w-icon>`;
    }
    if (variant === alertVariants.positive) {
      return html`<w-icon name="Success" size="small" locale="${locale}" class="flex"></w-icon>`;
    }
    return '';
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
