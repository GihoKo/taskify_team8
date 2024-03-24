import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getInitialInvitionList, Invitation } from '@apis/invitations/getInitialInvitionList';
import { getMoreInvitionList } from '@apis/invitations/getMoreInvitionList';
import { getSearchedInvitationList } from '@apis/invitations/getSearchedInvitationList';
import { putInvitationAnswer } from '@apis/invitations/putInvitationAnswer';

const useInvitationList = () => {
  const { data } = useQuery({
    queryKey: ['invitation', 'invitationList'],
    queryFn: () => getInitialInvitionList(),
  });
  const [invitationList, setInvitationList] = useState<Invitation[]>(data?.invitations || []);
  const [cursorId, setCursorId] = useState<number | null>(null);
  const infiniteScrollSpinnerRef = useRef<HTMLDivElement>(null);

  // 초대 리스트 초기값 조회
  useEffect(() => {
    (async () => {
      const data = await getInitialInvitionList();
      setCursorId(data.cursorId);
    })();
  }, []);

  // 검색 기능
  const [searchKeyword, setSearchKeyword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    // 검색어가 없는 경우 초기 데이터를 불러오고 무한스크롤을 재시작
    if (searchKeyword === '') {
      setInvitationList(data?.invitations || []);
      setCursorId(data?.cursorId || null);

      return;
    }

    (async () => {
      const data = await getSearchedInvitationList(searchKeyword);
      setInvitationList(data.invitations);
    })();
    // eslint-disable-next-line
  }, [searchKeyword]);

  const handleInvitationAcceptButtonClick = async (id: number) => {
    await putInvitationAnswer(id, true);
    setInvitationList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleInvitationRefuseButtonClick = async (id: number) => {
    await putInvitationAnswer(id, false);
    setInvitationList((prev) => prev.filter((item) => item.id !== id));
  };

  // 검색 문자열을 모두 지웠을 때 다시 무한 스크롤을 사용하게 하기위해 함수로 만듬
  const infiniteScroll = async () => {
    if (infiniteScrollSpinnerRef.current) {
      const currentLastInvitationIo = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting && infiniteScrollSpinnerRef.current && cursorId) {
              const data = await getMoreInvitionList(cursorId);
              setInvitationList((prev) => [...prev, ...data.invitations]);
              setCursorId(data.cursorId);

              currentLastInvitationIo.disconnect();
            }
          });
        },
        { threshold: 1 }, // entry.isIntersecting이 성립하지만 threshold가 1이 아닐 때는 콜백이 실행되지 않음
      );

      currentLastInvitationIo.observe(infiniteScrollSpinnerRef.current);
    }
  };

  // 무한 스크롤
  useEffect(() => {
    infiniteScroll();
    // eslint-disable-next-line
  }, [cursorId]);

  return {
    invitationList,
    inputRef,
    cursorId,
    searchKeyword,
    onChangeSearchKeyword,
    handleInvitationAcceptButtonClick,
    handleInvitationRefuseButtonClick,
    infiniteScrollSpinnerRef,
  };
};

export default useInvitationList;
