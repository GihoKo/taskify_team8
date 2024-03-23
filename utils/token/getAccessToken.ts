import { ACCESS_TOKEN } from '@constants/token';

import { getCookie } from '@utils/cookie';

export const getAccessToken = (): string | null => {
  // TODO: 로그인 연결되면 쿠키에서 토큰을 가져오도록 수정
  const accessToken = getCookie(ACCESS_TOKEN);
  // const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN_1;

  if (accessToken) {
    return accessToken;
  }

  return null;
};
