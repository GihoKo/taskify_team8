'use client';

import styled from 'styled-components';

interface DimProps {
  children: React.ReactNode;
}

export default function Dim({ children }: DimProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 998;
  `,
};
