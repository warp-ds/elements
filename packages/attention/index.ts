// @warp-css;
import { css, html, LitElement, nothing } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { opposites, directions, arrowDirectionClassname, useRecompute as recompute, Directions } from '@warp-ds/core/attention';
import { attention as ccAttention } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './styles';

import { activateI18n } from '../i18n';
import { generateRandomId } from '../utils/index.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

import '@warp-ds/icons/elements/close-16';

class WarpAttention extends LitElement {
  @property({ type: Boolean, reflect: true })
  show: boolean;

  @property({ type: String, reflect: true })
  placement: Directions;

  @property({ type: Boolean, reflect: true })
  tooltip: boolean;

  @property({ type: Boolean, reflect: true })
  callout: boolean;

  @property({ type: Boolean, reflect: true })
  // @ts-expect-error This was introduced before native HTML popover
  popover: boolean;

  @property({ type: Boolean, reflect: true })
  highlight: boolean;

  @property({ attribute: 'can-close', type: Boolean, reflect: true })
  canClose: boolean;

  @property({ attribute: 'no-arrow', type: Boolean, reflect: true })
  noArrow: boolean;

  @property({ type: Number, reflect: true })
  distance: number;

  @property({ type: Number, reflect: true })
  skidding: number;

  @property({ type: Boolean, reflect: true })
  flip: boolean;

  @property({ attribute: 'cross-axis', type: Boolean, reflect: true })
  crossAxis: boolean;

  @property({ attribute: 'fallback-placements', type: Array, reflect: true })
  fallbackPlacements: Directions[];

  /** @internal */
  attentionState;

  // To store the initial placement value for reference when computing the actual direction
  /** @internal */
  _initialPlacement: Directions;

  static styles = [
    styles,
    css`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }
      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `,
  ];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this.handleDone = this.handleDone.bind(this);

    this.show = false;
    this.placement = 'bottom';
    this.tooltip = false;
    this.callout = false;
    this.popover = false;
    this.highlight = false;
    this.canClose = false;
    this.noArrow = false;
    this.distance = 8;
    this.skidding = 0;
    this.flip = false;
    this.crossAxis = false;
    this._initialPlacement = this.placement;
    this._actualDirection = this.placement;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.placement && !Object.keys(opposites).includes(this.placement)) {
      throw new Error(`Invalid "placement" attribute. Set its value to one of the following:\n${JSON.stringify(Object.keys(opposites))}`);
    }

    if (this.fallbackPlacements && !this.fallbackPlacements.every((fallbackPlacement) => directions.includes(fallbackPlacement))) {
      throw new Error(
        `Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:\n${JSON.stringify(directions)}`,
      );
    }

    // Fix FOUC effect issues
    setTimeout(() => {
      this.requestUpdate();
      this.handleDone(); // Run handleDone initially, to compute correct arrow position etc. directly.
    }, 0);

    if (!this.callout) {
      window.addEventListener('click', this.handleDone);
      window.addEventListener('scroll', this.handleDone);
      window.addEventListener('resize', this.handleDone);
      window.addEventListener('touch', this.handleDone);
    }

    if (this.tooltip) {
      window.addEventListener('mouseover', this.handleDone);
      window.addEventListener('mouseout', this.handleDone);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('click', this.handleDone);
    window.removeEventListener('scroll', this.handleDone);
    window.removeEventListener('resize', this.handleDone);
    window.removeEventListener('touch', this.handleDone);
    window.removeEventListener('mouseover', this.handleDone);
    window.removeEventListener('mouseout', this.handleDone);

    super.disconnectedCallback();
  }

  handleDone() {
    window.requestAnimationFrame(() => {
      if (this.show && this._targetEl && this._attentionEl) {
        recompute(this.attentionState).then((state) => {
          this._actualDirection = state?.actualDirection;
        });
      } else {
        this._actualDirection = this._initialPlacement;
      }
    });
  }

  /** @internal */
  get _actualDirection() {
    return this.placement;
  }

  /** @internal */
  set _actualDirection(v) {
    this.placement = v;
  }

  /** @internal */
  get _arrowEl() {
    return this.renderRoot.querySelector('#arrow');
  }

  /** @internal */
  get _arrowDirection() {
    return opposites[this._actualDirection];
  }

  /** @internal */
  get _arrowClasses() {
    return classNames([
      ccAttention.arrowBase,
      this._activeVariantClasses.arrow,
      ccAttention[`arrowDirection${arrowDirectionClassname(this._arrowDirection)}`],
    ]);
  }

  /** @internal */
  get _arrowHtml() {
    return this.noArrow ? '' : html`<div id="arrow" class="${this._arrowClasses}"></div>`;
  }

  /** @internal */
  get _activeVariantClasses() {
    const variantProps = {
      callout: this.callout,
      popover: this.popover,
      tooltip: this.tooltip,
      highlight: this.highlight,
    };

    const activeVariant = Object.keys(variantProps).find((b) => !!variantProps[b]) || '';

    return {
      wrapper: ccAttention[activeVariant],
      arrow: ccAttention[`arrow${activeVariant.charAt(0).toUpperCase() + activeVariant.slice(1)}`],
    };
  }

  /** @internal */
  get _attentionEl(): HTMLDivElement {
    return this.renderRoot.querySelector('#attention');
  }

  /** @internal */
  get _targetEl(): Element | null {
    const targetSlot: HTMLSlotElement = this.renderRoot?.querySelector("slot[name='target']");
    return targetSlot ? targetSlot.assignedElements()[0] : null;
  }

  /** @internal */
  get _messageEl(): Element | null {
    const messageSlot: HTMLSlotElement = this.renderRoot.querySelector("slot[name='message']");
    return messageSlot ? messageSlot.assignedElements()[0] : null;
  }

  /** @internal */
  get _wrapperClasses() {
    return classNames([ccAttention.base, this._activeVariantClasses.wrapper]);
  }

  /** @internal */
  get _ariaClose() {
    return i18n._({
      id: 'attention.aria.close',
      message: 'Close',
      comment: 'Aria label for the close button in attention',
    });
  }

  /** @internal */
  get _closeBtnHtml() {
    return html`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${ccAttention.closeBtn}">
        <w-icon-close-16 style="height: 16px; width: 16px; display: flex;"></w-icon-close-16>
      </button>
    `;
  }

  updated() {
    if (!this.callout) {
      this._attentionEl.style.setProperty('--attention-visibility', this.show ? '' : 'hidden');
    }

    if (!this.tooltip) {
      this._attentionEl.style.setProperty('--attention-display', this.show ? 'flex' : 'none');
    }

    this.attentionState = {
      isShowing: this.show,
      isCallout: this.callout,
      actualDirection: this._actualDirection,
      directionName: this.placement,
      arrowEl: this._arrowEl,
      attentionEl: this._attentionEl,
      targetEl: this._targetEl,
      noArrow: this.noArrow,
      distance: this.distance,
      skidding: this.skidding,
      flip: this.flip,
      crossAxis: this.crossAxis,
      fallbackPlacements: this.fallbackPlacements,
    };

    // We need to recompute here as well if this._actualDirection gets updated immediately when this.show is true (in this.handleDone()).
    // Otherwise this._arrowDirection will get this._initialPlacement's value and will only be updated on next click/scroll/resize
    recompute(this.attentionState);
  }

  pointingAtDirection() {
    switch (opposites[this._actualDirection]) {
      case 'top-start':
      case 'top':
      case 'top-end':
        return i18n._({
          id: 'attention.aria.pointingUp',
          message: 'pointing up',
          comment: 'Default screenreader message for top direction in the attention component',
        });
      case 'right-start':
      case 'right':
      case 'right-end':
        return i18n._({
          id: 'attention.aria.pointingRight',
          message: 'pointing right',
          comment: 'Default screenreader message for right direction in the attention component',
        });
      case 'bottom-start':
      case 'bottom':
      case 'bottom-end':
        return i18n._({
          id: 'attention.aria.pointingDown',
          message: 'pointing down',
          comment: 'Default screenreader message for bottom direction in the attention component',
        });
      case 'left-start':
      case 'left':
      case 'left-end':
        return i18n._({
          id: 'attention.aria.pointingLeft',
          message: 'pointing left',
          comment: 'Default screenreader message for left direction in the attention component',
        });
      default:
        return '';
    }
  }

  activeAttentionType() {
    switch (true) {
      case this.tooltip:
        return i18n._({
          id: 'attention.aria.tooltip',
          message: 'tooltip',
          comment: 'Default screenreader message for tooltip in the attention component',
        });
      case this.callout:
        return i18n._({
          id: 'attention.aria.callout',
          message: 'callout speech bubble',
          comment: 'Default screenreader message for callout speech bubble in the attention component',
        });
      case this.popover:
        return i18n._({
          id: 'attention.aria.popover',
          message: 'popover speech bubble',
          comment: 'Default screenreader message for popover speech bubble in the attention component',
        });
      case this.highlight:
        return i18n._({
          id: 'attention.aria.highlight',
          message: 'highlighted speech bubble',
          comment: 'Default screenreader message for highlighted speech bubble in the attention component',
        });
      default:
        return '';
    }
  }

  defaultAriaLabel() {
    return `${this.activeAttentionType()} ${!this.noArrow ? this.pointingAtDirection() : ''}`;
  }
  setAriaLabels() {
    if (this._targetEl && !this._targetEl.getAttribute('aria-details')) {
      const attentionMessageId = this._messageEl.id || (this._messageEl.id = generateRandomId());
      this._targetEl.setAttribute('aria-details', attentionMessageId);
    }
  }

  firstUpdated() {
    this._initialPlacement = this.placement;
    this.setAriaLabels();

    // Attention of "callout" type should always be used inline
    if (this.callout) {
      this._attentionEl.style.position = 'relative';
    }
  }

  close() {
    const event = new CustomEvent('close', {
      bubbles: true,
      composed: true,
    });
    this.updateComplete.then(() => this.dispatchEvent(event));
  }

  keypressed(e: KeyboardEvent) {
    if (!this.canClose) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      this.close();
    }
  }

  render() {
    if (!this.callout && this._targetEl === undefined) return html``;
    return html`
      <div class=${ifDefined(this.className ? this.className : undefined)}>
        ${this.placement === 'right-start' ||
        this.placement === 'right' ||
        this.placement === 'right-end' ||
        this.placement === 'bottom-start' ||
        this.placement === 'bottom' ||
        this.placement === 'bottom-end' // Attention's and its arrow's visual position should be reflected in the DOM
          ? html`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip ? 'tooltip' : 'img'}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose ? this._closeBtnHtml : nothing}
              </div>
            `
          : html`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip ? 'tooltip' : 'img'}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose ? this._closeBtnHtml : nothing}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `;
  }
}

if (!customElements.get('w-attention')) {
  // @ts-expect-error Overriding native HTML popover global attribute
  customElements.define('w-attention', WarpAttention);
}

export { WarpAttention };
