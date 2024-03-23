'use client';

import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import ColumnButton from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnButton';
import ColumnButtonsWrap from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnButtonWrap';
import CreateModalTitle from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ColumnModalTitile';
import ModalDimmed from '@/app/dashboard/[dashboardId]/_components/Columns/commons/ModalDimmed';
import { axiosToken } from '@apis/instance/axiosToken';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColorSelectList from '@components/molecules/ColorSelectList';

import { ModalComponentProps } from '@hooks/use-modal';

import { DASHBOARD_COLORS } from '../../app/mydashboard/_constants';

const CreateDashboardModal = ({ closeModal, modalRef }: ModalComponentProps) => {
  const queryClient = useQueryClient();

  const [selectedColor, setSelectedColor] = useState(DASHBOARD_COLORS[0]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateDashboardButtonClick = async () => {
    if (!inputValue || inputValue.length > 8 || !selectedColor) {
      return;
    }

    try {
      const result = await axiosToken.post('/dashboards', {
        title: inputValue,
        color: selectedColor,
      });

      if (result.status === 201) {
        queryClient.invalidateQueries({ queryKey: ['dashboard', 'dashboardList', 1] });
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalDimmed>
      <S.Wrapper
        ref={(node) => {
          if (modalRef) modalRef.current = node;
        }}
      >
        <CreateModalTitle title='새로운 대시보드' />
        <S.ColumnForm>
          <S.ColumnLabel htmlFor='dashboard-name'>대시보드 이름</S.ColumnLabel>
          <S.ColumnInput
            id='dashboard-name'
            type='text'
            placeholder='뉴 프로젝트'
            value={inputValue}
            onChange={handleChange}
          />
          <ColorSelectList shouldShowSelectedColorChipOnly={{ onMobile: true, onTablet: false, onPc: false }}>
            <ColorSelectList.Container>
              {DASHBOARD_COLORS.map((color) => (
                <ColorSelectList.ColorChip
                  onClick={({ selectedColor }) => setSelectedColor(selectedColor)}
                  key={color}
                  chipColor={color}
                  selected={color === selectedColor}
                />
              ))}
            </ColorSelectList.Container>
          </ColorSelectList>
          <ColumnButtonsWrap>
            <ColumnButton onClick={closeModal}>취소</ColumnButton>
            <ColumnButton onClick={handleCreateDashboardButtonClick}>생성</ColumnButton>
          </ColumnButtonsWrap>
        </S.ColumnForm>
      </S.Wrapper>
    </ModalDimmed>
  );
};

export default CreateDashboardModal;

const S = {
  Wrapper: styled.div`
    width: 32.7rem;
    height: 29.3rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.white_FFFFFF};
    padding: 2.8rem 2rem;
    z-index: 999;

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 33.4rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 54rem;
      height: 33.4rem;
    }
  `,

  ColumnForm: styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  ColumnInput: styled.input`
    color: ${({ theme }) => theme.color.black_333236};
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    border-radius: 0.6rem;
    font-size: 1.4rem;
    width: 28.7rem;
    height: 4.2rem;
    padding: 0 1.6rem;
    margin-bottom: 2.4rem;

    &:focus {
      outline: none;
      border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA};
    }

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      width: 48.4rem;
      height: 4.8rem;
      margin-bottom: 2.8rem;
    }
  `,
  ColumnLabel: styled.label`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black_333236};

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.8rem;
    }
  `,

  ColorPickerContainer: styled.div`
    display: flex;
    gap: 0.81rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 0.62rem;
    }
    @media ${mediaBreakpoint.pc} {
      gap: 0.63rem;
    }
  `,
  ColorSelectListWrapper: styled.div`
    margin-bottom: 1.5rem;

    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 1.75rem;
    }
  `,
};
