import { html, css } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { card as ccCard } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { ifDefined } from 'lit/directives/if-defined.js';

import { activateI18n } from '../i18n';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';

const keys = {
  ENTER: 'Enter',
  SPACE: ' ',
};

class WarpCard extends WarpElement {
  static properties = {
    selected: { type: Boolean, reflect: true },
    flat: { type: Boolean },
    clickable: { type: Boolean },
  };

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages);

    this.selected = false;
    this.flat = false;
    this.clickable = false;
    this.buttonText = i18n._({
      id: 'card.button.text',
      message: 'Select',
      comment: 'Screenreader message to indicate that the card is clickable',
    });

    const href = this.getAttribute('href');

    // Add href property, to use for anchor tag.
    if (href) {
      this.href = href;
    }
  }

  static styles = [
    WarpElement.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

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

  keypressed(e) {
    if (!this.clickable || e.altKey || e.ctrlKey) return;
    if (e.key === keys.ENTER || e.key === keys.SPACE) {
      e.preventDefault();
      this.click();
    }
  }

  render() {
    const content = html`
      <div tabindex=${ifDefined(this.clickable ? '0' : undefined)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat ? '' : html`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `;

    if (this.href) {
      return html`<a style="text-decoration: none" href="${this.href}">${content}</a> `;
    } else {
      return content;
    }
  }
}

if (!customElements.get('w-card')) {
  customElements.define('w-card', WarpCard);
}

export { WarpCard };
