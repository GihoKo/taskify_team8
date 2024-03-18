import axios from 'axios';

const URL_DOMAIN = 'https://sp-taskify-api.vercel.app/3-8';

export const defaultInstance = axios.create({
  baseURL: URL_DOMAIN,
});

// accessToken을 추가한 axios 인스턴스
export const instanceAddedAccessToken = axios.create({
  baseURL: URL_DOMAIN,
});

instanceAddedAccessToken.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_1}`;

  return config;
});
