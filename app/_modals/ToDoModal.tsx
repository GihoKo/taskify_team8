'use client';

import React from 'react';

import Image from 'next/image';
import styled, { css } from 'styled-components';

import CloseIcon from '@public/images/icons/close-icon.svg?component';
import Divider from '@public/images/icons/horizontal-divder.svg?component';
import KebabIcon from '@public/images/icons/kebab-icon.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColumnNameBadge from '@components/atoms/ColumnNameBadge';
import AssigneeInformation from '@components/molecules/AssigneeInformation';
import TagBadgeContainer from '@components/molecules/TagBadgeContainer';
import ReplyArea from '@components/organisms/ReplyArea';

const mockData = [
  {
    id: '1',
    name: '서인덕',
    createdDate: '2021.12.30 19:00',
    content: '댓글입니다.',
    onClickModify: () => {},
    onClickDelete: () => {},
  },
  {
    id: '2',
    name: '서인덕',
    createdDate: '2021.12.30 19:00',
    content: '댓글입니다.',
    onClickModify: () => {},
    onClickDelete: () => {},
  },
  {
    id: '3',
    name: '서인덕',
    createdDate: '2021.12.30 19:00',
    content: '댓글입니다.',
    onClickModify: () => {},
    onClickDelete: () => {},
  },
  {
    id: '4',
    name: '서인덕',
    createdDate: '2021.12.30 19:00',
    content: '댓글입니다.',
    onClickModify: () => {},
    onClickDelete: () => {},
  },
];

export default function ToDoModal(): JSX.Element {
  return (
    <S.ModalTestDimmed>
      <S.ModalPage>
        <S.ButtonBox>
          <S.KebabIcon />
          <S.CloseIcon />
        </S.ButtonBox>

        <S.Heading>새로운 일정관리</S.Heading>
        <S.PageAlignWrapper>
          <AssigneeInformation assigneeName='테스트' dueDate='2021.12.30 19:00' />
          <S.Section>
            <S.BadgeBox>
              <ColumnNameBadge>To Do</ColumnNameBadge>
              <Divider />
              <TagBadgeContainer
                list={[
                  { color: 'green', children: '태그1' },
                  { color: 'blue', children: '태그2' },
                  { color: 'orange', children: '태그3' },
                  { color: 'red', children: '태그3' },
                ]}
              />
            </S.BadgeBox>
            <S.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante
              cursus eget. Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at
              leo.
            </S.Content>
            <S.ImageWrapper>
              <Image src='/images/mock.png' alt='image' fill />
            </S.ImageWrapper>
            <ReplyArea replies={mockData} />
          </S.Section>
        </S.PageAlignWrapper>
      </S.ModalPage>
    </S.ModalTestDimmed>
  );
}

const iconCss = css`
  height: 1.2rem;
  width: 1.2rem;

  @media ${mediaBreakpoint.tablet} {
    height: 2.8rem;
    width: 2.8rem;
  }
`;

const S = {
  // TODO: Test영역 삭제 필요.
  ModalTestDimmed: styled.div`
    height: 1554px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
  `,

  ModalPage: styled.div`
    width: 32.7rem;
    padding: 4rem 2rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF}; //컬러 적용하는 방법 확인

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-shrink: 0;
    gap: 1.6rem;

    position: relative;

    @media ${mediaBreakpoint.tablet} {
      min-width: 68rem;
    }

    @media ${mediaBreakpoint.pc} {
      min-width: 73rem;
    }
  `,
  PageAlignWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
    @media ${mediaBreakpoint.tablet} {
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 68rem;
    }
  `,

  Section: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  `,

  Heading: styled.div`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 2.4rem;
    }
  `,

  BadgeBox: styled.div`
    display: flex;
    gap: 1.2rem;
  `,

  Content: styled.p`
    width: 28.7rem;

    color: #000;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem; /* 183.333% */

    @media ${mediaBreakpoint.tablet} {
      width: 42rem;
      font-size: 1.4rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 45rem;
    }
  `,

  ImageWrapper: styled.div`
    position: relative;
    width: 28.7rem;
    height: 16.8rem;
    padding-top: 3.5rem;
    flex-shrink: 0;
    border-radius: 6px;

    @media ${mediaBreakpoint.tablet} {
      width: 42rem;
      height: 24.5rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 45rem;
      height: 26.2rem;
    }
  `,
  StyledImage: styled(Image)`
    padding-top: 3.5rem;
    flex-shrink: 0;
    border-radius: 6px;
  `,

  ButtonBox: styled.div`
    display: flex;
    gap: 1.6rem;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 2.4rem;

      top: 3.2rem;
      right: 2.8rem;
    }
  `,
  KebabIcon: styled(KebabIcon)`
    ${iconCss}
  `,
  CloseIcon: styled(CloseIcon)`
    ${iconCss}
  `,
};
