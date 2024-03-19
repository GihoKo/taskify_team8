import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface CreateModalTitleProps {
  title: string;
}

export default function CreateModalTitle({ title }: CreateModalTitleProps) {
  return <S.ColumnModalTitle>{title}</S.ColumnModalTitle>;
}

const S = {
  ColumnModalTitle: styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.color.black_333236};

    @media ${mediaBreakpoint.tablet} {
      font-size: 2.4rem;
      margin-bottom: 3.2rem;
    }
  `,
};
