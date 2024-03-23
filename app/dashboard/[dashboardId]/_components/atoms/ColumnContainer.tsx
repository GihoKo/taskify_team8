'use client';

import { PropsWithChildren } from 'react';

import styled, { css } from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';
import { dashboardNavbarHeight } from '@styles/navbarHeight';

type ColumnContainerProps = PropsWithChildren<{
  /**
   * 새로운 칼럼 추가하기 버튼을 포함하는 칼럼의 컨테이너인지 여부
   */
  isLastColumn?: boolean;
}>;

const ColumnContainer = ({ children, isLastColumn = false }: ColumnContainerProps) => {
  return <S.Container $isLastColumn={isLastColumn}>{children}</S.Container>;
};

export default ColumnContainer;

const hasBorder = css<{ $isLastColumn?: boolean }>`
  border: 1px solid ${({ theme }) => theme.color.gray_EEEEEE};

  @media ${mediaBreakpoint.pc} {
    border: ${({ $isLastColumn, theme }) => ($isLastColumn ? 'none' : `1px solid ${theme.color.gray_EEEEEE}`)};
  }
`;

const S = {
  Container: styled.div<{ $isLastColumn?: boolean }>`
    min-width: 30.8rem;
    height: 100%;
    width: 100%;
    padding-block: ${({ $isLastColumn }) => ($isLastColumn ? '1.2rem' : '1.7rem 1.2rem')};
    padding-inline: ${({ $isLastColumn }) => ($isLastColumn ? '0.9rem 1.5rem' : '1.2rem')};

    ${hasBorder}

    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;

    @media ${mediaBreakpoint.tablet} {
      /* width: 58.4rem; */
      width: 100%; /* TODO: 다 풀어야 하나? 사이드바 만들어지면 다시 확인 */

      padding: ${({ $isLastColumn }) => ($isLastColumn ? '2rem' : '2.2rem 2rem 2rem')};

      row-gap: 2.4rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 35.4rem;
      /* padding: 2.25rem 2rem 2rem; */
      min-height: calc(100vh - ${dashboardNavbarHeight.onPc});
      max-height: fit-content;
      flex-shrink: 0;

      padding: ${({ $isLastColumn }) => ($isLastColumn ? '6.8rem 2rem 2rem' : '2.25rem 2rem 2rem')};
    }
  `,
};
