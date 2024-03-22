import { devtools, persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { UserInfoSlice, userInfoSlice } from '@store/slice/userInfoSlice';

export const useUserStore = createWithEqualityFn<UserInfoSlice>()(
  devtools(
    persist(userInfoSlice, {
      name: 'user-store',
      partialize: ({ user }) => ({
        user,
      }),
    }),
    {
      name: 'user-info-store',
      enabled: process.env.NODE_ENV === 'development',
    },
  ),
  shallow,
);
