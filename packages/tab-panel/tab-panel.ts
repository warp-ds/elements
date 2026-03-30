import { css, html, LitElement } from 'lit';
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
  static styles = [
    reset,
    styles,
    css`
      :host {
        display: block;
      }
      .panel-content {
        display: none;
      }
      .panel-content[data-active] {
        display: block;
      }
    `,
  ];

  private _internals: ElementInternals;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  /**
   * Whether this panel is active (visible).
   * Set by parent w-tabs via the _parentActive property.
   */
  @property({ type: Boolean })
  set active(value: boolean) {
    this._ownActive = value;
  }
  get active(): boolean {
    return this._parentActive ?? this._ownActive ?? false;
  }
  private _ownActive: boolean | undefined;

  /**
   * Internal active state managed by parent w-tabs.
   * Non-reflecting to avoid DOM changes during hydration.
   * @internal
   */
  @property({ attribute: false })
  _parentActive: boolean | undefined;

  /**
   * Internal aria-labelledby managed by parent w-tabs.
   * Non-reflecting to avoid DOM changes during hydration.
   * @internal
   */
  @property({ attribute: false })
  _parentAriaLabelledBy: string | undefined;

  connectedCallback() {
    super.connectedCallback();
    // Use ElementInternals for ARIA to avoid hydration mismatches
    this._internals.role = 'tabpanel';
    this.syncA11yState();
  }

  updated() {
    // Sync aria-labelledby to ElementInternals (no DOM attribute needed)
    // Property name is ariaLabelledBy (camelCase per ARIA IDL spec)
    // Type assertion needed as TypeScript DOM types may not include this on ElementInternals
    this.syncA11yState();
  }

  private syncA11yState() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const internals = this._internals as any;

    internals.ariaLabelledBy = this._parentAriaLabelledBy || null;
    // Keep inactive panels out of the accessibility tree without mutating host attributes.
    internals.ariaHidden = this.active ? 'false' : 'true';
  }

  render() {
    return html`<div class="panel-content" ?data-active=${this.active}><slot></slot></div>`;
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
