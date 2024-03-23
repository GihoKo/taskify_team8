import axios from '@apis/axios';

export const signUpUser = async (data: { email: string; nickname: string; password: string }) => {
  try {
    const response = await axios.post('/users', data);

    return response;
  } catch (error) {
    throw new Error('회원가입에 실패했습니다.');
  }
};
