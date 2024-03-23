import { axiosToken } from '@apis/instance/axiosToken';

// 컬럼 삭제

export const deleteColumn = async (columnId: number) => {
  const { data } = await axiosToken.delete(`/columns/${columnId}`);

  return data;
};
