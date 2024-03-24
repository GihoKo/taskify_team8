import { axiosToken } from '@apis/instance/axiosToken';
import { axiosTokenMultipart } from '@apis/instance/axiosTokenMultipart';

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
  assigneeUsersId?: number;
  dashboardId: 0;
  columnId: 0;
  title: string;
  description: string;
  dueDate: string;
  tags?: string[];
  imageUrl?: string;
}

export const postCreateCard = async ({
  assigneeUsersId,
  dashboardId,
  columnId,
  title,
  description,
  dueDate,
  tags,
  imageUrl,
}: postCreateCardRequest) => {
  const response = await axiosTokenMultipart.post<postCreateCardResponse>('/cards', {
    assigneeUsersId,
    dashboardId,
    columnId,
    title,
    description,
    dueDate,
    tags,
    imageUrl,
  });

  return response.data;
};
