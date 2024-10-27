import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {API_URL} from '@env';

export const API = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  async config => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    console.log(`--> ${accessToken}`);
    console.log(`--> ${config.baseURL}${config.url}`);
    return config;
  },
  error => Promise.reject(error),
);

export interface BaseResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const GET = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<BaseResponse<T>>> => {
  return API.get(url, config);
};

export const GETuser = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
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
