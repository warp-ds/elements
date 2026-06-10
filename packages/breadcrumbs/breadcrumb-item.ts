import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

class WarpBreadcrumbItem extends LitElement {
  @property({ type: Boolean, attribute: 'current-page' }) currentPage = false;
  @property({ type: String }) href: string = '';

  render() {
    return html`
      <a href=${this.href}><slot></slot></a>
      ${!this.currentPage ? html`<span aria-hidden="true">/</span>` : nothing}
    `;
  }
}

if (!customElements.get('w-breadcrumb-item')) {
  customElements.define('w-breadcrumb-item', WarpBreadcrumbItem);
}

export { WarpBreadcrumbItem };
