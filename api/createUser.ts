// @ts-ignore
import { axiosRequest } from "@/helpers/axios-request";

export const createUser = (data: IUser) => {
  return axiosRequest<IUser, IUser>({
    method: "POST",
    url: `/api/users`,
    contentType: "application/json",
    baseURL: process.env.NEXT_PUBLIC_API_URL || "",
    data,
  });
};
