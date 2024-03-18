import { PropsWithChildren } from 'react';

import styled from 'styled-components';

type ButtonContainerProps = PropsWithChildren;

const ButtonContainer = ({ children }: ButtonContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default ButtonContainer;

const S = {
  Container: styled.div`
    display: flex;
    width: fit-content;
  `,
};
