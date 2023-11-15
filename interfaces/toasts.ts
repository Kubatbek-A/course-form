export type ToastType = "success" | "danger" | "warning";

export interface Toast {
  id: string;
  title: string;
  message?: string;
  type: ToastType;
}

export interface ToastsContextValues {
  toasts: (Toast | never)[];
  showToast: (value: Omit<Toast, "id">, ms?: number) => Toast["id"];
  removeToast: (toastId: Toast["id"]) => void;
}
