import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { reset } from '../styles.js';

import { styles } from './styles/w-link.styles.js';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'negative'
  | 'negativeQuiet'
  | 'utility'
  | 'quiet'
  | 'utilityQuiet'
  | 'overlay'
  | 'overlayInverted'
  | 'overlayQuiet'
  | 'overlayInvertedQuiet';

const variants = [
  'primary',
  'secondary',
  'negative',
  'negativeQuiet',
  'utility',
  'utilityQuiet',
  'quiet',
  'link',
  'overlay',
  'overlayInverted',
  'overlayQuiet',
  'overlayInvertedQuiet',
];

/**
 * Buttons are used to perform actions, with different visuals for different needs.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/buttons-link--docs)
 */
class WarpLink extends LitElement {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true })
  autofocus: boolean;

  @property({ reflect: true })
  variant: ButtonVariant;

  @property({ type: Boolean, reflect: true })
  small: boolean;

  @property({ reflect: true })
  href: string;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ reflect: true })
  target: string;

  @property({ reflect: true })
  rel: string;

  @property({ attribute: 'full-width', type: Boolean, reflect: true })
  fullWidth: boolean;

  static styles = [reset, styles];

  connectedCallback() {
    super.connectedCallback();

    // Validate variant if explicitly set
    if (this.variant && !variants.includes(this.variant)) {
      throw new Error(`Invalid "variant" attribute. Set its value to one of the following:\n${variants.join(', ')}.`);
    }
  }

  firstUpdated() {
    if (this.autofocus) {
      setTimeout(() => this.focus(), 0);
    }
  }

  render() {
    return html`
      <a
        href="${this.href}"
        target="${this.target}"
        rel="${this.target === '_blank' ? this.rel || 'noopener' : nothing}"
        tabindex="0"
      >
        <slot></slot>
      </a>
    `;
  }
}

if (!customElements.get('w-link')) {
  customElements.define('w-link', WarpLink);
}

export { WarpLink };
