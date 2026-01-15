import { html, LitElement, PropertyValues } from 'lit';

import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';

import { styles } from './styles.js';

/**
 * Tab panel component that holds content for individual tabs.
 * Each tab panel should have a name that matches a corresponding tab.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/tabs--docs)
 */
export class WarpTabPanel extends LitElement {
  static styles = [reset, styles];

  @property({ reflect: true })
  name!: string;

  @property({ attribute: 'for', reflect: true })
  for = '';

  @property({ type: Boolean, reflect: true })
  hidden = true;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('tabindex', '-1');
    this.setAttribute('role', 'tabpanel');

    this._syncA11yAttributes();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('name') || changedProperties.has('for')) {
      this._syncA11yAttributes();
    }
  }

  private _syncA11yAttributes() {
    if (!this.name) return;

    const tabsId = this.for || '';

    const tabId = tabsId ? `${tabsId}-tab-${this.name}` : `warp-tab-${this.name}`;
    const panelId = tabsId ? `${tabsId}-tabpanel-${this.name}` : `warp-tabpanel-${this.name}`;

    this.setAttribute('aria-labelledby', tabId);
    this.setAttribute('id', panelId);
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
