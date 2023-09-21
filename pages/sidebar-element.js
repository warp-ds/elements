import { LitElement, css, html } from 'lit';
import navigationData from './navigation-data';

class SidebarElement extends LitElement {
  static styles = css`
    .sidebar {
      width: 300px;
    }

    .sidebar a {
      text-decoration: none;
      color: #131313;
    }
    @unocss-placeholder
  `;

  render() {
    return html`
      <nav class="sidebar p-24 s-bg-subtle mr-12">
        <h2>Warp Elements</h2>
        <a href="/" class="text-m no-underline py-2">About Warp Elements</a>

        <ul class="py-8">
          ${this.renderItems(navigationData)}
        </ul>
      </nav>
    `;
  }

  renderItems(items) {
    return items.map(item => {
      return html`
      <li>
        ${item.href ?  html`<a class="no-underline py-2 px-16 text-m" href="${item.href}">${item.title}</a>` : html`<span class="pt-2 text-m font-bold">${item.title}</span>`}
        ${item.items ? html`<ul class="py-4">${this.renderItems(item.items)}</ul>` : ''}
      </li>
    `});
  }
}

customElements.define('sidebar-element', SidebarElement);
