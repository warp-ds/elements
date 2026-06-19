import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import '../icon/icon.js';
import { detectLocale } from '../i18n.js';
import { reset } from '../styles.js';
import { alertStyles } from './alert-styles.js';

export type AlertVariants = 'negative' | 'positive' | 'warning' | 'info';

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
 * @slot - Alert message content
 * @slot icon - Custom icon (defaults to variant-specific icon)
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

  static styles = [reset, alertStyles];

  /** @internal */
  get _icon() {
    const locale = detectLocale();
    const variant = this.variant || 'info';
    if (variant === alertVariants.info) {
      return html`<w-icon name="Info" size="small" locale="${locale}"></w-icon>`;
    }
    if (variant === alertVariants.warning) {
      return html`<w-icon name="Warning" size="small" locale="${locale}"></w-icon>`;
    }
    if (variant === alertVariants.negative) {
      return html`<w-icon name="Error" size="small" locale="${locale}"></w-icon>`;
    }
    if (variant === alertVariants.positive) {
      return html`<w-icon name="Success" size="small" locale="${locale}"></w-icon>`;
    }
    return '';
  }

  render() {
    return html`
      <w-expand-transition ?show=${this.show}>
        <div part="base" role=${this.role}>
          <div part="icon">
            <slot name="icon">${this._icon}</slot>
          </div>
          <div part="content">
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
