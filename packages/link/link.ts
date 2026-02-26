import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { reset } from '../styles.js';

import { styles } from './styles.js';

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
  variant: ButtonVariant = 'secondary';

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

    if (!variants.includes(this.variant)) {
      throw new Error(`Invalid "variant" attribute. Set its value to one of the following:\n${variants.join(', ')}.`);
    }
  }

  firstUpdated() {
    if (this.autofocus) {
      setTimeout(() => this.focus(), 0);
    }
  }

  render() {
    const classes = {
      // @ts-expect-error link should be removed so we hide it from types until we can do so
      'w-button': this.variant !== 'link',
      'w-button--primary': this.variant === 'primary',
      'w-button--secondary': this.variant === 'secondary',
      'w-button--negative': this.variant === 'negative',
      'w-button--utility': this.variant === 'utility',
      'w-button--quiet': this.variant === 'quiet',
      'w-button--negative-quiet': this.variant === 'negativeQuiet',
      'w-button--utility-quiet': this.variant === 'utilityQuiet',
      'w-button--overlay': this.variant === 'overlay',
      'w-button--overlay-inverted': this.variant === 'overlayInverted',
      'w-button--overlay-quiet': this.variant === 'overlayQuiet',
      'w-button--overlay-inverted-quiet': this.variant === 'overlayInvertedQuiet',
      'w-button--small': this.small,
      'w-button--full-width': this.fullWidth,
      'w-button--disabled': this.disabled,
    };
    return html`
      <a
        href="${this.href}"
        target="${this.target}"
        rel="${this.target === '_blank' ? this.rel || 'noopener' : nothing}"
        class="${classMap(classes)}"
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
