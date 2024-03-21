'use client';

import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useCloseModal } from '@hooks/use-modal';
import { ModalComponentProps } from '@hooks/use-modal/types';

import ImageInput from './molecules/ImageInput';
import SelectInput from './molecules/SelectInput';
import TextInput from './molecules/TextInput';
import ColumnModalTemplates from '../Columns/ColumnModalTemplate';
import ColumnButton from '../Columns/commons/ColumnButton';
import ColumnButtonsWrap from '../Columns/commons/ColumnButtonWrap';
import CreateModalTitle from '../Columns/commons/ColumnModalTitle';
import ModalDimmed from '../Columns/commons/ModalDimmed';

export default function CreateCardsModal({ closeModal, modalRef, submitModal }: ModalComponentProps) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  // const switchModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  const {
    isModalOpen: isImageModalOpen,
    modalRef: ImageModalRef,
    toggleModal: toggleImageModal,
  } = useCloseModal(false); // Core

  const openImageColumnModal = () => {
    if (!isImageModalOpen) {
      toggleImageModal();
    }
  };

  useEffect(() => {
    console.log('imageUrl', imageUrl);
  }, [imageUrl]);

  return (
    <ModalDimmed>
      {isImageModalOpen ? (
        <ColumnModalTemplates
          title={'이미지 업로드하기'}
          cancelString={'취소'}
          submitString={'이미지 업로드'}
          inputTitle={'URL'}
          placeholder={'이미지 URL을 입력해 주세요.'}
          featureFunction={setImageUrl}
          isModalOpen={isImageModalOpen}
          modalRef={ImageModalRef}
          toggleModal={toggleImageModal}
        />
      ) : (
        <S.CardsModalBox
          ref={(node) => {
            if (modalRef) modalRef.current = node;
          }}
        >
          <CreateModalTitle title='할 일 생성' />
          <S.CardsForm>
            <SelectInput title='카테고리' options={['카테고리1', '카테고리2', '카테고리3']} />
            <TextInput title='제목' inputType='text' placeHolder='제목을 입력해 주세요' required />
            <TextInput title='설명' inputType='textarea' placeHolder='설명을 입력해 주세요' required />
            {/* <S.CardsInputWrap> */}
            {/* <TextLabel inputTitle='마감일' /> */}
            {/* <TextInput inputType='datetime-local' placeHolder='날짜를 입력해 주세요' /> */}
            {/* </S.CardsInputWrap> */}
            {/* https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png */}
            <TextInput title='태그' inputType='text' placeHolder='입력후 엔터' />
            <ImageInput onClick={openImageColumnModal} title='이미지' imageUrl={imageUrl} />
            <ColumnButtonsWrap>
              <ColumnButton onClick={closeModal}>취소</ColumnButton>
              <ColumnButton onClick={submitModal}>업로드</ColumnButton>
            </ColumnButtonsWrap>
          </S.CardsForm>
        </S.CardsModalBox>
      )}
    </ModalDimmed>
  );
}

const S = {
  CardsModalBox: styled.div`
    border: 1px solid black;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};
    border-radius: 0.8rem;
    width: 32.7rem;
    height: 76.6rem;
    padding: 2.8rem 2rem 2rem 2rem;
    @media ${mediaBreakpoint.tablet} {
      padding: 3.2rem 2.8rem 2.8rem 2.8rem;
      width: 50.6rem;
      height: 90.7rem;
    }
  `,

  CardsForm: styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  CardsInputWrap: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 3.2rem;
    }
  `,
};

/* <ColumnModalTemplates
        title={'이미지 업로드하기'}
        cancelString={'취소'}
        submitString={'이미지 업로드'}
        inputTitle={'URL'}
        placeholder={'이미지 URL을 입력해 주세요.'}
        featureFunction={setImageUrl}
      /> */
