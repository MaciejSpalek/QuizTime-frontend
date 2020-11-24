export type ToastType = 'success' | 'error' | 'info';

export interface IToast {
    type: ToastType;
    isActive: boolean;
    deactivate: () => void;
}

export interface IParameters {
    text: string;
    color: string;
    icon: string;
  }