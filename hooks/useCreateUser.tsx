import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createUser } from "@/api/createUser";
import useToasts from "./useToasts";

export interface IApiError {
  message: string;
  errors?: Record<string, string>;
}

export const useCreateUser = (onSuccess?: () => void) => {
  const { showToast } = useToasts();

  return useMutation<IUser, AxiosError<IApiError>, IUser>({
    mutationFn: createUser,
    onSuccess,
    onError: (error) => {
      showToast({
        title: "Error",
        type: "danger",
        message: error?.message ?? "Something went wrong",
      });
    },
  });
};
