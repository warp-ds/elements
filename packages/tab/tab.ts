import { classNames } from '@chbphone55/classnames';
import { css, html, LitElement } from 'lit';
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

  @property({ attribute: 'for', reflect: true })
  for = '';

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  over = false;

  private get _classes() {
    return classNames([ccButtonReset, ccTab.base, this.active ? ccTab.active : ccTab.inactive]);
  }

  private get _hasIcon() {
    return this.querySelector('[slot="icon"]') !== null;
  }

  render() {
    const hasIcon = this._hasIcon;

    return html`
      <button
        type="button"
        role="tab"
        aria-selected="${this.active ? 'true' : 'false'}"
        aria-controls="${this.for}"
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
