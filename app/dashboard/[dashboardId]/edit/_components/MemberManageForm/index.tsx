'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import MemberListTable from '../MemberListTable';
import { PageTurner } from '../PageTurner';

/**
 * TOOD: api 연결 했을 때 옮길 거
 */
type DashboardMember = {
  id: number;
  email: string; // email
  nickname: string;
  profileImageUrl: null | string;
  createdAt: string | Date;
  updatedAt: string | Date;
  isOwner: boolean;
  userId: number;
};

/**
 * TOOD: api 연결 했을 때 옮길 거
 */
type DashboardMemberList = DashboardMember[];

/**
 * TOOD: api 연결 했을 때 옮길 거
 */
export type DashboardMemberListWithTotalCount = {
  members: DashboardMemberList;
  totalCount: number;
};

type MemberManageFormProps = PropsWithChildren<DashboardMemberListWithTotalCount>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MemberManageForm = ({ children, members, totalCount }: MemberManageFormProps) => {
  return (
    <S.Form>
      <S.FormHeader>
        <S.FormName>구성원</S.FormName>
        <PageTurner>
          <PageTurner.Wrapper>
            <PageTurner.CurrentPageDescriber currentPage={1} totalPages={1} />
            <PageTurner.ButtonContainer>
              <PageTurner.LeftButton />
              <PageTurner.RightButton />
            </PageTurner.ButtonContainer>
          </PageTurner.Wrapper>
        </PageTurner>
      </S.FormHeader>
      <S.ColumnName>이름</S.ColumnName>
      <MemberListTable />
    </S.Form>
  );
};

export default MemberManageForm;

const S = {
  Form: styled.form`
    /* width: 28.4rem; */
    width: 100%;
    min-width: 28.4rem;
    height: 33.7rem; /* TODO: 멤버 없을 때 디자인 필요 */
    margin-top: 1.1rem;
    padding-block: 2.2rem 1.6rem;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    border-radius: 0.8rem;
    background: ${({ theme: { color } }) => color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1.2rem;

      height: 40.4rem;
      padding-block: 2.6rem 2rem;
    }
  `,

  FormHeader: styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 2rem;

    @media ${mediaBreakpoint.tablet} {
      padding-inline: 2.8rem;
    }
  `,

  FormName: styled.h3`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 2.4rem;
    }
  `,

  ColumnName: styled.div`
    color: ${({ theme: { color } }) => color.gray_9FA6B2};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;

    padding-inline: 2rem;
    padding-block: 1.8rem 2rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      padding-inline: 2.8rem;
      padding-block: 2.7rem 2.4rem;
    }
  `,
};
