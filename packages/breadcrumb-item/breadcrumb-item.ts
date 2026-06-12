import { LitElement, html, nothing, css } from 'lit';
import { property } from 'lit/decorators.js';

class WarpBreadcrumbItem extends LitElement {
  @property({ type: Boolean, attribute: 'current-page' }) currentPage = false;
  @property({ type: String }) href: string | null = null;

  static styles = css`
    :host {display: inline-block;}
    .s-text{
      color: var(--w-s-color-text)
    }
    .s-text-link{
      color: var(--w-s-color-text-link);
      text-decoration: none;
    }
    .s-text-link:hover {
      text-decoration: underline;
    }
    .separator{
      color: var(--w-s-color-icon);
      -webkit-user-select: none;
      user-select: none;
      margin-left: 0.4rem; margin-right: 0.8rem;
    }
  `;

  render() {
    return html`
      ${this.href ? html`<a class="s-text-link" href=${this.href} aria-current=${this.currentPage ? 'page' : nothing}><slot></slot></a>` : html`<span class="s-text" aria-current=${this.currentPage ? 'page' : nothing}><slot></slot></span>`}
      ${!this.currentPage ? html`<span class="separator" aria-hidden="true">/</span>` : nothing}
    `;
  }
}

if (!customElements.get('w-breadcrumb-item')) {
  customElements.define('w-breadcrumb-item', WarpBreadcrumbItem);
}

export { WarpBreadcrumbItem };
