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
    profileImageUrl: string | null;
  };
}

export interface postCommentListResponse {
  comments: Comment[];
  cursorId?: number | null;
}

export interface postCommentListParams {
  content: string;
  dashboardId: number;
  columnId: number;
  cardId: number;
}

export const postCommentList = async ({ cardId, dashboardId, columnId, content }: postCommentListParams) => {
  const response = await axiosToken.post<Comment>(`/comments`, {
    cardId,
    dashboardId,
    columnId,
    content,
  });

  return response.data;
};
