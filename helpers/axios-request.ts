import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  Method,
  ResponseType,
} from "axios";

export type ApiParams<T> = {
  method: Method;
  url: string;
  data?: T;
  token?: string;
  contentType?: string;
  baseURL?: string;
  params?: object;
  responseType?: ResponseType;
};

const Url = process.env.NEXT_PUBLIC_API_URL || "";

export const axiosRequest = async <TRequestData, TResponseData = void>({
  method,
  url,
  data,
  baseURL,
  params,
  header,
  contentType = "application/json",
  responseType,
}: ApiParams<TRequestData> & {
  header?: AxiosRequestHeaders;
}): Promise<TResponseData> => {
  const config: AxiosRequestConfig<TRequestData> = {
    baseURL,
    data,
    method,
    url,
    params,
    withCredentials: true,
    responseType,
  };

  if (!config.baseURL) config.baseURL = Url;

  if (header) {
    config.headers = header;
  }

  if (contentType) {
    config.headers = {
      ...config.headers,
      "content-type": contentType,
    };
  }

  try {
    const response = await axios.request(config);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
