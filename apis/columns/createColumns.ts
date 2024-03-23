import { axiosToken } from '@apis/instance/axiosToken';

// 컬럼 생성

interface CreateColumnResponse {
  id: number;
  title: string;
  teamId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export const createColumn = async (title: string, dashboardId: number) => {
  const { data } = await axiosToken.post<CreateColumnResponse>(`/columns`, {
    title,
    dashboardId,
  });

  return data;
};
