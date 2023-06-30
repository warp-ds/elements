import { html, LitElement, css } from 'lit';
import { button as ccButton } from '@warp-ds/css/component-classes';
import { classNames } from '@chbphone55/classnames';
import { kebabCaseAttributes } from '../utils';


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


  static styles = css`
    @unocss-placeholder
  `;

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
        [ccButton.buttonSecondary]: secondary && !this.quiet || !buttonTypes.find(b => this.variant === b),
        // primary buttons
        [ccButton.buttonPrimary]: primary,
        [ccButton.buttonDestructive]: negative && !this.quiet,
        // quiet
        [ccButton.buttonFlat]: secondary && this.quiet,
        [ccButton.buttonDestructiveFlat]: negative && this.quiet,
        [ccButton.buttonUtilityFlat]: utility && this.quiet,
        // others
        [ccButton.buttonSmall]: this.small,
        [ccButton.buttonUtility]: utility && !this.quiet,
        [ccButton.buttonLink]: link,
        [ccButton.buttonPill]: pill,
        [ccButton.buttonInProgress]: this.loading,
        [ccButton.buttonIsDisabled]: this.disabled,
        [ccButton.linkAsButton]: !!this.href
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
