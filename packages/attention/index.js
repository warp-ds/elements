import { css, html, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classes, kebabCaseAttributes, generateRandomId } from '../utils';
import { attention as c } from '@warp-ds/component-classes';
import {
  opposites,
  rotation,
  arrowLabels,
  useRecompute as recompute,
} from '@warp-ds/core/attention';
import { styles } from '../../dist/elements.min.js';

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
    styles,
    css`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      #arrow {
        border-top-left-radius: 4px;
        z-index: 1;
      }
    `,
  ];

  constructor() {
    super();

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

  setAriaLabels() {
    if (this._targetEl && !this._targetEl.getAttribute('aria-describedby')) {
      const attentionMessageId = this._messageEl.id || (this._messageEl.id = generateRandomId());
      this._messageEl.setAttribute('role', 'tooltip');
      this._targetEl.setAttribute('aria-describedby', attentionMessageId);
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
      [c.base]: true,
      [c.tooltip]: this.tooltip,
      [c.callout]: this.callout,
      [c.popover]: this.popover,
    });
  }

  get _arrowClasses() {
    return classes({
      [c.arrowBase]: true,
      [`-top-8`]: this._arrowDirection === 'top',
      [`-right-8`]: this._arrowDirection === 'right',
      [`-bottom-8`]: this._arrowDirection === 'bottom',
      [`-left-8`]: this._arrowDirection === 'left',
      [c.arrowTooltip]: this.tooltip,
      [c.arrowCallout]: this.callout,
      [c.arrowPopover]: this.popover,
    });
  }

  get _arrowHtml() {
    return this.noArrow
      ? ''
      : html`<div
          id="arrow"
          role="img"
          aria-label=${arrowLabels[this._arrowDirection]}
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

if (!customElements.get('f-attention')) {
  customElements.define('f-attention', WarpAttention);
}

export { WarpAttention };
