import { ModalFooter } from './modal-footer.ts';
import { ModalHeader } from './modal-header.ts';
import { ModalMain } from './modal-main.ts';
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util.js';

if (!customElements.get('w-modal')) {
  customElements.define('w-modal', ModalMain);
  customElements.define('w-modal-header', ModalHeader);
  customElements.define('w-modal-footer', ModalFooter);
}

export {
  ModalMain as WarpModal,
  ModalHeader as WarpModalHeader,
  ModalFooter as WarpModalFooter,
  CanCloseMixin as ModalCanCloseMixin,
  ProvidesCanCloseToSlotsMixin as ModalProvidesCanCloseToSlotsMixin,
};
