import { classNames } from '@chbphone55/classnames';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';

import { styles } from './styles.js';

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
  static styles = [reset, styles];

  @property({ reflect: true })
  name!: string;

  @property({ reflect: true })
  label = '';

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  over = false;

  @property({ attribute: 'tab-class', reflect: true })
  tabClass = '';

  private _handleClick = (event: MouseEvent) => {
    // Dispatch a custom event that the parent tabs component can listen to
    this.dispatchEvent(
      new CustomEvent('tab-click', {
        detail: { name: this.name },
        bubbles: true,
        composed: true,
      }),
    );

    // Also dispatch a generic click event for any click handlers
    this.dispatchEvent(
      new CustomEvent('click', {
        detail: { name: this.name, originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private get _classes() {
    return classNames(this.tabClass, [ccButtonReset, ccTab.base, this.active ? ccTab.active : ccTab.inactive]);
  }

  private get _hasChildren() {
    return this.querySelector('[slot="icon"]') !== null || this.innerHTML.trim() !== this.label;
  }

  render() {
    const hasChildren = this._hasChildren;

    return html`
      <button
        type="button"
        role="tab"
        aria-selected="${this.active ? 'true' : 'false'}"
        aria-controls="${this.active ? `warp-tabpanel-${this.name}` : ''}"
        id="warp-tab-${this.name}"
        class="${this._classes}"
        @click="${this._handleClick}"
        tabindex="${/* This needs to be -1 to prevent the auto-focus on buttons, messing up tab order */-1}"
        style="height: 100%">
        ${
          !hasChildren
            ? html`<span class="${ccTab.contentUnderlined}">${this.label}</span>`
            : this.over
              ? html`
                <span class="${ccTab.icon}">
                  <slot name="icon"></slot>
                </span>
                <span class="${ccTab.contentUnderlined}">${this.label}</span>
              `
              : html`
                <div class="${ccTab.content}">
                  <slot name="icon"></slot>
                  ${this.label}
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
