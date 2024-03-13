import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import PageNationButton from '../atoms/PageNationButton';
import PageNationText from '../atoms/PageNationText';

export default function PageNationWrapper() {
  const TextMockData = {
    total: 10,
    current: 1,
  };

  const previouseButtonMockData = {
    type: 'previous' as const,
    onClick: () => {},
  };

  const nextButtonMockData = {
    type: 'next' as const,
    onClick: () => {},
  };

  return (
    <S.Wrapper>
      <PageNationText {...TextMockData} />
      <PageNationButton {...previouseButtonMockData} />
      <PageNationButton {...nextButtonMockData} />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 0.8rem;

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1rem;
    }

    @media ${mediaBreakpoint.tablet} {
      margin-top: 1.2rem;
    }
  `,
};
