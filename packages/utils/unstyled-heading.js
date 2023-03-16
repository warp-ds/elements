import { html, LitElement } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { styles } from '../../dist/elements.min.js';

class UnstyledHeading extends LitElement {
  static properties = {
    level: { type: Number },
  };

  static styles = [styles];

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
