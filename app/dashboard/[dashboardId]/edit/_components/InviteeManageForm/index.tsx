'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InviteButton from '../InviteButton';
import InviteeListTable from '../InviteeListTable';
import { PageTurner } from '../PageTurner';

type InviteeManageFormProps = PropsWithChildren;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InviteeManageForm = ({ children }: InviteeManageFormProps) => {
  return (
    <S.Form>
      <S.FormHeader>
        <S.FormName>초대 내역</S.FormName>
        <S.FormHeaderRightArea>
          <PageTurner>
            <PageTurner.Wrapper>
              <PageTurner.CurrentPageDescriber currentPage={1} totalPages={1} />
              <PageTurner.ButtonContainer>
                <PageTurner.LeftButton />
                <PageTurner.RightButton />
              </PageTurner.ButtonContainer>
            </PageTurner.Wrapper>
          </PageTurner>
          <S.TopAreaInviteButtonBox>
            <InviteButton />
          </S.TopAreaInviteButtonBox>
        </S.FormHeaderRightArea>
      </S.FormHeader>

      <S.MiddleArea>
        <S.ColumnName>이메일</S.ColumnName>
        <S.MiddleAreaInviteButtonBox>
          <InviteButton />
        </S.MiddleAreaInviteButtonBox>
      </S.MiddleArea>

      <InviteeListTable />
    </S.Form>
  );
};

export default InviteeManageForm;

const S = {
  Form: styled.form`
    /* width: 28.4rem; */
    width: 100%;
    min-width: 28.4rem;
    height: 40.6rem; /* TODO: 초대 내역 없을 때 디자인 필요 */
    margin-top: 1.2rem;
    padding-block: 2.4rem 1.6rem;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    border-radius: 0.8rem;
    background: ${({ theme: { color } }) => color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1.2rem;

      height: 47.7rem;
      padding-block: 2.8rem 2rem;
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

  FormHeaderRightArea: styled.div`
    display: flex;
    align-items: center;

    @media ${mediaBreakpoint.tablet} {
      column-gap: 1.2rem;
    }

    @media ${mediaBreakpoint.pc} {
      column-gap: 1.6rem;
    }
  `,

  TopAreaInviteButtonBox: styled.div`
    display: none;

    @media ${mediaBreakpoint.tablet} {
      display: flex;
    }
  `,

  MiddleArea: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 2rem;

    padding-block: 1.2rem 1.4rem;

    @media ${mediaBreakpoint.tablet} {
      padding-inline: 2.8rem;

      padding-block: 2.8rem 2.4rem;
    }
  `,

  ColumnName: styled.div`
    color: ${({ theme: { color } }) => color.gray_9FA6B2};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
    }
  `,

  MiddleAreaInviteButtonBox: styled.div`
    display: flex;

    @media ${mediaBreakpoint.tablet} {
      display: none;
    }
  `,
};
