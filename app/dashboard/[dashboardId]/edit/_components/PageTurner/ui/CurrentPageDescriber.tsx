'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type CurrentPageDescriberProps = {
  currentPage: number;
  totalPages: number;
};

const CurrentPageDescriber = ({ currentPage, totalPages }: CurrentPageDescriberProps) => {
  return (
    <S.Text>
      {totalPages} 페이지 중 {currentPage}
    </S.Text>
  );
};

export default CurrentPageDescriber;

const S = {
  Text: styled.p`
    color: ${({ theme: { color } }) => color.black_333236};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
    }
  `,
};
