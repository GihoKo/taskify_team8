import styled from 'styled-components';

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
  `,
};
