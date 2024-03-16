import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export default function SignButton({ children, onClick }: ButtonProps) {
  return <S.Button onClick={onClick}>{children}</S.Button>;
}

const S = {
  Button: styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white_FFFFFF};
    background-color: ${({ theme }) => theme.color.black_000000};
    font-size: 14px;
    cursor: pointer;

    @media ${mediaBreakpoint.tablet} {
      font-size: 16px;
    }

    @media ${mediaBreakpoint.pc} {
      font-size: 16px;
    }
  `,
};
