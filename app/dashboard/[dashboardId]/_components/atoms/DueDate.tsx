'use client';

import { PropsWithChildren } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type DueDateProps = PropsWithChildren;

const DueDate = ({ children }: DueDateProps) => {
  return (
    <S.ContentBox>
      <S.CalendarBox>
        <S.Calendar fill alt='달력 이미지' src={'/images/icons/card-calendar.svg'} />
      </S.CalendarBox>
      <S.Text>{children}</S.Text>
    </S.ContentBox>
  );
};

export default DueDate;

const S = {
  ContentBox: styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    width: fit-content;

    @media ${mediaBreakpoint.tablet} {
      gap: 0.6rem;
    }
  `,
  CalendarBox: styled.div`
    width: 1.4rem;
    height: 1.4rem;

    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 1.8rem;
      height: 1.8rem;
    }
  `,
  Calendar: styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  Text: styled.span`
    color: ${({ theme }) => theme.color.gray_787486};
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
};
