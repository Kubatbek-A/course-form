import { ReactNode, createContext, useState } from "react";
import uniqueId from "lodash.uniqueid";
import { Toast, ToastsContextValues } from "@/interfaces/toasts";

export const ToastsContext = createContext<ToastsContextValues>({
  toasts: [],
  showToast: () => "",
  removeToast: () => {},
});

export default function ToastsProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<(Toast | never)[]>([]);

  const showToast: ToastsContextValues["showToast"] = (newToast, ms) => {
    const newToastId = uniqueId("toast_");

    setToasts((oldToasts) => [...oldToasts, { id: newToastId, ...newToast }]);

    setTimeout(() => {
      removeToast(newToastId);
    }, ms ?? 3000);

    return newToastId;
  };

  const removeToast = (toastId: Toast["id"]) => {
    setToasts(toasts.filter(({ id }) => id !== toastId));
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ToastsContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastsContext.Provider>
  );
}
