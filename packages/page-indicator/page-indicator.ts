import { html, LitElement, TemplateResult } from 'lit';

import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { range } from 'lit/directives/range.js';

import { styles } from './style.js';

/**
 * A page indicator component that displays a series of dots representing pages.
 * One dot is highlighted to indicate the currently selected page.
 *
 * @example
 * ```html
 * <w-page-indicator page-count="5" selected-page="2"></w-page-indicator>
 * ```
 *
 * @property {number} pageCount - Total number of pages (minimum 1)
 * @property {number} selectedPage - Currently selected page (1-based index, clamped to valid range)
 */
class WarpPageIndicator extends LitElement {
  static styles = [styles];

  /** Currently selected page (1-based index) */
  @property({ type: Number, attribute: 'selected-page', reflect: true })
  selectedPage = 1;

  /** Total number of pages */
  @property({ type: Number, attribute: 'page-count', reflect: true })
  pageCount = 1;

  /** Validated page count (minimum 1) */
  private get _validPageCount(): number {
    return Math.max(1, Math.floor(this.pageCount));
  }

  /** Validated selected page (clamped to valid range) */
  private get _validSelectedPage(): number {
    const page = Math.floor(this.selectedPage);
    return Math.max(1, Math.min(page, this._validPageCount));
  }

  render(): TemplateResult {
    const pageCount = this._validPageCount;
    const selectedPage = this._validSelectedPage;

    return html`
      <div class="w-page-indicator">
        <div class="w-page-indicator--container">
          ${map(range(pageCount), (i) => {
            const isSelected = i === selectedPage - 1;
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
