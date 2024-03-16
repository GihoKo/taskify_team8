import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InvitationText from '../atoms/InvitationText';

// @ToDo 반응형 grid 수정 필요
export default function InvitationHeader() {
  return (
    <S.Wrapper>
      <InvitationText status='header'>이름</InvitationText>
      <InvitationText status='header'>초대자</InvitationText>
      <InvitationText status='header'>수락 여부</InvitationText>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: none;
    width: 100%;

    @media ${mediaBreakpoint.tablet} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${mediaBreakpoint.pc} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `,
};
