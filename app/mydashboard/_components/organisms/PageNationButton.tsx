import Image from 'next/image';
import styled from 'styled-components';

import prevIcon from '@public/images/pagenation-left-arrow.svg';
import nextIcon from '@public/images/pagenation-right-arrow.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

interface Props {
  type: 'next' | 'prev';
  onClick: () => void;
}

export default function PageNationButton({ type, onClick }: Props) {
  return (
    <S.PageNationButton onClick={onClick} type={type}>
      {type === 'next' ? (
        <Image src={nextIcon} alt={'페이지네이션 다음 버튼 이미지'} width={16} height={16} />
      ) : (
        <Image src={prevIcon} alt={'페이지네이션 이전 버튼 이미지'} width={16} height={16} />
      )}
    </S.PageNationButton>
  );
}

const S = {
  PageNationButton: styled.button<{ type: 'next' | 'prev' }>`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: ${(props) => (props.type === 'next' ? '0 0.4rem 0.4rem 0' : '0.4rem 0 0 0.4rem')};
    border: 0.1rem solid var(--gray_D9D9D9, #d9d9d9);
    background: var(--white_FFFFFF, #fff);

    @media ${mediaBreakpoint.tablet} {
      width: 4rem;
      height: 4rem;
    }

    @media ${mediaBreakpoint.pc} {
      width: 4rem;
      height: 4rem;
    }
  `,
};
