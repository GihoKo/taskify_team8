'use client';

import Image from 'next/image';
import styled from 'styled-components';

import arrowLeftIcon from '@public/images/icons/arrow-left-filledBlack-w20-h20.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

const ArrowLefIcon = () => {
  return (
    <S.ImageBox>
      <S.ArrowLeftImage alt='뒤로 돌아가기 아이콘' src={arrowLeftIcon} fill />
    </S.ImageBox>
  );
};

export default ArrowLefIcon;

const S = {
  ImageBox: styled.div`
    width: 1.8rem;
    height: 1.8rem;
    flex-shrink: 0;

    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 2rem;
      height: 2rem;
    }
  `,

  ArrowLeftImage: styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
