'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { postCreateCard, postCreateCardRequest } from '@apis/cards/postCreateCard';
import { getDashboardMemberList, GetDashboardMemberListResponse, Member } from '@apis/members/getDashboardMemberList';
import { cardsQueryOptions } from '@queries/keys/cardsKeys';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { BadgeProps } from '@components/atoms/TagBadge';

import { ModalComponentProps } from '@hooks/use-modal/types';

import CardDateInput from './molecules/date/CardDateInput';
import CardTextArea from './molecules/description/CardTextarea';
import ImageFileInput from './molecules/ImageFileInput';
import SelectInput from './molecules/person/SelectInput';
import CardTagInput from './molecules/tag/CardTagInput';
import CardTitleInput from './molecules/title/CardTitleInput';
import { dateTimeFormatter } from '../../_utils/GenerateTimeStamp';
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
    getValues: getValuesOnChnage,
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

    return {
      assigneeUsersId: assignedMemberId,
      dashboardId: numDashboardId,
      columnId: numColumnId,
      title,
      description,
      dueDate: formattedDate,
      tags: tagList as string[],
      imageUrl: image,
    };
  };

  const onSubmit = async (data: any) => {
    const params = createNewCardDto();
    const result = await postCreateCard(params);

    if (!result) {
      alert('카드 생성에 실패했습니다.');
    }

    if (!columnId) {
      return;
    }
    queryClient.invalidateQueries(cardsQueryOptions.cardList({ columnId }));
    submitModal();
  };

  return (
    <ModalDimmed>
      <S.CardsModalBox
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
      >
        <CreateModalTitle title='할 일 생성' />
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
            errors={errors}
            setError={setError}
            setValue={setValue}
            getValues={getValues}
          />
          <ColumnButtonsWrap>
            <ColumnButton onClick={closeModal}>취소</ColumnButton>
            <ColumnButton type='submit'>업로드</ColumnButton>
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
