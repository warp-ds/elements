import { html, LitElement, css } from 'lit';
import { button } from '@warp-ds/component-classes';
import { classNames } from '@chbphone55/classnames';
import { kebabCaseAttributes } from '../utils';
import { styles } from '../../dist/elements.min.js';


const buttonTypes = [    
  'primary',
  'secondary',
  'negative',
  'utility',
  'pill',
  'link',
];

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

  static styles = [styles, css`
    /* @unocss-placeholder */
  `];

  constructor() {
    super();
    this.variant = 'secondary';
  }

  connectedCallback() {
    super.connectedCallback();

    if (!buttonTypes.includes(this.variant)) {
      throw new Error(
        `Invalid "variant" attribute. Set its value to one of the following:\n${buttonTypes.join(
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
    const primary = this.variant === 'primary';
    const secondary = this.variant === 'secondary';
    const negative = this.variant === 'negative';
    const utility = this.variant === 'utility';
    const pill = this.variant === 'pill';
    const link = this.variant === 'link';

    return classNames(
      {
        [button.buttonSecondary]: !buttonTypes.find(b => this.variant === b) || secondary,
        // primary buttons
        [button.buttonPrimary]: primary,
        [button.buttonDestructive]: negative && !this.quiet,
        // quiet
        [button.buttonFlat]: secondary && this.quiet,
        [button.buttonDestructiveFlat]: negative && this.quiet,
        [button.buttonUtilityFlat]: utility && this.quiet,
        // others
        [button.buttonSmall]: this.small,
        [button.buttonUtility]: utility && !this.quiet,
        [button.buttonLink]: link,
        [button.buttonPill]: pill,
        [button.buttonInProgress]: this.loading,
        [button.buttonIsDisabled]: this.disabled,
        ['inline-block']: !!this.href
      },
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
