import { windowExists } from "../utils/window-exists";

/**
 * Toast helper function options
 * @typedef    {Object}                               ToastOptions
 * @property   {(number|string)}                      [id]        Custom identifier
 * @property   {('success'|'error'|'warning'|'info')} [type]      Type of alert
 * @property   {String}                               [text]      The toast message. Only needed when updating text on existing toast
 * @property   {(number|string)}                      [duration]  Duration of toast in milliseconds. Defaults to 5000. For accessibility reasons, toasts should never be interactive and therefore need to auto remove. If you must disable auto remove, set duration to Number.POSITIVE_INFINITY.
 * @property   {Boolean}                              [canclose]  Whether the toast can be dismissed. Defaults to false. WARNING! For accessibility reasons, toasts should not be interactive and canclose should always be false. If the toast absolutely must be dismissble, set this to true.
 */

/**
 * Creates a new toast
 * @param {String}        message  Message
 * @param {ToastOptions?} options  Toast options
 * @returns {ToastOptions} Toast details
 */
export function toast(message, options) {
  if (!windowExists) return;
  const toast = customElements.get("w-toast-container").init();

  const data = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
    text: message,
    duration: 5000,
    type: "success",
    ...options,
  };

  toast.set(data);
  return data;
}

/**
 * Remove an existing toast
 * @param {String|Number} id Toast identifier
 * @return {Promise<Boolean>} Resolves to true if deleted, false if not found
 */
export function removeToast(id) {
  if (!windowExists) return;
  const toast = customElements.get("w-toast-container").init();
  return toast.del(id);
}

/**
 * Update an existing toast
 * @param {String|Number}           id      Toast identifier
 * @param {ToastOptions?}           options Toast options
 * @returns {WarpToastContainer}          Toast details
 */
export function updateToast(id, options) {
  if (!windowExists) return;
  const toast = customElements.get("w-toast-container").init();
  toast.set({ ...toast.get(id), ...options });
  return toast.get(id);
}
