import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/3-8',
});

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
