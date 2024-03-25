import { FormEvent } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { useQueryClient } from '@tanstack/react-query';

import { createColumn } from '@apis/columns/createColumns';
import { cardsKeys } from '@queries/keys/cardsKeys';
import { columnsKeys } from '@queries/keys/columnskeys';

interface ColumnTitleProps {
  title: string;
}

export default function useCreateColumn(
  watch: any,
  setError: any,
  columnList: any,
  submitModal: any,
  dashboardId: number,
) {
  const queryClient = useQueryClient();

  // 컬럼 생성버튼 클릭
  const handleRegisterSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const data: ColumnTitleProps = {
        title: watch('title'),
      };
      const titles = columnList.map((item: any) => item.title);
      const isTaken = titles.includes(data.title);

      const postColumn = async () => {
        try {
          const numberTypeDashboardId = Number(dashboardId);
          await createColumn(data.title, numberTypeDashboardId);
          // await queryClient.invalidateQueries(columnsQueryOptions.columnList(dashboardId));
          queryClient.invalidateQueries({ queryKey: columnsKeys.columnList(dashboardId) });
          queryClient.invalidateQueries({ queryKey: cardsKeys.masterKey() });
          submitModal();
        } catch (error) {
          console.log(error);
        }
      };

      if (isTaken) {
        setError('title', {
          message: '중복 입니다',
        });
      } else if (data.title === '') {
        return false;
      } else {
        postColumn();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form submitted', data);
  };

  return { handleRegisterSubmit, onSubmit };
}
