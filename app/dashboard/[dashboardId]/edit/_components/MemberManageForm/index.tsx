'use client';

import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Member } from '@apis/members/getDashboardMemberList';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useGetDashboardMemberList } from '../../_hooks/useGetDashboardMemberList.query';
import MemberListTable from '../MemberListTable';
import { PageTurner } from '../PageTurner';

interface MemberManageFormProps {
  dashboardId: number;
}

const MemberManageForm = ({ dashboardId }: MemberManageFormProps) => {
  const sizePerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isFetched, isSuccess, hasNextPage, hasPreviousPage, fetchNextPage, fetchPreviousPage, isPending } =
    useGetDashboardMemberList({ dashboardId, size: sizePerPage });
  const [memberList, setMemberList] = useState<Member[]>(data?.pages || []);

  const handleNextPage = async () => {
    if (hasNextPage) {
      const result = await fetchNextPage();
      result.isSuccess && setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = async () => {
    if (hasPreviousPage) {
      const result = await fetchPreviousPage();
      result.isSuccess && setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (isFetched && isSuccess) {
      setMemberList(data.pages);
    }
  }, [isFetched, isSuccess, data]);

  const currentPageMemberList = memberList.slice((currentPage - 1) * sizePerPage, currentPage * sizePerPage);

  return (
    <S.Form>
      <S.FormHeader>
        <S.FormName>구성원</S.FormName>
        <PageTurner>
          <PageTurner.Wrapper>
            <PageTurner.CurrentPageDescriber currentPage={currentPage} totalPages={data?.totalPages || 1} />
            <PageTurner.ButtonContainer>
              <PageTurner.LeftButton disabled={isPending} onClick={handlePreviousPage} />
              <PageTurner.RightButton disabled={isPending} onClick={handleNextPage} />
            </PageTurner.ButtonContainer>
          </PageTurner.Wrapper>
        </PageTurner>
      </S.FormHeader>
      <S.ColumnName>이름</S.ColumnName>
      <MemberListTable memberList={currentPageMemberList} />
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
