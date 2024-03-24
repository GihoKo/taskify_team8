import { authInstance } from './mypageInstance';

interface putAuthPassWordProps {
  password: string;
  newPassword: string;
}

export async function putAuthPassWord({ password, newPassword }: putAuthPassWordProps) {
  const res = await authInstance.put<number>('auth/password', { password, newPassword });

  return res.status; // 204 성공입니다.
}

export interface UserInfo {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: null | string;
  createdAt: string;
  updatedAt: string;
}

/**
 * 내 정보 조회
 */
export async function getUsers() {
  const res = await authInstance.get<UserInfo>(`/users/me`);

  return res.data;
}

interface putUsersProps {
  nickname: string;
  profileImageUrl: string | null;
}

/**
 * 내 정보 수정
 */
export async function putUsers(userData: putUsersProps) {
  const res = await authInstance.put<UserInfo>(`/users/me`, userData);

  return res;
}

/**
 * 프로필 이미지 업로드
 */
export interface UsersProfileImagePost {
  profileImageUrl: string;
}

export async function postUsersProfileImage(imageFile: FormData) {
  const res = await authInstance.post<UsersProfileImagePost>(`/users/me/image`, imageFile);

  return res;
}
