import { css, html, LitElement } from 'lit';
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from '../modal/util.js';
import { reset } from '../styles.js';

/**
 * The footer section of a modal, typically where you place actions.
 *
 * @parent w-modal
 */
export class WarpModalFooter extends CanCloseMixin(ProvidesCanCloseToSlotsMixin(LitElement)) {
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

/** @deprecated Exported for backwards compatibility. Use WarpModalFooter. */
export const ModalFooter = WarpModalFooter;


if (!customElements.get('w-modal-footer')) {
  customElements.define('w-modal-footer', WarpModalFooter);
}
