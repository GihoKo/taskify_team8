'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';

import { postCreateCard, postCreateCardRequest } from '@apis/cards/postCreateCard';
import { getDashboardMemberList, GetDashboardMemberListResponse, Member } from '@apis/members/getDashboardMemberList';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { BadgeProps } from '@components/atoms/TagBadge';

import { useCloseModal } from '@hooks/use-modal';
import { ModalComponentProps } from '@hooks/use-modal/types';

import CardDateInput from './molecules/date/CardDateInput';
import CardTextArea from './molecules/description/CardTextarea';
import ImageFileInput from './molecules/ImageFileInput';
import SelectInput from './molecules/person/SelectInput';
import CardTagInput from './molecules/tag/CardTagInput';
import CardTitleInput from './molecules/title/CardTitleInput';
import { dateTimeFormatter } from '../../_utils/GenerateTimeStamp';
import ColumnModalTemplates from '../Columns/ColumnModalTemplate';
import ColumnButton from '../Columns/commons/ColumnButton';
import ColumnButtonsWrap from '../Columns/commons/ColumnButtonWrap';
import CreateModalTitle from '../Columns/commons/ColumnModalTitle';
import ModalDimmed from '../Columns/commons/ModalDimmed';

export default function CreateCardsModal({
  closeModal,
  modalRef,
  submitModal,
  dashboardId,
  columnId,
}: ModalComponentProps<{ dashboardId: number; columnId: number }>) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [memberList, setMemberList] = useState<Member[]>([]);
  const [tags, setTags] = useState<BadgeProps[]>([]);
  const [assignedMemberId, setAssignedMemberId] = useState<number>(null);

  useEffect(() => {
    initilizeMemberList();
  }, []);

  const initilizeMemberList = async () => {
    const result: GetDashboardMemberListResponse = await getDashboardMemberList({ dashboardId });
    const memberList = result.members;
    setMemberList(memberList);
  };

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

  // 인풋 관리

  const offset = new Date().getTimezoneOffset() * 60000;
  const timeValue = new Date(Date.now() - offset);

  const todayCurrentTime = new Date(timeValue.setMinutes(timeValue.getMinutes()));
  const todayCurrentTimePlusThirty = new Date(timeValue.setMinutes(timeValue.getMinutes() + 30));
  const defaultTimeValue = todayCurrentTime.toISOString().slice(0, 16);
  const defaultTimePlusThirtyValue = todayCurrentTimePlusThirty.toISOString().slice(0, 16);

  const {
    register,
    handleSubmit,
    watch,
    setError,
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
    getValues: getValuesOnChnage,
    setValue: setValueOnChange,
    formState: { errors: errorsOnChange },
  } = useForm({ mode: 'onChange' });

  // this function  return postCreateCardRequest
  function createNewCardDto(): postCreateCardRequest {
    const { title, date, image, description } = getValues();
    const tagList = tags.map((tag) => tag.children);
    const formattedDate = dateTimeFormatter(date);
    const numDash = Number(dashboardId);

    return {
      assigneeUsersId: assignedMemberId,
      dashboardId: numDash,
      columnId,
      title,
      description,
      dueDate: formattedDate,
      tags: tagList,
      // imageUrl: image,
    };
  }

  const onSubmit = async (data: any) => {
    const params = createNewCardDto();
    // console.log('params', params);
    console.log('dateTIme', params);
    const result = await postCreateCard(params);
    console.log('result', result);

    if (!result) {
      alert('카드 생성에 실패했습니다.');
    }

    // submitModal();
  };

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
            <SelectInput
              options={memberList}
              id='person'
              register={registerOnChanage}
              errors={errors}
              watch={watchOnChange}
              setError={setErrorOnChange}
              setValue={setValueOnChange}
              assignedMemberId={assignedMemberId}
              setAssignedMemberId={setAssignedMemberId}
            />
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
              tags={tags}
              setTags={setTags}
            />
            <ImageFileInput
              id='image'
              register={register}
              errors={errors}
              setError={setError}
              setValue={setValue}
              getValues={getValues}
            />

            {/* <ImageInput onClick={openImageColumnModal} title='이미지' imageUrl={imageUrl} /> */}
            <ColumnButtonsWrap>
              <ColumnButton onClick={closeModal}>취소</ColumnButton>
              <ColumnButton onClick={handleSubmit(onSubmit)}>업로드</ColumnButton>
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
