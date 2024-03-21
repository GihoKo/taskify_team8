import { axiosToken } from '@apis/instance/axiosToken';

// {
//   "result": "SUCCESS",
//   "data": [
//     {
//       "id": 0,
//       "title": "string",
//       "teamId": "string",
//       "createdAt": "2024-03-19T16:11:30.898Z",
//       "updatedAt": "2024-03-19T16:11:30.898Z"
//     }
//   ]
// }

export interface ColumnList {
  id: number;
  title: string;
  teamId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface GetColumnListResponse {
  result: string;
  data: ColumnList[]; // nullable true임. 근데 일단 null 빼둠.
}

export const getColumnList = async (dashboardId: number) => {
  const response = await axiosToken.get<GetColumnListResponse>(`/columns?dashboardId=${dashboardId}`);

  return response.data;
};
