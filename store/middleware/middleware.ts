export type ZustandMiddleware = {
  immer: ['zustand/immer', never];
  devtools: ['zustand/devtools', never];
  subscribeWithSelector: ['zustand/subscribeWithSelector', never];
  persist: ['zustand/persist', unknown];
};
