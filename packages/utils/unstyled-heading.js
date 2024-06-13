import { html } from 'lit';

import WarpElement from '@warp-ds/elements-core';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

class UnstyledHeading extends WarpElement {
  static properties = {
    level: { type: Number },
  };

  static styles = [WarpElement.styles];

  get _markup() {
    return `<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`;
  }

  render() {
    return !this.level ? html`<slot></slot>` : unsafeHTML(this._markup);
  }
}

if (!customElements.get('w-unstyled-heading')) {
  customElements.define('w-unstyled-heading', UnstyledHeading);
}

export { UnstyledHeading };
