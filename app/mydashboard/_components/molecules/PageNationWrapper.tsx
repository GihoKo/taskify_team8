import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import PageNationButton from '../atoms/PageNationButton';
import PageNationText from '../atoms/PageNationText';
import { PageNationNextButtonMock, PagenationPreviouseButtonMock, PageNationTextMock } from '../mock/mock';

export default function PageNationWrapper() {
  return (
    <S.Wrapper>
      <PageNationText {...PageNationTextMock} />
      <PageNationButton {...PagenationPreviouseButtonMock} />
      <PageNationButton {...PageNationNextButtonMock} />
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
