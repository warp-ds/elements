import { ModalFooter } from './modal-footer.ts';
import { ModalHeader } from './modal-header.ts';
import { ModalMain } from './modal-main.ts';
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util.js';

if (!customElements.get('wn-modal')) {
  customElements.define('wn-modal', ModalMain);
  customElements.define('wn-modal-header', ModalHeader);
  customElements.define('wn-modal-footer', ModalFooter);
}

export {
  ModalMain as WarpModal,
  ModalHeader as WarpModalHeader,
  ModalFooter as WarpModalFooter,
  CanCloseMixin as ModalCanCloseMixin,
  ProvidesCanCloseToSlotsMixin as ModalProvidesCanCloseToSlotsMixin,
};
