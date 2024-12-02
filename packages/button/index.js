import { html } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { button as ccButton } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';

import { activateI18n } from '../i18n';
import { kebabCaseAttributes } from '../utils';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

const buttonTypes = ['primary', 'secondary', 'negative', 'utility', 'pill', 'link'];

class WarpButton extends kebabCaseAttributes(WarpElement) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static properties = {
    type: { type: 'button' | 'submit' | 'reset', reflect: true },
    autofocus: { type: Boolean, reflect: true },
    variant: { type: String, reflect: true },
    quiet: { type: Boolean, reflect: true },
    small: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    href: { type: String, reflect: true },
    target: { type: String, reflect: true },
    rel: { type: String, reflect: true },
    fullWidth: { type: Boolean, reflect: true },
    buttonClass: { type: String, reflect: true },
  };

  static styles = [WarpElement.styles];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this.variant = 'secondary';
    this.ariaValueTextLoading = i18n._({
      id: 'button.aria.loading',
      message: 'Loading...',
      comment: 'Screenreader message for buttons that are loading',
    });
  }

  connectedCallback() {
    super.connectedCallback();

    if (!buttonTypes.includes(this.variant)) {
      throw new Error(`Invalid "variant" attribute. Set its value to one of the following:\n${buttonTypes.join(', ')}.`);
    }
  }

  firstUpdated() {
    if (this.autofocus) {
      setTimeout(() => this.focus(), 0);
    }
  }

  get _primaryClasses() {
    return [
      !this.small && !this.quiet && !this.loading && ccButton.primary,
      this.small && !this.quiet && !this.loading && ccButton.primarySmall,
      this.small && this.quiet && !this.loading && ccButton.primarySmallQuiet,
      this.small && this.loading && (this.quiet ? ccButton.primarySmallQuietLoading : ccButton.primarySmallLoading),
      !this.small && this.quiet && !this.loading && ccButton.primaryQuiet,
      !this.small && this.loading && (this.quiet ? ccButton.primaryQuietLoading : ccButton.primaryLoading),
    ];
  }

  get _secondaryClasses() {
    return [
      !this.small && !this.quiet && !this.loading && ccButton.secondary,
      this.small && !this.quiet && !this.loading && ccButton.secondarySmall,
      this.small && this.loading && (this.quiet ? ccButton.secondarySmallQuietLoading : ccButton.secondarySmallLoading),
      this.small && this.quiet && !this.loading && ccButton.secondarySmallQuiet,
      !this.small && this.quiet && !this.loading && ccButton.secondaryQuiet,
      !this.small && this.loading && (this.quiet ? ccButton.secondaryQuietLoading : ccButton.secondaryLoading),
    ];
  }

  get _utilityClasses() {
    return [
      !this.small && !this.quiet && !this.loading && ccButton.utility,
      this.small && !this.quiet && !this.loading && ccButton.utilitySmall,
      this.small && this.quiet && !this.loading && ccButton.utilitySmallQuiet,
      this.small && this.loading && (this.quiet ? ccButton.utilitySmallQuietLoading : ccButton.utilitySmallLoading),
      !this.small && this.quiet && !this.loading && ccButton.utilityQuiet,
      !this.small && this.loading && (this.quiet ? ccButton.utilityQuietLoading : ccButton.utilityLoading),
    ];
  }

  get _negativeClasses() {
    return [
      !this.small && !this.quiet && !this.loading && ccButton.negative,
      this.small && !this.quiet && !this.loading && ccButton.negativeSmall,
      this.small && this.quiet && !this.loading && ccButton.negativeSmallQuiet,
      this.small && this.loading && (this.quiet ? ccButton.negativeSmallQuietLoading : ccButton.negativeSmallLoading),
      !this.small && this.quiet && !this.loading && ccButton.negativeQuiet,
      !this.small && this.loading && (this.quiet ? ccButton.negativeQuietLoading : ccButton.negativeLoading),
    ];
  }

  get _pillClasses() {
    return [
      !this.loading && (this.small ? ccButton.pillSmall : ccButton.pill),
      this.loading && (this.small ? ccButton.pillSmallLoading : ccButton.pillLoading),
    ];
  }

  get _linkClasses() {
    return [this.small ? ccButton.linkSmall : ccButton.link];
  }
  get _classes() {
    return classNames(this.buttonClass, [
      this.variant === 'primary' && this._primaryClasses,
      this.variant === 'secondary' && this._secondaryClasses,
      this.variant === 'utility' && this._utilityClasses,
      this.variant === 'negative' && this._negativeClasses,
      this.variant === 'pill' && this._pillClasses,
      this.variant === 'link' && this._linkClasses,
      this.href && ccButton.linkAsButton,
      this.fullWidth ? ccButton.fullWidth : ccButton.contentWidth,
    ]);
  }

  render() {
    return html` ${this.href
      ? html`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target === '_blank' ? this.rel || 'noopener' : undefined}
          class=${this._classes}>
          <slot></slot>
        </a>`
      : html`<button type=${this.type || 'button'} class=${this._classes}>
          <slot></slot>
        </button>`}
    ${this.loading
      ? html`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`
      : null}`;
  }
}

if (!customElements.get('w-button')) {
  customElements.define('w-button', WarpButton);
}

export { WarpButton };
