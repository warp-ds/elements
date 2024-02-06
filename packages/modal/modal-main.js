import { css, html } from 'lit'
import { createRef, ref } from 'lit/directives/ref.js'
import { ProvidesCanCloseToSlotsMixin } from './util.js'
import { modalV2 as cc } from './component-classes.js'
import { setup as setupScrollLock, teardown as teardownScrollLock } from 'scroll-doctor'
import WarpElement from '@warp-ds/elements-core'

const NO_BACKDROP_CLICKS = 'ignore-backdrop-clicks'

export class ModalMain extends ProvidesCanCloseToSlotsMixin(WarpElement) {
  dialogEl = createRef()
  dialogInnerEl = createRef()
  contentEl = createRef()

  static properties = {
    show: { type: Boolean },
    [NO_BACKDROP_CLICKS]: { type: Boolean }
  }

  constructor() {
    super()
    this.interceptEscape = this.interceptEscape.bind(this)
    this.closeOnBackdropClick = this.closeOnBackdropClick.bind(this)
    this.eventPreventer = this.eventPreventer.bind(this)
    this.modifyBorderRadius = this.modifyBorderRadius.bind(this)
  }

  async open() {
    this.dialogEl.value.showModal()
    this.handleListeners()
    setupScrollLock(this.contentEl.value)
    await this.updateComplete
    this.dispatchEvent(new CustomEvent('shown', { bubbles: true, composed: true }))
  }

  close() {
    this.handleListeners('removeEventListener')
    this.dialogEl.value.classList.add('close')
    this.dialogEl.value.addEventListener('animationend', async () => {
      this.dialogEl.value.classList.remove('close')
      this.dialogEl.value.close()
      teardownScrollLock()
      await this.updateComplete
      this.dispatchEvent(new CustomEvent('hidden', { bubbles: true, composed: true }))
    }, { once : true })
  }

  render() {
    return html`
      <dialog ${ref(this.dialogEl)} class="${cc.dialogEl}">
        <div ${ref(this.dialogInnerEl)} class="${cc.dialogInner}">
          <slot name="top" @slotchange="${this.handleSlotChange}"></slot>
          <slot name="title" @slotchange="${this.handleSlotChange}"></slot>
          <div ${ref(this.contentEl)} class="${cc.contentSlot}">
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('show')) this[this.show ? 'open' : 'close']()
  }

  handleListeners(verb = 'addEventListener') {
    // HACK: escape normally fires 'cancel' but 'cancel' can only be intercepted once (browser bug/quirk)
    document[verb]('keydown', this.interceptEscape)
    // Using 'mousedown' instead of 'click' because mouse-up events on the backdrop also trigger 'click'
    if (!this[NO_BACKDROP_CLICKS]) this.dialogEl.value[verb]('mousedown', this.closeOnBackdropClick)
    // HACK: 'close' fires once the dialog is closed, thus it's cannot animate
    this.dialogEl.value[verb]('close', this.eventPreventer)
    // HACK: this might not be needed since escape is intercepted, but better to be safe
    this.dialogEl.value[verb]('cancel', this.eventPreventer)

    this.dialogInnerEl.value[verb]('transitionend', this.modifyBorderRadius)
  }

  /** @param {Event} evt */
  eventPreventer(evt) {
    evt.preventDefault()
  }

  /** @param {MouseEvent} evt */
  closeOnBackdropClick(evt) {
    if (this.dialogEl.value === evt.target) this.close()
  }

  /** @param {KeyboardEvent} evt */
  interceptEscape(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault()
      this.close()
    }
  }

  modifyBorderRadius() {
    if (this.dialogInnerEl.value.scrollHeight * 1.02 > innerHeight) this.dialogInnerEl.value.style.borderRadius = '0px'
    else this.dialogInnerEl.value.style.borderRadius = null
  }

  static styles = [
    css`
      dialog {
        --w-dialog-translate-distance: 100%;
      }
      @media (min-width: 480px) {
        dialog { --w-dialog-translate-distance: 50%; }
      }
      dialog[open] {
        animation: dialog-in 0.3s ease-in-out forwards;
      }
      dialog.close {
        animation: dialog-out 0.3s ease-in-out forwards;
      }
      dialog[open]::backdrop {
        animation: backdrop-in 0.3s ease-in-out forwards;
      }
      dialog.close::backdrop {
        animation: backdrop-out 0.3s ease-in-out forwards;
      }
      /* shouldn't need two (in/out) animations declared here, but reversing is being weird */
      @keyframes dialog-in {
        from { transform: translateY(var(--w-dialog-translate-distance)); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes dialog-out {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(var(--w-dialog-translate-distance)); opacity: 0; }
      }
      @keyframes backdrop-in {
        from { background: transparent; }
        to { background: rgba(0,0,0,0.25); }
      }
      @keyframes backdrop-out {
        from { background: rgba(0,0,0,0.25); }
        to { background: transparent; }
      }
    `,
    WarpElement.styles
  ]
}
