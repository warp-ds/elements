import { html, css, nothing } from 'lit';

import { Move } from '@itsy/animate/move';
import { modalElement as ccModal } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { createRef, ref } from 'lit/directives/ref.js';

import { CanCloseMixin } from './util.js';

const NO_CLOSE_BUTTON = 'no-close';

export class ModalHeader extends CanCloseMixin(WarpElement) {
  titleEl = createRef();

  static properties = {
    title: { type: String },
    back: { type: Boolean },
    [NO_CLOSE_BUTTON]: { type: Boolean },
    _hasTopContent: { state: true },
  };
  constructor() {
    super();
    this._hasTopContent = false;
  }
  render() {
    return html`
      <div class="${ccModal.header}">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent ? '' : ccModal.headerTitleBar}">
          ${this.backButton}
          <h1 ${ref(this.titleEl)} class="${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `;
  }

  async willUpdate(changedProperties) {
    if (changedProperties.has('back')) {
      const move = new Move(this.titleEl.value);
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
      ? html` <button type="button" class="${ccModal.headerButton} ${ccModal.headerButtonLeft}" @click="${this.emitBack}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <title>Leftward-pointing arrow</title>
            <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M7.444 11.75 4.111 8l3.333-3.75"></path>
          </svg>
        </button>`
      : nothing;
  }
  get closeButton() {
    if (this[NO_CLOSE_BUTTON]) return nothing;
    return html` <button
      type="button"
      class="${ccModal.headerButton} ${this._hasTopContent ? ccModal.headerCloseButtonOnImage : ccModal.headerCloseButton}"
      @click="${this.close}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9M3.5 3.5l9 9"></path>
      </svg>
    </button>`;
  }
  emitBack() {
    this.dispatchEvent(new CustomEvent('backClicked', { bubbles: true, composed: true }));
  }
  handleTopSlotChange(slotEvent) {
    const topContent = slotEvent.target.assignedElements({ flatten: true });
    this._hasTopContent = !!topContent.length;
  }
  static styles = [
    WarpElement.styles,
    css`
      @unocss-placeholder;
    `,
  ];
}
