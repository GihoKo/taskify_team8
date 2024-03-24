import { axiosToken } from '@apis/instance/axiosToken';

export const deleteComment = async (commentId: number) => {
  const response = await axiosToken.delete(`/comments/${commentId}`);

  return response;
};
