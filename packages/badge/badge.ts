// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles';

import { styles } from './styles';

/**
 * `w-badge` is used for showing a small amount of non-interactive color-categorized metadata, like a status or count.
 *
 * @slot - The content of the badge, which is typically a short string like "New" or "4".
 */
class WarpBadge extends LitElement {
  /**
   * Controls the badge color treatment.
   * If omitted, the badge uses neutral styling without reflecting a `variant` attribute.
   * Accepted values are `neutral`, `info`, `positive`, `warning`, `negative`, `disabled`, `price`, and `sponsored`. If omitted, the badge uses neutral styling without reflecting a `variant` attribute.
   */
  @property({ type: String, reflect: true })
  variant: 'neutral' | 'info' | 'positive' | 'warning' | 'negative' | 'disabled' | 'price' | 'sponsored';

  /**
   * Positions the badge in a corner of a parent element.
   * Use this with a parent element that has `position: relative`. When set, the badge uses absolute positioning and adjusts its corner radii so it sits flush against the selected corner.
   * Use this with a parent element that has `position: relative`. Accepted values are `top-left`, `top-right`, `bottom-right`, and `bottom-left`.
   */
  @property({ type: String, reflect: true })
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

  static styles = [reset, styles];

  /** @internal */
  get _class() {
    const variant = this.variant || 'neutral';
    return classNames([
      'py-4 px-8 border-0 rounded-4 text-xs inline-flex',
      variant === 'neutral' && 'bg-[--w-color-badge-neutral-background] s-text',
      variant === 'info' && 'bg-[--w-color-badge-info-background] s-text',
      variant === 'positive' && 'bg-[--w-color-badge-positive-background] s-text',
      variant === 'warning' && 'bg-[--w-color-badge-warning-background] s-text',
      variant === 'negative' && 'bg-[--w-color-badge-negative-background] s-text',
      variant === 'disabled' && 's-bg-disabled s-text',
      variant === 'price' && 'bg-[--w-black/70] s-text-inverted-static',
      variant === 'sponsored' && 'bg-[--w-color-badge-sponsored-background] s-text',
      !!this.position && 'absolute backdrop-blur',
      this.position === 'top-left' && 'rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0',
      this.position === 'top-right' && 'rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0',
      this.position === 'bottom-right' && 'rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0',
      this.position === 'bottom-left' && 'rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0',
    ]);
  }

  render() {
    return html`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-badge')) {
  customElements.define('w-badge', WarpBadge);
}

export { WarpBadge };
