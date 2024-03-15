'use client';

import { ElementRef, forwardRef } from 'react';

import styled from 'styled-components';

import BaseInput, { BaseInputComponentType, BaseInputProps } from '../atoms/BaseInput';

interface InputWithLabelProps extends BaseInputProps {
  ErrorComponent?: React.ReactNode;
}

const withLabel = (InputComponent: BaseInputComponentType) => {
  const WrappedComponent = forwardRef<ElementRef<BaseInputComponentType>, InputWithLabelProps>(
    ({ children, id, isError, ErrorComponent, ...rest }, ref) => {
      return (
        <S.Wrapper>
          <S.InputBox>
            <S.Label htmlFor={id}>{children}</S.Label>
            <InputComponent ref={ref} id={id} isError={isError} {...rest} />
          </S.InputBox>
          {isError && ErrorComponent}
        </S.Wrapper>
      );
    },
  );

  WrappedComponent.displayName = 'InputWithLabel';

  return WrappedComponent;
};

/**
 * @example
 * <InputWithLabel>대시보드 이름</InputWithLabel>
 */
const InputWithLabel = withLabel(BaseInput);
InputWithLabel.displayName = 'withLabel(InputWithLabel)';

export default InputWithLabel;

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;

    min-width: 24.4rem; /* optional. no need to set */
    width: 100%;
  `,

  InputBox: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    width: 100%;
  `,

  Label: styled.label`
    color: ${({ theme: { color } }) => color.black_333236};
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
  `,
};
