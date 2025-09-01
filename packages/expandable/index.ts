import { css, html, PropertyValues } from "lit";

import { classNames } from "@chbphone55/classnames";
import {
  box as ccBox,
  expandable as ccExpandable,
} from "@warp-ds/css/component-classes";
import WarpElement from "@warp-ds/elements-core";
import { ifDefined } from "lit/directives/if-defined.js";

import "@warp-ds/icons/elements/chevron-down-16";
import "@warp-ds/icons/elements/chevron-up-16";
import { property } from "lit/decorators.js";

import { components, reset } from "../styles.js";

class WarpExpandable extends WarpElement {
  @property({ type: Boolean, reflect: true })
  expanded: boolean = false;

  @property({ type: String })
  title: string;

  @property({ type: Boolean })
  box: boolean = false;

  @property({ type: Boolean })
  bleed: boolean = false;

  @property({ attribute: "button-class", type: String })
  buttonClass: string;

  @property({ attribute: "content-class", type: String })
  contentClass: string;

  @property({ attribute: "no-chevron", type: Boolean })
  noChevron: boolean = false;

  @property({ type: Boolean })
  animated: boolean = false;

  @property({ attribute: "heading-level", type: Number })
  headingLevel: number;

  @property({ type: Boolean, state: true })
  _hasTitle: boolean = true;

  @property({ type: Boolean, state: true })
  _showChevronUp: boolean = false;

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [
    reset,
    components,
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
    if (changedProperties.has("expanded")) {
      setTimeout(() => {
        this._showChevronUp = this.expanded;
      }, 200);
    }
  }

  firstUpdated() {
    const hasTitleProp = Boolean(this.title);
    const hasTitleSlot =
      (
        this.renderRoot.querySelector("slot[name='title']") as HTMLSlotElement
      )?.assignedNodes().length > 0;

    this._hasTitle = hasTitleProp || hasTitleSlot;
  }

  get #wrapperClasses() {
    return classNames([
      ccExpandable.wrapper,
      this.box && ccExpandable.box,
      this.bleed && ccExpandable.bleed,
    ]);
  }

  get #buttonClasses() {
    return classNames(this.buttonClass, [
      ccExpandable.button,
      this.box && ccExpandable.buttonBox,
    ]);
  }

  get #chevronClasses() {
    return classNames([
      ccExpandable.chevron,
      !this.box && ccExpandable.chevronNonBox,
    ]);
  }

  get #chevronIcon() {
    const upClasses = classNames([
      ccExpandable.elementsChevronUpTransform,
      !this.expanded &&
        this._showChevronUp &&
        ccExpandable.elementsChevronCollapse,
    ]);
    const downClasses = classNames([
      ccExpandable.elementsChevronDownTransform,
      this.expanded &&
        !this._showChevronUp &&
        ccExpandable.elementsChevronExpand,
    ]);

    return this._showChevronUp
      ? html`<w-icon-chevron-up-16 class="${upClasses}"></w-icon-chevron-up-16>`
      : html`<w-icon-chevron-down-16
          class="${downClasses}"
        ></w-icon-chevron-down-16>`;
  }

  get #contentClasses() {
    return classNames(this.contentClass, [
      this.box && ccBox.base,
      this._hasTitle && this.box && ccExpandable.contentWithTitle,
    ]);
  }

  get #expansionClasses() {
    return classNames([
      ccExpandable.expansion,
      !this.expanded && ccExpandable.expansionNotExpanded,
    ]);
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
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#buttonClasses}"
              @click=${() => (this.expanded = !this.expanded)}
            >
              <div class="${ccExpandable.title}">
                ${this.title
                  ? html`<span class="${ccExpandable.titleType}"
                      >${this.title}</span
                    >`
                  : html`<slot name="title"></slot>`}
                ${this.noChevron
                  ? ""
                  : html`<div class="${this.#chevronClasses}">
                      ${this.#chevronIcon}
                    </div>`}
              </div>
            </button>
          </w-unstyled-heading>`
        : ""}
      ${this.animated
        ? html`<w-expand-transition ?show=${this.expanded}>
            ${this._expandableSlot}
          </w-expand-transition>`
        : html`<div
            class="${this.#expansionClasses}"
            aria-hidden=${ifDefined(!this.expanded ? true : undefined)}
          >
            ${this._expandableSlot}
          </div>`}
    </div>`;
  }
}

if (!customElements.get("w-expandable")) {
  customElements.define("w-expandable", WarpExpandable);
}

export { WarpExpandable };
