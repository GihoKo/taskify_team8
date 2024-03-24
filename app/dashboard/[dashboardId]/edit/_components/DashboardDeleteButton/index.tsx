'use client';

import { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useDeleteDashboard } from '../../_hooks/useDeleteDashboard.query';

interface DashboardDeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dashboardId: number;
}

const DashboardDeleteButton = ({ type = 'button', dashboardId, ...rest }: DashboardDeleteButtonProps) => {
  const { mutate, status } = useDeleteDashboard();

  const deleteDashboard = (dashboardId: number) => {
    mutate(dashboardId);
  };

  return (
    <S.DeleteButton disabled={status === 'pending'} onClick={() => deleteDashboard(dashboardId)} type={type} {...rest}>
      대시보드 삭제하기
    </S.DeleteButton>
  );
};

export default DashboardDeleteButton;

const S = {
  DeleteButton: styled.button`
    cursor: pointer;

    margin-block: 3.2rem 2.4rem;
    width: 28.4rem;
    height: 5.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.gray_FAFAFA};

    color: ${({ theme }) => theme.color.black_333236};
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;

    align-self: center;

    @media ${mediaBreakpoint.tablet} {
      margin-block: 4.8rem;
      width: 32rem;
      height: 6.2rem;

      font-size: 1.8rem;
      align-self: flex-start;
    }

    @media ${mediaBreakpoint.pc} {
      margin-block: 4rem 5.6rem;
    }
  `,
};
