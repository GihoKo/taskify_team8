import styled from 'styled-components';

import InvitationButton from '../atoms/InvitationButton';

export default function InvitationButtonWrapper() {
  return (
    <S.Wrapper>
      <InvitationButton type='accept' onClick={() => {}}>
        수락
      </InvitationButton>
      <InvitationButton type='refuse' onClick={() => {}}>
        거절
      </InvitationButton>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 1rem;
  `,
};
