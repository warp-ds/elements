import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import htmlFormat from 'html-format';

/**
 * This component reads the content from the slot and renders it with syntax highlighting.
 * Currently it is really similar to code-example. Maybe they can be combined?
 */
export class SyntaxHighlight extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    pre {
      background-color: var(--w-bluegray-50);
      font-family: Monaco, Ubuntu Mono, Consolas, monospace;
      font-size: 14px;
      margin: 0;
      padding: 16px;
      overflow-x: auto;
    }

    slot {
      display: none;
    }
  `;

  static get properties() {
    return {
      source: { attribute: false },
    };
  }

  // After the initial render we get the source HTML from the slot and highlight it using prismjs
  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');

    let slotHtml = slot
      .assignedNodes()
      .map((el) => (el.nodeType === Node.TEXT_NODE ? el.textContent : el.outerHTML))
      .join('')
      .trim();

    slotHtml = htmlFormat(slotHtml);

    const highlighted = window.Prism.highlight(slotHtml, window.Prism.languages.markup, 'html');

    this.source = highlighted;
  }

  render() {
    return html` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous"
      />
      <slot></slot>
      <pre><code>${unsafeHTML(this.source)}</code></pre>`;
  }
}

customElements.define('syntax-highlight', SyntaxHighlight);
