'use client';

import { ReactElement } from 'react';

import styled from 'styled-components';

interface ModalDimmedProps {
  children: ReactElement | ReactElement[];
}

export default function ModalDimmed({ children }: ModalDimmedProps) {
  return <S.ModalDimmed>{children}</S.ModalDimmed>;
}

const S = {
  ModalDimmed: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  `,
};
