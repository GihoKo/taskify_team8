import Image from 'next/image';
import styled from 'styled-components';

import crownIcon from '@public/images/icons/icon-crown.svg';
import rightArrowIcon from '@public/images/icons/icon-right-arrow.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

// @ToDo 상하 정렬 수정해야할듯
export default function DashboardButton() {
  // 상태로 왕관 아이콘 관리 예정
  // const [myDashboard, setMyDashboard] = useState(true);

  const mockData = {
    myDashboard: true,
    title: '비브리지',
  };

  return (
    <S.Button>
      <S.TitleWrapper>
        <S.Dot />
        <S.Title>{mockData.title}</S.Title>
        <S.CrownImageWrapper>
          {mockData.myDashboard ? <Image src={crownIcon} alt='왕관 이미지' fill /> : null}
        </S.CrownImageWrapper>
      </S.TitleWrapper>
      <Image src={rightArrowIcon} alt='오른쪽 화살표 이미지' width={18} height={18} />
    </S.Button>
  );
}

const S = {
  Button: styled.button`
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray-gray_D9D9D9, #d9d9d9);
    width: 100%;
    background: var(--white-white_FFFFFF, #fff);
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${mediaBreakpoint.tablet} {
      padding: 2rem 2.4rem;
    }
    @media ${mediaBreakpoint.pc} {
      padding: 2rem 2.6rem;
    }
  `,

  TitleWrapper: styled.div`
    display: flex;
    align-items: center;
  `,

  Dot: styled.div`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: var(--orange_FFA500, #ffa500);
    margin-right: 1.2rem;

    @media ${mediaBreakpoint.pc} {
      margin-right: 1.6rem;
    }
  `,

  CrownImageWrapper: styled.div`
    width: 2rem;
    height: 1.6rem;
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 1.75rem;
      height: 1.4rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 2rem;
      height: 1.6rem;
    }
  `,

  Title: styled.div`
    color: var(--black-black_333236, #333236);
    font-size: 1.4rem;
    font-weight: 600;
    position: relative;
    margin-right: 0.4rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
    }
    @media ${mediaBreakpoint.pc} {
      font-size: 1.6rem;
      margin-right: 1.6rem;
    }
  `,
};
