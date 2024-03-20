import { setCookie } from './setCookie';

export const deleteCookie = (name: string) => {
  setCookie(name, '', {
    'max-age': -1,
  });
};
