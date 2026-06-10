import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

class WarpBreadcrumbItem extends LitElement {
  @property({ type: Boolean, attribute: 'current-page' }) currentPage = false;
  @property({ type: String }) href: string | null = null;

  render() {
    return html`
      ${this.href ? html`<a href=${this.href} aria-current=${this.currentPage ? 'page' : nothing}><slot></slot></a>` : html`<span aria-current=${this.currentPage ? 'page' : nothing}><slot></slot></span>`}
      ${!this.currentPage ? html`<span aria-hidden="true">/</span>` : nothing}
    `;
  }
}

if (!customElements.get('w-breadcrumb-item')) {
  customElements.define('w-breadcrumb-item', WarpBreadcrumbItem);
}

export { WarpBreadcrumbItem };
