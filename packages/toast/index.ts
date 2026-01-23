// Side-effect imports to register custom elements
import './toast.js';
import '../toast-container/toast-container.js';

export { WarpToastContainer } from '../toast-container/toast-container.js';
// Re-exports for backward compatibility
export { removeToast, toast, updateToast } from './api.js';
export { WarpToast } from './toast.js';
