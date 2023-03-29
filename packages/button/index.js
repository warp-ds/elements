import { html, LitElement, css } from 'lit';
import { classNames } from '@chbphone55/classnames';
import { kebabCaseAttributes } from '../utils';

const variantClassMap = {
  primary: 'button button--primary',
  secondary: 'button',
  negative: 'button button--destructive',
  utility: 'button button--utility',
  link: 'button button--link',
  pill: 'button button--pill',
};

class WarpButton extends kebabCaseAttributes(LitElement) {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

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
    buttonClass: { type: String, reflect: true },
  };

  static styles = css`
    /* @unocss-placeholder */
  `;

  constructor() {
    super();
    this.variant = 'secondary';
  }

  connectedCallback() {
    super.connectedCallback();

    const availableVariants = Object.keys(variantClassMap);
    if (!availableVariants.includes(this.variant)) {
      throw new Error(
        `Invalid "variant" attribute. Set its value to one of the following:\n${availableVariants.join(
          ', ',
        )}.`,
      );
    }
  }

  firstUpdated() {
    if (this.autofocus) {
      setTimeout(() => this.focus(), 0);
    }
  }

  get _classes() {
    return classNames(
      variantClassMap[this.variant],
      {
        'py-10 px-14 border-2 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active': true,
        // quiet
        'button--flat': this.variant === 'secondary' && this.quiet,
        'button--destructive-flat': this.variant === 'negative' && this.quiet,
        'button--utility-flat': this.variant === 'utility' && this.quiet,
        // others
        'button--small': this.small,
        'button--in-progress': this.loading,
      },
      this.buttonClass,
    );
  }

  render() {
    return html`
    ${this.href
      ? html`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target === '_blank' ? this.rel || 'noopener' : undefined}
          class=${this._classes}
        >
          <slot></slot>
        </a>`
      : html`<button type=${this.type || 'button'} class=${this._classes}>
          <slot></slot>
        </button>`}
    ${this.loading
      ? html`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext="Laster..."
        />`
      : null}`;
  }
}

if (!customElements.get('w-button')) {
  customElements.define('w-button', WarpButton);
}

export { WarpButton };
