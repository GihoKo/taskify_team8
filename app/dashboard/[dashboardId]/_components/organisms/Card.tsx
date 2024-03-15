'use client';

import Image from 'next/image';
import styled from 'styled-components';

import cardMockImage from '@public/images/mocks/card-mock-image.png';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import CardTag from '@components/atoms/tag/CardTag';

import { formatDateShorter } from '@utils/time/formatDateShorter';

import DueDate from '../atoms/DueDate';
import FirstLetterProfile from '../atoms/FirstLetterProfile';

type CardProps = {
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string | Date;
  updatedAt: string | Date;
};

// TODO: 들어오는 데이터에 맞춰서 나중에 로직 수정
const Card = ({
  title = '새로운 일정 관리 Taskify',
  dueDate = '2024-03-12T09:52:06.381Z',
  assignee,

  // TODO: api 연결하면 Partial 제거하기
}: Partial<CardProps>) => {
  return (
    <S.Box>
      {cardMockImage && (
        <S.ImageBox>
          <S.Image fill src={cardMockImage} alt='카드 이미지' />
        </S.ImageBox>
      )}
      <S.TextContentsArea>
        <S.Title>{title}</S.Title>
        <S.TagsAndDateBox>
          <S.TagsContainer>
            <CardTag>일반</CardTag>
            <CardTag>백엔드</CardTag>
          </S.TagsContainer>
          <S.DateAndProfileBox>
            <DueDate>{formatDateShorter(dueDate)}</DueDate>
            <FirstLetterProfile
              profileSize={{
                onMobile: '2.2rem',
                onTablet: '2.4rem',
              }}
              fontSize={{
                onMobile: '1rem',
                onTablet: '1.2rem',
              }}
            >
              {assignee?.nickname ? assignee.nickname[0] : 'B'}
            </FirstLetterProfile>
          </S.DateAndProfileBox>
        </S.TagsAndDateBox>
      </S.TextContentsArea>
    </S.Box>
  );
};

export default Card;

const S = {
  Box: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1.02rem;

    width: 100%;
    max-width: 28.4rem;
    height: fit-content;
    box-sizing: border-box;

    padding: 1.2rem;

    border-radius: 0.6rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      flex-direction: row;
      row-gap: 0;
      column-gap: 2rem;

      padding: 2rem;
      max-width: 100%;
      height: 9.3rem; /* padding 2rem * 2 + border 0.1rem * 2 + height 5.1rem = 9.3rem */
    }

    @media ${mediaBreakpoint.pc} {
      flex-direction: column;
      row-gap: 1.2rem;
      column-gap: 0;

      max-width: 31.4rem;
      height: fit-content;
    }
  `,

  ImageBox: styled.div`
    width: 100%;
    height: 15.18248rem;
    overflow: hidden;

    position: relative;

    border-radius: 0.6rem;

    @media ${mediaBreakpoint.tablet} {
      width: 9.076rem;
      height: 5.3rem;

      border-radius: 0.4rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 27.4rem;
      height: 16rem;

      border-radius: 0.6rem;
    }
  `,

  Image: styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;

    object-fit: cover;
  `,

  TextContentsArea: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 0.6rem;

    @media ${mediaBreakpoint.tablet} {
      row-gap: 1rem;
    }
  `,

  Title: styled.p`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
    }
  `,

  TagsAndDateBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    row-gap: 0.6rem;

    width: 100%;

    @media ${mediaBreakpoint.tablet} {
      flex-direction: row;
      align-items: center;
      column-gap: 1.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      flex-direction: column;
      align-items: flex-start;
      column-gap: 0;
      row-gap: 1rem;
    }
  `,

  TagsContainer: styled.div`
    display: flex;
    flex-shrink: 0;
    column-gap: 0.6rem;
  `,

  DateAndProfileBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    min-width: 0;
  `,
};
