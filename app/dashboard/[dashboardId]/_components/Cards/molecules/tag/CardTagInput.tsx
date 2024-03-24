import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { BadgeProps } from '@components/atoms/TagBadge';
import TagBadgeContainer from '@components/molecules/TagBadgeContainer';

import CheckCardTagInput from './CheckCardTagInput';

interface CardTagInputProps {
  id: string;
  register: any;
  errors: any;
  watch: any;
  reset: any;
  setError: any;
  required?: boolean;
  tags: any;
  setTags: any;
}

export default function CardTagInput({
  id,
  register,
  errors,
  required,
  watch,
  reset,
  setError,
  tags,
  setTags,
}: CardTagInputProps) {
  const { isError } = CheckCardTagInput(errors, watch, setError);
  // const [tags, setTags] = useState<BadgeProps[]>([]);
  const [inputPadding, setInputPadding] = useState<number>(1.6);
  const containerRef = useRef<HTMLDivElement>(null);

  // 엔터를 누르먄일어나는일
  // 1. tags : ["1", "2", "3"]  -> 처음: [] => input 엔터를치면 -> ["input"]
  // 해당 인풋이 뱃지형태로 나타남.인풋은 초기화  ab___-> enter -> (ab)_______
  // 띄어쓰기를 쓰면 1_에러메시지 2_그냥받아서 띄어쓰기 삭제 후 뱃지.

  useEffect(() => {
    if (inputPadding > 30) {
      return;
    }

    if (containerRef.current) {
      const newWidth = containerRef.current?.offsetWidth;
      setInputPadding(((1.6 + newWidth / 10) as number) || 1.6);
    }

    if (tags.length === 0) {
      setInputPadding(1.6);
    }
  }, [tags]);

  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const pressedKey = event.key;

    if (event.nativeEvent.isComposing) {
      return;
    }

    if (pressedKey === 'Enter') {
      event.preventDefault();

      const inputValue: string = (event.target as HTMLInputElement).value;

      if (!inputValue) return;

      const newTag: BadgeProps = {
        children: inputValue,
        color: 'orange',
      };

      setTags((prev: BadgeProps[]) => [...prev, newTag]);

      reset({ [id]: '' });
    }
  };

  // 백스페이스를 누르면 일어나는일.
  // input 이 없고 태그가 있으면 마지막 태그가 지워짐.
  // input이 있으면 input이 지워짐
  const onPressBackspace = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const pressedKey = event.key;
    const input = (event.target as HTMLInputElement).value;

    if (input.length) {
      return;
    }

    if (pressedKey === 'Backspace' && tags.length > 0) {
      event.preventDefault();
      const lastIndex = tags.length;
      setTags((prev: string[]) => [...prev.slice(0, lastIndex - 1)]);
    }
  };

  // const onKeyDown = (event: Event<HTMLInputElement>) => {
  //   onPressEnter(event);
  //   onPressBackspace(event);
  // };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onPressEnter(event);
    onPressBackspace(event);
  };

  return (
    <>
      <S.CardsInputWrapper>
        <S.CardsLabel htmlFor={id}>
          태그
          {required ? <S.Star> *</S.Star> : null}
        </S.CardsLabel>
        <S.InputWrpper>
          <S.Input
            $addPadding={inputPadding}
            type='text'
            placeholder='입력 후 Enter'
            $isError={isError}
            {...register(id)}
            onKeyDown={onKeyDown}
            watch
          />
          {tags.length ? (
            <S.CalculatingWidth ref={containerRef}>
              <TagBadgeContainer list={tags} />
            </S.CalculatingWidth>
          ) : null}
        </S.InputWrpper>
        {errors.tag && <S.ErrorMessage>{errors.tag.message}</S.ErrorMessage>}
      </S.CardsInputWrapper>
    </>
  );
}

/* color: ${(props) => (props.$isError === false ? 'black' : 'red')}; */

const S = {
  InputWrpper: styled.div`
    position: relative;
    display: flex;
  `,
  CalculatingWidth: styled.div`
    position: absolute;
    width: fit-content;
    max-width: 18rem;
    left: 1.6rem;
    top: 1.1rem;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;

    @media ${mediaBreakpoint.tablet} {
      top: 1.4rem;
      max-width: 25rem;
    }
  `,

  Input: styled.input<{ $isError: boolean; $addPadding: number }>`
    color: ${({ theme }) => theme.color.black_333236};
    border: 0.1rem solid
      ${({ theme, $isError }) => ($isError === true ? theme.color.red_D6173A : theme.color.gray_D9D9D9)};
    border-radius: 0.6rem;
    font-size: 1.4rem;
    height: 4.2rem;
    padding-left: ${({ $addPadding }) => $addPadding}rem;
    width: 100%;
    margin-bottom: ${({ $isError }) => ($isError ? `0.8rem` : `2.4rem`)};

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 100%;
      height: 4.8rem;
      margin-bottom: 0.8rem;
    }

    &:focus {
      outline: none;
      /* border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA}; */
      border: 0.1rem solid
        ${({ theme, $isError }) => ($isError === true ? theme.color.red_D6173A : theme.color.violet_5534DA)};
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
      font-size: 1.4rem;

      @media ${mediaBreakpoint.tablet} {
        font-size: 1.6rem;
      }
    }
  `,

  ErrorMessage: styled.span`
    color: ${({ theme }) => theme.color.red_D6173A};
    font-size: 15px;
  `,

  CardsLabel: styled.label`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};
    margin-bottom: 1rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,
  Star: styled.span`
    color: ${({ theme }) => theme.color.violet_5534DA};
  `,

  CardsInputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 3.2rem;
    }
  `,
};
