import { html, LitElement, PropertyValues } from 'lit';

import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';

import { styles } from '../tabs/styles.js';

/**
 * Tab panel component that holds content for individual tabs.
 * Each tab panel should have a name that matches a corresponding tab.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/tabs--docs)
 */
export class WarpTabPanel extends LitElement {
  static styles = [reset, styles];

  private _internals: ElementInternals;

  @property({ type: Boolean, reflect: true })
  hidden: boolean;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    super.connectedCallback();
    // Use ElementInternals for ARIA to avoid hydration mismatches
    this._internals.role = 'tabpanel';
  }

  render() {
    return html`<slot></slot>`;
  }
}

if (!customElements.get('w-tab-panel')) {
  customElements.define('w-tab-panel', WarpTabPanel);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-tab-panel': WarpTabPanel;
  }
}
