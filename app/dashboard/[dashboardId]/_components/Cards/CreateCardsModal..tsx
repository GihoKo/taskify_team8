'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useCloseModal } from '@hooks/use-modal';
import { ModalComponentProps } from '@hooks/use-modal/types';

import CardDateInput from './molecules/date/CardDateInput';
import CardTextArea from './molecules/description/CardTextarea';
import ImageInput from './molecules/ImageInput';
import SelectInput from './molecules/SelectInput';
import CardTagInput from './molecules/tag/CardTagInput';
import CardTitleInput from './molecules/title/CardTitleInput';
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

  // 모달 관련 구현
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

  // 이미지 확인용
  useEffect(() => {
    console.log('imageUrl', imageUrl);
  }, [imageUrl]);

  // 할일 - 구현 - api
  // 담당자 - hard
  // 제목 - v
  // 설명 - v
  // 마감일 - v
  // 태그 - easy
  // 이미지 - mid

  // 인풋 관리

  const offset = new Date().getTimezoneOffset() * 60000;
  const timeValue = new Date(Date.now() - offset);

  const todayCurrentTime = new Date(timeValue.setMinutes(timeValue.getMinutes()));
  const todayCurrentTimePlusThirty = new Date(timeValue.setMinutes(timeValue.getMinutes() + 30));
  const defaultTimeValue = todayCurrentTime.toISOString().slice(0, 16);
  const defaultTimePlusThirtyValue = todayCurrentTimePlusThirty.toISOString().slice(0, 16);

  const {
    register,
    // handleSubmit,
    watch,
    setError,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      date: defaultTimePlusThirtyValue,
    },
  });

  const {
    register: registerOnChanage,
    watch: watchOnChange,
    setError: setErrorOnChange,
    reset: resetOnChange,
    formState: { errors: errorsOnChange },
  } = useForm({ mode: 'onChange' });

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
            <SelectInput title='담당자' options={['카테고리1', '카테고리2', '카테고리3']} />
            <CardTitleInput id='title' register={register} errors={errors} watch={watch} setError={setError} required />
            <CardTextArea
              id='description'
              register={register}
              errors={errors}
              watch={watch}
              setError={setError}
              required
            />
            <CardDateInput
              id='date'
              register={register}
              errors={errors}
              watch={watch}
              setError={setError}
              defaultTimeValue={defaultTimeValue}
              getValues={getValues}
              setValue={setValue}
            />
            <CardTagInput
              id='tag'
              register={registerOnChanage}
              errors={errorsOnChange}
              watch={watchOnChange}
              setError={setErrorOnChange}
              reset={resetOnChange}
            />

            {/* <TextInput title='태그' inputType='text' placeHolder='입력후 엔터' /> */}

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

/* https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png */

const S = {
  CardsModalBox: styled.div`
    border: 1px solid black;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};
    border-radius: 0.8rem;
    width: 32.7rem;
    height: auto;
    padding: 2.8rem 2rem 2rem 2rem;
    @media ${mediaBreakpoint.tablet} {
      padding: 3.2rem 2.8rem 2.8rem 2.8rem;
      width: 50.6rem;
      height: auto;
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
