'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import SideBar from '@components/organisms/SideBar';

import InvitationList from './_components/InvitationList';
import MyDashboardList from './_components/MyDashboardList';
import DashboardNav from '../../components/organisms/DashboardNav';

export default function MyDashboardPage() {
  return (
    <S.Page>
      <SideBar />
      <S.RightSide>
        <DashboardNav />
        <S.Main>
          <MyDashboardList />
          <InvitationList />
        </S.Main>
      </S.RightSide>
    </S.Page>
  );
}

const S = {
  Page: styled.div`
    display: flex;
  `,
  RightSide: styled.div`
    background-color: ${({ theme }) => theme.color.gray_FAFAFA};
    flex-grow: 1;
  `,
  Main: styled.main`
    padding: 2.4rem;

    @media ${mediaBreakpoint.tablet} {
      padding: 4rem 4rem 11.7rem 4rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 102.4rem;
      padding-top: 4.4rem;
      padding-bottom: 12.3rem;
    }
  `,
};
