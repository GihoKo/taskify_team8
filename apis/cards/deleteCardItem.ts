import { axiosToken } from '@apis/instance/axiosToken';

export const deleteCardItem = async (cardId: number) => {
  const response = await axiosToken.delete(`/cards/${cardId}`);

  return response.data;
};
