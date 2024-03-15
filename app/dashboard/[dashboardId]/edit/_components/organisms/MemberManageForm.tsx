'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type MemberManageFormProps = PropsWithChildren;

const MemberManageForm = ({ children }: MemberManageFormProps) => {
  return <S.Form>{children}</S.Form>;
};

export default MemberManageForm;

const S = {
  Form: styled.form`
    /* width: 28.4rem; */
    width: 100%;
    min-width: 28.4rem;
    height: 33.7rem; /* TODO: 멤버 없을 때 디자인 필요 */
    margin-top: 1.1rem;
    padding: 2.2rem 2rem 1.6rem;
    border-radius: 0.8rem;

    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    flex-shrink: 0;

    background: ${({ theme: { color } }) => color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      margin-top: 2.4rem;

      height: 25.6rem;
      padding: 2.6rem 2.8rem 2.8rem;
    }

    @media ${mediaBreakpoint.pc} {
      padding-top: 2.9rem;
    }
  `,

  FormName: styled.h3`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  `,
};
