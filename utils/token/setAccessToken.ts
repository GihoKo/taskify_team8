import { ACCESS_TOKEN } from '@constants/token';

import { setCookie } from '@utils/cookie';

export const setAccessToken = (accessToken: string) => {
  if (accessToken) {
    // TODO: cookie setting option config 추가할 것.
    setCookie(ACCESS_TOKEN, accessToken);

    return;
  }

  throw new Error('accessToken is not provided');
};
