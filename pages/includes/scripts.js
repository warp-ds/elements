import '../../index.js';
import { toast, updateToast, removeToast } from '../../index.js';
import { FabricToastContainer } from '../../packages/toast/toast-container.js';
import '@fabric-ds/icons/elements/bag-16';

window.FabricToastContainer = FabricToastContainer;
window.toast = toast;
window.updateToast = updateToast;
window.removeToast = removeToast;
