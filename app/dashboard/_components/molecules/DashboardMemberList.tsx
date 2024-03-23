'use client';

import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';

import { Member } from '@apis/members/getDashboardMemberList';

import FirstLetterProfile from '@components/atoms/FirstLetterProfile';

import { useResizeObserver } from '@hooks/useResizeObserver';

import { useGetDashboardMemberList } from '../../_hooks/useGetDashboardMemberList.query';
import { getVisibleProfileListCount } from '../../_utils/count/getVisibleProfileListCount';
import { isOverZero } from '../../_utils/count/isOverZero';

const DashboardMemberList = () => {
  const { dashboardId } = useParams<{ dashboardId?: string }>();
  const { resizeInfo } = useResizeObserver();
  const router = useRouter();

  // eslint-disable-next-line eqeqeq
  if (dashboardId == undefined) {
    router.replace('/mydashboard');
  }

  // TODO: dashboard id 없을 때 리다이렉트 시키는 로직 있어야 할 듯
  // TODO: dashboard edit에서 사용하는 useGetDashboardMemberList와 겹치는 부분이 있을 지 확인해야 함.
  // 생각해보니까 다른 페이지 안 거치고 dashboard edit으로 바로 진입하는 경우에는 이렇게 짜는 게 맞을 수도 있겠다.
  // dashboard 거쳐서 edit 페이지 진입: 여기서 csr로 먼저 쿼리 데이터를 채워놓음.
  // dashboard 거치지 않고 edit 페이지 바로 진입: edit 페이지에서 프리 패치로 쿼리 데이터를 채워넣음.
  // 서로의 페이지에서 이미 query data가 채워져 있는 지 확인을 해서 중복으로 요청하는 것을 막을 필요가 있어보임.
  const { data, isSuccess } = useGetDashboardMemberList({ dashboardId: Number(dashboardId), size: 5 });

  const profileListCount = data?.totalMemberCount || 0;
  const members: Member[] = data?.pages || [];

  const visibleProfileListCount = getVisibleProfileListCount({ membersCount: profileListCount, resizeInfo });
  const remainingProfileListCount = members.length - visibleProfileListCount;
  const shouldShowMore = isOverZero(remainingProfileListCount);

  return (
    <S.Container>
      {isSuccess &&
        !!members.length &&
        members.slice(0, visibleProfileListCount).map((member, idx) => (
          <FirstLetterProfile
            key={member.id}
            backgroundColor='#a3c4a2'
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
          >
            {member.nickname[0]}
          </FirstLetterProfile>
        ))}
      {shouldShowMore && (
        <FirstLetterProfile
          backgroundColor='#a3c4a2'
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
