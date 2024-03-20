'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import styled from 'styled-components';

import { CHIP_COLOR_LIST } from '@constants/ColorChipsColor';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColorSelectList from '@components/molecules/ColorSelectList';

import { useFormOnSubmit } from '@hooks/useFormOnSubmit';

import { useEditDashboardInfo } from '../../_hooks/useEditDashboardInfo.query';
import { useGetDashboardDetailInfo } from '../../_hooks/useGetDashboardDetailInfo.query';
import BaseButton from '../BaseButton';
import InputWithLabel from '../InputWithLabel';

type DashboardInfoEditFormProps = PropsWithChildren<{ dashboardId: number }>;
type DashboardFormInputs = {
  dashboardName: string;
};

const DashboardInfoEditForm = ({ dashboardId }: DashboardInfoEditFormProps) => {
  const { data, refetch } = useGetDashboardDetailInfo(dashboardId);
  const [dashboardInfo, setDashboardInfo] = useState(data);
  const [selectedColor, setSelectedColor] = useState(data?.color);
  const { mutate, isSuccess } = useEditDashboardInfo();

  const { register, handleSubmit } = useFormOnSubmit<DashboardFormInputs>({
    defaultValues: {
      dashboardName: dashboardInfo?.title || '',
    },
    onSubmit: async (inputs) => {
      console.log(inputs);
      mutate({ color: selectedColor || '', title: inputs.dashboardName, dashboardId });

      if (isSuccess) {
        refetch();
      }
    },
  });

  useEffect(() => {
    setDashboardInfo(data);
    setSelectedColor(data?.color);
  }, [data]);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.ContentsArea>
        <S.FormHeader>
          <S.DashboardName>{dashboardInfo?.title}</S.DashboardName>
          <ColorSelectList shouldShowSelectedColorChipOnly={{ onMobile: true, onTablet: false, onPc: false }}>
            <ColorSelectList.Container>
              {CHIP_COLOR_LIST.map((color) => (
                // <ColorSelectList.ColorChip key={color} chipColor={color} selected={color === 'rgba(118, 13, 222, 1)'} />
                <ColorSelectList.ColorChip
                  onClick={({ selectedColor }) => setSelectedColor(selectedColor)}
                  key={color}
                  chipColor={color}
                  selected={color === dashboardInfo?.color}
                />
              ))}
            </ColorSelectList.Container>
          </ColorSelectList>
        </S.FormHeader>
        <InputWithLabel
          {...register('dashboardName', {
            required: {
              value: true,
              message: '대시보드 이름을 입력해주세요.',
            },
          })}
        >
          대시보드 이름
        </InputWithLabel>
      </S.ContentsArea>
      <S.SubmitButton type='submit'>변경</S.SubmitButton>
    </S.Form>
  );
};

export default DashboardInfoEditForm;

const S = {
  Form: styled.form`
    /* width: 28.4rem; */
    width: 100%;
    min-width: 28.4rem;
    height: 21.1rem;
    margin-top: 2.1rem;
    padding: 2.5rem 2rem 2.1rem;
    border-radius: 0.8rem;

    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    flex-shrink: 0;

    background: ${({ theme: { color } }) => color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      margin-top: 2.4rem;

      height: 25.6rem;
      padding: 2.6rem 2.8rem 2.8rem;
    }

    @media ${mediaBreakpoint.pc} {
      padding-top: 2.9rem;
    }
  `,

  ContentsArea: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 2.2rem;

    @media ${mediaBreakpoint.tablet} {
      row-gap: 3.4rem;
    }
  `,

  NameAndColorChipBox: styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  FormHeader: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  `,

  DashboardName: styled.h3`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  `,

  SubmitButton: styled(BaseButton)`
    align-self: flex-end;
  `,
};
