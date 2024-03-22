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

export interface Card {
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
  imageUrl?: string;
  teamId: string;
  columnId: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface GetCardListResponse {
  cursorId: number | null;
  totalCount: number;
  cards: Card[];
}

export interface GetCardListParams {
  size?: number;
  columnId: number;
  cursorId?: number | null;
}

export const getCardList = async ({ size = 10, columnId, cursorId }: GetCardListParams) => {
  const response = await axiosToken.get<GetCardListResponse>('/cards', {
    // @see https://axios-http.com/docs/req_config
    // NOTE: params that are null or undefined are not rendered in the URL.
    params: {
      size,
      cursorId,
      columnId,
    },
  });

  return response.data;
};
