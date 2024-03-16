import { ButtonHTMLAttributes } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import rightArrow from '@public/images/icons/pagenation-right-arrow.svg';

import { paginationButtonSharedStyle } from './PaginationLeftButton';

type PaginationRightButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const PaginationRightButton = (props: PaginationRightButtonProps) => {
  return (
    <S.RightButton type='button' {...props}>
      <S.ImageWrap>
        <Image alt='페이지네이션 오른쪽 버튼' src={rightArrow} />
      </S.ImageWrap>
    </S.RightButton>
  );
};

export default PaginationRightButton;

const S = {
  RightButton: styled.button`
    cursor: pointer;

    ${paginationButtonSharedStyle}
    border-radius: 0rem 0.4rem 0.4rem 0rem;
  `,

  ImageWrap: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `,
};
