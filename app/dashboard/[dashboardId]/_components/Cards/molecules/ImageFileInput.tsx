import React, { useState } from 'react';

import { styled } from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ImageLabel from '../atoms/ImageLabel';

interface ImageFileInputProps {
  id: any;
  register: any;
  errors: any;
  setError: any;
  setValue: any;
  getValues: any;
}

export default function ImageFileInput({
  id,
  register,
  errors,
  setError,
  setValue,
  getValues,
}: ImageFileInputProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>(null);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('imgUrl', file);
      setValue(id, formData);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64 = reader.result;
        setImageUrl(base64 as string);
      };

      setValue(id, file);

      return;
    }

    setError(id, {
      message: '이미지를 업로드해주세요.',
    });
  };

  return (
    <S.CardsInputWrapper>
      <S.ImageTitle>이미지</S.ImageTitle>
      <ImageLabel id={id} imageUrl={imageUrl} />
      <S.InvisibleInput id={id} type='file' accept='image/*' {...register(id)} onChange={handleChangeInput} />
    </S.CardsInputWrapper>
  );
}

const S = {
  ImageTitle: styled.h3`
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
    width: 5.8rem;
    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 3.2rem;
      width: 7.6rem;
    }
  `,
};
