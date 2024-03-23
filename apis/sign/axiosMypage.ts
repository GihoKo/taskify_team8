import axios from '@apis/axios';

// 분리 작업중
export const fetchCurrentUser = async () => {
  try {
    const response = await axios.get('/users/me');

    return response.data;
  } catch (error) {
    throw new Error('사용자 정보를 불러오는데 실패했습니다.');
  }
};

export const updateProfile = async (data: { nickname: string; profileImageUrl: string | null }) => {
  try {
    const response = await axios.put(`/users/me`, data);

    return response.data;
  } catch (error) {
    throw new Error('프로필 업데이트에 실패했습니다.');
  }
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(`/users/me/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.profileImageUrl;
  } catch (error) {
    throw new Error('이미지 업로드에 실패했습니다.');
  }
};

export const changePassword = async (data: { password: string; newPassword: string }) => {
  try {
    const response = await axios.put(`/users/me/password`, data);

    return response.data;
  } catch (error) {
    throw new Error('비밀번호 변경에 실패했습니다.');
  }
};
