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
    @unocss-placeholder;
  `;

  render() {
    const { heading, pages } = navigationData;
    return html`
      <nav class="sidebar p-24 s-bg-subtle mr-12">
        <h2>
          <a href="${heading.href}" class="no-underline py-2"
            >${heading.title}</a
          >
        </h2>

        <ul class="py-8">
          ${this.renderItems(pages)}
        </ul>
      </nav>
    `;
  }

  renderItems(items) {
    return items.map((item) => {
      return html`
        <li>
          ${item.href
            ? html`<a class="no-underline py-2 px-16 text-m" href="${item.href}"
                >${item.title}</a
              >`
            : html`<span class="pt-2 text-m font-bold">${item.title}</span>`}
          ${item.items
            ? html`<ul class="py-4">
                ${this.renderItems(item.items)}
              </ul>`
            : ''}
        </li>
      `;
    });
  }
}

customElements.define('sidebar-element', SidebarElement);
