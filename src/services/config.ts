/**
 * You can modify this file
 *
 * @version 5
 */

// @ts-nocheck

import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import httpAdapter from "axios/lib/adapters/http";
import settle from "axios/lib/core/settle";
import { ElLoading } from "element-plus";
//@ts-ignore
import Qs from "qs";

Axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    let loading;
    const timer = setTimeout(() => {
      loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
    }, 1500);
    return httpAdapter(config)
      .then((result) => {
        // We would have more logic here in the production code
        clearTimeout(timer);
        loading?.close();
        settle(resolve, reject, result);
      })
      .catch((error) => {
        clearTimeout(timer);
        loading?.close();
        reject(error);
      });
  });
};

const baseConfig: AxiosRequestConfig = {
  baseURL: (import.meta.env.VITE_BASE_URL as string) || "", // <--- Add your base url
  headers: {
    "Content-Encoding": "UTF-8",
    Accept: "application/json",
    "Content-Type": "application/json-patch+json",
  },
  paramsSerializer: (param) => Qs.stringify(param, { indices: false }),
};

let axiosInstance: AxiosInstance;

function getAxiosInstance(security: Security): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = Axios.create(baseConfig);

    // Response interceptor
    axiosInstance.interceptors.response.use(
      (async (response: AxiosResponse): Promise<SwaggerResponse<any>> => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        /**
         * Example on response manipulation
         *
         * @example
         *   const swaggerResponse: SwaggerResponse = {
         *     ...response,
         *   };
         *   return swaggerResponse;
         */
        return response;
      }) as any,
      (error: AxiosError) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        if (error.response) {
          return Promise.reject(
            new RequestError(
              error.response.data,
              error.response.status,
              error.response
            )
          );
        }

        if (error.isAxiosError) {
          return Promise.reject(new RequestError("noInternetConnection"));
        }
        return Promise.reject(error);
      }
    );
  }

  // ًًRequest interceptor
  axiosInstance.interceptors.request.use(
    async (requestConfig) => {
      // Do something before request is sent
      /** Example on how to add authorization based on security */
      if (security?.[0]) {
        // requestConfig.headers.authorization = "";
      }

      return requestConfig;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

class RequestError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public response?: AxiosResponse
  ) {
    super(message);
  }

  isApiException = true;
}

export type Security = any[] | undefined;

export type SwaggerResponse<R> = AxiosResponse<R>;

export { getAxiosInstance, RequestError };
