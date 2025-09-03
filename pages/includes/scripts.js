import { toast, updateToast, removeToast } from '../../index.js';
import 'uno.css';
import { WarpToastContainer } from '../../packages/toast/toast-container';
import { windowExists } from '../../packages/utils/window-exists';
import '@warp-ds/icons/elements/bag-16';

if (windowExists) {
  window.WarpToastContainer = WarpToastContainer;
  window.toast = toast;
  window.updateToast = updateToast;
  window.removeToast = removeToast;
}
