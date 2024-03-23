import { isAxiosError } from 'axios';
import { StateCreator } from 'zustand';

import { getUserInfo, GetUserInfoErrorResponse, UserInfo } from '@apis/users/getUserInfo';

import { type ZustandMiddleware } from '@store/middleware/middleware';

interface UserInfoState {
  user: UserInfo;
}

interface UserInfoAction {
  setUser: (userInfo: UserInfo) => void;
  getUser: () => Promise<UserInfo>;
  resetUser: () => void;
}

export type UserInfoSlice = UserInfoState & UserInfoAction;

enum UserInfoActionType {
  SET_USER_INFO = 'SET_USER_INFO',
  GET_USER_INFO = 'GET_USER_INFO',
  RESET_USER_INFO = 'RESET_USER_INFO',
}

const initialState: UserInfo = {
  id: '',
  email: '',
  nickname: '',
  profileImageUrl: null,
  createdAt: '',
  updatedAt: '',
};

export const userInfoSlice: StateCreator<
  UserInfoSlice,
  [ZustandMiddleware['devtools'], ZustandMiddleware['persist']]
> = (set, get) => ({
  user: { ...initialState },
  resetUser: () =>
    set({
      user: { ...initialState },
    }),
  setUser: (userInfo) => set({ user: userInfo }, false, UserInfoActionType.SET_USER_INFO),
  getUser: async () => {
    let userInfo: UserInfo = get().user;

    if (userInfo.id) {
      return userInfo;
    }

    try {
      userInfo = await getUserInfo();
      set({ user: userInfo });

      return userInfo;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error((error.response?.data as GetUserInfoErrorResponse).message);
      }

      // 로컬 스토리지에서 불러오면 안 됨.
      return initialState;
    }
  },
});
