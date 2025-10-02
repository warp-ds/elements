import { css, html, LitElement } from 'lit';

import { property, query } from 'lit/decorators.js';
import { setup as setupScrollLock, teardown as teardownScrollLock } from 'scroll-doctor';

import { reset } from '../styles.js';

import { ProvidesCanCloseToSlotsMixin } from './util.js';

/**
 * Modals (or dialogs) display important information that users need to acknowledge.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/overlays-modal--docs)
 *
 * @slot header - Typically where you would use the `w-modal-header` component.
 * @slot content - The main content of the modal.
 * @slot footer - Typically where you would use the `w-modal-footer` component, for things like actions.
 */
export class ModalMain extends ProvidesCanCloseToSlotsMixin(LitElement) {
  @property({ type: Boolean }) show: boolean;
  @property({ type: String, attribute: 'content-id' }) contentId: string;
  @property({ type: Boolean, attribute: 'ignore-backdrop-clicks' }) ignoreBackdropClicks: boolean;

  @query('.dialog-el') dialogEl: HTMLDialogElement;
  @query('.dialog-inner-el') dialogInnerEl: HTMLElement;
  @query('.content-el') contentEl: HTMLElement;

  constructor() {
    super();
    this.interceptEscape = this.interceptEscape.bind(this);
    this.closeOnBackdropClick = this.closeOnBackdropClick.bind(this);
    this.eventPreventer = this.eventPreventer.bind(this);
    this.modifyBorderRadius = this.modifyBorderRadius.bind(this);
  }

  async open() {
    this.dialogEl.showModal();
    this.handleListeners();
    setupScrollLock(this.contentEl);
    await this.updateComplete;
    this.dispatchEvent(new CustomEvent('shown', { bubbles: true, composed: true }));
  }

  close() {
    this.handleListeners('removeEventListener');
    this.dialogEl.classList.add('close');
    this.dialogEl.addEventListener(
      'animationend',
      async () => {
        this.dialogEl.classList.remove('close');
        this.dialogEl.close();
        teardownScrollLock();
        await this.updateComplete;
        this.dispatchEvent(new CustomEvent('hidden', { bubbles: true, composed: true }));
      },
      { once: true },
    );
  }

  render() {
    return html`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `;
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('show')) this[this.show ? 'open' : 'close']();
  }

  handleListeners(verb = 'addEventListener') {
    // HACK: escape normally fires 'cancel' but 'cancel' can only be intercepted once (browser bug/quirk)
    document[verb]('keydown', this.interceptEscape);
    // Using 'mousedown' instead of 'click' because mouse-up events on the backdrop also trigger 'click'
    if (!this.ignoreBackdropClicks) this.dialogEl[verb]('mousedown', this.closeOnBackdropClick);
    // HACK: 'close' fires once the dialog is closed, thus it's cannot animate
    this.dialogEl[verb]('close', this.eventPreventer);
    // HACK: this might not be needed since escape is intercepted, but better to be safe
    this.dialogEl[verb]('cancel', this.eventPreventer);

    this.dialogInnerEl[verb]('transitionend', this.modifyBorderRadius);
  }

  eventPreventer(evt: Event) {
    evt.preventDefault();
  }

  closeOnBackdropClick(evt: MouseEvent) {
    if (this.dialogEl === evt.target) this.close();
  }

  interceptEscape(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.close();
    }
  }

  modifyBorderRadius() {
    if (this.dialogInnerEl.scrollHeight * 1.02 > innerHeight) this.dialogInnerEl.style.borderRadius = '0px';
    else this.dialogInnerEl.style.borderRadius = null;
  }

  static styles = [
    reset,
    css`
      .dialog-el {
        --w-modal-translate-distance: 100%;
        --w-modal-max-height: 80%;
        --w-modal-width: 640px;
        background-color: transparent;
        border-width: 0;
        align-items: flex-end;
        inset: 0rem;
        height: unset;
        max-height: unset;
        max-width: unset;
        width: unset;
        margin: auto;
        padding: 0rem;
        backface-visibility: hidden;
      }
      .dialog-inner-el {
        will-change: height;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        background-color: var(--w-s-color-background);
        box-shadow: var(--w-shadow-m);
        height: var(--w-modal-height);
        max-height: var(--w-modal-max-height);
        min-height: var(--w-modal-min-height);
        width: var(--w-modal-width);
        backface-visibility: hidden;
        padding-bottom: calc(32px + env(safe-area-inset-bottom, 0px));
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .content-el {
        display: block;
        flex-shrink: 1;
        flex-grow: 1;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        margin-bottom: 0rem;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
      }
      @media (min-width: 480px) {
        .dialog-el {
          --w-modal-translate-distance: 50%;
          place-content: center;
          place-items: center;
        }
        .dialog-inner-el {
          margin-left: 1.6rem;
          margin-right: 1.6rem;
          padding-bottom: 3.2rem;
        }
        .content-el {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
        }
      }
      @media (max-width: 479.9px) {
        .dialog-inner-el {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      .dialog-el[open] {
        animation: w-modal-in 0.3s ease-in-out forwards;
        display: flex;
        position: fixed;
      }
      .dialog-el.close {
        animation: w-modal-out 0.3s ease-in-out forwards;
      }
      .dialog-el[open]::backdrop {
        animation: backdrop-in 0.3s ease-in-out forwards;
      }
      .dialog-el.close::backdrop {
        animation: backdrop-out 0.3s ease-in-out forwards;
      }
      /* shouldn't need two (in/out) animations declared here, but reversing is being weird */
      @keyframes w-modal-in {
        from {
          transform: translateY(var(--w-modal-translate-distance));
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes w-modal-out {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(var(--w-modal-translate-distance));
          opacity: 0;
        }
      }
      @keyframes backdrop-in {
        from {
          background: transparent;
        }
        to {
          background: rgba(0, 0, 0, 0.25);
        }
      }
      @keyframes backdrop-out {
        from {
          background: rgba(0, 0, 0, 0.25);
        }
        to {
          background: transparent;
        }
      }
    `,
  ];
}

if (!customElements.get('w-modal')) {
  customElements.define('w-modal', ModalMain);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-modal': ModalMain;
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'w-modal': ModalMain;
    }
  }
}
