import Image from 'next/image';
import styled from 'styled-components';

import createIcon from '@public/images/icons/add-filledViolet_5534DA-16w-16h.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

// @ToDo : Image 컴포넌트 크기 반응형으로 해야함
export default function CreateDashboardChip() {
  return (
    <S.CreateDashboardIcon>
      <S.ImageWrapper>
        <Image src={createIcon} alt={'대시보드 생성 버튼 이미지'} fill />
      </S.ImageWrapper>
    </S.CreateDashboardIcon>
  );
}

const S = {
  CreateDashboardIcon: styled.div`
    display: flex;
    width: 2rem;
    height: 2rem;
    padding: 0.28rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 0.4rem;
    background: var(--violet_F1EFFD, #f1effd);

    @media ${mediaBreakpoint.tablet} {
      CreateDashboardIcon {
        width: 2.2rem;
        height: 2.2rem;
      }
    }

    @media ${mediaBreakpoint.pc} {
      width: 2.2rem;
      height: 2.2rem;
    }
  `,
  ImageWrapper: styled.div`
    width: 1.45rem;
    height: 1.45rem;
    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 1.6rem;
      height: 1.6rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 1.6rem;
      height: 1.6rem;
    }
  `,
};
