import styled from 'styled-components';

const CurrentPageDescriber = () => {
  return <S.Text>CurrentPageDescriber</S.Text>;
};

export default CurrentPageDescriber;

const S = {
  Text: styled.p`
    color: ${({ theme: { color } }) => color.black_333236};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: normal;
  `,
};
