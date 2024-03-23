'use client';

import Image from 'next/image';
import styled from 'styled-components';

import tableInviteIcon from '@public/images/icons/table-invitelist-add-box-filledWhite-w16-h16.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

const InviteButton = () => {
  return (
    <S.Button type='button'>
      <S.IconBox>
        <Image alt='초대하기 아이콘' src={tableInviteIcon} />
      </S.IconBox>
      초대하기
    </S.Button>
  );
};

export default InviteButton;

const S = {
  Button: styled.button`
    cursor: pointer;

    border: none;
    border-radius: 0.4rem;
    background: ${({ theme }) => theme.color.violet_5534DA};

    width: 8.6rem;
    height: 2.8rem;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.6rem;
    justify-self: flex-end;

    color: ${({ theme }) => theme.color.white_FFFFFF};
    font-size: 1.2rem;
    font-weight: 500;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
      width: 10.5rem;
      height: 3.2rem;
      flex-shrink: 0;
    }
  `,

  IconBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    width: 1.6rem;
    height: 1.6rem;

    position: relative;
  `,
};
