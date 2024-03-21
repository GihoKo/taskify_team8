'use client';

import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { createColumn } from '@apis/columns/createColumns';
import { ColumnList, getColumnList } from '@apis/columns/getColumnList';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { ModalComponentProps } from '@hooks/use-modal/types';

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
  const [inputValue, setInputValue] = useState('');
  const [columnList, setColumnList] = useState<ColumnList[]>([]);
  // const [isValid, setIsValid] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  // const [onlyTitleArr, setOnlyTitleArr] = useState([]);

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

  const postColumn = async () => {
    try {
      const numberTypeDashboardId = Number(dashboardId);
      await createColumn(inputValue, numberTypeDashboardId);
      submitModal();
    } catch (error) {
      console.log(error);
    }
  };

  const checkColumnTitle = () => {
    console.log(columnList);
    const titles = columnList.map((item) => item.title);
    console.log(titles);
  };

  const handleOnChange = (e: { target: { value: string } }) => {
    const curentValue = e.target.value;
    console.log(curentValue);
    setInputValue(curentValue);

    // if (curentValue !== '') {
    //   setIsValid(true);
    //   setErrorMessage('');
    // } else {
    //   setIsValid(false);
    //   setErrorMessage('이름은 필수 입니다');
    // }
  };

  return (
    <ModalDimmed>
      <S.CreateColumnBox
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
      >
        <CreateModalTitle title='새 컬럼 생성' />

        <S.ColumnForm>
          <S.ColumnLabel htmlFor='title'>이름</S.ColumnLabel>
          <S.ColumnInput
            value={inputValue}
            onChange={handleOnChange}
            id='title'
            type='text'
            placeholder={'컬럼 제목을 입력해주세요'}
          />
          {/* <S.InputError>{errorMessage !== '' ? errorMessage : ''}</S.InputError> */}
          <ColumnButtonsWrap>
            <ColumnButton onClick={closeModal}>취소</ColumnButton>

            <ColumnButton onClick={postColumn}>생성</ColumnButton>
          </ColumnButtonsWrap>
        </S.ColumnForm>
        <S.Data onClick={checkColumnTitle}>ghkrdls</S.Data>
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

  ColumnInput: styled.input`
    color: ${({ theme }) => theme.color.black_333236};
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    border-radius: 0.6rem;
    font-size: 1.4rem;
    width: 28.7rem;
    height: 4.2rem;
    padding: 0 1.6rem;
    margin-bottom: 0.8rem;

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 48.4rem;
      height: 4.8rem;
      margin-bottom: 0.8rem;
    }
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
  InputError: styled.span`
    color: ${({ theme }) => theme.color.red_D6173A};
    font-size: 1.4rem;
    margin-bottom: 2.4rem;
  `,
  Data: styled.div`
    border: 1px solid black;
  `,
};
