import Image from 'next/image';
import styled from 'styled-components';

// import DefaultProfileImage from '@public/images/icons/profile-default-icon.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  defaultName: string;
  imgUrl?: string;
}

export default function ProfileImage({ defaultName, imgUrl }: Props) {
  const SubstitutionName = defaultName.slice(0, 1);

  if (!imgUrl) {
    return (
      <S.Wrapper>
        {/* <DefaultProfileImage /> */}
        <S.Span>{SubstitutionName}</S.Span>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.StyledImage src={imgUrl} alt='profile-image' width='16' height='16' />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 2.6rem;
    height: 2.6rem;
    flex-shrink: 0;
    background: ${({ theme }) => theme.color.black_4B4B4B};
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    fill: #fdd446;
    stroke-width: 0.2rem;
    stroke: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 3.4rem;
      height: 3.4rem;
    }
  `,
  Span: styled.span`
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  StyledImage: styled(Image)`
    border-radius: 100%;
    width: 100%;
    height: 100%;
  `,
};
