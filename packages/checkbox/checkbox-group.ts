import { css, html, LitElement } from 'lit';

export class WCheckboxGroup extends LitElement {
  static styles = css`
    [part="checkbox-group"] {
      display: grid;
      gap: 16px;
    }
  `;
  render() {
    return html`<slot part="checkbox-group"></slot>`;
  }
}

if (!customElements.get('w-checkbox-group')) {
  customElements.define('w-checkbox-group', WCheckboxGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-checkbox-group': WCheckboxGroup;
  }
}
