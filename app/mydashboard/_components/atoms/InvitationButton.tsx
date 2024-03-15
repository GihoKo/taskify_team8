import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  children: string;
  type: 'accept' | 'refuse';
  onClick: () => void;
}

export default function InvitationButton({ children, type, onClick }: Props) {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

// @ToDo : props.type 중복코드 합치기
const S = {
  Button: styled.button<{ type: 'accept' | 'refuse' }>`
    display: flex;
    width: 10.9rem;
    padding: 0.7rem 3.7rem;
    color: ${(props) => (props.type === 'accept' ? 'var(--white_FFFFFF, #FFFFFF)' : 'var(--violet_5534DA, #5534DA)')};
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border-radius: 0.4rem;
    border: ${(props) => (props.type === 'accept' ? 'none' : '0.1rem solid var(--gray_D9D9D9, #D9D9D9)')};
    background: ${(props) =>
      props.type === 'accept' ? 'var(--violet_5534DA, #5534DA)' : 'var(--white_FFFFFF, #FFFFFF)'};

    @media ${mediaBreakpoint.tablet} {
      width: 72px;
      height: 30px;
      padding: 6px 23px;
    }

    @media ${mediaBreakpoint.pc} {
      width: 84px;
      height: 32px;
      padding: 7px 29px;
    }
  `,
};
