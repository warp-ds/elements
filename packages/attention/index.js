import { css, html, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classes, kebabCaseAttributes, generateRandomId } from '../utils';
import { attention as ccAttention } from '@warp-ds/css/component-classes';
import {
  opposites,
  rotation,
  useRecompute as recompute,
} from '@warp-ds/core/attention';
import { i18n } from '@lingui/core';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { activateI18n } from '../i18n';

class WarpAttention extends kebabCaseAttributes(LitElement) {
  static properties = {
    // Whether Attention element should be visible.
    show: { type: Boolean, reflect: true },
    // Placement according to the target element
    // Arrow would be on the opposite side of this position
    placement: { type: String },
    // Whether Attention element is rendered as a tooltip
    tooltip: { type: Boolean, reflect: true },
    // Whether Attention element is rendered as an inline callout
    callout: { type: Boolean, reflect: true },
    // Whether Attention element is rendered as a popover
    popover: { type: Boolean, reflect: true },
    // Render Attention element without an arrow
    noArrow: { type: Boolean, reflect: true },
  };

  static styles = [
    css`
      @unocss-placeholder
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }

      #arrow {
        border-top-left-radius: 4px;
        z-index: 1;
      }
    `,
  ];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages);

    this.show = false;
    this.tooltip = false;
    this.callout = false;
    this.popover = false;
    this.noArrow = false;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.placement || !Object.keys(opposites).includes(this.placement)) {
      throw new Error(
        `Invalid "placement" attribute. Set its value to one of the following:\n${JSON.stringify(
          Object.keys(opposites),
        )}`,
      );
    }

    // Fix FOUC effect issues
    setTimeout(() => this.requestUpdate(), 0);
  }

  get _actualDirection() {
    return this.placement;
  }

  set _actualDirection(v) {
    this.placement = v;
  }

  get _arrowDirection() {
    return opposites[this.placement];
  }

  updated() {
    if (!this.callout) {
      this._attentionEl.style.setProperty('--attention-visibility', this.show ? '' : 'hidden');
    }

    if (!this.tooltip) {
      this._attentionEl.style.setProperty('--attention-display', this.show ? 'block' : 'none');
    }

    this.attentionState = {
      isShowing: this.show,
      isCallout: this.callout,
      actualDirection: this._actualDirection,
      directionName: this.placement,
      arrowEl: this.renderRoot.querySelector('#arrow'),
      attentionEl: this._attentionEl,
      targetEl: this._targetEl,
      noArrow: this.noArrow,
    };

    // Recompute attention element position on property changes
    recompute(this.attentionState);
  }

  pointingAtDirection() {
    switch (opposites[this._actualDirection]) {
      case 'top':
        return i18n._({
          id: 'attention.pointingUp',
          message: 'pointing up',
          comment:
            'Default screenreader message for top direction in the attention component',
        })
      case 'right':
        return i18n._({
          id: 'attention.pointingRight',
          message: 'pointing right',
          comment:
            'Default screenreader message for right direction in the attention component',
        })
      case 'bottom':
        return i18n._({
          id: 'attention.pointingDown',
          message: 'pointing down',
          comment:
            'Default screenreader message for bottom direction in the attention component',
        })
      case 'left':
        return i18n._({
          id: 'attention.pointingLeft',
          message: 'pointing left',
          comment:
            'Default screenreader message for left direction in the attention component',
        })
      default:
        return ''
    }
  }
  
  activeAttentionType() {
    switch (true) {
      case this.tooltip:
        return i18n._({
          id: 'attention.tooltip',
          message: 'tooltip speech bubble',
          comment:
            'Default screenreader message for tooltip speech bubble in the attention component',
        })
      case this.callout:
        return i18n._({
          id: 'attention.callout',
          message: 'callout speech bubble',
          comment:
            'Default screenreader message for callout speech bubble in the attention component',
        })
      case this.popover:
        return i18n._({
          id: 'attention.popover',
          message: 'popover speech bubble',
          comment:
            'Default screenreader message for popover speech bubble in the attention component',
        })
      default:
        return ''
    }
  }
  
  defaultAriaLabel(){
    return `${this.activeAttentionType()} ${!this.noArrow ? this.pointingAtDirection() : ''}`
  }

  setAriaLabels() {
    if (this._targetEl && !this._targetEl.getAttribute('aria-describedby')) {
      const attentionMessageId = this._messageEl.id || (this._messageEl.id = generateRandomId());
      this._messageEl.setAttribute('role', this.tooltip ? 'tooltip' : 'img');
      this._targetEl.setAttribute('aria-describedby', attentionMessageId);
      this._messageEl.setAttribute('aria-label', this.defaultAriaLabel())
    }
  }

  firstUpdated() {
    this.setAriaLabels();

    // Attention of "callout" type should always be used inline
    if (this.callout) {
      this._attentionEl.style.position = 'relative';
    }
  }

  get _attentionEl() {
    return this.renderRoot.querySelector('#attention');
  }

  get _targetEl() {
    return this.renderRoot.querySelector("slot[name='target']").assignedNodes()[0];
  }

  get _messageEl() {
    return this.renderRoot.querySelector("slot[name='message']").assignedNodes()[0];
  }

  get _wrapperClasses() {
    return classes({
      [ccAttention.base]: true,
      [ccAttention.tooltip]: this.tooltip,
      [ccAttention.callout]: this.callout,
      [ccAttention.popover]: this.popover,
    });
  }

  get _arrowClasses() {
    return classes({
      [ccAttention.arrowBase]: true,
      [ccAttention[`arrowDirection${this._arrowDirection.charAt(0).toUpperCase() + this._arrowDirection.slice(1)}`]]: true,
      [ccAttention.arrowTooltip]: this.tooltip,
      [ccAttention.arrowCallout]: this.callout,
      [ccAttention.arrowPopover]: this.popover,
    });
  }

  get _arrowHtml() {
    return this.noArrow
      ? ''
      : html`<div
          id="arrow"
          role="img"
          class="${this._arrowClasses}"
          style="transform:rotate(${rotation[this._arrowDirection]}deg);
          margin-${
            // border alignment is off by a fraction of a pixel, this fixes it
            this._arrowDirection.charAt(0).toLowerCase() + this._arrowDirection.slice(1)
          }:-0.5px;"
        />`;
  }

  render() {
    return html`
      <div class=${ifDefined(this.className ? this.className : undefined)}>
        ${this.placement === 'right' || this.placement === 'bottom' // Attention's and its arrow's visual position should be reflected in the DOM
          ? html`
              <slot name="target"></slot>
              <div id="attention" class="${this._wrapperClasses}">
                <div>
                  ${this._arrowHtml}
                  <slot name="message"></slot>
                </div>
              </div>
            `
          : html`
              <div id="attention" class="${this._wrapperClasses}">
                <div>
                  <slot name="message"></slot>
                  ${this._arrowHtml}
                </div>
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `;
  }
}

if (!customElements.get('w-attention')) {
  customElements.define('w-attention', WarpAttention);
}

export { WarpAttention };
