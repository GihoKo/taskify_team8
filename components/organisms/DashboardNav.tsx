'use client';

import { useEffect } from 'react';

import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import styled from 'styled-components';

import DashboardMemberListWithFunnel from '@/app/dashboard/_components/molecules/DashboardMemberListWithFunnel';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';
import { sidebarWidth } from '@styles/sidebarWidth';

import FirstLetterProfile from '@components/atoms/FirstLetterProfile';
import NonNullableFunnel from '@components/util/NonNullableFunnel';
import { CallableMappedComponent } from '@components/util/withFunnel';

import { useUserStore } from '@store/store/userStore';

import DashboardNameWithValidId from './DashboardNameWithValidId';
import InviteButton from '../../app/dashboard/_components/molecules/InviteButton';
import ManageButton from '../../app/dashboard/_components/molecules/ManageButton';

// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
const DashBoardName: CallableMappedComponent = (pathName) => (
  <S.DashBoardName>{pathName === '/mydashboard' ? '내 대시보드' : '계정관리'}</S.DashBoardName>
);

const DashboardNav = () => {
  const pathname = usePathname();
  // * dashboardId가 없는 곳이면, null이 될 수도 있음.
  const { dashboardId } = useParams<{ dashboardId?: string }>();

  const { user, getUser } = useUserStore();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <S.Wrapper $pathname={pathname}>
      <S.DashBoardNameBox $pathname={pathname}>
        <NonNullableFunnel
          condition={{ dashboardId }}
          componentListMappedToPath={[
            {
              path: ['/mydashboard', '/mypage'],
              component: DashBoardName,
            },
          ]}
        >
          {({ dashboardId }) => <DashboardNameWithValidId dashboardId={Number(dashboardId)} />}
        </NonNullableFunnel>
      </S.DashBoardNameBox>

      <S.RightContentsBox>
        {pathname === '/mydashboard' ? null : (
          <S.ButtonContainer>
            <ManageButton />
            <InviteButton />
          </S.ButtonContainer>
        )}
        <S.ProfileBox>
          {/* 멤버 프로필 정보 */}
          <DashboardMemberListWithFunnel
            componentListMappedToPath={[
              {
                path: ['/mydashboard', '/mypage'],
                component: null,
              },
            ]}
          />
          {/* 내 프로필 정보 */}
          <S.MyInfoBox>
            <FirstLetterProfile
              as='a'
              href='/mypage'
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
              profileImageUrl={user.profileImageUrl}
            >
              {user.nickname[0]}
            </FirstLetterProfile>
            <S.MyName>{user.nickname}</S.MyName>
          </S.MyInfoBox>
        </S.ProfileBox>
      </S.RightContentsBox>
    </S.Wrapper>
  );
};

export default DashboardNav;

const S = {
  Wrapper: styled.nav<{ $pathname: string }>`
    position: fixed;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.nav};
    background: ${({ theme }) => theme.color.gray_FAFAFA};
    backdrop-filter: blur(10px);

    display: flex;
    align-items: center;
    justify-content: ${({ $pathname }) => ($pathname === '/mydashboard' ? 'space-between' : 'flex-end')};
    min-width: 30.8rem;
    width: calc(100vw - ${sidebarWidth.onMobile});
    height: 6rem;
    flex-shrink: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};

    padding-inline: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      padding-inline: 4rem;
      width: calc(100vw - ${sidebarWidth.onTablet});
      justify-content: ${({ $pathname }) => ($pathname === '/mydashboard' ? 'space-between' : 'flex-end')};
      height: 7rem;
    }

    @media ${mediaBreakpoint.pc} {
      padding-inline: 4rem;
      width: calc(100vw - ${sidebarWidth.onPc});
      justify-content: space-between;
      position: static;
    }
  `,

  DashBoardNameBox: styled.section<{ $pathname: string }>`
    display: ${({ $pathname }) => ($pathname === '/mydashboard' ? 'block' : 'none')};

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
