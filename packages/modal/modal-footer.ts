import { html, css, LitElement } from 'lit';

import { reset } from '../styles.js';

import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util';

/**
 * The footer section of a modal, typically where you place actions.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/overlays-modal--docs)
 */
export class ModalFooter extends CanCloseMixin(ProvidesCanCloseToSlotsMixin(LitElement)) {
  render() {
    return html`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `;
  }
  static styles = [
    reset,
    css`
      .footer {
        display: flex;
        flex-shrink: 0;
        justify-content: flex-end;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 2.4rem;
      }
      @media (min-width: 480px) {
        .footer {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
        }
      }
    `,
  ];
}

if (!customElements.get('w-modal-footer')) {
  customElements.define('w-modal-footer', ModalFooter);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-modal-footer': ModalFooter;
  }
}
