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
      <nav class="sidebar p-24">
        <h2>Warp Elements</h2>
        <a href="/" class="text-l no-underline py-16">About Warp Elements</a>

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
        ${item.href ?  html`<a class="no-underline py-16 px-16 text-l" href="${item.href}">${item.title}</a>` : html`<span class="pt-16 text-l">${item.title}</span>`}
        ${item.items ? html`<ul class="py-8">${this.renderItems(item.items)}</ul>` : ''}
      </li>
    `});
  }
}

customElements.define('sidebar-element', SidebarElement);
