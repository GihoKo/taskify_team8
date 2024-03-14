'use client';

import { PropsWithChildren } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import FirstLetterProfile from '@components/atoms/FirstLetterProfile';

import { mockDashboardMemberList } from '../../_constants/mockDashboardMemberList';
import DashboardMemberList from '../molecules/DashboardMemberList';
import InviteButton from '../molecules/InviteButton';
import ManageButton from '../molecules/ManageButton';

type DashboardNavProps = PropsWithChildren;

// TODO: api 연결되면 프롭 수정
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardNav = ({ children }: DashboardNavProps) => {
  return (
    <S.Box>
      <S.DashBoardNameBox>
        <S.DashBoardName>비브리지</S.DashBoardName>
        <S.CrownIcon src={'/images/icons/icon-crown.svg'} alt='왕관 이미지' width={20.103} height={16} />
      </S.DashBoardNameBox>

      <S.RightContentsBox>
        <S.ButtonContainer>
          <ManageButton />
          <InviteButton />
        </S.ButtonContainer>

        <S.ProfileBox>
          {/* 멤버 프로필 정보 */}
          <DashboardMemberList members={mockDashboardMemberList} />
          <S.Stick />
          {/* 내 프로필 정보 */}
          <S.MyInfoBox>
            <FirstLetterProfile
              backgroundColor='#a3c4a2'
              profileSize={{
                onMobile: '3.4rem',
                onPc: '3.8rem',
              }}
              fontSize={{
                onMobile: '1.4rem',
                onPc: '1.6rem',
              }}
              borderWidth={{
                onMobile: '2px',
              }}
              isOverlapping
            >
              B
            </FirstLetterProfile>
            <S.MyName>배유철</S.MyName>
          </S.MyInfoBox>
        </S.ProfileBox>
      </S.RightContentsBox>
    </S.Box>
  );
};

export default DashboardNav;

const S = {
  Box: styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};

    padding-inline: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      padding-inline: 4rem;

      justify-content: flex-end;

      height: 7rem;
    }

    @media ${mediaBreakpoint.pc} {
      padding-inline: 4rem;

      justify-content: space-between;
    }
  `,

  DashBoardNameBox: styled.section`
    display: none;

    @media ${mediaBreakpoint.pc} {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.8rem;
    }
  `,

  DashBoardName: styled.h1`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;

    @media ${mediaBreakpoint.pc} {
      display: block;
    }
  `,

  CrownIcon: styled(Image)`
    display: none; /* 내가 만든 대시보드가 아니면 보이면 안 됨. */

    @media ${mediaBreakpoint.pc} {
      /* display: none; */ /* 내가 만든 대시보드가 아니면 보이면 안 됨. */
      display: inline-block;

      width: 2.0103rem;
      height: 1.6rem;
      flex-shrink: 0;
    }
  `,

  RightContentsBox: styled.div`
    display: flex;
    align-items: center;
    column-gap: 1.6rem;

    @media ${mediaBreakpoint.tablet} {
      column-gap: 3.2rem;
    }

    @media ${mediaBreakpoint.pc} {
      column-gap: 4rem;
    }
  `,

  ButtonContainer: styled.section`
    display: flex;
    column-gap: 0.6rem;

    @media ${mediaBreakpoint.tablet} {
      column-gap: 1.2rem;
    }

    @media ${mediaBreakpoint.pc} {
      column-gap: 1.6rem;
    }
  `,

  ProfileBox: styled.section`
    display: flex;
    align-items: center;
    column-gap: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      column-gap: 2.4rem;
    }

    @media ${mediaBreakpoint.pc} {
      column-gap: 3.2rem;
    }
  `,

  Stick: styled.div`
    width: 0.1rem;
    height: 3.4rem;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.color.gray_D9D9D9};

    @media ${mediaBreakpoint.tablet} {
      height: 3.8rem;
    }
  `,

  MyInfoBox: styled.div`
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
  `,

  MyName: styled.span`
    display: none;

    @media ${mediaBreakpoint.tablet} {
      display: inline;
      color: ${({ theme }) => theme.color.black_333236};
      font-size: 1.6rem;
      font-weight: 500;
      line-height: normal;
    }
  `,
};
