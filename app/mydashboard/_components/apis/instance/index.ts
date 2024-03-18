import axios from 'axios';

const URL_DOMAIN = 'https://sp-taskify-api.vercel.app/3-8';

const ACCESS_TOKEN_1 =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI4NywidGVhbUlkIjoiMy04IiwiaWF0IjoxNzEwNzY5OTQxLCJpc3MiOiJzcC10YXNraWZ5In0.l-bCi4NEjNIYp55xVj8c4c7MGVWDYmqyWR1MKIgQdrM';

// const ACCESS_TOKEN_2 =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMxNiwidGVhbUlkIjoiMy04IiwiaWF0IjoxNzEwNzczMDgwLCJpc3MiOiJzcC10YXNraWZ5In0.YMViqJVTf-cMftLeQZZOnBKivp6w2bmps4ego1Yx2Mo';

export const defaultInstance = axios.create({
  baseURL: URL_DOMAIN,
});

// accessToken을 추가한 axios 인스턴스
export const instanceAddedAccessToken = axios.create({
  baseURL: URL_DOMAIN,
});

instanceAddedAccessToken.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${ACCESS_TOKEN_1}`;

  return config;
});
