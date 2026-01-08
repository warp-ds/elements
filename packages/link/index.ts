import { FormControlMixin } from '@open-wc/form-control';
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
  | 'pill'
  | 'link'
  | 'quiet'
  | 'utilityQuiet';

const variants = ['primary', 'secondary', 'negative', 'negativeQuiet', 'utility', 'utilityQuiet', 'pill', 'link'];

/**
 * Buttons are used to perform actions, with different visuals for different needs.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/buttons-link--docs)
 */
class WarpLink extends FormControlMixin(LitElement) {
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

  @property({ reflect: true })
  name: string;

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
      'w-button': this.variant !== 'link',
      'w-button--primary': this.variant === 'primary',
      'w-button--secondary': this.variant === 'secondary',
      'w-button--negative': this.variant === 'negative',
      'w-button--utility': this.variant === 'utility',
      'w-button--quiet': this.variant === 'quiet',
      'w-button--negative-quiet': this.variant === 'negativeQuiet',
      'w-button--utility-quiet': this.variant === 'utilityQuiet',
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
