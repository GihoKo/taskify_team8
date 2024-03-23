'use client';

import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import styled from 'styled-components';

import searchIcon from '@public/images/icons/search-filledBlack-333236-w22-h22.svg';
import uninvitedSvg from '@public/images/logos/unInvited_filledGray_D9D9D9-w100-h100.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import InvitationItem from './InvitationItem';
import { getInitialInvitionList, getMoreInvitionList, Invitation, putInvitationAnswer } from '../apis/api';
import InvitationText from '../commons/InvitationText';

export default function InvitationList() {
  const { data } = useQuery({
    queryKey: ['invitation', 'invitationList'],
    queryFn: () => getInitialInvitionList(),
  });
  const [invitationList, setInvitationList] = useState<Invitation[]>(data?.invitations || []);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const currentLastInvitation = useRef<HTMLDivElement>(null);

  const handleInvitationAcceptButtonClick = async (id: number) => {
    await putInvitationAnswer(id, true);
    setInvitationList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleInvitationRefuseButtonClick = async (id: number) => {
    await putInvitationAnswer(id, false);
    setInvitationList((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (currentLastInvitation.current) {
      const currentLastInvitationIo = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting && currentLastInvitation.current) {
              const data = await getMoreInvitionList(cursorId);
              setInvitationList((prev) => [...prev, ...data.invitations]);

              if (data.cursorId !== null) {
                setCursorId(data.cursorId);
              }

              currentLastInvitationIo.disconnect();
            }
          });
        },
        { threshold: 1 }, // entry.isIntersecting이 성립하지만 threshold가 1이 아닐 때는 콜백이 실행되지 않음
      );

      currentLastInvitationIo.observe(currentLastInvitation.current);
    }
  }, [currentLastInvitation, cursorId]);

  // 초대 리스트 조회
  useEffect(() => {
    (async () => {
      const data = await getInitialInvitionList();
      setInvitationList(data.invitations);
      setCursorId(data.cursorId);
    })();
  }, []);

  return (
    <S.Box>
      <S.Title>초대받은 대시보드</S.Title>
      {invitationList.length !== 0 ? (
        <>
          <S.SearchBarWrapper>
            <S.SearchIconWrapper>
              <Image fill src={searchIcon} alt='돋보기 아이콘 이미지' />
            </S.SearchIconWrapper>
            <S.SearchInput type='search' placeholder='검색' />
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
                ref={currentLastInvitation}
                cursorId={cursorId}
              />
            ))}
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
