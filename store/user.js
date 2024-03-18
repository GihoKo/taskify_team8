import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        id: '',
        email: '',
        nickname: '',
        profileImageUrl: null,
        createdAt: '',
        updatedAt: '',
      },
      setUser: (userInfo) => set({ user: userInfo }),
    }),
    {
      name: 'user-store', // localStorage에 저장될 때 사용될 키
      getStorage: () => localStorage, // 사용할 스토리지 지정
    },
  ),
);

export default useUserStore;
