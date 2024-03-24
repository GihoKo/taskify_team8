import { axiosToken } from '@apis/instance/axiosToken';

export interface Comment {
  id: number;
  content: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  cardId: number;
  author: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
}

export interface getCommentListResponse {
  comments: Comment[];
  cursorId?: number | null;
}

export interface getCommentListParams {
  cardId: number;
  size?: number;
  limit?: number;
}

export const getCommentList = async ({ cardId, size, limit }: getCommentListParams) => {
  const response = await axiosToken.get<getCommentListResponse>(`/comments`, {
    params: {
      cardId,
      size,
      limit,
    },
  });

  return response.data;
};
