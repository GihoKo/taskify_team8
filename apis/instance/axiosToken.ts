import axios, { AxiosError, InternalAxiosRequestConfig, isAxiosError } from 'axios';

import { logOnDev } from '@utils/logger/logOnDev';
import { getAccessToken } from '@utils/token/getAccessToken';
// import { getAccessToken } from '@utils/token/getAccessToken';

/**
 * ### accessToken을 포함시킨 axios 인스턴스
 */
export const axiosToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: '요청 시간이 5초를 경과하였습니다. 다시 시도해주세요.',
});

// 요청 인터셉터를 추가하여 모든 요청에 토큰을 포함시킴
axiosToken.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    if (isAxiosError(error)) {
      logOnDev(`☢️ [API] | Error ${error.message} Request`);
    }

    return Promise.reject(error);
  },
);

axiosToken.interceptors.response.use(
  (response) => {
    // 실패하면 다시 보내는 로직(액세스 토큰이 만료되었을 때)
    // 리프레쉬 토큰을 서버로 보내는 로직
    return response;
  },

  (error: AxiosError | Error): Promise<AxiosError> => {
    if (isAxiosError(error) && error.code === AxiosError.ECONNABORTED) {
      const { method, url } = error.config as InternalAxiosRequestConfig;
      logOnDev(`☢️ [API] ${method?.toUpperCase()} ${url} | Response`);
      error.message = '로그인 후 이용해 주세요.';

      return Promise.reject(error);
    }

    logOnDev(`☢️ [API] | Error ${error.message} Response`);

    return Promise.reject(error);
  },
);
