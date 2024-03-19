import { ACCESS_TOKEN } from '@constants/token';

import { getCookie } from '@utils/cookie';

export const getAccessToken = (): string | null => {
  const accessToken = getCookie(ACCESS_TOKEN);

  if (accessToken) {
    return accessToken;
  }

  // return null;
  throw new Error('Access token not found');
};
