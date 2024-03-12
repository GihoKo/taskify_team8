import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import CreateDashboardIcon from '../atoms/CreateDashboardIcon';

interface Props {
  onClick: () => void;
}

export default function CreateDashboardButton({ onClick }: Props) {
  return (
    <S.Button onClick={onClick}>
      <S.Text>새로운 대시보드</S.Text>
      <CreateDashboardIcon />
    </S.Button>
  );
}

const S = {
  Button: styled.button`
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray-gray_D9D9D9, #d9d9d9);
    width: 100%;
    padding-top: 1.9rem;
    padding-bottom: 1.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    background: var(--white-white_FFFFFF, #fff);

    @media ${mediaBreakpoint.tablet} {
      padding-top: 2.3rem;
      padding-bottom: 2.3rem;
    }
    @media ${mediaBreakpoint.pc} {
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
    }
  `,
  Text: styled.div`
    color: var(--black-black_333236, #333236);
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
    }
    @media ${mediaBreakpoint.pc} {
      font-size: 1.6rem;
    }
  `,
};
