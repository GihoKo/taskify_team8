import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type WrapperProps = PropsWithChildren;

const Wrapper = ({ children }: WrapperProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Wrapper;

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      column-gap: 1.6rem;
    }
  `,
};
