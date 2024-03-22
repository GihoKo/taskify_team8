import { GetDashboardMemberListResponse } from '@apis/members/getDashboardMemberList';

export const mockUserList = [
  {
    id: 1,
    nickname: '정만철',
  },
  {
    id: 2,
    nickname: '김태순',
  },
  {
    id: 3,
    nickname: '최주협',
  },
  {
    id: 4,
    nickname: '윤지현',
  },
];

export const mockEmailList = [
  {
    id: 1,
    email: 'codeitA@codeit.com',
  },
  {
    id: 2,
    email: 'codeitB@codeit.com',
  },
  {
    id: 3,
    email: 'codeitC@codeit.com',
  },
  {
    id: 4,
    email: 'codeitD@codeit.com',
  },
  {
    id: 5,
    email: 'codeitE@codeit.com',
  },
];

export const dashboardMemberList: GetDashboardMemberListResponse = {
  members: [
    {
      id: 6735,
      email: 'asfd123@gmail.com',
      nickname: 'asdf123',
      profileImageUrl: '',
      createdAt: '2024-03-16T01:55:37.592Z',
      updatedAt: '2024-03-16T01:55:37.592Z',
      isOwner: true,
      userId: 1276,
    },
    {
      id: 6741,
      email: 'asdf6@gmail.com',
      nickname: 'asdf6',
      profileImageUrl: '',
      createdAt: '2024-03-16T02:01:21.538Z',
      updatedAt: '2024-03-16T02:01:21.538Z',
      isOwner: false,
      userId: 1282,
    },
    {
      id: 6740,
      email: 'asdf5@gmail.com',
      nickname: 'asdf5',
      profileImageUrl: '',
      createdAt: '2024-03-16T02:01:15.764Z',
      updatedAt: '2024-03-16T02:01:15.764Z',
      isOwner: false,
      userId: 1281,
    },
    {
      id: 6739,
      email: 'asdf4@gmail.com',
      nickname: 'asdf4',
      profileImageUrl: '',
      createdAt: '2024-03-16T02:01:07.164Z',
      updatedAt: '2024-03-16T02:01:07.164Z',
      isOwner: false,
      userId: 1280,
    },
  ],
  totalCount: 7,
};
