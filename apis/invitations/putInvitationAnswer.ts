import { axiosToken } from '@apis/instance/axiosToken';

// 초대 답변
interface InvitationAnswer {
  inviteAccepted: boolean;
}

export const putInvitationAnswer = async (invitationId: number, answer: boolean) => {
  const { data } = await axiosToken.put<InvitationAnswer>(`/invitations/${invitationId}`, {
    inviteAccepted: answer,
  });

  return data;
};
