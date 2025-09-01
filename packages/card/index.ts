import { html, css } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { card as ccCard } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { activateI18n } from '../i18n.js';
import { components, reset } from '../styles.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

const keys = {
  ENTER: 'Enter',
  SPACE: ' ',
};

class WarpCard extends WarpElement {
  static styles = [
    reset,
    components,
    css`
      a::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  @property({ type: Boolean })
  flat: boolean = false;

  @property({ type: Boolean })
  clickable: boolean = false;

  buttonText: string;

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this.buttonText = i18n._({
      id: 'card.button.text',
      message: 'Select',
      comment: 'Screenreader message to indicate that the card is clickable',
    });
  }

  get _containerClasses() {
    return classNames([
      ccCard.base,
      this.flat ? ccCard.flat : ccCard.shadow,
      this.selected && !this.flat && ccCard.selected,
      this.selected && this.flat ? ccCard.flatSelected : ccCard.flatUnselected,
    ]);
  }

  get _outlineClasses() {
    return classNames([ccCard.outline, this.selected ? ccCard.outlineSelected : ccCard.outlineUnselected]);
  }

  get _interactiveElement() {
    const renderButton = () =>
      html`<button class="${ccCard.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`;
    const renderSpan = () => html`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;

    return this.clickable ? renderButton() : this.selected ? renderSpan() : '';
  }

  keypressed(e: KeyboardEvent) {
    if (!this.clickable || e.altKey || e.ctrlKey) return;
    if (e.key === keys.ENTER || e.key === keys.SPACE) {
      e.preventDefault();
      this.click();
    }
  }

  render() {
    return html`
      <div tabindex=${ifDefined(this.clickable ? '0' : undefined)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat ? '' : html`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-card')) {
  customElements.define('w-card', WarpCard);
}

export { WarpCard };
