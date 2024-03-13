import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import SearchIcon from '../atoms/SearchIcon';

export default function InvitationSearchBar() {
  return (
    <S.Wrapper>
      <SearchIcon />
      <S.Input placeholder='검색' />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: relative;
  `,
  Input: styled.input`
    width: 100%;
    border-radius: 0.6rem;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 4.4rem;
    padding-right: 1rem;

    font-size: 1.4rem;

    @media ${mediaBreakpoint.tablet} {
      padding-left: 4.8rem;
      font-size: 1.6rem;
    }
    @media ${mediaBreakpoint.pc} {
      padding-left: 4.8rem;
      font-size: 1.6rem;
    }
  `,
};
