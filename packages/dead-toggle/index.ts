import { css, CSSResultGroup, html, LitElement } from 'lit';

import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { reset } from '../styles';

/**
 * Dead toggle can be used where the appearance of a checkbox or radio is needed - but for accessibility purposes an actual input element should not be present.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-dead-toggle--docs)
 */
export class WarpDeadToggle extends LitElement {
  @property({ type: String }) type: 'radio' | 'checkbox' = 'radio';
  @property({ type: Boolean, reflect: true }) checked: boolean = false;
  @property({ type: Boolean, reflect: true }) indeterminate: boolean = false;
  @property({ type: Boolean, reflect: true }) invalid: boolean = false;

  /** @internal */
  get indeterminateMarker() {
    return !this.checked && this.indeterminate ? '–' : '';
  }

  render() {
    const classes = classMap({
      checkbox: this.type === 'checkbox',
      radio: this.type === 'radio',
      checked: this.checked,
    });
    return html` <div class="${classes}">${this.indeterminateMarker}</div> `;
  }

  static styles?: CSSResultGroup | undefined = [
    reset,
    css`
      div {
        display: block;
        border-width: 1px;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        cursor: pointer;
        appearance: none;
        user-select: none;
        flex-shrink: 0;
        height: 2rem;
        width: 2rem;
        background-color: var(--w-s-color-background);
        border-color: var(--w-s-color-border);
        color: var(--w-s-color-icon-inverted);
        font-weight: 700;
        text-align: center;
        line-height: var(--w-line-height-xs);
        font-size: var(--w-font-size-m);
      }
      :host([type='checkbox']) div {
        border-radius: 2px;
      }
      :host([type='checkbox'][checked]) div,
      :host([type='checkbox'][indeterminate]) div {
        background-color: var(--w-s-color-background-primary);
        border-color: var(--w-s-color-border-primary);
      }
      :host([type='checkbox'][checked]) div {
        background-image: var(--w-icon-toggle-checked);
      }
      :host([type='radio']) div {
        border-radius: 50%;
      }
      :host([type='radio'][checked]) div {
        border-color: var(--w-s-color-border-selected);
        border-width: 0.6rem;
      }
      :host([invalid]) div {
        border-color: var(--w-s-color-border-negative) !important;
      }
      :host([type='checkbox'][invalid][checked]) div,
      :host([type='checkbox'][invalid][indeterminate]) div {
        background-color: var(--w-s-color-background-negative);
      }
    `,
  ];
}

if (!customElements.get('w-dead-toggle')) {
  customElements.define('w-dead-toggle', WarpDeadToggle);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-dead-toggle': WarpDeadToggle;
  }
}
