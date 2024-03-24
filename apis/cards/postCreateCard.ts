import { axiosToken } from '@apis/instance/axiosToken';

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

export type postCreateCardResponse = Card;

export interface postCreateCardRequest {
  assigneeUserId?: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags?: string[];
  imageUrl?: string | null;
}

export const postCreateCard = async ({
  assigneeUserId,
  dashboardId,
  columnId,
  title,
  description,
  dueDate,
  tags,
  ...args
}: postCreateCardRequest) => {
  const response = await axiosToken.post<postCreateCardResponse>('/cards', {
    assigneeUserId,
    dashboardId,
    columnId,
    title,
    description,
    dueDate,
    tags,
    ...args,
  });

  return response.data;
};
