import Image from 'next/image';
import styled from 'styled-components';

import previousIcon from '@public/images/icons/pagenation-left-arrow-fiiledGray-D9D9D9-w16-h16.svg';
import nextIcon from '@public/images/icons/pagenation-right-arrow-fiiledGray-D9D9D9-w16-h16.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

type Status = 'next' | 'previous';

interface PageNationButtonProps {
  status: Status;
  onClick: () => void;
}

export default function PageNationButton({ status, onClick }: PageNationButtonProps) {
  return (
    <S.PageNationButton onClick={onClick} $status={status}>
      {status === 'next' ? (
        <Image src={nextIcon} alt={'페이지네이션 다음 버튼 이미지'} width={16} height={16} />
      ) : (
        <Image src={previousIcon} alt={'페이지네이션 이전 버튼 이미지'} width={16} height={16} />
      )}
    </S.PageNationButton>
  );
}

const S = {
  PageNationButton: styled.button<{ $status: Status }>`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: ${(props) => (props.$status === 'next' ? '0 0.4rem 0.4rem 0' : '0.4rem 0 0 0.4rem')};
    border: 0.1rem solid var(--gray_D9D9D9, #d9d9d9);
    background: var(--white_FFFFFF, #fff);
    cursor: pointer;

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
