import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/3-8/',
});

// 요청 인터셉터를 추가하여 모든 요청에 토큰을 포함시킴
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('login');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
