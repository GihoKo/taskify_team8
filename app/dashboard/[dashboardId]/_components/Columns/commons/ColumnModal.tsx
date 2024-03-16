'use client';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColumnButton from './ColumnButton';
import ColumnInput from './ColumnInput';
import ColumnModalBox from './ColumnModalBox';
import CreateModalTitle from './ColumnModalTitile';

interface ColumnmModalProps {
  title: string;
  text1: string;
  text2: string;
}

export default function ColumnModal({ title, text1, text2 }: ColumnmModalProps) {
  return (
    <ColumnModalBox>
      <CreateModalTitle title={title} />
      <ColumnInput />
      <S.ColumnButtonContainer>
        <ColumnButton text={text1} />
        <ColumnButton text={text2} />
      </S.ColumnButtonContainer>
    </ColumnModalBox>
  );
}

const S = {
  ColumnButtonContainer: styled.div`
    display: flex;
    gap: 1.1rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
      justify-content: flex-end;
    }
  `,
};
