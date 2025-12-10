import { Move } from '@itsy/animate/move';
import { i18n } from '@lingui/core';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import '@warp-ds/icons/elements/arrow-left-16';
import '@warp-ds/icons/elements/close-16';

import { activateI18n } from '../i18n';
import { reset } from '../styles';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { CanCloseMixin } from './util.js';

/**
 * The header section of a modal, typically where you place the title and a close button.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/overlays-modal--docs)
 *
 * @slot top - Customize the title bar, for example to have a header image that reaches the modal's edges. See the With Image story for an example.
 */
export class ModalHeader extends CanCloseMixin(LitElement) {
  @property({ type: String }) title: string;
  @property({ type: Boolean }) back: boolean;
  @property({ type: Boolean, attribute: 'no-close' }) noClose: boolean;
  /** @internal */
  @state() private _hasTopContent = false;

  @query('.title-el') titleEl: HTMLElement;

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
  }
  render() {
    return html`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent ? '' : 'header-title-bar'}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `;
  }

  async willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('back')) {
      if (!this.titleEl) return;
      const move = new Move(this.titleEl);
      move.when(async () => {
        await this.updateComplete;
      });
    }
  }
  get titleClasses() {
    return [
      'header-title',
      this.back ? 'header-title-with-back-button' : 'header-title-without-back-button',
      this._hasTopContent ? 'header-title-with-top-area' : '',
    ].join(' ');
  }

  get backButton() {
    return this.back && !this._hasTopContent // Not showing back button when there is a top image
      ? html`<button
          type="button"
          aria-label="${i18n._({
            id: 'modal.aria.back',
            message: 'Back',
            comment: 'Aria label for the back button in modal',
          })}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16 style="display: flex;"></w-icon-arrow-left-16>
        </button>`
      : nothing;
  }
  get closeButton() {
    if (this.noClose) return nothing;
    return html`<div class="header-close-button-container">
        <w-button
            type="button"
            aria-label="${i18n._({
              id: 'modal.aria.close',
              message: 'Close',
              comment: 'Aria label for the close button in modal',
            })}"
            variant="pill"
            small=""
            @click="${this.close}">
                <w-icon-close-16 style="display: flex;"></w-icon-close-16>
        </w-button>
    </div>`;
  }
  emitBack() {
    this.dispatchEvent(new CustomEvent('backClicked', { bubbles: true, composed: true }));
  }
  handleTopSlotChange(slotEvent) {
    const topContent = slotEvent.target.assignedElements({ flatten: true });
    this._hasTopContent = !!topContent.length;
  }
  static styles = [
    reset,
    css`
      .header {
        position: relative;
        padding-bottom: 0.8rem;
      }
      .header-title-bar {
        display: grid;
        flex-shrink: 0 !important;
        gap: 1.2rem;
        grid-template-columns: auto 1fr auto;
        align-items: flex-start;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 1.6rem;
      }
      .header-title {
        font-weight: 700;
        font-size: var(--w-font-size-l);
        line-height: var(--w-line-height-l);
        align-self: center;
        margin: 0;
      }
      .header-title-with-back-button {
        justify-self: center;
      }
      .header-title-without-back-button {
        grid-column: span 2 / span 2;
      }
      .header-title-with-top-area {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 1.6rem;
      }
      .header-button:hover {
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
      }
      .header-button:focus,
      .header-button:focus-visible {
        outline: 2px solid var(--w-s-color-border-focus);
        outline-offset: var(--w-outline-offset, 1px);
      }
      .header-button:not(:focus-visible) {
        outline: none;
      }
      .header-button {
        border-width: 0;
        border-radius: 9999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 40px;
        min-width: 40px;
        padding: 0.4rem;
        font-weight: 700;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        font-size: var(--w-font-size-m);
        line-height: var(--w-line-height-m);
        line-height: 2.4rem;
      }
      .header-button-left {
        background-color: transparent;
        color: var(--w-s-color-icon);
        margin-left: -0.8rem;
      }
      .header-button-left:hover {
        background-color: var(--w-color-button-pill-background-hover);
      }
      .header-button-left:active {
        background-color: var(--w-color-button-pill-background-active);
      }
      .header-close-button-container {
        position: absolute;
        right: 2rem;
        top: 2.4rem;
      }
      @media (min-width: 480px) {
        .header-title-bar {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
          padding-top: 2.4rem;
        }
        .header-title-with-top-area {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
        }
        .header-button {
          min-height: 32px;
          min-width: 32px;
        }
      }
    `,
  ];
}

if (!customElements.get('w-modal-header')) {
  customElements.define('w-modal-header', ModalHeader);
}
