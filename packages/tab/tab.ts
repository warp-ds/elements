import { classNames } from '@chbphone55/classnames';
import { css, html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';

import { styles } from '../tabs/styles.js';

const ccTab = {
  base: 'grid w-full items-center font-bold gap-8 antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary',
  inactive: 's-text-subtle',
  active: 's-text-link s-border-selected',
  icon: 'mx-auto',
  content: 'flex items-center justify-center gap-8',
  contentUnderlined: 'content-underlined', // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
};

const ccButtonReset = 'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block';

/**
 * Individual tab component used within w-tabs container.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/tabs--docs)
 */
export class WarpTab extends LitElement {
  static styles = [reset, styles, css`::slotted([slot="icon"]){display:flex}`];

  private _internals: ElementInternals;

  private _handleClick = (event: Event & { tab?: WarpTab }) => {
    if (!event.tab) {
      event.tab = this;
    }
  };

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  @property({ attribute: 'id', reflect: true })
  id = '';

  @property({ attribute: 'for', reflect: true })
  for = '';

  @property({ attribute: 'aria-selected' })
  ariaSelected: 'true' | 'false';

  @property({ attribute: 'tabindex', type: Number, reflect: true })
  tabIndex: number;

  /**
   * @deprecated Use `aria-selected="true"` instead
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  over = false;

  private get _classes() {
    return classNames([
      ccButtonReset,
      ccTab.base,
      this.active || this.ariaSelected === 'true' ? ccTab.active : ccTab.inactive,
    ]);
  }

  private get _hasIcon() {
    return this.querySelector('[slot="icon"]') !== null;
  }

  connectedCallback() {
    super.connectedCallback();
    // Use ElementInternals for ARIA to avoid hydration mismatches
    this._internals.role = 'tab';
    // aria-controls is a relationship attribute that needs to be in the DOM for AT to follow
    this.setAttribute('aria-controls', this.for);
    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleClick);
  }

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    // Manually sync aria-selected to DOM attribute for accessibility and CSS selectors,
    // but only when the property changes (not during initial definition to avoid hydration mismatch)
    if (changedProperties.has('ariaSelected') && this.ariaSelected !== undefined) {
      this.setAttribute('aria-selected', this.ariaSelected);
      this._internals.ariaSelected = this.ariaSelected;
    }
    // Only let deprecated `active` drive aria-selected when explicitly set by consumers.
    if (changedProperties.has('active') && this.hasAttribute('active')) {
      this._internals.ariaSelected = this.active ? 'true' : 'false';
    }
    // aria-controls is a relationship attribute that needs to be in the DOM for AT to follow
    if (changedProperties.has('for')) {
      this.setAttribute('aria-controls', this.for);
    }
  }

  render() {
    const hasIcon = this._hasIcon;

    return html`
      <button
        type="button"
        role="none"
        id="warp-tab-${this.for}"
        class="${this._classes}"
        tabindex="${/* This needs to be -1 to prevent the auto-focus on buttons, messing up tab order */ -1}"
        @click="${(e) => {
          e.tab = this;
        }}"
        style="height: 100%">
        ${
          !hasIcon
            ? html`<span class="${ccTab.contentUnderlined}"><slot></slot></span>`
            : this.over
              ? html`
                <span class="${ccTab.icon}">
                  <slot name="icon"></slot>
                </span>
                <span class="${ccTab.contentUnderlined}"><slot></slot></span>
              `
              : html`
                <div class="${ccTab.content}">
                  <slot name="icon"></slot>
                  <slot></slot>
                </div>
              `
        }
      </button>
    `;
  }
}

if (!customElements.get('w-tab')) {
  customElements.define('w-tab', WarpTab);
}
