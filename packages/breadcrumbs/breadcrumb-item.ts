import { LitElement, html } from 'lit';

class WarpBreadcrumbItem extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

if (!customElements.get('w-breadcrumb-item')) {
  customElements.define('w-breadcrumb-item', WarpBreadcrumbItem);
}

export { WarpBreadcrumbItem };
