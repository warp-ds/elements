// @warp-css;
import { html, LitElement, nothing, css } from 'lit';
import { msg, str } from '@lit/localize';
import { property } from 'lit/decorators.js';

import '@warp-ds/icons/elements/chevron-double-left-16';
import '@warp-ds/icons/elements/chevron-left-16';
import '@warp-ds/icons/elements/chevron-right-16';
import { reset } from '../styles.js';
import { styles } from './styles';

// Helper function to get icon suffix at render time
function getIconSuffix() {
  return msg('icon', { id: 'pagination.aria.icon-suffix' });
}

const baseItemStyles =
  'hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding';

/**
 * Pagination allows users to navigate through multiple pages of content by providing navigation controls with page numbers and directional arrows.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/navigation-pagination--docs)
 *
 * @fires {CustomEvent} page-click - Triggered when a link button in the pagination is clicked. Contains the page number in `string` form.
 */
class WarpPagination extends LitElement {
  @property({ type: String, reflect: true, attribute: 'base-url' })
  baseUrl: string;

  @property({ type: Number, reflect: true })
  pages: number;

  @property({ type: Number, reflect: true, attribute: 'current-page' })
  currentPageNumber = 1;

  @property({ type: Number, reflect: true, attribute: 'visible-pages' })
  visiblePages = 7;

  static styles = [
    reset,
    styles,
    css`
      w-icon-chevron-left-16,
      w-icon-chevron-double-left-16,
      w-icon-chevron-right-16 {
        height: 16px;
      }
    `,
  ];

  constructor() {
    super();
  }

  /** @internal */
  get shouldShowShowFirstPageButton() {
    return this.currentPageNumber - 2 > 0;
  }

  /** @internal */
  get shouldShowPreviousPageButton() {
    return this.currentPageNumber - 1 > 0;
  }

  /** @internal */
  get shouldShowNextPageButton() {
    return this.currentPageNumber < this.pages;
  }

  /** @internal */
  get currentPageIndex() {
    return this.currentPageNumber - 1;
  }

  /** @internal */
  get visiblePageNumbers() {
    if (this.pages <= this.visiblePages) {
      // Show all pages if total pages is less than or equal to visible pages
      return Array.from({ length: this.pages }, (_, i) => i + 1);
    }

    const half = Math.floor(this.visiblePages / 2);
    let start = Math.max(1, this.currentPageNumber - half);
    const end = Math.min(this.pages, start + this.visiblePages - 1);

    // Adjust start if we're near the end
    if (end - start + 1 < this.visiblePages) {
      start = Math.max(1, end - this.visiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  #dispatchClickPage(e: PointerEvent) {
    const clickedPage = (e.target as Element).getAttribute('data-page-number');

    this.dispatchEvent(
      new CustomEvent('page-click', {
        detail: { clickedPage },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const visiblePages = this.visiblePageNumbers;

    return html`<nav class="flex items-center justify-center p-8" @click="${this.#dispatchClickPage}">
      <h1 class="sr-only">
        ${msg('Pages', { id: 'pagination.aria.pagination' })}
      </h1>
      <div class="flex items-center s-text-link">
        ${
          this.shouldShowShowFirstPageButton
            ? html`<a
              data-page-number="1"
              href="${this.baseUrl}1"
              class="${
                baseItemStyles +
                ' s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]'
              }">
              <span class="sr-only"
                >${msg('First page', { id: 'pagination.aria.first-page' })},</span
              >
              <w-icon-chevron-double-left-16 class="pointer-events-none flex items-center"></w-icon-chevron-double-left-16>
              <span class="sr-only">${getIconSuffix()}</span>
            </a>`
            : nothing
        }
        ${
          this.shouldShowPreviousPageButton
            ? html`<a
              data-page-number="${this.currentPageNumber - 1}"
              href="${this.baseUrl}${this.currentPageNumber - 1}"
              class="${
                baseItemStyles +
                ' s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]'
              }">
              <span class="sr-only"
                >${msg('Previous page', { id: 'pagination.aria.prev-page' })},</span
              >
              <w-icon-chevron-left-16 class="pointer-events-none flex items-center"></w-icon-chevron-left-16>
              <span class="sr-only">${getIconSuffix()}</span>
            </a>`
            : nothing
        }
        ${visiblePages.map((pageNumber) => {
          const isCurrentPage = pageNumber === this.currentPageNumber;
          const url = `${this.baseUrl}${pageNumber}`;

          let styles = baseItemStyles;

          if (isCurrentPage) {
            styles += ' s-bg-primary s-text-inverted';
          } else {
            styles +=
              ' hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]';
          }

          const ariaLabel = msg(str`Page ${pageNumber}`, { id: 'pagination.aria.page' });

          return html`<a
            data-page-number="${pageNumber}"
            aria-label="${ariaLabel}"
            href="${url}"
            class="${styles}"
            aria-current="${isCurrentPage ? 'page' : ''}"
            >${pageNumber}</a
          >`;
        })}
        ${
          this.shouldShowNextPageButton
            ? html`<a
              data-page-number="${this.currentPageNumber + 1}"
              href="${this.baseUrl}${this.currentPageNumber + 1}"
              class="${
                baseItemStyles +
                ' s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]'
              }">
              <span class="sr-only">
                ${msg('Next page', { id: 'pagination.aria.next-page' })},</span
              >
              <w-icon-chevron-right-16 class="pointer-events-none flex items-center"></w-icon-chevron-right-16>
              <span class="sr-only">${getIconSuffix()}</span>
            </a>`
            : nothing
        }
      </div>
    </nav>`;
  }
}

if (!customElements.get('w-pagination')) {
  customElements.define('w-pagination', WarpPagination);
}

export { WarpPagination };
