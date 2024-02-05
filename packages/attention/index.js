import { css, html, nothing } from 'lit';
import WarpElement from '@warp-ds/elements-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classes, kebabCaseAttributes, generateRandomId } from '../utils';
import { attention as ccAttention } from '@warp-ds/css/component-classes';
import {
  opposites,
  rotation,
  useRecompute as recompute,
} from '@warp-ds/core/attention'
import {
  computePosition,
  flip,
  offset,
  shift,
  arrow,
  autoUpdate,
} from '@floating-ui/dom'
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
    placement: { type: String, reflect: true },
    fallbackDirection: { type: String },
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
    _actualDirection: { state: true, type: String }
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
    this.placement = "bottom"
    this.fallbackDirection = "none"
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
  get _directionName() {
    return this.placement
  }

  get _arrowEl() {
    return this.renderRoot.querySelector('#arrow')
  }

  get _arrowDirection() {
    return opposites[this._actualDirection]
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
    return this.renderRoot
   .querySelector("slot[name='target']")
   .assignedNodes()[0]
  }

  get _messageEl() {
    return this.renderRoot
      .querySelector("slot[name='message']")
      .assignedNodes()[0]
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

  updatePosition = () => {
    console.log("this.placement: ", this.placement);

    if (!this._attentionEl) return
      computePosition(this._targetEl, this._attentionEl, {
        placement: this.placement,
        middleware: [
          offset(8),
          flip({ fallbackAxisSideDirection: this.fallbackDirection, fallbackStrategy: 'initialPlacement' }),
          shift({ padding: 16 }),
          !this.noArrow && this._arrowEl && arrow({ element: this._arrowEl })]
        }).then(({ x, y, middlewareData, placement}) => {
          this._actualDirection = placement
          console.log("this._actualDirection: ", this._actualDirection);
          Object.assign(this._attentionEl?.style, {
            left: `${x}px`,
            top: `${y}px`,
          })

            if (middlewareData.arrow) {
              const { x, y } = middlewareData.arrow
              console.log("placement: ", placement);
              Object.assign(this._arrowEl.style || {}, {
                // TODO: temporary fix, for some reason left-start and right-start positions the arrowEL slightly too far from the attentionEl
                left: x ? placement.includes("-start") ? `${x - 12}px` : `${x}px` : '',
                top: y ? placement.includes("-start") ? `${y - 12}px` : `${y}px` : '',
              });
            }
          });    
    }

  updated(changedProperties) {
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
      
      this.attentionState = {
        isShowing: this.show,
        isCallout: this.callout,
        actualDirection: this._actualDirection,
        directionName: this._directionName,
        arrowEl: this._arrowEl,
      }
      // Recompute attention element position on property changes
      if (changedProperties.has('placement')) {
        console.log("do we reach recompute?");
        recompute(this.attentionState, this.updatePosition)
      }
  
      if (changedProperties.has('show')) {
        console.log("in the if-statement when show-prop has changed", !this._cleanup && this._targetEl && this.show);
        if (!this._cleanup && this._targetEl && this.show && this._attentionEl) {
          console.log("start autoUpdate");
          this._cleanup = autoUpdate(this._targetEl, this._attentionEl, this.updatePosition);
        } else if (this._cleanup) {
          console.log("cleanup: ", this._cleanup);
          this._cleanup();
          this._cleanup = null;
          console.log("this.show: ", this.show);
        }
      }
    }

  pointingAtDirection() {
    switch (opposites[this._actualDirection]) {
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
