import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles.js';
import { reset } from '../styles.js';

/**
 * Represents one item in a `w-breadcrumbs` trail.
 * Renders the slotted label as a link when `href` is set, or as text when it is not, and adds a separator after non-current items.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/navigation-breadcrumbs--docs)
 *
 * @parent w-breadcrumbs
 * @slot - The breadcrumb label content.
 */
class WarpBreadcrumbItem extends LitElement {
  /**
   * Marks this item as the current page.
   * Use this on the final breadcrumb item so it exposes `aria-current="page"` and does not render a trailing separator.
   */
  @property({ type: Boolean, attribute: 'current-page' }) currentPage = false;

  /**
   * URL for linked breadcrumb items.
   * When omitted, the item renders as non-focusable text.
   */
  @property({ type: String }) href: string | null = null;

  static styles = [ reset, styles ];

  /** @internal */
  get link() {
    return this.href
      ? html`<a part="link" class="s-text-link" href=${this.href} aria-current=${this.currentPage ? 'page' : nothing}><slot></slot></a>`
      : html`<span part="text" class="s-text" aria-current=${this.currentPage ? 'page' : nothing}><slot></slot></span>`;
  }

  /** @internal */
  get separator() {
    return !this.currentPage ? html`<span part="separator" class="separator" aria-hidden="true">/</span>` : nothing;
  }

  render() {
    return html`${this.link}${this.separator}`;
  }
}

if (!customElements.get('w-breadcrumb-item')) {
  customElements.define('w-breadcrumb-item', WarpBreadcrumbItem);
}

export { WarpBreadcrumbItem };
