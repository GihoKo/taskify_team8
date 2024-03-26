'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import CardDateInput from '@/app/dashboard/[dashboardId]/_components/Cards/molecules/date/CardDateInput';
import CardTextArea from '@/app/dashboard/[dashboardId]/_components/Cards/molecules/description/CardTextarea';
import ImageFileInput from '@/app/dashboard/[dashboardId]/_components/Cards/molecules/ImageFileInput';
import SelectInput from '@/app/dashboard/[dashboardId]/_components/Cards/molecules/person/SelectInput';
import CardTagInput from '@/app/dashboard/[dashboardId]/_components/Cards/molecules/tag/CardTagInput';
import CardTitleInput from '@/app/dashboard/[dashboardId]/_components/Cards/molecules/title/CardTitleInput';
import ColumnButton from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnButton';
import ColumnButtonsWrap from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnButtonWrap';
import CreateModalTitle from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnModalTitle';
import ModalDimmed from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ModalDimmed';
import { dateTimeFormatter } from '@/app/dashboard/[dashboardId]/_utils/GenerateTimeStamp';
import { postCreateCard, postCreateCardRequest } from '@apis/cards/postCreateCard';
import { getDashboardMemberList, GetDashboardMemberListResponse, Member } from '@apis/members/getDashboardMemberList';
import { cardsQueryOptions } from '@queries/keys/cardsKeys';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { BadgeProps } from '@components/atoms/TagBadge';

import { ModalComponentProps } from '@hooks/use-modal/types';

export default function ModifyCardsModal({
  closeModal,
  modalRef,
  submitModal,
  dashboardId,
  columnId,
}: ModalComponentProps<{ dashboardId: number; columnId: number }>) {
  const [tags, setTags] = useState<BadgeProps[]>([]);
  const queryClient = useQueryClient();

  // state
  const [memberList, setMemberList] = useState<Member[]>([]);
  const [assignedMemberId, setAssignedMemberId] = useState<number>();

  // date variables
  const offset = new Date().getTimezoneOffset() * 60000;
  const timeValue = new Date(Date.now() - offset);

  const todayCurrentTime = new Date(timeValue.setMinutes(timeValue.getMinutes()));
  const todayCurrentTimePlusThirty = new Date(timeValue.setMinutes(timeValue.getMinutes() + 30));
  const defaultTimeValue = todayCurrentTime.toISOString().slice(0, 16);
  const defaultTimePlusThirtyValue = todayCurrentTimePlusThirty.toISOString().slice(0, 16);

  // form variables
  const {
    register,
    handleSubmit,
    watch,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<{ date: string; title: string; image: string; description: string }>({
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
    setValue: setValueOnChange,
    formState: { errors: errorsOnChange },
  } = useForm({ mode: 'onChange' });

  // initilize member list
  const initilizeMemberList = async () => {
    if (!dashboardId) {
      return;
    }

    const result: GetDashboardMemberListResponse = await getDashboardMemberList({ dashboardId });
    const memberList = result.members;
    setMemberList(memberList);
  };
  useEffect(() => {
    initilizeMemberList();
  }, []);

  // manage form data
  const createNewCardDto = (): postCreateCardRequest => {
    const { title, date, image, description } = getValues();
    const tagList = tags.map((tag) => tag.children);
    const formattedDate = dateTimeFormatter(date);
    const numDashboardId = Number(dashboardId);
    const numColumnId = Number(columnId);

    const payloadDto = {
      assigneeUserId: assignedMemberId,
      dashboardId: numDashboardId,
      columnId: numColumnId,
      title,
      description,
      dueDate: formattedDate,
      tags: tagList as string[],
    };

    if (image.length > 0) {
      console.log('image', image);

      return {
        ...payloadDto,
        imageUrl: image,
      };
    }

    return {
      assigneeUserId: assignedMemberId,
      dashboardId: numDashboardId,
      columnId: numColumnId,
      title,
      description,
      dueDate: formattedDate,
      tags: tagList as string[],
    };
  };

  const onSubmit = async () => {
    const params = createNewCardDto();

    const result = await postCreateCard(params);

    if (!result) {
      alert('카드 생성에 실패했습니다.');
    }

    if (!columnId) {
      return;
    }

    queryClient.invalidateQueries(cardsQueryOptions.masterKey());
    submitModal();
  };

  return (
    <ModalDimmed>
      <S.CardsModalBox
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
      >
        <CreateModalTitle title='할 일 수정' />
        <S.CardsForm onSubmit={handleSubmit(onSubmit)}>
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
            columnId={columnId as number}
            register={register}
            setError={setError}
            setValue={setValue}
          />
          <ColumnButtonsWrap>
            <ColumnButton onClick={closeModal}>취소</ColumnButton>
            <ColumnButton type='submit'>수정완료</ColumnButton>
          </ColumnButtonsWrap>
        </S.CardsForm>
      </S.CardsModalBox>
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
