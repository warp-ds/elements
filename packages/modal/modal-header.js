import { html, nothing } from 'lit';

import { Move } from '@itsy/animate/move';
import { i18n } from '@lingui/core';
import { modalElement as ccModal } from '@warp-ds/css/component-classes';
import '@warp-ds/icons/elements/arrow-left-16';
import '@warp-ds/icons/elements/close-16';
import WarpElement from '@warp-ds/elements-core';

import { activateI18n } from '../i18n';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { CanCloseMixin } from './util.js';

const NO_CLOSE_BUTTON = 'no-close';

export class ModalHeader extends CanCloseMixin(WarpElement) {
  static properties = {
    title: { type: String },
    back: { type: Boolean },
    [NO_CLOSE_BUTTON]: { type: Boolean },
    _hasTopContent: { state: true },
  };
  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this._hasTopContent = false;
  }
  render() {
    return html`
      <div class="${ccModal.header}">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent ? '' : ccModal.headerTitleBar}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `;
  }

  get titleEl() {
    return this.shadowRoot.querySelector('.title-el');
  }

  async willUpdate(changedProperties) {
    if (changedProperties.has('back')) {
      const move = new Move(this.titleEl);
      move.when(async () => {
        await this.updateComplete;
      });
    }
  }
  get titleClasses() {
    return [
      ccModal.headerTitle,
      this.back ? ccModal.headerTitleWithBackButton : ccModal.headerTitleWithoutBackButton,
      this._hasTopContent ? ccModal.headerTitleWithTopArea : '',
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
          class="${ccModal.headerButton} ${ccModal.headerButtonLeft}"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`
      : nothing;
  }
  get closeButton() {
    if (this[NO_CLOSE_BUTTON]) return nothing;
    return html`<button
      type="button"
      aria-label="${i18n._({
        id: 'modal.aria.close',
        message: 'Close',
        comment: 'Aria label for the close button in modal',
      })}"
      class="${ccModal.headerButton} ${this._hasTopContent ? ccModal.headerCloseButtonOnImage : ccModal.headerCloseButton}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`;
  }
  emitBack() {
    this.dispatchEvent(new CustomEvent('backClicked', { bubbles: true, composed: true }));
  }
  handleTopSlotChange(slotEvent) {
    const topContent = slotEvent.target.assignedElements({ flatten: true });
    this._hasTopContent = !!topContent.length;
  }
  static styles = [WarpElement.styles];
}
