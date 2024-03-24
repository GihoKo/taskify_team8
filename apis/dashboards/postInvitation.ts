import { axiosToken } from '@apis/instance/axiosToken';

import { Invitation } from './getInvitationList';

interface PostInvitationResponse extends Invitation {}

export const postInvitation = async (
  dashboardId: number,
  body: {
    email: string;
  },
) => {
  const res = await axiosToken.post<PostInvitationResponse>(`/dashboards/${dashboardId}/invitations`, body);

  console.log(res);

  return res;
};
