import axios from '@apis/axios';

export async function loginUser(data: { email: string; password: string }) {
  try {
    const res = await axios.post('/auth/login', data);

    return res.data.accessToken;
  } catch (error) {
    throw new Error('로그인에 실패했습니다.');
  }
}

export async function getUserData() {
  try {
    const res = await axios.get('/users/me');

    return res.data;
  } catch (error) {
    throw new Error('사용자 정보를 가져오는데 실패했습니다.');
  }
}
