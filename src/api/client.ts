import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const ys = 'http://3.34.88.174:8080/api';
const be = '43.201.193.38 192.168.45.221/api';
export const BASE_URL = ys;

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  async config => {
    console.log(`${config.baseURL}${config.url}`);
    return config;
  },
  error => Promise.reject(error),
);

export interface BaseResponse<T> {
  success: boolean;
  errorCode: string | null;
  message: string;
  result: T;
}

export const GET = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<BaseResponse<T>>> => {
  return API.get(url, config);
};

export const POST = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<BaseResponse<T>>> => {
  return API.post(url, data, config);
};

export const DELETE = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<BaseResponse<T>>> => {
  return API.delete(url, config);
};

export const PUT = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<BaseResponse<T>>> => {
  return API.put(url, data, config);
};

export const PATCH = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<BaseResponse<T>>> => {
  return API.patch(url, data, config);
};
