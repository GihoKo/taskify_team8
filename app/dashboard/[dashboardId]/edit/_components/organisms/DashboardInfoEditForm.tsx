'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { Color } from '@interface/style';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import BaseButton from '../atoms/BaseButton';
import ColorSelectList from '../molecules/color-select-list';
import InputWithLabel from '../molecules/input-with-label/InputWithLabel';

type DashboardInfoEditFormProps = PropsWithChildren;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardInfoEditForm = ({ children }: DashboardInfoEditFormProps) => {
  const chipColors: Color[] = [
    'rgba(122, 197, 85, 1)',
    'rgba(118, 13, 222, 1)',
    'rgba(255, 165, 0, 1)',
    'rgba(118, 165, 234, 1)',
    'rgba(232, 118, 234, 1)',
  ];

  return (
    <S.Form>
      <S.ContentsArea>
        <S.BoardNameAndColorSelectListBox>
          <S.DashboardName>비브리지</S.DashboardName>
          <ColorSelectList>
            <ColorSelectList.Container>
              {chipColors.map((color) => (
                <ColorSelectList.ColorChip key={color} chipColor={color} selected={color === 'rgba(118, 13, 222, 1)'} />
              ))}
            </ColorSelectList.Container>
          </ColorSelectList>
        </S.BoardNameAndColorSelectListBox>
        <InputWithLabel>대시보드 이름</InputWithLabel>
      </S.ContentsArea>
      <S.SubmitButton type='submit'>변경</S.SubmitButton>
    </S.Form>
  );
};

export default DashboardInfoEditForm;

const S = {
  Form: styled.form`
    /* width: 28.4rem; */
    width: 100%;
    min-width: 28.4rem;
    height: 21.1rem;
    margin-top: 2.1rem;
    padding: 2.5rem 2rem 2.1rem;
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

  ContentsArea: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 2.2rem;

    @media ${mediaBreakpoint.tablet} {
      row-gap: 3.4rem;
    }
  `,

  NameAndColorChipBox: styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  BoardNameAndColorSelectListBox: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  `,

  DashboardName: styled.h3`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  `,

  SubmitButton: styled(BaseButton)`
    align-self: flex-end;
  `,
};
