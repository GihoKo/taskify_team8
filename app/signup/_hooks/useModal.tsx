import { useState } from 'react';

// 모달 토글 상태를 관리하는 커스텀 훅
function useModalToggle(initialState: boolean): [boolean, () => void, () => void, () => void] {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(initialState);

  // 모달을 열기 위한 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 모달을 열고 닫는 함수
  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return [isModalOpen, openModal, closeModal, toggleModal];
}

export default useModalToggle;
