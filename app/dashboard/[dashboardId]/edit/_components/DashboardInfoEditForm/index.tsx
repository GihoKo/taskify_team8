'use client';

import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { CHIP_COLOR_LIST } from '@constants/ColorChipsColor';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColorSelectList from '@components/molecules/ColorSelectList';

import BaseButton from '../BaseButton';
import InputWithLabel from '../InputWithLabel';

type DashboardInfoEditFormProps = PropsWithChildren;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardInfoEditForm = ({ children }: DashboardInfoEditFormProps) => {
  return (
    <S.Form>
      <S.ContentsArea>
        <S.FormHeader>
          <S.DashboardName>비브리지</S.DashboardName>
          <ColorSelectList shouldShowSelectedColorChipOnly={{ onMobile: true, onTablet: false, onPc: false }}>
            <ColorSelectList.Container>
              {CHIP_COLOR_LIST.map((color) => (
                <ColorSelectList.ColorChip key={color} chipColor={color} selected={color === 'rgba(118, 13, 222, 1)'} />
              ))}
            </ColorSelectList.Container>
          </ColorSelectList>
        </S.FormHeader>
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

  FormHeader: styled.section`
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
