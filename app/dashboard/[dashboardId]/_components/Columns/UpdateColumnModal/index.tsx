'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';

import { ColumnList, getColumnList } from '@apis/columns/getColumnList';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useCloseModal } from '@hooks/use-modal';
import { ModalComponentProps } from '@hooks/use-modal/types';

import UpdateColumnTitleInput from './UpdateColumnTitleInput';
import useUpdateColumn from './useUpdateColumn';
import ColumnButton from '../commons/ColumnButton';
import CreateModalTitle from '../commons/ColumnModalTitle';
import ModalDimmed from '../commons/ModalDimmed';
import DeleteColumnModal from '../DeleteColumnModal';

export default function UpdateColumnModal({
  closeModal,
  modalRef,
  submitModal,
  dashboardId,
  columnTitle,
  columnId,
  // currentColumnTitle,
}: ModalComponentProps<{ columnTitle: string; dashboardId: number; columnId: number }>) {
  const [columnList, setColumnList] = useState<ColumnList[]>([]);
  const [currentValue, setCurrentValue] = useState(columnTitle);

  /**
   * 1. useModal을 사용해서 context api를 사용하는 전역 모달을 열고
   * 2. 그 전역 모달 안에서 local state를 사용함(= useCloseModal이라는 훅을 사용해서 local state를 생성함)
   * 3. local state는 local modal을 열고 닫는데 사용됨.
   *
   * 즉, UpdateColumnModal은 전역 모달인 것이고,
   * UpdateColumnModal 내부에서 local state로 관리하는 DeleteColumnModal은 지역 모달인 것임.
   * (* 스타일 변동사항 : Dimmed 영역은 공유되므로 DeleteColumnModal에서 제거하였음.)
   */

  // const [inputValue, setInputValue] = useState(currentColumnTitle);

  const {
    isModalOpen: isDeleteColumnModalOpen,
    modalRef: deleteColumnModalRef,
    toggleModal: toggleDeleModal,
  } = useCloseModal(false); // Core

  const openDeleteColumnModal = () => {
    if (!isDeleteColumnModalOpen) {
      toggleDeleModal();
    }
  };

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

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: currentValue,
    },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setCurrentValue(value.title || '');
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const { handleRegisterSubmit, onSubmit } = useUpdateColumn(
    watch,
    setError,
    columnList,
    submitModal,
    Number(dashboardId),
    Number(columnId),
  );

  return (
    <>
      <ModalDimmed>
        {isDeleteColumnModalOpen ? (
          <DeleteColumnModal
            columnId={Number(columnId)}
            dashboardId={Number(dashboardId)}
            isModalOpen={isDeleteColumnModalOpen}
            modalRef={deleteColumnModalRef}
            toggleModal={toggleDeleModal}
            submitModal={submitModal}
          />
        ) : (
          <S.UpdateColumnModalBox
            ref={(node) => {
              if (modalRef) modalRef.current = node;
            }}
          >
            <CreateModalTitle title='컬럼 관리' />

            <S.ColumnForm onSubmit={handleSubmit(onSubmit)}>
              <S.ColumnLabel htmlFor='title'>이름</S.ColumnLabel>
              <UpdateColumnTitleInput
                id='title'
                register={register}
                errors={errors}
                watch={watch}
                setError={setError}
                currentValue={currentValue}
              />

              {/* <ColumnInput
                inputValue={inputValue || ''}
                onChange={setInputValue}
                placeholder='컬럼 제목을 입력해주세요.'
              /> */}
              <S.ColumnButtonContainer>
                <S.ColumnDeleteButton onClick={openDeleteColumnModal}>삭제하기</S.ColumnDeleteButton>
                <S.ColumnButtonsWrap>
                  <ColumnButton onClick={closeModal}>취소</ColumnButton>
                  {/* <ColumnButton onClick={submitModal}>변경</ColumnButton> */}
                  <S.SubmitButton onClick={handleRegisterSubmit}>변경</S.SubmitButton>
                </S.ColumnButtonsWrap>
              </S.ColumnButtonContainer>
            </S.ColumnForm>
          </S.UpdateColumnModalBox>
        )}
      </ModalDimmed>
    </>
  );
}

const S = {
  ColumnButtonsWrap: styled.div`
    display: flex;
    gap: 1.1rem;

    grid-area: buttons;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
      justify-content: flex-end;
    }
  `,
  ColumnDeleteButton: styled.span`
    font-size: 1.4rem;
    color: red;
    opacity: 0.5;
    grid-area: delete;
    cursor: pointer;
  `,
  ColumnButtonContainer: styled.div`
    display: grid;
    gap: 1.6rem;
    grid-template-areas:
      'delete'
      'buttons';
    @media ${mediaBreakpoint.tablet} {
      grid-template-areas: 'delete buttons';
      align-items: flex-end;
    }
  `,

  UpdateColumnModalBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.8rem 2rem;
    width: 32.7rem;
    height: 27.4rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 27.6rem;
      padding: 3.2rem 2.8rem;
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
};
