import { putInvitationAnswer } from '../apis/api';

// 초대 답변
export const handleInvitationAnswer = async (invitationId: number, answer: boolean) => {
  await putInvitationAnswer(invitationId, answer);
};
