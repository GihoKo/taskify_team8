import styled from 'styled-components';

interface Props {
  children: string;
  type: 'accept' | 'refuse';
}

export default function InvitationButton({ children, type }: Props) {
  return <S.Button type={type}>{children}</S.Button>;
}

// @ToDo : props.type 중복코드 합치기
const S = {
  Button: styled.button<{ type: 'accept' | 'refuse' }>`
    display: flex;
    width: 100%;
    padding: 0.7rem 3.7rem;
    color: ${(props) => (props.type === 'accept' ? 'var(--white_FFFFFF, #FFFFFF)' : 'var(--violet_5534DA, #5534DA)')};
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border-radius: 0.4rem;
    border: ${(props) => (props.type === 'accept' ? 'none' : '0.1rem solid var(--gray_D9D9D9, #D9D9D9)')};
    background: ${(props) =>
      props.type === 'accept' ? 'var(--violet_5534DA, #5534DA)' : 'var(--white_FFFFFF, #FFFFFF)'};
  `,
};
