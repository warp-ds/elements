export type ToastType = 'success' | 'error' | 'warning';

export interface ToastOptions {
  id?: string | number;
  type?: ToastType;
  text?: string;
  duration?: number;
  canclose?: boolean;
}

export interface ToastInternal {
  id: string | number;
  type: ToastType;
  text: string;
  duration: number;
  canclose: boolean;
}
