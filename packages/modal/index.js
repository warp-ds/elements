import { ModalTitleClose } from './modal-title-close.js'
import { ModalTitleBar } from './modal-title-bar.js'
import { ModalFooter } from './modal-footer.js'
import { ModalMain } from './modal-main.js'
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from './util.js'

if (!customElements.get('w-modal')) {
  customElements.define('w-modal', ModalMain)
  customElements.define('w-modal-title-bar', ModalTitleBar)
  customElements.define('w-modal-title-close', ModalTitleClose)
  customElements.define('w-modal-footer', ModalFooter)
}

export {
  ModalMain as WarpModal,
  ModalTitleBar as WarpModalTitleBar,
  ModalTitleClose as WarpModalTitleClose,
  ModalFooter as WarpModalFooter,
  CanCloseMixin as ModalCanCloseMixin,
  ProvidesCanCloseToSlotsMixin as ModalProvidesCanCloseToSlotsMixin
}


