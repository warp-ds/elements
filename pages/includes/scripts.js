import '../../index.js';
import { toast, updateToast, removeToast } from '../../index.js';
import { WarpToastContainer } from '../../packages/toast/toast-container.js';
import '@warp-ds/icons/elements';
import { windowExists } from '../../packages/utils/window-exists';

if (windowExists) {
    window.WarpToastContainer = WarpToastContainer;
    window.toast = toast;
    window.updateToast = updateToast;
    window.removeToast = removeToast;
}
