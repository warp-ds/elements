import { LitElement, html, nothing, css } from 'lit';
import { property } from 'lit/decorators.js';

class WarpBreadcrumbItem extends LitElement {
  @property({ type: Boolean, attribute: 'current-page' }) currentPage = false;
  @property({ type: String }) href: string | null = null;

  static styles = css`
    .s-text-link{color:var(--w-s-color-text-link)}
    .s-text{color:var(--w-s-color-text)}
    .s-icon{color:var(--w-s-color-icon)}
    .select-none{-webkit-user-select:none;user-select:none}
  `;

  render() {
    return html`
      ${this.href ? html`<a class="s-text-link" href=${this.href} aria-current=${this.currentPage ? 'page' : nothing}><slot></slot></a>` : html`<span class="s-text" aria-current=${this.currentPage ? 'page' : nothing}><slot></slot></span>`}
      ${!this.currentPage ? html`<span class="s-icon select-none" aria-hidden="true">/</span>` : nothing}
    `;
  }
}

if (!customElements.get('w-breadcrumb-item')) {
  customElements.define('w-breadcrumb-item', WarpBreadcrumbItem);
}

export { WarpBreadcrumbItem };
