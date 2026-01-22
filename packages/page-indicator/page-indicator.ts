import { html, LitElement, TemplateResult } from 'lit';

import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { range } from 'lit/directives/range.js';

import { styles } from './style.js';

class WarpPageIndicator extends LitElement {
  static styles = [styles];

  /** Currently selected page (1-based index) */
  @property({ type: Number, attribute: 'selected-page', reflect: true })
  selectedPage = 1;

  /** Total number of pages */
  @property({ type: Number, attribute: 'page-count', reflect: true })
  pageCount = 1;

  render(): TemplateResult {
    return html`
      <div class="w-page-indicator">
        <div class="w-page-indicator--container">
          ${map(range(this.pageCount), (i) => {
            const isSelected = i === this.selectedPage - 1;
            const classes = {
              'w-page-indicator--dot': true,
              'w-page-indicator--selecteddot': isSelected,
            };
            return html`<div class="${classMap(classes)}"></div>`;
          })}
        </div>
      </div>
    `;
  }
}

if (!customElements.get('w-page-indicator')) {
  customElements.define('w-page-indicator', WarpPageIndicator);
}

export { WarpPageIndicator };
