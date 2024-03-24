// 마이페이지 수정을 위해
import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/3-8/',
  headers: {
    Authorization: typeof window !== 'undefined' ? `Bearer ${localStorage.getItem('accessToken')}` : '',
  },
});
