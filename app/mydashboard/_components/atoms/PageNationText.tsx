import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  total: number;
  current: number;
}

export default function PageNationText({ total, current }: Props) {
  return (
    <S.Text>
      {total} 페이지 중 {current}
    </S.Text>
  );
}

const S = {
  Text: styled.p`
    color: var(--black-black_333236, #333236);
    font-family: Pretendard;
    font-size: 1.2rem;
    font-weight: 400;
    margin-right: 1.2rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
      margin-right: 1.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      font-size: 1.4rem;
      margin-right: 1.6rem;
    }
  `,
};
