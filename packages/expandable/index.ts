// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { css, html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@warp-ds/icons/elements/chevron-down-16';
import '@warp-ds/icons/elements/chevron-up-16';
import '../utils/expand-transition';
import '../utils/unstyled-heading';

import { reset } from '../styles.js';

import { styles } from './styles.js';

export const ccBox = {
  base: 'group block relative break-words last-child:mb-0 p-16 rounded-8', // Relative here enables w-clickable
  bleed: '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8', // We target L and R to override the default rounded-8
  info: 's-bg-info-subtle',
  neutral: 's-surface-sunken',
  bordered: 'border-2 s-border s-bg',
};

export const ccExpandable = {
  wrapper: 'will-change-height s-text',
  box: 's-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8',
  bleed: '-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8',
  chevron: 'inline-block align-middle s-icon',
  chevronNonBox: 'ml-8',
  chevronTransform: 'transform transition-transform transform-gpu ease-in-out',
  chevronExpand: '-rotate-180',
  chevronCollapse: 'rotate-180',

  // These are web component specific classes, using the ::part-selector:
  elementsChevronDownTransform:
    'part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out',
  elementsChevronUpTransform:
    'part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out',
  elementsChevronExpand: 'part-[w-icon-chevron-down-16-part]:-rotate-180',
  elementsChevronCollapse: 'part-[w-icon-chevron-up-16-part]:rotate-180',

  expansion: 'overflow-hidden',
  expansionNotExpanded: 'h-0 invisible',
  button:
    'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline',
  buttonBox:
    'w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8',
  contentWithTitle: 'pt-0',
  title: 'flex w-full justify-between items-center',
  titleType: 't4',
};

/**
 * Expandable is a layout component used for creating expandable content areas on a page.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/layout-expandable--docs)
 *
 * @slot title - Alternative to the `title` attribute should you need to provide some additional markup.
 */
class WarpExpandable extends LitElement {
  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property({ type: String })
  title: string;

  @property({ type: Boolean })
  box = false;

  @property({ type: Boolean })
  bleed = false;

  @property({ attribute: 'button-class', type: String })
  buttonClass: string;

  @property({ attribute: 'content-class', type: String })
  contentClass: string;

  @property({ attribute: 'no-chevron', type: Boolean })
  noChevron = false;

  @property({ type: Boolean })
  animated = false;

  @property({ attribute: 'heading-level', type: Number })
  headingLevel: number;

  @property({ type: Boolean, state: true })
  /** @internal */
  _hasTitle = true;

  @property({ type: Boolean, state: true })
  /** @internal */
  _showChevronUp = false;

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [
    reset,
    styles,
    css`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `,
  ];

  updated(changedProperties: PropertyValues<this>) {
    // We need a slight delay for the animation since it has a transition-duration of 150ms:
    if (changedProperties.has('expanded')) {
      setTimeout(() => {
        this._showChevronUp = this.expanded;
      }, 200);
    }
  }

  firstUpdated() {
    const hasTitleProp = Boolean(this.title);
    const hasTitleSlot =
      (this.renderRoot.querySelector("slot[name='title']") as HTMLSlotElement)?.assignedNodes().length > 0;

    this._hasTitle = hasTitleProp || hasTitleSlot;
  }

  get #wrapperClasses() {
    return classNames([ccExpandable.wrapper, this.box && ccExpandable.box, this.bleed && ccExpandable.bleed]);
  }

  get #buttonClasses() {
    return classNames(this.buttonClass, [ccExpandable.button, this.box && ccExpandable.buttonBox]);
  }

  get #chevronClasses() {
    return classNames([ccExpandable.chevron, !this.box && ccExpandable.chevronNonBox]);
  }

  get #chevronIcon() {
    const upClasses = classNames([
      ccExpandable.elementsChevronUpTransform,
      !this.expanded && this._showChevronUp && ccExpandable.elementsChevronCollapse,
    ]);
    const downClasses = classNames([
      ccExpandable.elementsChevronDownTransform,
      this.expanded && !this._showChevronUp && ccExpandable.elementsChevronExpand,
    ]);

    return this._showChevronUp
      ? html`<w-icon-chevron-up-16 style="display: flex;" class="${upClasses}"></w-icon-chevron-up-16>`
      : html`<w-icon-chevron-down-16 style="display: flex;" class="${downClasses}"></w-icon-chevron-down-16>`;
  }

  get #contentClasses() {
    return classNames(this.contentClass, [
      this.box && ccBox.base,
      this._hasTitle && this.box && ccExpandable.contentWithTitle,
    ]);
  }

  get #expansionClasses() {
    return classNames([ccExpandable.expansion, !this.expanded && ccExpandable.expansionNotExpanded]);
  }

  /** @internal */
  get _expandableSlot() {
    return html`<div class="${this.#contentClasses}">
      <slot></slot>
    </div>`;
  }

  render() {
    return html` <div class="${this.#wrapperClasses}">
      ${
        this._hasTitle
          ? html`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#buttonClasses}"
              @click=${() => (this.expanded = !this.expanded)}>
              <div class="${ccExpandable.title}">
                ${this.title ? html`<span class="${ccExpandable.titleType}">${this.title}</span>` : html`<slot name="title"></slot>`}
                ${this.noChevron ? '' : html`<div class="${this.#chevronClasses}">${this.#chevronIcon}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`
          : ''
      }
      ${
        this.animated
          ? html`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`
          : html`<div class="${this.#expansionClasses}" aria-hidden=${ifDefined(!this.expanded ? true : undefined)}>
            ${this._expandableSlot}
          </div>`
      }
    </div>`;
  }
}

if (!customElements.get('w-expandable')) {
  customElements.define('w-expandable', WarpExpandable);
}

export { WarpExpandable };
