import Image from 'next/image';
import styled from 'styled-components';

import searchIcon from '@public/images/icons/search-filledBlack-333236-w22-h22.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InvitationItem from './InvitationItem';
import InvitationText from '../commons/InvitationText';
import { InvitationMock } from '../mock/mock';

export default function InvitationList() {
  return (
    <S.Box>
      <S.Title>초대받은 대시보드</S.Title>
      <S.SearchBarWrapper>
        <S.SearchIconWrapper>
          <Image fill src={searchIcon} alt='돋보기 아이콘 이미지' />
        </S.SearchIconWrapper>
        <S.SearchInput type='search' placeholder='검색' />
      </S.SearchBarWrapper>
      <S.InvitationContainer>
        <S.InvitationHeaderWrapper>
          <InvitationText status='header'>이름</InvitationText>
          <InvitationText status='header'>초대자</InvitationText>
          <InvitationText status='header'>수락 여부</InvitationText>
        </S.InvitationHeaderWrapper>
        {InvitationMock.map((item) => (
          <InvitationItem key={item.id} dashboardName={item.dashboardName} inviter={item.inviter} />
        ))}
      </S.InvitationContainer>
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
  `,

  Title: styled.h3`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 2.4rem;
    }
    @media ${mediaBreakpoint.pc} {
      font-size: 2.4rem;
    }
  `,

  SearchBarWrapper: styled.div`
    width: 100%;
    margin-bottom: 0.8rem;
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 2.4rem;
    }
  `,

  SearchInput: styled.input`
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
  `,

  SearchIconWrapper: styled.div`
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      width: 2.4rem;
      height: 2.4rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,

  InvitationContainer: styled.div``,

  InvitationHeaderWrapper: styled.header`
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
