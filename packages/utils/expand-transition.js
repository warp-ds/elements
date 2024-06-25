import { html, nothing } from 'lit';

import { Accordion } from '@itsy/animate/accordion';
import WarpElement from '@warp-ds/elements-core';
import { createRef, ref } from 'lit/directives/ref.js';

export class ExpandTransition extends WarpElement {
  contentEl = createRef();

  static get properties() {
    return {
      show: { type: Boolean, reflect: true },
      _showContent: { state: true },
    };
  }

  render() {
    return html`<div ${ref(this.contentEl)}>${this.defaultSlot}</div>`;
  }

  get defaultSlot() {
    return this._showContent ? html`<slot></slot>` : nothing;
  }

  async willUpdate(changedProperties) {
    if (changedProperties.has('show')) {
      // element isn't mounted yet, so content can be shown without transition
      // e.g. if show is true at mount-time
      if (!this.contentEl.value) {
        this._showContent = this.show;
        return;
      }
      const accordion = new Accordion(this.contentEl.value);
      // different handlers are used below for show -> true/false because when collapsing
      // we want to have content showing _as_ we collapse - where the 'default' would be for content to disappear
      // and then the collapse animation to happen
      if (this.show) {
        // read the height of 0px
        accordion.expand(async () => {
          // then populate the content slot before reading the destination height
          this._showContent = this.show;
          await this.updateComplete;
        });
      }
      if (!this.show) {
        // completely collapse the expandable
        await accordion.collapse();
        // then remove the content
        this._showContent = this.show;
      }
    }
  }
}

if (!customElements.get('w-expand-transition')) customElements.define('w-expand-transition', ExpandTransition);
