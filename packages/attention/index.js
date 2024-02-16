import { css, html, nothing } from 'lit';
import WarpElement from '@warp-ds/elements-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classes, kebabCaseAttributes, generateRandomId } from '../utils';
import { attention as ccAttention } from '@warp-ds/css/component-classes';
import {
  opposites,
  useRecompute as recompute
} from '@warp-ds/core/attention'
import { i18n } from '@lingui/core'
import { messages as enMessages } from './locales/en/messages.mjs'
import { messages as nbMessages } from './locales/nb/messages.mjs'
import { messages as fiMessages } from './locales/fi/messages.mjs'
import { activateI18n } from '../i18n'
import '@warp-ds/icons/elements/close-16'

class WarpAttention extends kebabCaseAttributes(WarpElement) {
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
    // Whether Attention element is rendered as a highlight
    highlight: { type: Boolean, reflect: true },
    // Render Attention element with a close button
    canClose: { type: Boolean, reflect: true },
    // Render Attention element without an arrow
    noArrow: { type: Boolean, reflect: true },
    // Distance from which to offset the attentionEl from the targetEl vertically
    distance: { type: Number, reflect: true },
    // Distance from which to offset the attentionEl along its targetEl horizontally
    skidding: { type: Number, reflect: true }
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

    this.handleDone = this.handleDone.bind(this)

    this.show = false
    this.tooltip = false
    this.callout = false
    this.popover = false
    this.highlight = false
    this.canClose = false
    this.noArrow = false
    this.distance = 8
    this.skidding = 0
    this._initialPlacement = this.placement
    this._actualDirection = this.placement
    this._isShowing = this.show
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

    // Fix FOUC effect issues
    setTimeout(() => this.requestUpdate(), 0)

    if (!this.callout) {
      window.addEventListener('click', this.handleDone);
      window.addEventListener('scroll', this.handleDone);
      window.addEventListener('resize', this.handleDone);
      window.addEventListener('touch', this.handleDone);
    }
    
    if (this.tooltip) {
      window.addEventListener('mouseover', this.handleDone)
      window.addEventListener('mouseout', this.handleDone)
    }
  }

  disconnectedCallback() {
    window.removeEventListener('click', this.handleDone);
    window.removeEventListener('scroll', this.handleDone);
    window.removeEventListener('resize', this.handleDone);
    window.removeEventListener('touch', this.handleDone);
    window.removeEventListener('mouseover', this.handleDone);
    window.removeEventListener('mouseout', this.handleDone);

    super.disconnectedCallback()

  }

   handleDone() {
     window.requestAnimationFrame(() => {
    if(this._isShowing && this._targetEl && this._attentionEl) {
        recompute(this.attentionState).then((state) => {
          this._actualDirection = state?.actualDirection
          this._isShowing = state?.isShowing
        })
      } 
      else {
        this._actualDirection = this._initialPlacement
        this._isShowing = false
      }
    })
  }

  get _actualDirection() {
    return this.placement
  }

  set _actualDirection(v) {
      this.placement = v
  }

  get _isShowing() {
    return this.show
  }

  set _isShowing(v) {
    return this.show = v
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
      direction = this._arrowDirection?.charAt(0).toUpperCase() + this._arrowDirection?.slice(1)
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
          this._isShowing ? '' : 'hidden'
        )
      }
  
      if (!this.tooltip) {
        this._attentionEl.style.setProperty(
          '--attention-display',
          this._isShowing ? 'flex' : 'none'
        )
      }
      
      this.attentionState = {
        isShowing: this._isShowing,
        isCallout: this.callout,
        actualDirection: this._actualDirection,
        directionName: this.placement, 
        arrowEl: this._arrowEl,
        attentionEl: this._attentionEl,
        targetEl: this._targetEl,
        noArrow: this.noArrow,
        distance: this.distance,
        skidding: this.skidding,
      }

      // We need to recompute here as well if this._actualDirection gets updated immediately when this._isShowing is true (in this.handleDone()).
      // Otherwise this._arrowDirection will get this._initialPlacement's value and will only be updated on next click/scroll/resize
      recompute(this.attentionState)
    }

  pointingAtDirection() {
    switch (opposites[this._actualDirection]) {
      case 'top-start':
      case 'top':
      case 'top-end':
        return i18n._({
          id: 'attention.aria.pointingUp',
          message: 'pointing up',
          comment:
            'Default screenreader message for top direction in the attention component',
        })
      case 'right-start':
      case 'right':
      case 'right-end':
        return i18n._({
          id: 'attention.aria.pointingRight',
          message: 'pointing right',
          comment:
            'Default screenreader message for right direction in the attention component',
        })
      case 'bottom-start':
      case 'bottom':
      case 'bottom-end':
        return i18n._({
          id: 'attention.aria.pointingDown',
          message: 'pointing down',
          comment:
            'Default screenreader message for bottom direction in the attention component',
        })
      case 'left-start':
      case 'left':
      case 'left-end':
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
    this._initialPlacement = this.placement

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
        ${this.placement === 'right-start' || this.placement === 'right' || this.placement === 'right-end' || this.placement === 'bottom-start' || this.placement === 'bottom' || this.placement === 'bottom-end' // Attention's and its arrow's visual position should be reflected in the DOM
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
