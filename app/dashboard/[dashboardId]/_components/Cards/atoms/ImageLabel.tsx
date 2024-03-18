'use client';

import Image from 'next/image';
import styled from 'styled-components';

import AddSvg from '@public/images/icons/add-filledViolet_5534DA-16w-16h.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ImageLabelProps {
  onClick?: () => void;
  imageUrl?: string | null;
}

export default function ImageLabel({ onClick, imageUrl = null }: ImageLabelProps) {
  return (
    <>
      {imageUrl ? (
        <S.ImageArea onClick={onClick}>
          <Image fill src={imageUrl} alt='업로드한 이미지' />
        </S.ImageArea>
      ) : (
        <S.ImageLabel onClick={onClick}>
          <S.AddImgDiv>
            <S.AddSvg />
          </S.AddImgDiv>
        </S.ImageLabel>
      )}
    </>
  );
}

const S = {
  ImageLabel: styled.label`
    width: fit-content;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};
    margin-bottom: 1rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,

  AddImgDiv: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 0.6rem;
    width: 5.8rem;
    height: 5.8rem;
    cursor: pointer;
    @media ${mediaBreakpoint.tablet} {
      width: 7.6rem;
      height: 7.6rem;
    }
  `,
  AddSvg: styled(AddSvg)`
    width: 2.14rem;
    height: 2.14rem;
    @media ${mediaBreakpoint.tablet} {
      width: 2.8rem;
      height: 2.8rem;
    }
  `,
  ImageArea: styled.div`
    position: relative;
    border-radius: 0.6rem;
    width: 5.8rem;
    height: 5.8rem;
    cursor: pointer;
    @media ${mediaBreakpoint.tablet} {
      width: 7.6rem;
      height: 7.6rem;
    }
  `,
};
