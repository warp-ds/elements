import { css, html } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { box as ccBox, expandable as ccExpandable } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { ifDefined } from 'lit/directives/if-defined.js';

import { kebabCaseAttributes } from '../utils';

import '@warp-ds/icons/elements/chevron-down-16';
import '@warp-ds/icons/elements/chevron-up-16';

class WarpExpandable extends kebabCaseAttributes(WarpElement) {
  static properties = {
    expanded: { type: Boolean, reflect: true },
    title: { type: String },
    box: { type: Boolean },
    bleed: { type: Boolean },
    buttonClass: { type: String },
    contentClass: { type: String },
    noChevron: { type: Boolean },
    animated: { type: Boolean },
    headingLevel: { type: Number },
    _hasTitle: { type: Boolean, state: true },
    _stateExpanded: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.expanded = false;
    this.animated = false;
    this.box = false;
    this.bleed = false;
    this.noChevron = false;
    this._hasTitle = true;
    this._stateExpanded = this.expanded;
  }

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [
    WarpElement.styles,
    css`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `,
  ];

  updated(changedProperties) {
    if (changedProperties.has('expanded')) {
      this._stateExpanded = this.expanded;
    }
  }

  firstUpdated() {
    this._hasTitle = !!this.title || this.renderRoot.querySelector("slot[name='title']").assignedNodes().length > 0;
  }

  _toggleExpandable() {
    this.expanded = !this._stateExpanded;
  }

  get #wrapperClasses() {
    return classNames([ccExpandable.expandable, this.box && ccExpandable.expandableBox, this.bleed && ccExpandable.expandableBleed]);
  }

  get #buttonClasses() {
    return classNames(this.buttonClass, [ccExpandable.button, this.box && ccExpandable.buttonBox]);
  }

  get #chevronClasses() {
    return classNames([ccExpandable.chevron, !this.box && ccExpandable.chevronNonBox]);
  }

  get #chevronIcon() {
    const upClasses = classNames([ccExpandable.elementsChevronUpTransform, !this._stateExpanded && ccExpandable.elementsChevronCollapse]);
    const downClasses = classNames([ccExpandable.elementsChevronDownTransform, this._stateExpanded && ccExpandable.elementsChevronExpand]);

    return this._stateExpanded
      ? html`<w-icon-chevron-up-16 class="${upClasses}"></w-icon-chevron-up-16>`
      : html`<w-icon-chevron-down-16 class="${downClasses}"></w-icon-chevron-down-16>`;
  }

  get #contentClasses() {
    return classNames(this.contentClass, [this.box && ccBox.box, this._hasTitle && this.box && ccExpandable.paddingTop]);
  }

  get #expansionClasses() {
    return classNames([ccExpandable.expansion, !this._stateExpanded && ccExpandable.expansionNotExpanded]);
  }

  get _expandableSlot() {
    return html`<div class="${this.#contentClasses}">
      <slot></slot>
    </div>`;
  }

  render() {
    return html` <div class="${this.#wrapperClasses}">
      ${this._hasTitle
        ? html`<w-unstyled-heading level=${this.headingLevel}>
            <button type="button" aria-expanded="${this._stateExpanded}" class="${this.#buttonClasses}" @click=${this._toggleExpandable}>
              <div class="${ccExpandable.title}">
                ${this.title ? html`<span class="${ccExpandable.titleType}">${this.title}</span>` : html`<slot name="title"></slot>`}
                ${this.noChevron ? '' : html`<div class="${this.#chevronClasses}">${this.#chevronIcon}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`
        : ''}
      ${this.animated
        ? html`<w-expand-transition ?show=${this._stateExpanded}> ${this._expandableSlot} </w-expand-transition>`
        : html`<div class="${this.#expansionClasses}" aria-hidden=${ifDefined(!this._stateExpanded ? true : undefined)}>
            ${this._expandableSlot}
          </div>`}
    </div>`;
  }
}

if (!customElements.get('w-expandable')) {
  customElements.define('w-expandable', WarpExpandable);
}

export { WarpExpandable };
