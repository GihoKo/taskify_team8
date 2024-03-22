import { axiosToken } from '@apis/instance/axiosToken';

// 401
// Unauthorized
// {
//   "message": "Unauthorized"
// }

// 404;
// NotFoundException;
// {
//   "message": "존재하지 않는 유저입니다."
// }

export interface GetUserInfoErrorResponse {
  message: string;
}

export interface UserInfo {
  id: number | string;
  email: string;
  nickname: string;
  profileImageUrl?: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export const getUserInfo = async () => {
  const response = await axiosToken.get<UserInfo>('/users/me');

  return response.data;
};
