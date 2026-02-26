import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { activateI18n } from '../i18n';
import '../link/link.js';
import { reset } from '../styles.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { wButtonStyles } from './styles/w-button.styles';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'negative'
  | 'negativeQuiet'
  | 'utility'
  | 'pill'
  | 'link'
  | 'quiet'
  | 'utilityQuiet'
  | 'overlay'
  | 'overlayInverted'
  | 'overlayQuiet'
  | 'overlayInvertedQuiet';

const variants: ButtonVariant[] = [
  'primary',
  'secondary',
  'negative',
  'negativeQuiet',
  'utility',
  'pill',
  'link',
  'quiet',
  'utilityQuiet',
  'overlay',
  'overlayInverted',
  'overlayQuiet',
  'overlayInvertedQuiet',
];

type ButtonType = 'button' | 'submit' | 'reset';

/**
 * Buttons are used to perform actions, widh different visuals for different needs.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/buttons-button--docs)
 */
class WarpButton extends FormControlMixin(LitElement) {
  static styles = [reset, wButtonStyles];

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ reflect: true })
  type: ButtonType = 'button';

  @property({ type: Boolean, reflect: true })
  autofocus: boolean;

  @property({ reflect: true })
  variant: ButtonVariant = 'secondary';

  /**
   * @deprecated Use `variant="quiet"` instead
   */
  @property({ type: Boolean, reflect: true })
  quiet: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'icon-only' })
  iconOnly: boolean;

  @property({ type: Boolean, reflect: true })
  small: boolean;

  @property({ type: Boolean, reflect: true })
  loading: boolean;

  @property({ reflect: true })
  href: string;

  @property({ reflect: true })
  target: string;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ reflect: true })
  rel: string;

  @property({ attribute: 'full-width', type: Boolean, reflect: true })
  fullWidth: boolean;

  /**
   * @deprecated This class is applied inside the shadow DOM and is unlikely to have the desired effect. Use attributes or CSS variables to customize the appearance of the button.
   */
  @property({ attribute: 'button-class', reflect: true })
  buttonClass: string;

  @property({ reflect: true })
  name: string;

  @property({ reflect: true })
  value: string;

  /** @internal */
  ariaValueTextLoading: string;

  // capture the initial value using connectedCallback and #initialValue
  #initialValue: string | null = null;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this.ariaValueTextLoading = i18n.t({
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

    this.#initialValue = this.value;
  }

  firstUpdated() {
    if (this.autofocus && !this.href) {
      setTimeout(() => this.focus(), 0);
    }
  }

  /** @internal */
  _handleButtonClick() {
    if (this.type === 'submit') this.internals.form.requestSubmit();
    else if (this.type === 'reset') this.internals.form.reset();
  }

  resetFormControl(): void {
    this.value = this.#initialValue;
  }

  render() {
    return html` ${
      this.href
        ? html`
          <w-link
            href=${this.href}
            target=${this.target}
            variant=${this.quiet ? 'quiet' : this.variant}
            ?small=${this.small}
            ?loading=${this.loading}
            ?autofocus=${this.autofocus}
            ?full-width=${this.fullWidth}
            class=${this.buttonClass}
            rel=${this.target === '_blank' ? this.rel || 'noopener' : undefined}
          >
            <slot></slot>
          </w-link>
        `
        : html`
          <button
            type=${this.type || 'button'}
            class=${classMap({
              /**
               * The map gets a bit messy because of backwards compatibility.
               * The gist of it is we want to avoid applying conflicting modifiers.
               * F. ex. if `variant="negative" quiet`, then we should only include
               * `w-button--negative-quiet`, not `w-button--quiet` and `w-button--negative`.
               */
              'w-button': true,
              'w-button--primary': this.variant === 'primary',
              'w-button--secondary': this.variant === 'secondary',
              'w-button--negative': !this.quiet && this.variant === 'negative',
              'w-button--utility': !this.quiet && this.variant === 'utility',
              'w-button--pill': this.variant === 'pill',
              'w-button--quiet':
                // only include `quiet` with the backwards compat if the variant does not have its own -quiet modifier.
                (this.quiet && !['negative', 'utility', 'overlay', 'overlayInverted'].includes(this.variant)) ||
                this.variant === 'quiet',
              'w-button--negative-quiet':
                (this.quiet && this.variant === 'negative') || this.variant === 'negativeQuiet',
              'w-button--utility-quiet': (this.quiet && this.variant === 'utility') || this.variant === 'utilityQuiet',
              'w-button--overlay': !this.quiet && this.variant === 'overlay',
              'w-button--overlay-inverted': !this.quiet && this.variant === 'overlayInverted',
              'w-button--overlay-quiet': (this.quiet && this.variant === 'overlay') || this.variant === 'overlayQuiet',
              'w-button--overlay-inverted-quiet':
                (this.quiet && this.variant === 'overlayInverted') || this.variant === 'overlayInvertedQuiet',
              'w-button--link': this.variant === 'link',
              'w-button--small': this.small,
              'w-button--full-width': this.fullWidth,
              'w-button--has-icon-only': this.iconOnly,
              'w-button--loading': this.loading,
              'w-button--disabled': this.disabled,
            })}
            @click="${this._handleButtonClick}"
          >
            <slot></slot>
          </button>
        `
    }
    ${
      this.loading
        ? html`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext=${this.ariaValueTextLoading}
        ></span>`
        : nothing
    }`;
  }
}

if (!customElements.get('w-button')) {
  customElements.define('w-button', WarpButton);
}

export { WarpButton };
