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

declare global {
  interface HTMLElementTagNameMap {
    'w-checkbox-group': WCheckboxGroup;
  }
}
