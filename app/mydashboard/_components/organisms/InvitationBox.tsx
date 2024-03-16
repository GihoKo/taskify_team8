import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InvitationContainer from './InvitationContainer';
import InvitationTitle from '../atoms/InvitationTitle';
import InvitationSearchBar from '../molecules/InvitationSearchBar';

export default function InvitationBox() {
  return (
    <S.Box>
      <InvitationTitle />
      <InvitationSearchBar />
      <InvitationContainer />
    </S.Box>
  );
}

const S = {
  Box: styled.div`
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.white_FFFFFF};
    padding-top: 2.4rem;

    @media ${mediaBreakpoint.tablet} {
      padding-top: 3.2rem;
    }
    @media ${mediaBreakpoint.pc} {
      padding-top: 3.2rem;
    }
  `,
};
