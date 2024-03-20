interface CookieAttributes {
  expires?: number | Date | string;
  'max-age'?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';
  httpOnly?: boolean;
  [property: string]: any;
}

interface SetCookie {
  (name: string, value: string, options?: CookieAttributes): void;
}

export const setCookie: SetCookie = (name, value, options = {}) => {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    if (Object.prototype.hasOwnProperty.call(options, optionKey)) {
      updatedCookie += `; ${optionKey}`;
      const optionValue = options[optionKey];

      if (optionValue !== true) {
        updatedCookie += `=${optionValue}`;
      }
    }
  }

  document.cookie = updatedCookie;
};
