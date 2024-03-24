'use client';

import { useState } from 'react';

import { useParams } from 'next/navigation';
import styled from 'styled-components';

import ColumnButton from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnButton';
import ColumnButtonsWrap from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnButtonWrap';
import CreateModalTitle from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnModalTitle';
import ModalDimmed from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ModalDimmed';
import { postInvitation } from '@apis/dashboards/postInvitation';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { ModalComponentProps } from '@hooks/use-modal';

const InvitationModal = ({ closeModal, modalRef }: ModalComponentProps) => {
  const { dashboardId } = useParams<{ dashboardId?: string }>();

  const [inputValue, setInputValue] = useState('');
  const [inputErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      email: inputValue,
    };

    try {
      (async () => {
        const data = await postInvitation(Number(dashboardId), body);
        console.log(data);
        closeModal();
      })();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <ModalDimmed>
      <S.Wrapper
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
      >
        <CreateModalTitle title='초대하기' />
        <S.Form onSubmit={handleSubmit}>
          <S.Label htmlFor='invitaition-email'>이메일</S.Label>
          <S.Input
            id='invitaition-email'
            type='email'
            placeholder='이메일을 입력해주세요'
            value={inputValue}
            onChange={handleChange}
          />
          {inputErrorMessage ? <S.ErrorMessage>{inputErrorMessage}</S.ErrorMessage> : null}
          <S.ButtonWrapper>
            <S.Button type='button' onClick={closeModal}>
              취소
            </S.Button>
            <S.Button type='submit'>초대</S.Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.Wrapper>
    </ModalDimmed>
  );
};

export default InvitationModal;

const S = {
  Wrapper: styled.div`
    width: 32.7rem;
    height: 24.1rem;
    flex-shrink: 0;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.white_FFFFFF};
    padding: 2.8rem 2rem;
    z-index: 999;

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 27.6rem;
    }
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  Input: styled.input`
    color: ${({ theme }) => theme.color.black_333236};
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    border-radius: 0.6rem;
    font-size: 1.4rem;
    width: 100%;
    height: 4.2rem;
    padding: 0 1.6rem;
    margin-bottom: 1.6rem;

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 100%;
      height: 4.8rem;
    }
  `,
  Label: styled.label`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,
  ButtonWrapper: styled(ColumnButtonsWrap)``,
  Button: styled(ColumnButton)``,
  ErrorMessage: styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.red_D6173A};
  `,
};
