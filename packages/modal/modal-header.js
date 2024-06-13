import { html, css, nothing } from 'lit';

import { Move } from '@itsy/animate/move';
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
      <link href="https://assets.finn.no/pkg/@warp-ds/css/v1/resets.css" rel="stylesheet" />
      <div class="relative">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div
          class="${this._hasTopContent ? '' : 'pt-16 sm:pt-24 px-16 sm:px-32 grid gap-12 grid-cols-[auto_1fr_auto] items-start shrink-0!'}">
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
      'mb-0 h3 self-center',
      this.back ? 'justify-self-center' : 'col-span-2',
      this._hasTopContent ? 'pt-16 px-16 sm:px-32' : '',
    ].join(' ');
  }

  get buttonClasses() {
    return 'sm:min-h-[32px] sm:min-w-[32px] min-h-[40px] min-w-[40px] text-m leading-[24] p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding font-bold focusable transition-colors ease-in-out';
  }

  get closeButtonClasses() {
    return [
      this.buttonClasses,
      this._hasTopContent
        ? 'absolute right-8 sm:right-16 top-8 sm:top-16 z-10 s-color-inverted bg-[var(--w-black)/70] hover:bg-[var(--w-black)/85] active:bg-[var(--w-black)] s-text-inverted'
        : 'sm:-mr-8 -mr-12 s-icon bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
    ].join(' ');
  }

  get backButtonClasses() {
    return [
      this.buttonClasses,
      'sm:-ml-8 -ml-12 s-icon bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
    ].join(' ');
  }

  get backButton() {
    return this.back && !this._hasTopContent // Not showing back button when there is a top image
      ? html` <button type="button" class="${this.backButtonClasses}" @click="${this.emitBack}">
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
    return html` <button type="button" class="${this.closeButtonClasses}" @click="${this.close}">
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
    css`
      @unocss-placeholder;
    `,
  ];
}
