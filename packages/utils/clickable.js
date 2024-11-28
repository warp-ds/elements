import { html, css } from 'lit';

import WarpElement from '@warp-ds/elements-core';

/**
Helper component used to wrap clickable content, to make a card (or other elements) clickable.
Use the href attribute to set the link.

The reason it wraps a certain element, to then make the whole card clickable, is for accessbility reasons.
This matches the React implementation.
*/
class WarpClickable extends WarpElement {
  static properties = {
    href: { type: String, reflect: true },
    //title: { type: String, reflect: true },
  };

  static styles = [
    WarpElement.styles,
    css`
      a {
        text-decoration: none !important;
        color: inherit;
      }
      a::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      :host {
        display: block;
      }
    `,
  ];

  render() {
    if (this.href) {
      return html`<a href="${this.href}"><slot></slot></a> `;
    } else {
      return html`<slot></slot>`;
    }
  }
}

if (!customElements.get('w-clickable')) {
  customElements.define('w-clickable', WarpClickable);
}

export { WarpClickable };
