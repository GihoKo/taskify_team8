'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { getInitialInvitionList, Invitation } from '@apis/invitations/getInitialInvitionList';
import searchIcon from '@public/images/icons/search-filledBlack-333236-w22-h22.svg';
import uninvitedSvg from '@public/images/logos/unInvited_filledGray_D9D9D9-w100-h100.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import useInvitationList from './hook';
import InvitationItem from './invitationItem';
import InvitationText from '../commons/InvitationText';

// @Todo 초기 데이터만 tanstack query로 가져오고, 나머지는 나중에 리팩토링하기
export default function InvitationList() {
  const {
    invitationList,
    inputRef,
    cursorId,
    searchKeyword,
    onChangeSearchKeyword,
    handleInvitationAcceptButtonClick,
    handleInvitationRefuseButtonClick,
    infiniteScrollSpinnerRef,
  } = useInvitationList();

  return (
    <S.Box>
      <S.Title>초대받은 대시보드</S.Title>
      {/* 초대 목록이 있는 경우와 검색바가 비어있지 않는 경우  */}
      {invitationList.length || searchKeyword ? (
        <>
          <S.SearchBarWrapper>
            <S.SearchIconWrapper>
              <Image fill src={searchIcon} alt='돋보기 아이콘 이미지' />
            </S.SearchIconWrapper>
            <S.SearchInput
              type='search'
              placeholder='검색'
              value={searchKeyword}
              onChange={onChangeSearchKeyword}
              ref={inputRef}
            />
          </S.SearchBarWrapper>
          <S.InvitationContainer>
            <S.InvitationHeaderWrapper>
              <InvitationText status='header'>이름</InvitationText>
              <InvitationText status='header'>초대자</InvitationText>
              <InvitationText status='header'>수락 여부</InvitationText>
            </S.InvitationHeaderWrapper>
            {invitationList.map((item) => (
              <InvitationItem
                key={item.id}
                {...item}
                onAcceptClick={handleInvitationAcceptButtonClick}
                onRefuseClick={handleInvitationRefuseButtonClick}
              />
            ))}

            {cursorId === null ? null : <div ref={infiniteScrollSpinnerRef} />}
          </S.InvitationContainer>
        </>
      ) : (
        <S.NoInvitedBox>
          <S.NoInvitedImageWrapper>
            <Image fill src={uninvitedSvg} alt='초대받은 대시보드가 없을 때 이미지' />
          </S.NoInvitedImageWrapper>
          <S.NoInvitedText>아직 초대받은 대시보드가 없어요</S.NoInvitedText>
        </S.NoInvitedBox>
      )}
    </S.Box>
  );
}

const S = {
  Box: styled.div`
    min-height: 40rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.color.white_FFFFFF};
    margin-top: 2.4rem;
  `,

  Title: styled.h3`
    padding: 2.4rem 0 0 1.6rem;
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;

    @media ${mediaBreakpoint.tablet} {
      padding: 3.2rem 0 0 2.8rem;
      font-size: 2.4rem;
    }
  `,

  SearchBarWrapper: styled.div`
    width: 100%;
    padding: 0 1.6rem;
    margin-bottom: 0.8rem;
    position: relative;
    margin-top: 2rem;

    @media ${mediaBreakpoint.tablet} {
      padding: 0 2.8rem;
      margin-bottom: 2.4rem;
    }
  `,

  SearchInput: styled.input`
    width: 100%;
    border-radius: 0.6rem;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 4.4rem;
    padding-right: 1rem;
    font-size: 1.4rem;

    @media ${mediaBreakpoint.tablet} {
      padding-left: 4.8rem;
      font-size: 1.6rem;
    }
  `,

  SearchIconWrapper: styled.div`
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2.8rem;

    @media ${mediaBreakpoint.tablet} {
      width: 2.4rem;
      height: 2.4rem;
      left: 4.4rem;
    }
  `,

  InvitationContainer: styled.div``,

  InvitationHeaderWrapper: styled.header`
    display: none;
    width: 100%;
    padding: 0 1.6rem;

    @media ${mediaBreakpoint.tablet} {
      padding: 0 2.8rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${mediaBreakpoint.pc} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `,

  NoInvitedBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10.5rem;

    @media ${mediaBreakpoint.tablet} {
      margin-top: 6.7rem;
    }

    @media ${mediaBreakpoint.pc} {
      margin-top: 6.6rem;
    }
  `,

  NoInvitedImageWrapper: styled.div`
    width: 6rem;
    height: 6rem;
    position: relative;
    margin-bottom: 1.6rem;

    @media ${mediaBreakpoint.tablet} {
      width: 10rem;
      height: 10rem;
      margin-bottom: 2.4rem;
    }
  `,

  NoInvitedText: styled.p`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    display: flex;
    justify-content: center;
    font-size: 1.4rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,
};
