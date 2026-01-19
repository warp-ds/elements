import { ModalFooter } from '../modal-footer/modal-footer.js';
import { ModalHeader } from '../modal-header/modal-header.js';
import { ModalMain } from './modal.js';
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util.js';

export {
  ModalMain as WarpModal,
  ModalHeader as WarpModalHeader,
  ModalFooter as WarpModalFooter,
  CanCloseMixin as ModalCanCloseMixin,
  ProvidesCanCloseToSlotsMixin as ModalProvidesCanCloseToSlotsMixin,
};
