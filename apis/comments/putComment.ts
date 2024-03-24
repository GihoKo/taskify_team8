import { axiosToken } from '@apis/instance/axiosToken';

export interface putCommentParams {
  content: string;
  commentId: number;
}

export const putComment = async ({ commentId, content }: putCommentParams) => {
  const response = await axiosToken.put<Comment>(`/comments/${commentId}`, {
    content,
  });

  return response.data;
};
