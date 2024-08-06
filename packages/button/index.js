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
    activateI18n(enMessages, nbMessages, fiMessages, daMessages);

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
    const primary = this.variant === 'primary';
    return [
      primary && !this.small && !this.quiet && !this.loading && ccButton.primary,
      primary && this.small && !this.quiet && !this.loading && ccButton.primarySmall,
      primary && this.small && this.quiet && !this.loading && ccButton.primarySmallQuiet,
      primary && this.small && this.loading && (this.quiet ? ccButton.primarySmallQuietLoading : ccButton.primarySmallLoading),
      primary && !this.small && this.quiet && !this.loading && ccButton.primaryQuiet,
      primary && !this.small && this.loading && (this.quiet ? ccButton.primaryQuietLoading : ccButton.primaryLoading),
    ];
  }

  get _secondaryClasses() {
    const secondary = this.variant === 'secondary';
    return [
      secondary && !this.small && !this.quiet && !this.loading && ccButton.secondary,
      secondary && this.small && !this.quiet && !this.loading && ccButton.secondarySmall,
      secondary && this.small && this.loading && (this.quiet ? ccButton.secondarySmallQuietLoading : ccButton.secondarySmallLoading),
      secondary && this.small && this.quiet && !this.loading && ccButton.secondarySmallQuiet,
      secondary && !this.small && this.quiet && !this.loading && ccButton.secondaryQuiet,
      secondary && !this.small && this.loading && (this.quiet ? ccButton.secondaryQuietLoading : ccButton.secondaryLoading),
    ];
  }

  get _utilityClasses() {
    const utility = this.variant === 'utility';
    return [
      utility && !this.small && !this.quiet && !this.loading && ccButton.utility,
      utility && this.small && !this.quiet && !this.loading && ccButton.utilitySmall,
      utility && this.small && this.quiet && !this.loading && ccButton.utilitySmallQuiet,
      utility && this.small && this.loading && (this.quiet ? ccButton.utilitySmallQuietLoading : ccButton.utilitySmallLoading),
      utility && !this.small && this.quiet && !this.loading && ccButton.utilityQuiet,
      utility && !this.small && this.loading && (this.quiet ? ccButton.utilityQuietLoading : ccButton.utilityLoading),
    ];
  }

  get _negativeClasses() {
    const negative = this.variant === 'negative';
    return [
      negative && !this.small && !this.quiet && !this.loading && ccButton.negative,
      negative && this.small && !this.quiet && !this.loading && ccButton.negativeSmall,
      negative && this.small && this.quiet && !this.loading && ccButton.negativeSmallQuiet,
      negative && this.small && this.loading && (this.quiet ? ccButton.negativeSmallQuietLoading : ccButton.negativeSmallLoading),
      negative && !this.small && this.quiet && !this.loading && ccButton.negativeQuiet,
      negative && !this.small && this.loading && (this.quiet ? ccButton.negativeQuietLoading : ccButton.negativeLoading),
    ];
  }

  get _pillClasses() {
    const pill = this.variant === 'pill';
    return [
      pill && !this.loading && (this.small ? ccButton.pillSmall : ccButton.pill),
      pill && this.loading && (this.small ? ccButton.pillSmallLoading : ccButton.pillLoading),
    ];
  }

  get _linkClasses() {
    const link = this.variant === 'link';
    return [link && (this.small ? ccButton.linkSmall : ccButton.link), !!this.href && ccButton.linkAsButton];
  }

  get _classes() {
    return classNames(this.buttonClass, [
      ...this._primaryClasses,
      ...this._secondaryClasses,
      ...this._utilityClasses,
      ...this._negativeClasses,
      ...this._pillClasses,
      ...this._linkClasses,
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
