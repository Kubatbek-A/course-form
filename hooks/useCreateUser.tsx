import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createUser } from "@/api/createUser";

export interface IApiError {
  message: string;
  errors?: Record<string, string>;
}

export const useCreateUser = (onSuccess?: () => void) => {
  return useMutation<IUser, AxiosError<IApiError>, IUser>({
    mutationFn: createUser,
    onSuccess,
  });
};
