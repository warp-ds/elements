import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
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
import { ifDefined } from 'lit/directives/if-defined.js';

export type ButtonVariant =
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

export type ButtonType = 'button' | 'submit' | 'reset';

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

  /**
   * @summary
   * @description
   */
  @property({ reflect: true })
  type: ButtonType;

  /**
   * @summary
   * @description
   */
  @property({ type: Boolean, reflect: true })
  autofocus = false;

  /**
   * @summary
   * @description
   */
  @property({ reflect: true })
  variant: ButtonVariant;

  /**
   * @deprecated Use `variant="quiet"` instead
   
   * @summary
   * @description
  */
  @property({ type: Boolean, reflect: true })
  quiet = false;

  /**
   * @summary
   * @description
   */
  @property({ type: Boolean, reflect: true, attribute: 'icon-only' })
  iconOnly = false;

  /**
   * @summary
   * @description
   */
  @property({ type: Boolean, reflect: true })
  small = false;

  /**
   * @summary
   * @description
   */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /**
   * @summary
   * @description
   */
  @property({ reflect: true })
  href: string;

  /**
   * @summary
   * @description
   */
  @property({ reflect: true })
  target: string;

  /**
   * @summary
   * @description
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * @summary
   * @description
   */
  @property({ reflect: true })
  rel: string;

  /**
   * @summary
   * @description
   */
  @property({ attribute: 'full-width', type: Boolean, reflect: true })
  fullWidth = false;

  /**
   * @deprecated This class is applied inside the shadow DOM and is unlikely to have the desired effect. Use attributes or CSS variables to customize the appearance of the button.
   
   * @summary
   * @description
  */
  @property({ attribute: 'button-class', reflect: true })
  buttonClass: string;

  /**
   * @summary
   * @description
   */
  @property({ reflect: true })
  name: string;

  /**
   * @summary
   * @description
   */
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

    const effectiveVariant = this.variant || 'secondary';
    if (!variants.includes(effectiveVariant)) {
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
    const variant = this.variant || 'secondary';
    return html` ${
      this.href
        ? html`
          <w-link
            href=${this.href}
            target=${this.target}
            variant=${this.quiet ? 'quiet' : variant}
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
            class=${ifDefined(this.buttonClass)}
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
