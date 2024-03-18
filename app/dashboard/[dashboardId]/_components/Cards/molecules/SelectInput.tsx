import { useId } from 'react';

import { styled } from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import TextLabel from '../atoms/TextInputLabel';

interface SelectInputProps {
  title: string;
  options: string[];
}

export default function SelectInput({ title, options }: SelectInputProps): JSX.Element {
  const id = useId();

  return (
    <S.CardsInputWrapper>
      <TextLabel id={id} inputTitle={title} />
      <S.Select id={id}>
        {options.map((option, index) => (
          // ToDo:나중에 카테고리아이디로 변경 eslint-disable-next-line react/no-array-index-key
          <S.Option key={index} value={option}>
            {option}
          </S.Option>
        ))}
      </S.Select>
    </S.CardsInputWrapper>
  );
}

const S = {
  CardsInputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 3.2rem;
    }
  `,

  Select: styled.select`
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    border-radius: 0.6rem;
    height: 4.2rem;
    padding: 0 1.6rem;
    font-size: 1.4rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      height: 4.8rem;
      width: 21.7rem;
    }
    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }
  `,
  Option: styled.option`
    color: ${({ theme }) => theme.color.black_333236};
  `,
};
