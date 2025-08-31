import { html, css, LitElement } from 'lit';
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util';

export class ModalFooter extends CanCloseMixin(ProvidesCanCloseToSlotsMixin(LitElement)) {
  render() {
    return html`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `;
  }
  static styles = css`
    .footer {
      display:flex;
      flex-shrink:0;
      justify-content:flex-end;
      padding-left:1.6rem;
      padding-right:1.6rem;
      padding-top:2.4rem;
    }
    @media (min-width: 480px){
      .footer {
        padding-left:3.2rem;
        padding-right:3.2rem;
      }
    }
  `;
}
