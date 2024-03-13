import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InvitationText from '../atoms/InvitationText';

export default function InvitationHeader() {
  return (
    <S.Wrapper>
      <InvitationText type='header'>이름</InvitationText>
      <InvitationText type='header'>초대자</InvitationText>
      <InvitationText type='header'>수락 여부</InvitationText>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: none;
    width: 100%;

    @media ${mediaBreakpoint.tablet} {
      display: flex;
      justify-content: space-between;
    }
    @media ${mediaBreakpoint.pc} {
      display: flex;
      justify-content: space-between;
    }
  `,
};
