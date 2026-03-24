import { html, LitElement } from 'lit';
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
  autofocus = false;

  @property({ reflect: true })
  variant: ButtonVariant;

  @property({ type: Boolean, reflect: true })
  small = false;

  @property({ reflect: true })
  href: string;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ reflect: true })
  target: string;

  @property({ reflect: true })
  rel: string;

  @property({ attribute: 'full-width', type: Boolean, reflect: true })
  fullWidth = false;

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
    const variant = this.variant || 'secondary';
    const classes = {
      // @ts-expect-error link should be removed so we hide it from types until we can do so
      'w-button': variant !== 'link',
      'w-button--primary': variant === 'primary',
      'w-button--secondary': variant === 'secondary' || !this.variant,
      'w-button--negative': variant === 'negative',
      'w-button--utility': variant === 'utility',
      'w-button--quiet': variant === 'quiet',
      'w-button--negative-quiet': variant === 'negativeQuiet',
      'w-button--utility-quiet': variant === 'utilityQuiet',
      'w-button--overlay': variant === 'overlay',
      'w-button--overlay-inverted': variant === 'overlayInverted',
      'w-button--overlay-quiet': variant === 'overlayQuiet',
      'w-button--overlay-inverted-quiet': variant === 'overlayInvertedQuiet',
      'w-button--small': this.small,
      'w-button--full-width': this.fullWidth,
      'w-button--disabled': this.disabled,
    };
    return html`<a
      href=${this.href}
      target=${this.target}
      rel=${this.target === '_blank' ? this.rel || 'noopener' : undefined}
      class=${classMap(classes)}>
      <slot></slot>
    </a>`;
  }
}

if (!customElements.get('w-link')) {
  customElements.define('w-link', WarpLink);
}

export { WarpLink };
