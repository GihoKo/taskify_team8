import { styled } from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ImageLabel from '../atoms/ImageLabel';

interface ImageInputProps {
  onClick?: () => void;
  title: string;
  imageUrl: string;
}

export default function ImageInput({ title, onClick, imageUrl }: ImageInputProps): JSX.Element {
  return (
    <S.CardsInputWrapper onClick={onClick}>
      <S.Label>{title} </S.Label>
      {/* //add image input */}
      <ImageLabel imageUrl={imageUrl} />
    </S.CardsInputWrapper>
  );
}

const S = {
  Label: styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};
    margin-bottom: 1rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,
  InvisibleInput: styled.input`
    display: none;
  `,

  CardsInputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 3.2rem;
    }
  `,
};
