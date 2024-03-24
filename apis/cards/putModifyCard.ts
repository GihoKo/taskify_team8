import { axiosToken } from '@apis/instance/axiosToken';
import { Card } from '@apis/cards/getCardItem';

export type putModifyCardResponse = Card;

export interface putModifyCardRequest {
  cardId: number;
  columnId: number;
  assigneeUserId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl?: string;
}

export const postCreateCard = async ({
  cardId,
  assigneeUserId,
  columnId,
  title,
  description,
  dueDate,
  tags,
  ...args
}: putModifyCardRequest) => {
  const response = await axiosToken.post<putModifyCardResponse>(`/cards${cardId}`, {
    assigneeUserId,
    columnId,
    title,
    description,
    dueDate,
    tags,
    ...args,
  });

  return response.data;
};
