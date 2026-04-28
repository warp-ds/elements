// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import {
  Directions,
  directions,
  opposites,
  useRecompute as recompute,
} from '@warp-ds/core/attention';
import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { activateI18n, detectLocale } from '../i18n';
import { reset } from '../styles';

import { styles as layoutStyles } from './layout-styles';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { styles } from './styles';

import '../icon/icon.js';
import '../button/button.js';

import type { AttentionState } from '@warp-ds/core/attention';
import type { TemplateResult } from 'lit';

const buttonTextSizes = {
  medium: 'text-m leading-[24]',
  xsmall: 'text-xs',
};

const buttonColors = {
  primary:
    's-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]',
  secondary: 's-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active',
  utility: 's-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active',
  destructive: 's-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active',
  pill: 's-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
  disabled: 's-text-inverted s-bg-disabled',
  quiet: 'bg-transparent s-text-link hover:s-bg-hover active:s-bg-active',
  utilityQuiet: 's-text bg-transparent hover:s-bg-hover active:s-bg-active',
  negativeQuiet: 'bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active',
  loading: 's-text s-bg-subtle',
  link: 's-text-link',
};

const buttonDefaultStyling = 'font-bold focusable justify-center transition-colors ease-in-out';
const buttonTypes = {
  primary: `border-0 rounded-8 ${buttonDefaultStyling}`,
  secondary: `border-2 rounded-8 ${buttonDefaultStyling}`,
  utility: `border rounded-4 ${buttonDefaultStyling}`,
  negative: `border-0 rounded-8 ${buttonDefaultStyling}`,
  pill: `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonDefaultStyling}`,
  link: `bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${buttonColors.link}`,
};

const ccAttention = {
  base: 'border-2 relative flex items-center',
  tooltip: 's-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted rounded-4 py-6 px-8',
  callout: 'bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8',
  highlight:
    'bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0',
  popover:
    'bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0',

  arrowBase: 'absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform',
  arrowDirectionLeftStart: '-left-[8px]',
  arrowDirectionLeft: '-left-[8px]',
  arrowDirectionLeftEnd: '-left-[8px]',
  arrowDirectionRightStart: '-right-[8px]',
  arrowDirectionRight: '-right-[8px]',
  arrowDirectionRightEnd: '-right-[8px]',
  arrowDirectionBottomStart: '-bottom-[8px]',
  arrowDirectionBottom: '-bottom-[8px]',
  arrowDirectionBottomEnd: '-bottom-[8px]',
  arrowDirectionTopStart: '-top-[8px]',
  arrowDirectionTop: '-top-[8px]',
  arrowDirectionTopEnd: '-top-[8px]',
  arrowTooltip: 's-bg-inverted border-[--w-s-color-background-inverted]',
  arrowCallout: 'bg-[--w-color-callout-background] border-[--w-color-callout-border]',
  arrowPopover: 'bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]',
  arrowHighlight: 'bg-[--w-color-callout-background] border-[--w-color-callout-border]',

  content: 'last-child:mb-0',
  notCallout: 'absolute z-50',
};

const arrowDirectionClassByDirection: Record<Directions, string> = {
  'top-start': ccAttention.arrowDirectionTopStart,
  top: ccAttention.arrowDirectionTop,
  'top-end': ccAttention.arrowDirectionTopEnd,
  'right-start': ccAttention.arrowDirectionRightStart,
  right: ccAttention.arrowDirectionRight,
  'right-end': ccAttention.arrowDirectionRightEnd,
  'bottom-start': ccAttention.arrowDirectionBottomStart,
  bottom: ccAttention.arrowDirectionBottom,
  'bottom-end': ccAttention.arrowDirectionBottomEnd,
  'left-start': ccAttention.arrowDirectionLeftStart,
  left: ccAttention.arrowDirectionLeft,
  'left-end': ccAttention.arrowDirectionLeftEnd,
};

class WarpAttention extends LitElement {
  /**
   * @summary Controls whether the attention panel is visible.
   * @description Controls whether the attention panel is visible. Set to `true` to show the attention content and `false` to hide it.
   */
  @property({ type: Boolean, reflect: true })
  show = false;

  /**
   * @summary Preferred placement relative to the trigger element.
   * @description Preferred placement relative to the trigger element. Sets the initial direction for positioning, for example `top`, `right`, `bottom`, or `left` variants.
   */
  @property({ type: String, reflect: false })
  placement: Directions;

  /**
   * @summary Renders the component with tooltip styling and behavior.
   * @description Renders the component with tooltip styling and behavior. Use for compact, non-modal contextual hints anchored to another element.
   */
  @property({ type: Boolean, reflect: true })
  tooltip = false;

  /**
   * @summary Renders the component as an inline callout.
   * @description Renders the component as an inline callout. Callout mode is used for always-in-flow informational content instead of floating overlay behavior.
   */
  @property({ type: Boolean, reflect: true })
  callout = false;

  /**
   * @summary Enables native popover behavior for the attention element.
   * @description Enables native popover behavior for the attention element. When enabled, the component uses popover semantics and styling suitable for floating surface UI.
   */
  @property({ type: Boolean, reflect: true })
  // @ts-expect-error This was introduced before native HTML popover
  popover: boolean;

  /**
   * @summary Renders the component with highlight styling.
   * @description Renders the component with highlight styling. Use highlight mode to visually emphasize important contextual information.
   */
  @property({ type: Boolean, reflect: true })
  highlight = false;

  /**
   * @summary Shows a close button inside the attention component.
   * @description Shows a close button inside the attention component. Adds an internal dismiss action that lets users close the attention panel.
   */
  @property({ attribute: 'can-close', type: Boolean, reflect: true })
  canClose = false;

  /**
   * @summary Hides the directional arrow.
   * @description Hides the directional arrow of the attention component. Disable the arrow when the visual connection to the trigger should not be shown.
   */
  @property({ attribute: 'no-arrow', type: Boolean, reflect: true })
  noArrow = false;

  /**
   * @summary Distance offset between trigger and attention panel.
   * @description Distance offset between trigger and attention panel. Defines the main-axis spacing in pixels from the anchor element.
   */
  @property({ type: Number })
  distance: number;

  /**
   * @summary Cross-axis offset for fine-grained positioning.
   * @description Cross-axis offset for fine-grained positioning. Moves the panel along the cross axis in pixels to adjust alignment with the trigger.
   */
  @property({ type: Number })
  skidding: number;

  /**
   * @summary Enables automatic flipping when placement has no space.
   * @description Enables automatic flipping when placement has no space. Allows the component to choose an alternative side if the preferred placement would overflow.
   */
  @property({ type: Boolean, reflect: true })
  flip = false;

  /**
   * @summary Allows overflow checks on the cross axis when flipping.
   * @description Allows overflow checks on the cross axis when flipping. Use with `flip` to improve collision handling when space is constrained horizontally or vertically.
   */
  @property({ attribute: 'cross-axis', type: Boolean, reflect: true })
  crossAxis = false;

  /**
   * @summary Ordered list of fallback placements.
   * @description Ordered list of fallback placements. Provides explicit alternative placements to try when `flip` is enabled and the preferred placement does not fit.
   */
  @property({ attribute: 'fallback-placements', type: Array, reflect: true, useDefault: true })
  fallbackPlacements: Directions[] = [];

  /** @internal */
  attentionState: AttentionState | null = null;

  // To store the initial placement value for reference when computing the actual direction
  /** @internal */
  _initialPlacement: Directions;

  static styles = [
    reset,
    layoutStyles,
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
      throw new Error(
        `Invalid "placement" attribute. Set its value to one of the following:\n${JSON.stringify(Object.keys(opposites))}`,
      );
    }

    if (
      this.fallbackPlacements &&
      !this.fallbackPlacements.every((fallbackPlacement) => directions.includes(fallbackPlacement))
    ) {
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
      if (this.show && this._targetEl && this._attentionEl && this.attentionState) {
        recompute(this.attentionState).then((state) => {
          this._actualDirection = state?.actualDirection as Directions;
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
  set _actualDirection(v: Directions) {
    this.placement = v;
  }

  /** @internal */
  get _arrowEl(): HTMLElement | null {
    return this.renderRoot.querySelector<HTMLElement>('#arrow');
  }

  /** @internal */
  get _arrowDirection() {
    return opposites[this._actualDirection];
  }

  /** @internal */
  get _arrowClasses() {
    const directionClass = arrowDirectionClassByDirection[this._arrowDirection];
    return classNames([
      ccAttention.arrowBase,
      this._activeVariantClasses.arrow,
      directionClass,
    ]);
  }

  /** @internal */
  get _arrowHtml(): TemplateResult | typeof nothing {
    return this.noArrow ? nothing : html`<div id="arrow" class="${this._arrowClasses}"></div>`;
  }

  /** @internal */
  get _activeVariantClasses(): { wrapper: string; arrow: string } {
    if (this.callout) return { wrapper: ccAttention.callout, arrow: ccAttention.arrowCallout };
    if (this.popover) return { wrapper: ccAttention.popover, arrow: ccAttention.arrowPopover };
    if (this.tooltip) return { wrapper: ccAttention.tooltip, arrow: ccAttention.arrowTooltip };
    if (this.highlight) return { wrapper: ccAttention.highlight, arrow: ccAttention.arrowHighlight };
    return { wrapper: '', arrow: '' };
  }

  /** @internal */
  get _attentionEl(): HTMLDivElement | null {
    return this.renderRoot.querySelector<HTMLDivElement>('#attention');
  }

  /** @internal */
  get _targetEl(): HTMLElement | null {
    const targetSlot: HTMLSlotElement | null = this.renderRoot?.querySelector("slot[name='target']");
    const target = targetSlot?.assignedElements()[0];
    return target instanceof HTMLElement ? target : null;
  }

  /** @internal */
  get _messageEl(): HTMLElement | null {
    const messageSlot: HTMLSlotElement | null = this.renderRoot.querySelector("slot[name='message']");
    const message = messageSlot?.assignedElements()[0];
    return message instanceof HTMLElement ? message : null;
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
      <w-button
        aria-label="${this._ariaClose}"
        @click=${this.close}
        @keydown=${this.keypressed}
        variant="pill"
        small=""
        class="ml-8"
      >
        <w-icon
          name="Close"
          size="small"
          locale="${detectLocale()}"
          class="flex"></w-icon>
      </w-button>
    `;
  }

  updated() {
    // Guard against updates after element is disconnected
    if (!this._attentionEl) return;

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

  firstUpdated() {
    this._initialPlacement = this.placement;

    // Attention of "callout" type should always be used inline
    if (this.callout && this._attentionEl) {
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
      <section class=${ifDefined(this.className ? this.className : undefined)}>
        ${
          this.placement === 'right-start' ||
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
            `
        }
      </section>
    `;
  }
}

if (!customElements.get('w-attention')) {
  // @ts-expect-error Overriding native HTML popover global attribute
  customElements.define('w-attention', WarpAttention);
}

export { WarpAttention };
