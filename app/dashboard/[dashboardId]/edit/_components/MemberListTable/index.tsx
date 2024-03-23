'use client';

import { Fragment } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';

import { Member } from '@apis/members/getDashboardMemberList';
import { membersKeys } from '@queries/keys/membersKeys';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import FirstLetterProfile from '@components/atoms/FirstLetterProfile';

import { useDeleteDashboardMember } from '../../_hooks/useDeleteDashboardMember.query';

type MemberListTableProps = {
  memberList: Member[];
};

const MemberListTable = ({ memberList }: MemberListTableProps) => {
  const { dashboardId } = useParams<{ dashboardId: string }>();
  const { mutate } = useDeleteDashboardMember();
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteMember = ({ memberId, isOwner }: { memberId: number; isOwner: boolean }) => {
    mutate(memberId, {
      onError: (error) => {
        if (isAxiosError(error)) {
          switch (error.response?.status) {
            case 403:
              console.log('대시보드 삭제 권한이 없습니다.');

              return;
            case 404:
              console.log('대시보드가 존재하지 않습니다.');

              return;
            default:
              console.log('알 수 없는 에러가 발생했습니다.');
          }
        }
      },
      onSuccess: async (_data) => {
        await queryClient.invalidateQueries({ queryKey: membersKeys.memberList(Number(dashboardId)) });

        if (isOwner) {
          router.replace('/mydashboard');
        }
      },
    });
  };

  return (
    <S.Wrapper>
      {Boolean(memberList.length) &&
        memberList.map(({ id, nickname, isOwner }, index) => (
          <Fragment key={id}>
            <S.Row>
              <S.LeftColumn>
                <FirstLetterProfile
                  backgroundColor='rgba(196, 177, 162, 1)'
                  fontSize='1.4rem'
                  profileSize={{
                    onMobile: '3.4rem',
                    onTablet: '3.8rem',
                  }}
                >
                  J
                </FirstLetterProfile>
                {nickname}
              </S.LeftColumn>
              <S.DeleteButton type='button' onClick={() => deleteMember({ memberId: id, isOwner })}>
                삭제
              </S.DeleteButton>
            </S.Row>
            <S.Border $isLastIndex={index === memberList.length - 1} />
          </Fragment>
        ))}
    </S.Wrapper>
  );
};

export default MemberListTable;

export const S = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
  `,

  ColumnName: styled.div`
    color: ${({ theme: { color } }) => color.gray_9FA6B2};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;

    padding-inline: 2rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      padding-inline: 2.8rem;
    }
  `,

  Row: styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 2rem;

    @media ${mediaBreakpoint.tablet} {
      padding-inline: 2.8rem;
    }
  `,

  LeftColumn: styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.8rem;

    color: ${({ theme: { color } }) => color.black_333236};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      column-gap: 1.2rem;

      font-size: 1.6rem;
    }
  `,

  DeleteButton: styled.button`
    cursor: pointer;

    display: flex;
    width: 5.2rem;
    height: 2.8rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    color: ${({ theme }) => theme.color.violet_5534DA};
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      width: 8.4rem;
      height: 3.2rem;

      font-size: 1.4rem;
    }
  `,

  Border: styled.div<{ $isLastIndex?: boolean }>`
    display: ${({ $isLastIndex }) => ($isLastIndex ? 'none' : 'block')};

    width: 100%;
    height: 1px;
    margin-block: 1.2rem;
    flex-shrink: 0;

    background-color: ${({ theme }) => theme.color.gray_EEEEEE};

    @media ${mediaBreakpoint.tablet} {
      margin-block: 1.6rem;
    }
  `,
};
