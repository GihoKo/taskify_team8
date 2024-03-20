import { useId } from 'react';

import { styled } from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import Input, { InputType } from './atoms/Input';
import TextLabel from './atoms/TextInputLabel';

interface InputProps {
  title: string;
  inputType: InputType;
  placeHolder?: string;
  required?: boolean;
}

export default function TextInput({ title, inputType, placeHolder, required }: InputProps): JSX.Element {
  const id = useId();

  return (
    <S.CardsInputWrapper>
      <TextLabel id={id} inputTitle={title} required={required} />
      <Input id={id} inputType={inputType} placeHolder={placeHolder || ''} />
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
};
