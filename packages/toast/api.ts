import { windowExists } from '../utils/window-exists';
import { WarpToastContainer } from './toast-container';

import type { ToastOptions, ToastInternal } from './types';

function getToastContainer() {
  const container = customElements.get('w-toast-container');
  return container as unknown as WarpToastContainer;
}

/**
 * Creates a new toast
 */
export function toast(message: string, options?: ToastOptions) {
  if (!windowExists) return;

  const toast = getToastContainer().init();

  const data: ToastOptions = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
    text: message,
    duration: 5000,
    type: 'success',
    ...options,
  };

  toast.set(data);
  return data;
}

/**
 * Remove an existing toast
 */
export function removeToast(id: string | number): Promise<boolean> | undefined {
  if (!windowExists) return;

  const toast = customElements.get('w-toast-container').init();
  return toast.del(id);
}

/**
 * Update an existing toast
 */
export function updateToast(id: string | number, options?: ToastOptions): ToastInternal | undefined {
  if (!windowExists) return;

  const toast = customElements.get('w-toast-container').init();
  toast.set({ ...toast.get(id), ...options });
  return toast.get(id);
}
