'use client';

import styled from 'styled-components';

import { useResizeObserver } from '@hooks/useResizeObserver';

import { getVisibleProfileListCount } from '../../_utils/count/getVisibleProfileListCount';
import { isOverZero } from '../../_utils/count/isOverZero';
import FirstLetterProfile from '../atoms/FirstLetterProfile';

export interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  isOwner: boolean;
}

interface DashboardMemberListProps {
  members: Member[];
}

const DashboardMemberList = ({ members }: DashboardMemberListProps) => {
  const { resizeInfo } = useResizeObserver();

  const visibleProfileListCount = getVisibleProfileListCount({ membersCount: members.length, resizeInfo });
  const remainingProfileListCount = members.length - visibleProfileListCount;
  const shouldShowMore = isOverZero(remainingProfileListCount);

  return (
    <S.Container>
      {!!members.length &&
        members.slice(0, visibleProfileListCount).map((member, idx) => (
          <FirstLetterProfile
            profileSize={{
              onMobile: '3.4rem',
              onPc: '3.8rem',
            }}
            fontSize={{
              onMobile: '1.4rem',
              onPc: '1.6rem',
            }}
            borderWidth={{
              onMobile: '2px',
            }}
            isOverlapping={!!idx}
            key={member.id}
          >
            {member.nickname[0]}
          </FirstLetterProfile>
        ))}
      {shouldShowMore && (
        <FirstLetterProfile
          profileSize={{
            onMobile: '3.4rem',
            onPc: '3.8rem',
          }}
          fontSize={{
            onMobile: '1.4rem',
            onPc: '1.6rem',
          }}
          borderWidth={{
            onMobile: '2px',
          }}
          isOverlapping
        >{`+${remainingProfileListCount}`}</FirstLetterProfile>
      )}
    </S.Container>
  );
};

export default DashboardMemberList;

const S = {
  Container: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;
  `,
};
