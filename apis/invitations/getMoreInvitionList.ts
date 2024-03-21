import { axiosToken } from '@apis/instance/axiosToken';

import { InvitationList } from './getInitialInvitionList';

export const getMoreInvitionList = async (cursorId: number | null) => {
  const { data } = await axiosToken.get<InvitationList>(`/invitations?cursorId=${cursorId}&size=6`);

  return data;
};
