import { axiosToken } from '@apis/instance/axiosToken';

import { InvitationList } from './getInitialInvitionList';

export const getSearchedInvitationList = async (searchKeyword: string) => {
  const { data } = await axiosToken.get<InvitationList>(`/invitations?title=${searchKeyword}`);

  return data;
};
