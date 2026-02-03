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
  @property({ type: Boolean, reflect: true })
  bleed: boolean;

  @property({ type: Boolean, reflect: true })
  bordered: boolean;

  @property({ type: Boolean, reflect: true })
  info: boolean;

  @property({ type: Boolean, reflect: true })
  neutral: boolean;

  @property({ type: String, reflect: true })
  role: string;

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

  /** @internal */
  get _optOutRoleWithDefault() {
    return this.role === '' ? nothing : (this.role ?? 'region');
  }

  render() {
    return html`
      <div
        role="${this._optOutRoleWithDefault}"
        class="${this._class}"
        part="box"
      >
        <slot part="box-content"></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-box')) {
  customElements.define('w-box', WarpBox);
}

export { WarpBox };
