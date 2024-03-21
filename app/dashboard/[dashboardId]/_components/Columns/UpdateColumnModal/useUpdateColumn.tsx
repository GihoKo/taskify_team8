import { FormEvent } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { updateColumn } from '@apis/columns/updateColumn';
// import { createColumn } from '@apis/columns/createColumns';

interface ColumnTitleProps {
  title: string;
}

export default function useUpdateColumn(
  watch: any,
  setError: any,
  columnList: any,
  submitModal: any,
  columnId: number,
) {
  // 컬럼 생성버튼 클릭
  const handleRegisterSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const data: ColumnTitleProps = {
        title: watch('title'),
      };
      const titles = columnList.map((item: any) => item.title);
      const isTaken = titles.includes(data.title);

      const putColumn = async () => {
        try {
          const numberTypeColumndId = Number(columnId);
          const result = await updateColumn(data.title, numberTypeColumndId);
          console.log(result);
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
        putColumn();
        console.log('성공');
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
