import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export class WCheckboxGroup extends LitElement {
  @property({ type: String, reflect: true, attribute: 'help-text' })
  helpText: string;

  static styles = css`
    .checkbox-group {
      display: grid;
      gap: 16px;
    }

    .help-text {
      display: block;
      margin-top: 4px;
      font-size: var(--w-font-size-xs);
      line-height: var(--w-line-height-xs);
      color: var(--w-s-color-text-subtle);
    }
  `;
  render() {
    const helpId = this.helpText ? `checkbox-group__help` : undefined;

    return html`
      <div class="checkbox-group" role="group" aria-describedby=${ifDefined(helpId)}>
        <slot></slot>
      </div>
      ${this.helpText ? html`<div class="help-text" id="${helpId}">${this.helpText}</div>` : nothing}
    `;
  }
}

if (!customElements.get('w-checkbox-group')) {
  customElements.define('w-checkbox-group', WCheckboxGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-checkbox-group': WCheckboxGroup;
  }
}
