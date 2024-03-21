import { axiosToken } from '@apis/instance/axiosToken';

// 컬럼 업데이트

interface UpdateColumnResponse {
  id: number;
  title: string;
  teamId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export const updateColumn = async (title: string, columnId: number) => {
  const { data } = await axiosToken.put<UpdateColumnResponse>(`/columns${columnId}`, {
    title,
  });

  return data;
};
