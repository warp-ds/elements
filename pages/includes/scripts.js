import '../../index.js';
import { toast, updateToast, removeToast } from '../../index.js';
import { WarpToastContainer } from '../../packages/toast/toast-container.js';
import '@fabric-ds/icons/elements/bag-16';

window.WarpToastContainer = WarpToastContainer;
window.toast = toast;
window.updateToast = updateToast;
window.removeToast = removeToast;
