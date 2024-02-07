import { css, html, nothing } from 'lit';
import WarpElement from '@warp-ds/elements-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classes, kebabCaseAttributes, generateRandomId } from '../utils';
import { attention as ccAttention } from '@warp-ds/css/component-classes';
import {
  opposites,
  rotation,
  autoUpdatePosition,
  computeCalloutArrow,
} from '@warp-ds/core/attention'
import { i18n } from '@lingui/core'
import { messages as enMessages } from './locales/en/messages.mjs'
import { messages as nbMessages } from './locales/nb/messages.mjs'
import { messages as fiMessages } from './locales/fi/messages.mjs'
import { activateI18n } from '../i18n'
import '@warp-ds/icons/elements/close-16'

const fallbackDirectionTypes = [
  "none",
  "start",
  "end"
]

class WarpAttention extends kebabCaseAttributes(WarpElement) {
  static properties = {
    // Whether Attention element should be visible.
    show: { type: Boolean, reflect: true },
    // Placement according to the target element
    // Arrow would be on the opposite side of this position
    placement: { type: String, value: 'bottom' },
    fallbackDirection: { type: String, value: 'none' },
    // Whether Attention element is rendered as a tooltip
    tooltip: { type: Boolean, reflect: true },
    // Whether Attention element is rendered as an inline callout
    callout: { type: Boolean, reflect: true },
    // Whether Attention element is rendered as a popover
    popover: { type: Boolean, reflect: true },
    // Whether Attention element is rendered as a highlight
    highlight: { type: Boolean, reflect: true },
    // Render Attention element with a close button
    canClose: { type: Boolean, reflect: true },
    // Render Attention element without an arrow
    noArrow: { type: Boolean, reflect: true },
    _cleanup: { state: true },
  }

  static styles = [WarpElement.styles,
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

      #arrow {
        border-top-left-radius: 4px;
        z-index: 1;
      }
    `,
  ]

  constructor() {
    super()
    activateI18n(enMessages, nbMessages, fiMessages)

    this.show = false
    this.tooltip = false
    this.callout = false
    this.popover = false
    this.highlight = false
    this.canClose = false
    this.noArrow = false
    this._cleanup = null
    this._actualDirection = this.placement
  }

  connectedCallback() {
    // this.actualDirection is undefined if I remove this line:
    this.actualDirection = this.placement
    // I'm guessing that this makes sure that this.actualDirection is initialized to this.placement,
    // but I thought that was already being taken care of in the constructor

    super.connectedCallback()
    if (!this.placement || !Object.keys(opposites).includes(this.placement)) {
      throw new Error(
        `Invalid "placement" attribute. Set its value to one of the following:\n${JSON.stringify(
          Object.keys(opposites)
        )}`
      )
    }
    if (!fallbackDirectionTypes.includes(this.fallbackDirection)) {
      throw new Error(
        `Invalid "fallbackDirection" attribute. Set its value to one of the following:\n${JSON.stringify(
          fallbackDirectionTypes
        )}`
      )
    }

    // Fix FOUC effect issues
    setTimeout(() => this.requestUpdate(), 0)
  }


  get actualDirection() {
    return this._actualDirection
  }

  set actualDirection(v) {
      this._actualDirection = v
  }


  get _arrowEl() {
    return this.renderRoot.querySelector('#arrow')
  }

  get _arrowDirection() {
    return opposites[this.actualDirection]
  }
  get _arrowDirectionClass() {
    let direction;
    if (/-/.test(this._arrowDirection)) {
      direction = this._arrowDirection
      .split('-')
        .map((d) => d.charAt(0).toUpperCase() + d.slice(1))
        .join('')
    } else {
      direction = this._arrowDirection.charAt(0).toUpperCase() + this._arrowDirection.slice(1)
    }
    return `arrowDirection${direction}`
  }

  get _arrowClasses() {
    return classes({
      [ccAttention.arrowBase]: true,
      [ccAttention[this._arrowDirectionClass]]: true,
      [this._activeVariantClasses.arrow]: true
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
            this._arrowDirectionClass}:-0.5px;"
        />`
  }

  get _activeVariantClasses() {
    const variantProps = {
      callout: this.callout,
      popover: this.popover,
      tooltip: this.tooltip,
      highlight: this.highlight
    }

    const activeVariant = Object.keys(variantProps).find(b => !!variantProps[b]) || '';

    return {
      wrapper: ccAttention[activeVariant],
      arrow: ccAttention[`arrow${activeVariant.charAt(0).toUpperCase() + activeVariant.slice(1)}`]
    }
  };

  get _attentionEl() {
    return this.renderRoot
    .querySelector('#attention')
  }

  get _targetEl() {
    const targetSlot = this.renderRoot.querySelector("slot[name='target']");
    return targetSlot ? targetSlot.assignedNodes()[0] : null;
  }

  get _messageEl() {
    const messageSlot = this.renderRoot.querySelector("slot[name='message']")
    return messageSlot ? messageSlot.assignedNodes()[0] : null;
  }

  get _wrapperClasses() {
    return classes({
      [ccAttention.base]: true,
      [this._activeVariantClasses.wrapper]: true
    });
  }

  get _ariaClose() {
    return i18n._({
      id: 'attention.aria.close',
      message: 'Close',
      comment:
        'Aria label for the close button in attention',
    })
  }
  
  get _closeBtnHtml() {
    return html`
      <button 
        aria-label="${this._ariaClose}"
        @click="${this.close}"
        @keydown=${this.keypressed}
        class="${ccAttention.closeBtn}"
      >
        <w-icon-close-16 />
      </button>
    `
  }

  updated () {
      if (!this.callout) {
        this._attentionEl.style.setProperty(
          '--attention-visibility',
          this.show ? '' : 'hidden'
        )
      }
  
      if (!this.tooltip) {
        this._attentionEl.style.setProperty(
          '--attention-display',
          this.show ? 'flex' : 'none'
        )
      }
    }
    
    async willUpdate(changedProperties) {
      this.attentionState = {
        isShowing: this.show,
        isCallout: this.callout,
        actualDirection: this.actualDirection,
        directionName: this.placement,
        arrowEl: this._arrowEl,
        attentionEl: this._attentionEl,
        fallbackDirection: this.fallbackDirection,
        targetEl: this._targetEl,
        noArrow: this.noArrow
      }

      if (changedProperties.has('callout')) {
        if(this.callout) {
          computeCalloutArrow(this.actualDirection, this.placement, this._arrowEl)
        }
      }
      
      if (changedProperties.has('show')) {      
        if (!this._cleanup && this._targetEl && this.show && this._attentionEl) {
          await this.updateComplete;
          this._cleanup = autoUpdatePosition(this.attentionState)
        } else if (!this.show && this._cleanup) {
          await this.updateComplete;
          this._cleanup()
          this._cleanup = null
          console.log("this.show: ", this.show);
        }
      }
    }

  pointingAtDirection() {
    switch (opposites[this.actualDirection]) {
      case 'top':
        return i18n._({
          id: 'attention.aria.pointingUp',
          message: 'pointing up',
          comment:
            'Default screenreader message for top direction in the attention component',
        })
      case 'right':
        return i18n._({
          id: 'attention.aria.pointingRight',
          message: 'pointing right',
          comment:
            'Default screenreader message for right direction in the attention component',
        })
      case 'bottom':
        return i18n._({
          id: 'attention.aria.pointingDown',
          message: 'pointing down',
          comment:
            'Default screenreader message for bottom direction in the attention component',
        })
      case 'left':
        return i18n._({
          id: 'attention.aria.pointingLeft',
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
          id: 'attention.aria.tooltip',
          message: 'tooltip',
          comment:
            'Default screenreader message for tooltip in the attention component',
        })
      case this.callout:
        return i18n._({
          id: 'attention.aria.callout',
          message: 'callout speech bubble',
          comment:
            'Default screenreader message for callout speech bubble in the attention component',
        })
      case this.popover:
        return i18n._({
          id: 'attention.aria.popover',
          message: 'popover speech bubble',
          comment:
            'Default screenreader message for popover speech bubble in the attention component',
        })
      case this.highlight:
        return i18n._({
          id: 'attention.aria.highlight',
          message: 'highlighted speech bubble',
          comment:
            'Default screenreader message for highlighted speech bubble in the attention component',
        })
      default:
        return ''
    }
  }

  defaultAriaLabel() {
    return `${this.activeAttentionType()} ${
      !this.noArrow ? this.pointingAtDirection() : ''
    }`
  }
  setAriaLabels() {
    if (this._targetEl && !this._targetEl.getAttribute('aria-details')) {
      const attentionMessageId =
        this._messageEl.id || (this._messageEl.id = generateRandomId())
      this._targetEl.setAttribute('aria-details', attentionMessageId)
    }
  }
  

  firstUpdated() {
    this.setAriaLabels()

    // Attention of "callout" type should always be used inline
    if (this.callout) {
      this._attentionEl.style.position = 'relative'
    }
  }
  
  close() {
    const event = new CustomEvent('close', {
      bubbles: true,
      composed: true,
    });
    this.updateComplete.then(() => this.dispatchEvent(event));
  }

  keypressed(e) {
    if (!this.canClose) return;
    if (e.key === "Escape") {
      e.preventDefault();
      this.close();
    }
  }

  

  render() {
    return html`
      <div class=${ifDefined(this.className ? this.className : undefined)}>
        ${this.placement === 'right' || this.placement === 'bottom' // Attention's and its arrow's visual position should be reflected in the DOM
          ? html`
              <slot name="target"></slot>

              <div
                id="attention"
                role="${this.tooltip ? 'tooltip' : 'img'}"
                aria-label="${this.defaultAriaLabel()}"
                class="${this._wrapperClasses}"
              >
                ${this._arrowHtml}
                <slot name="message"></slot>
                ${this.canClose ? this._closeBtnHtml : nothing}
              </div>
            `
          : html`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                ${this._arrowHtml}
                ${this.canClose ? this._closeBtnHtml : nothing}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `
  }
}

if (!customElements.get('w-attention')) {
  customElements.define('w-attention', WarpAttention)
}

export { WarpAttention }
