import axios from 'axios';

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
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export const tempToken = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/3-8',
});

tempToken.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

  return config;
});

export const getCardItem = async (cardId: number) => {
  const response = await axiosToken.get(`/cards/${cardId}`);

  return response.data;
};
