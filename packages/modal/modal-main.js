import { css, html } from 'lit';

import { modalElement as ccModal } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { setup as setupScrollLock, teardown as teardownScrollLock } from 'scroll-doctor';

import { ProvidesCanCloseToSlotsMixin } from './util.js';

const NO_BACKDROP_CLICKS = 'ignore-backdrop-clicks';
const CONTENT_ID = 'content-id';

export class ModalMain extends ProvidesCanCloseToSlotsMixin(WarpElement) {
  static properties = {
    show: { type: Boolean },
    [CONTENT_ID]: { type: String },
    [NO_BACKDROP_CLICKS]: { type: Boolean },
  };

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
      <dialog class="dialog-el w-modal ${ccModal.dialogEl}">
        <div class="dialog-inner-el ${ccModal.dialogInner}">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el ${ccModal.contentSlot}" id=${this[CONTENT_ID]}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `;
  }

  get dialogEl() {
    return this.shadowRoot.querySelector('.dialog-el');
  }

  get dialogInnerEl() {
    return this.shadowRoot.querySelector('.dialog-inner-el');
  }

  get contentEl() {
    return this.shadowRoot.querySelector('.content-el');
  }

  updated(changedProperties) {
    if (changedProperties.has('show')) this[this.show ? 'open' : 'close']();
  }

  handleListeners(verb = 'addEventListener') {
    // HACK: escape normally fires 'cancel' but 'cancel' can only be intercepted once (browser bug/quirk)
    document[verb]('keydown', this.interceptEscape);
    // Using 'mousedown' instead of 'click' because mouse-up events on the backdrop also trigger 'click'
    if (!this[NO_BACKDROP_CLICKS]) this.dialogEl[verb]('mousedown', this.closeOnBackdropClick);
    // HACK: 'close' fires once the dialog is closed, thus it's cannot animate
    this.dialogEl[verb]('close', this.eventPreventer);
    // HACK: this might not be needed since escape is intercepted, but better to be safe
    this.dialogEl[verb]('cancel', this.eventPreventer);

    this.dialogInnerEl[verb]('transitionend', this.modifyBorderRadius);
  }

  /** @param {Event} evt */
  eventPreventer(evt) {
    evt.preventDefault();
  }

  /** @param {MouseEvent} evt */
  closeOnBackdropClick(evt) {
    if (this.dialogEl === evt.target) this.close();
  }

  /** @param {KeyboardEvent} evt */
  interceptEscape(evt) {
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
    WarpElement.styles,
    css`
      .w-modal {
        --w-modal-translate-distance: 100%;
      }
      @media (min-width: 480px) {
        .w-modal {
          --w-modal-translate-distance: 50%;
        }
      }
      .w-modal[open] {
        animation: w-modal-in 0.3s ease-in-out forwards;
      }
      .w-modal.close {
        animation: w-modal-out 0.3s ease-in-out forwards;
      }
      .w-modal[open]::backdrop {
        animation: backdrop-in 0.3s ease-in-out forwards;
      }
      .w-modal.close::backdrop {
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
