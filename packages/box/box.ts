// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles';

import { styles } from './styles';

/**
 * Box is a layout component used for separating content areas on a page.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/layout-box--docs)
 */
class WarpBox extends LitElement {
  /**
   * Makes the box bleed to the container edge.
   * Extends the box into the horizontal gutter on narrow screens. Adds negative horizontal margins and square side corners below the small breakpoint, then restores the normal margins and rounded corners from the small breakpoint and up.
   */
  @property({ type: Boolean, reflect: true })
  bleed = false;

  /**
   * Shows the box as a bordered surface.
   * Use this when the content needs a clear visual boundary from the surrounding page.
   */
  @property({ type: Boolean, reflect: true })
  bordered = false;

  /**
   * Shows the box with information styling.
   * Use this for supporting informational content that should be visually separated from the surrounding page.
   */
  @property({ type: Boolean, reflect: true })
  info = false;

  /**
   * Shows the box with neutral styling.
   * Use this for quiet grouped content that needs a background without strong emphasis.
   */
  @property({ type: Boolean, reflect: true })
  neutral = false;

  /**
   * ARIA role for the box wrapper.
   * Defaults to not set when omitted but due to the box using a section element, it will behave as if it had a role of `region`. Set `role="none"` to override this behaviour for purely visual grouping, or set a specific role when the box has a clearer semantic purpose.
   */
  @property({ type: String, reflect: true, useDefault: true })
  role: string | null = null;

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [
    reset,
    styles,
    css`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `,
  ];

  /** @internal */
  get _class() {
    return classNames([
      'group block relative break-words last-child:mb-0 p-16 rounded-8',
      this.bleed && '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8',
      this.info && 's-bg-info-subtle',
      this.neutral && 's-surface-sunken',
      this.bordered && 'border-2 s-border s-bg',
    ]);
  }

  render() {
    return html`
      <section role="${this.role ?? nothing}" class="${this._class}">
        <slot></slot>
      </section>
    `;
  }
}

if (!customElements.get('w-box')) {
  customElements.define('w-box', WarpBox);
}

export { WarpBox };
