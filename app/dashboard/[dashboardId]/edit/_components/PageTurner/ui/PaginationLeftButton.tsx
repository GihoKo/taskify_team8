import { ButtonHTMLAttributes } from 'react';

import Image from 'next/image';
import styled, { css } from 'styled-components';

import leftArrow from '@public/images/icons/pagenation-left-arrow.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type PaginationLeftButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const PaginationLeftButton = (props: PaginationLeftButtonProps) => {
  return (
    <S.LeftButton type='button' {...props}>
      <S.ImageWrap>
        <Image fill alt='페이지네이션 왼쪽 버튼' src={leftArrow} />
      </S.ImageWrap>
    </S.LeftButton>
  );
};

export default PaginationLeftButton;

export const paginationButtonSharedStyle = css`
  width: 3.6rem;
  height: 3.6rem;
  padding: 1rem;

  border: 1px solid ${({ theme: { color } }) => color.gray_D9D9D9};
  background: ${({ theme: { color } }) => color.white_FFFFFF};

  @media ${mediaBreakpoint.tablet} {
    width: 4rem;
    height: 4rem;
    padding: 1.2rem;
  }
`;

const S = {
  LeftButton: styled.button`
    cursor: pointer;

    ${paginationButtonSharedStyle}
    border-radius: 0.4rem 0rem 0rem 0.4rem;
  `,

  ImageWrap: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `,
};
