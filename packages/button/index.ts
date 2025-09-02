// @warp-css;

import { html, LitElement, PropertyValues } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import WarpElement from '@warp-ds/elements-core';
import { property } from 'lit/decorators.js';

import { activateI18n } from '../i18n';
import { reset } from '../styles.js';
import { styles } from './styles.js';
import { kebabCaseAttributes } from '../utils';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

type ButtonVariant = 'primary' | 'secondary' | 'negative' | 'utility' | 'pill' | 'link';

const variants = ['primary', 'secondary', 'negative', 'utility', 'pill', 'link'];

type ButtonType = 'button' | 'submit' | 'reset';

const buttonDefaultStyling = 'font-bold focusable justify-center transition-colors ease-in-out';

const buttonColors = {
  primary:
    's-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]',
  secondary: 's-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active',
  utility: 's-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active',
  destructive: 's-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active',
  pill: 's-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
  disabled: 's-text-inverted s-bg-disabled',
  quiet: 'bg-transparent s-text-link hover:s-bg-hover active:s-bg-active',
  utilityQuiet: 's-text bg-transparent hover:s-bg-hover active:s-bg-active',
  negativeQuiet: 'bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active',
  loading: 's-text s-bg-subtle',
  link: 's-text-link',
};

const buttonTypes = {
  primary: `border-0 rounded-8 ${buttonDefaultStyling}`,
  secondary: `border-2 rounded-8 ${buttonDefaultStyling}`,
  utility: `border rounded-4 ${buttonDefaultStyling}`,
  negative: `border-0 rounded-8 ${buttonDefaultStyling}`,
  pill: `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonDefaultStyling}`,
  link: `bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${buttonColors.link}`,
};

const buttonSizes = {
  xsmall: 'py-6 px-16',
  small: 'py-8 px-16',
  medium: 'py-10 px-14',
  large: 'py-12 px-16',
  utility: 'py-[11px] px-[15px]',
  smallUtility: 'py-[7px] px-[15px]',
  pill: 'min-h-[44px] min-w-[44px]',
  pillSmall: 'min-h-32 min-w-32',
  link: 'p-0',
};

const buttonTextSizes = {
  medium: 'text-m leading-[24]',
  xsmall: 'text-xs',
};

const buttonVariants = {
  inProgress: `border-transparent animate-inprogress pointer-events-none ${buttonColors.loading}`, // .button--in-progress, a.button--in-progress:visited
  quiet: `border-0 rounded-8 ${buttonDefaultStyling}`,
  utilityQuiet: `border-0 rounded-4 ${buttonDefaultStyling}`,
  negativeQuiet: `border-0 rounded-8 ${buttonDefaultStyling}`,
  isDisabled: `font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${buttonColors.disabled}`, // .button:disabled, .button--is-disabled
};

export const ccButton = {
  // Buttontypes
  secondary: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`, // .button--secondary, .button--default, .button
  secondaryHref: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`,
  secondaryDisabled: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.isDisabled}`,
  secondarySmall: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonColors.secondary}`,
  secondarySmallDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonVariants.isDisabled}`,
  secondaryQuiet: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  secondaryQuietDisabled: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  secondarySmallQuiet: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  secondarySmallQuietDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  secondaryLoading: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.inProgress}`,
  secondarySmallLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall}  ${buttonTypes.secondary} ${buttonVariants.inProgress}`,
  secondarySmallQuietLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,
  secondaryQuietLoading: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,

  primary: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.primary} ${buttonColors.primary}`, // .button--primary, .button--cta
  primaryDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.isDisabled} ${buttonTypes.primary}`,
  primarySmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.primary} ${buttonColors.primary}`,
  primarySmallDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.isDisabled} ${buttonTypes.primary} `,
  primaryQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  primaryQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  primarySmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  primarySmallQuietDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  primaryLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.inProgress} ${buttonTypes.primary}`,
  primarySmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall}  ${buttonVariants.inProgress} ${buttonTypes.primary}`,
  primarySmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.inProgress} ${buttonTypes.primary}`,
  primaryQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,

  utility: `${buttonSizes.utility} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonColors.utility}`, // .button--utility
  utilityDisabled: `${buttonSizes.utility} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.isDisabled}`,
  utilityQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.utilityQuiet} ${buttonColors.utilityQuiet}`, // .button--utility-flat
  utilityQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.utilityQuiet} ${buttonVariants.isDisabled}`,
  utilitySmall: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonColors.utility}`,
  utilitySmallDisabled: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.isDisabled}`,
  utilitySmallQuiet: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.utilityQuiet} ${buttonColors.utilityQuiet}`,
  utilitySmallQuietDisabled: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.utilityQuiet} ${buttonVariants.isDisabled}`,
  utilityLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.inProgress}`,
  utilitySmallLoading: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.inProgress}`,
  utilityQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.inProgress} ${buttonVariants.utilityQuiet}`,
  utilitySmallQuietLoading: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.inProgress} ${buttonVariants.utilityQuiet}`,

  negative: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonColors.destructive}`, // .button--destructive
  negativeDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonVariants.isDisabled}`,
  negativeQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet} ${buttonColors.negativeQuiet}`, // .button--destructive-flat
  negativeQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet}${buttonVariants.isDisabled}`,
  negativeSmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonColors.destructive}`,
  negativeSmallDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonVariants.isDisabled}`,
  negativeSmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonColors.negativeQuiet}`,
  negativeSmallQuietDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonVariants.isDisabled}`,
  negativeLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonVariants.inProgress}`,
  negativeSmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.inProgress} ${buttonTypes.negative}`,
  negativeQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet} ${buttonTypes.negative} ${buttonVariants.inProgress}`,
  negativeSmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonVariants.inProgress}`,

  pill: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill}`, // .button--pill
  pillSmall: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.pill} ${buttonColors.pill}`,
  pillLoading: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonVariants.inProgress}`,
  pillSmallLoading: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.pill} ${buttonVariants.inProgress}`,

  link: `${buttonSizes.link} ${buttonTextSizes.medium} ${buttonTypes.link}`,
  linkSmall: `${buttonSizes.link} ${buttonTextSizes.xsmall} ${buttonTypes.link}`,
  linkAsButton: 'inline-block active:no-underline hover:no-underline focus:no-underline text-center',
  a11y: 'sr-only',
  fullWidth: 'w-full max-w-full',
  contentWidth: 'max-w-max',
};


class WarpButton extends FormControlMixin(kebabCaseAttributes(LitElement)) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ reflect: true })
  type: ButtonType = 'button';

  @property({ type: Boolean, reflect: true })
  autofocus: boolean;

  @property({ reflect: true })
  variant: ButtonVariant;

  @property({ type: Boolean, reflect: true })
  quiet: boolean;

  @property({ type: Boolean, reflect: true })
  small: boolean;

  @property({ type: Boolean, reflect: true })
  loading: boolean;

  @property({ reflect: true })
  href: string;

  @property({ reflect: true })
  target: string;

  @property({ reflect: true })
  rel: string;

  @property({ type: Boolean, reflect: true })
  fullWidth: boolean;

  @property({ reflect: true })
  buttonClass: string;

  @property({ reflect: true })
  name: string;

  @property({ reflect: true })
  value: string;

  static styles = [reset, styles];

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this.variant = 'secondary';
    this.ariaValueTextLoading = i18n._({
      id: 'button.aria.loading',
      message: 'Loading...',
      comment: 'Screen reader message for buttons that are loading',
    });
  }

  connectedCallback() {
    super.connectedCallback();

    if (!variants.includes(this.variant)) {
      throw new Error(`Invalid "variant" attribute. Set its value to one of the following:\n${variants.join(', ')}.`);
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

  _handleButtonClick() {
    if (this.type === 'submit') this.internals.form.requestSubmit();
    else if (this.type === 'reset') this.internals.form.reset();
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
      : html`<button type=${this.type || 'button'} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading
      ? html`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`
      : null}`;
  }
}

if (!customElements.get('w-button')) {
  // @ts-expect-error Debug type issue
  customElements.define('w-button', WarpButton);
}

export { WarpButton };
