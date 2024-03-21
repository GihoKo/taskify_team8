'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';

// import { createColumn } from '@apis/columns/createColumns';
import { ColumnList, getColumnList } from '@apis/columns/getColumnList';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { ModalComponentProps } from '@hooks/use-modal/types';

import ColumnTitleInput from './ColumnTitleInput';
import useCreateColumn from './useCreateColumn';
import ColumnButton from '../commons/ColumnButton';
import ColumnButtonsWrap from '../commons/ColumnButtonWrap';
import CreateModalTitle from '../commons/ColumnModalTitle';
import ModalDimmed from '../commons/ModalDimmed';

export default function CreateColumnModal({
  closeModal,
  modalRef,
  submitModal,
  dashboardId,
}: ModalComponentProps<{ dashboardId: number }>) {
  // const [inputValue, setInputValue] = useState('');
  const [columnList, setColumnList] = useState<ColumnList[]>([]);

  useEffect(() => {
    const getColumns = async () => {
      try {
        if (dashboardId !== undefined) {
          const numberTypeDashboardId = Number(dashboardId);
          const data = await getColumnList(numberTypeDashboardId);
          console.log(data);

          if (data && data.data !== null) {
            // data가 null이 아닌지 확인
            setColumnList(data.data); // data.data를 사용하여 실제 ColumnList 배열을 전달
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getColumns();
  }, [dashboardId]);

  // const postColumn = async () => {
  //   try {
  //     const numberTypeDashboardId = Number(dashboardId);
  //     await createColumn(inputValue, numberTypeDashboardId);
  //     submitModal();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const { handleRegisterSubmit, onSubmit } = useCreateColumn(
    watch,
    setError,
    columnList,
    submitModal,
    Number(dashboardId),
  );

  return (
    <ModalDimmed>
      <S.CreateColumnBox
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
      >
        <CreateModalTitle title='새 컬럼 생성' />

        <S.ColumnForm onSubmit={handleSubmit(onSubmit)}>
          <S.ColumnLabel htmlFor='title'>이름</S.ColumnLabel>
          <ColumnTitleInput id='title' register={register} errors={errors} watch={watch} setError={setError} />

          <ColumnButtonsWrap>
            <ColumnButton onClick={closeModal}>취소</ColumnButton>
            <S.SubmitButton onClick={handleRegisterSubmit}>생성</S.SubmitButton>
          </ColumnButtonsWrap>
        </S.ColumnForm>
      </S.CreateColumnBox>
    </ModalDimmed>
  );
}

const S = {
  CreateColumnBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.8rem 2rem;
    width: 32.7rem;
    height: auto;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: auto;
      padding: 3.2rem 2.8rem;
    }
  `,
  ColumnButtonContainer: styled.div`
    display: flex;
    gap: 1.1rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
      justify-content: flex-end;
    }
  `,
  ColumnForm: styled.form`
    display: flex;
    flex-direction: column;
  `,

  ColumnLabel: styled.label`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};
    margin-bottom: 1rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,

  SubmitButton: styled.button`
    background-color: ${({ theme }) => theme.color.violet_5534DA};
    color: ${({ theme }) => theme.color.white_FFFFFF};
    font-size: 1.4rem;
    font-weight: 500;
    width: 13.8rem;
    height: 4.2rem;
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 12rem;
      height: 4.8rem;
    }
  `,
};

// const checkColumnTitle = () => {
//   console.log(columnList);
//   const titles = columnList.map((item) => item.title);
//   console.log(titles);
// };
