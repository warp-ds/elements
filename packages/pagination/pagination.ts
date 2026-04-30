// @warp-css;

import { i18n } from '@lingui/core';
import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import '../icon/icon.js';
import { activateI18n, detectLocale } from '../i18n.js';
import { reset } from '../styles.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { styles } from './styles';

const getIconSuffix = () =>
  i18n._({
    id: 'pagination.aria.icon-suffix',
    message: 'icon',
    comment: 'Suffix added at the end of icon titles when img semantics are lost on an html element',
  });

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
  /**
   * @summary
   * @description
   */
  @property({ type: String, reflect: true, attribute: 'base-url' })
  baseUrl: string;

  /**
   * @summary
   * @description
   */
  @property({ type: Number, reflect: true })
  pages: number;

  /**
   * @summary
   * @description
   */
  @property({ type: Number, reflect: true, attribute: 'current-page' })
  currentPageNumber: number;

  /**
   * @summary
   * @description
   */
  @property({ type: Number, reflect: true, attribute: 'visible-pages' })
  visiblePages: number;

  static styles = [
    reset,
    styles,
    css`
      w-icon {
        height: 16px;
      }
    `,
  ];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
  }

  /** @internal */
  get _currentPage() {
    return this.currentPageNumber ?? 1;
  }

  /** @internal */
  get _visiblePages() {
    return this.visiblePages ?? 7;
  }

  /** @internal */
  get shouldShowShowFirstPageButton() {
    return this._currentPage - 2 > 0;
  }

  /** @internal */
  get shouldShowPreviousPageButton() {
    return this._currentPage - 1 > 0;
  }

  /** @internal */
  get shouldShowNextPageButton() {
    return this._currentPage < this.pages;
  }

  /** @internal */
  get currentPageIndex() {
    return this._currentPage - 1;
  }

  /** @internal */
  get visiblePageNumbers() {
    if (this.pages <= this._visiblePages) {
      // Show all pages if total pages is less than or equal to visible pages
      return Array.from({ length: this.pages }, (_, i) => i + 1);
    }

    const half = Math.floor(this._visiblePages / 2);
    let start = Math.max(1, this._currentPage - half);
    const end = Math.min(this.pages, start + this._visiblePages - 1);

    // Adjust start if we're near the end
    if (end - start + 1 < this._visiblePages) {
      start = Math.max(1, end - this._visiblePages + 1);
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
        ${i18n._({
          id: 'pagination.aria.pagination',
          message: 'Pages',
          comment: 'Default screenreader message for pagination container in the pagination component',
        })}
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
                >${i18n._({
                  id: 'pagination.aria.first-page',
                  message: 'First page',
                  comment: 'Default screenreader message for first page link in the pagination component',
                })},</span
              >
              <w-icon name="ChevronDoubleLeft" size="small" locale="${detectLocale()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${getIconSuffix()}</span>
            </a>`
            : nothing
        }
        ${
          this.shouldShowPreviousPageButton
            ? html`<a
              data-page-number="${this._currentPage - 1}"
              href="${this.baseUrl}${this._currentPage - 1}"
              class="${
                baseItemStyles +
                ' s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]'
              }">
              <span class="sr-only"
                >${i18n._({
                  id: 'pagination.aria.prev-page',
                  message: 'Previous page',
                  comment: 'Default screenreader message for previous page link in the pagination component',
                })},</span
              >
              <w-icon name="ChevronLeft" size="small" locale="${detectLocale()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
              <span class="sr-only">${getIconSuffix()}</span>
            </a>`
            : nothing
        }
        <div class="hidden md:block">
          ${visiblePages.map((pageNumber) => {
            const isCurrentPage = pageNumber === this._currentPage;
            const url = `${this.baseUrl}${pageNumber}`;

            let styles = baseItemStyles;

            if (isCurrentPage) {
              styles += ' s-bg-primary s-text-inverted';
            } else {
              styles +=
                ' hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]';
            }

            const ariaLabel = i18n._({
              id: 'pagination.aria.page',
              message: 'Page {currentPage}',
              values: { currentPage: pageNumber },
              comment: 'Default screenreader message for page link in the pagination component',
            });

            return html`<a
              data-page-number="${pageNumber}"
              aria-label="${ariaLabel}"
              href="${url}"
              class="${styles}"
              aria-current="${isCurrentPage ? 'page' : ''}"
              >${pageNumber}</a
            >`;
          })}
        </div>
        <span class="block md:hidden p-8 font-bold">${i18n._({
          id: 'pagination.label.current-page',
          message: 'Page {currentPage}',
          values: { currentPage: this._currentPage },
          comment: 'Default message for current page label in the pagination component',
        })}</span>
        ${
          this.shouldShowNextPageButton
            ? html`<a
              data-page-number="${this._currentPage + 1}"
              href="${this.baseUrl}${this._currentPage + 1}"
              class="${
                baseItemStyles +
                ' s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]'
              }">
              <span class="sr-only">
                ${i18n._({
                  id: 'pagination.aria.next-page',
                  message: 'Next page',
                  comment: 'Default screenreader message for next page link in the pagination component',
                })},</span
              >
              <w-icon name="ChevronRight" size="small" locale="${detectLocale()}" class="pointer-events-none flex items-center" class="flex"></w-icon>
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
