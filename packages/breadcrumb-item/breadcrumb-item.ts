import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

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

  static styles = css`
    :host {
      display: inline-block;

      /* Internal resolved vars (defaults) */
      --_link-color: var(--w-c-breadcrumb-item-link-color, var(--w-s-color-text-link));
      --_text-color: var(--w-c-breadcrumb-item-text-color, var(--w-s-color-text));
      --_separator-color: var(--w-c-breadcrumb-item-separator-color, var(--w-s-color-icon));
      --_separator-spacing: var(--w-c-breadcrumb-item-separator-spacing, 0.8rem);
      --_font-size: var(--w-c-breadcrumb-item-font-size);
      --_line-height: var(--w-c-breadcrumb-item-line-height, 1.5);
      --_font-weight: var(--w-c-breadcrumb-item-font-weight, 400);
      --_padding-x: var(--w-c-breadcrumb-item-padding-x, 0);
      --_padding-y: var(--w-c-breadcrumb-item-padding-y, 0);
      --_link-color-hover: var(--w-c-breadcrumb-item-link-color-hover);
      --_link-color-active: var(--w-c-breadcrumb-item-link-color-active);
      --_outline-color: var(--w-c-breadcrumb-item-outline-color);
      --_outline-width: var(--w-c-breadcrumb-item-outline-width);
      --_outline-offset: var(--w-c-breadcrumb-item-outline-offset);
    }

    .s-text{
      color: var(--_text-color);
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
    }
    .s-text-link{
      color: var(--_link-color);
      text-decoration: none;
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
      padding-left: var(--_padding-x);
      padding-right: var(--_padding-x);
      padding-top: var(--_padding-y);
      padding-bottom: var(--_padding-y);
    }
    .s-text-link:hover {
      text-decoration: underline;
      color: var(--_link-color-hover);
    }
    .s-text-link:active {
      color: var(--_link-color-active);
    }
    .s-text-link:focus {
      outline-color: var(--_outline-color);
      outline-width: var(--_outline-width);
      outline-offset: var(--_outline-offset);
    }
    .separator{
      color: var(--_separator-color);
      -webkit-user-select: none;
      user-select: none;
      font-size: var(--_font-size);
      line-height: var(--_line-height);
      font-weight: var(--_font-weight);
      margin-left: var(--_separator-spacing);
      margin-right: var(--_separator-spacing);
    }
  `;

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
