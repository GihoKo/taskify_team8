'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

const PlusShapeIcon = () => {
  return (
    <S.ImageBox>
      <S.PlusImage fill alt='카드 추가 버튼 이미지' src={'/images/icons/plus-filledViolet_5534DA-w16-h16.svg'} />
    </S.ImageBox>
  );
};

export default PlusShapeIcon;

const S = {
  ImageBox: styled.div`
    width: 1.45rem;
    height: 1.45rem;
    padding: 0.2727rem;
    box-sizing: content-box;

    border-radius: 0.4rem;
    background: ${({ theme }) => theme.color.violet_F1EFFD};

    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 1.6rem;
      height: 1.6rem;

      padding: 0.3rem;
    }
  `,

  PlusImage: styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
