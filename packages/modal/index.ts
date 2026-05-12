// Side-effect imports to register custom elements
import './modal.js';
import '../modal-header/modal-header.js';
import '../modal-footer/modal-footer.js';

// Re-exports for backward compatibility
import { WarpModalFooter } from '../modal-footer/modal-footer.js';
import { WarpModalHeader } from '../modal-header/modal-header.js';
import { WarpModal } from './modal.js';
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util.js';

export {
  WarpModal as WarpModal,
  WarpModalHeader as WarpModalHeader,
  WarpModalFooter as WarpModalFooter,
  CanCloseMixin as ModalCanCloseMixin,
  ProvidesCanCloseToSlotsMixin as ModalProvidesCanCloseToSlotsMixin,
};
