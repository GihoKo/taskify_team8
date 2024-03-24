'use client';

import Image from 'next/image';
import styled from 'styled-components';

import AddSvg from '@public/images/icons/add-filledViolet_5534DA-16w-16h.svg?component';
import EditSvg from '@public/images/icons/edit-filledWhite-w30-h30.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ImageLabelProps {
  imageUrl: string;
  onClick?: () => void;
  id: string;
}

export default function ImageLabel({ imageUrl, id }: ImageLabelProps) {
  return (
    <>
      {imageUrl ? (
        <label htmlFor={id}>
          <S.ImageArea>
            <S.StyledImage fill src={imageUrl} alt='업로드한 이미지' />
            <S.EditSvg />
          </S.ImageArea>
        </label>
      ) : (
        <S.ImageLabel htmlFor={id}>
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

  EditSvg: styled(EditSvg)`
    width: 2.2rem;
    height: 2.2rem;
    display: hidden;

    &:hover {
      display: block;
    }

    @media ${mediaBreakpoint.tablet} {
      width: 3rem;
      height: 3rem;
    }
  `,
  ImageArea: styled.div`
    position: relative;
    border-radius: 0.6rem;
    width: 5.8rem;
    height: 5.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${mediaBreakpoint.tablet} {
      width: 7.6rem;
      height: 7.6rem;
    }
    &:hover {
      background-color: ${({ theme }) => theme.color.black_333236};
    }ㄴ
  `,
  StyledImage: styled(Image)`
    border-radius: 0.6rem;
    &:hover {
      opacity: 0.5;
    }
  `,
};
