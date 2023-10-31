import { css, html } from 'lit'
import WarpElement from '@warp-ds/elements-core'
import { fclasses, kebabCaseAttributes } from '../utils'
import {
  box as ccBox,
  expandable as ccExpandable,
} from '@warp-ds/css/component-classes'
import { ifDefined } from 'lit/directives/if-defined.js'

class WarpExpandable extends kebabCaseAttributes(WarpElement) {
  static properties = {
    expanded: { type: Boolean, reflect: true },
    title: { type: String },
    info: { type: Boolean },
    box: { type: Boolean },
    bleed: { type: Boolean },
    buttonClass: { type: String },
    contentClass: { type: String },
    noChevron: { type: Boolean },
    animated: { type: Boolean },
    headingLevel: { type: Number },
    _hasTitle: { type: Boolean, state: true },
    _showChevronUp: { type: Boolean, state: true },
  }

  constructor() {
    super()

    this.expanded = false
    this.animated = false
    this.info = false
    this.box = false
    this.bleed = false
    this.noChevron = false
    this._hasTitle = true
    this._showChevronUp = this.expanded
  }

  updated(changedProperties) {
    // We need a slight delay for the animation since it has a transition-duration of 150ms:
    if (changedProperties.has('expanded')) {
      // if(!this._showChevronUp) {
      //   const chevronUpIcon = this.renderRoot
      //   .querySelector('w-icon-chevron-up-16')
      //   .renderRoot.querySelector('svg')
      //   chevronUpIcon.classList.add(this._chevronUpClasses)
      // } else {
      //   const chevronDownIcon = this.renderRoot
      //   .querySelector('w-icon-chevron-down-16')
      //   .renderRoot.querySelector('svg')
      //   chevronDownIcon.classList.add(this._chevronDownClasses)
      // }

      setTimeout(() => {
        this._showChevronUp = this.expanded
      }, 1000)
    }
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
  ]

  firstUpdated() {
    this._hasTitle =
      !!this.title ||
      this.renderRoot.querySelector("slot[name='title']").assignedNodes()
        .length > 0
  }

  get _expandableSlot() {
    return html`<div
      class=${fclasses({
        [this.contentClass || '']: true,
        [ccBox.box]: this.box,
        [ccExpandable.paddingTop]: this._hasTitle && this.box,
      })}
    >
      <slot></slot>
    </div>`
  }

  get _chevronUpClasses() {
    return fclasses({
      [ccExpandable.chevronTransform]: true,
      [ccExpandable.chevronCollapse]: !this.expanded && this._showChevronUp,
    })
  }

  get _chevronDownClasses() {
    return fclasses({
      [ccExpandable.chevronTransform]: true,
      [ccExpandable.chevronExpand]: this.expanded && !this._showChevronUp,
    })
  }

  render() {
    return html` <div
      class=${fclasses({
        [ccExpandable.expandable]: true,
        [ccExpandable.expandableBox]: this.box,
        [ccExpandable.expandableBleed]: this.bleed,
      })}
    >
      ${this._hasTitle
        ? html`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class=${fclasses({
                [this.buttonClass || '']: true,
                [ccExpandable.button]: true,
                [ccExpandable.buttonBox]: this.box,
              })}
              @click=${() => (this.expanded = !this.expanded)}
            >
              <div class="${ccExpandable.title}">
                ${this.title
                  ? html`<span class="${ccExpandable.titleType}"
                      >${this.title}</span
                    >`
                  : html`<slot name="title"></slot>`}
                ${this.noChevron
                  ? ''
                  : html`<div
                      class=${fclasses({
                        [ccExpandable.chevron]: true,
                        [ccExpandable.chevronBox]: this.box,
                        [ccExpandable.chevronNonBox]: !this.box,
                      })}
                    >
                      ${this._showChevronUp
                        ? html`<w-icon-chevron-up-16
                            class=${this._chevronUpClasses}
                          ></w-icon-chevron-up-16>`
                        : html`<w-icon-chevron-down-16
                            class=${this._chevronDownClasses}
                          ></w-icon-chevron-down-16>`}
                    </div>`}
              </div>
            </button>
          </w-unstyled-heading>`
        : ''}
      ${this.animated
        ? html`<w-expand-transition ?show=${this.expanded}>
            ${this._expandableSlot}
          </w-expand-transition>`
        : html`<div
            class=${fclasses({
              [ccExpandable.expansion]: true,
              [ccExpandable.expansionNotExpanded]: !this.expanded,
            })}
            aria-hidden=${ifDefined(!this.expanded ? true : undefined)}
          >
            ${this._expandableSlot}
          </div>`}
    </div>`
  }
}

if (!customElements.get('w-expandable')) {
  customElements.define('w-expandable', WarpExpandable)
}

export { WarpExpandable }
