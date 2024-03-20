import { axiosToken } from '@apis/instance/axiosToken';

// {
//   "cursorId": 0,
//   "totalCount": 0,
//   "cards": [
//     {
//       "id": 0,
//       "title": "string",
//       "description": "string",
//       "tags": [
//         "string"
//       ],
//       "dueDate": "string",
//       "assignee": {
//         "profileImageUrl": "string",
//         "nickname": "string",
//         "id": 0
//       },
//       "imageUrl": "string",
//       "teamId": "string",
//       "columnId": 0,
//       "createdAt": "2024-03-19T16:52:16.771Z",
//       "updatedAt": "2024-03-19T16:52:16.771Z"
//     }
//   ]
// }

interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface GetCardListResponse {
  cursorId: number;
  totalCount: number;
  cards: Card[];
}

interface GetCarListParams {
  size: number;
  columnId: number;
}

export const getCardList = async ({ size, columnId }: GetCarListParams) => {
  const response = await axiosToken.get<GetCardListResponse>('/cards', {
    params: {
      size,
      columnId,
    },
  });

  return response.data;
};
