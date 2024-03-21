'use client';

import { useEffect, useState } from 'react';

import { ColumnList } from '@apis/columns/getColumnList';

import { useGetColumnList } from '../../_hooks/useGetColumnList.query';
import CardColumnBody from '../atoms/CardColumnBody';
import ColumnContainer from '../atoms/ColumnContainer';
import ColumnHeader from '../organisms/ColumnHeader';

interface ColumContainerGroupProps {
  dashboardId: number;
}

const ColumContainerGroup = ({ dashboardId }: ColumContainerGroupProps) => {
  const { data, isFetched, isSuccess } = useGetColumnList(dashboardId);
  const [columnList, setColumnList] = useState<ColumnList[]>(data?.data || []);

  useEffect(() => {
    if (isFetched && isSuccess) {
      setColumnList(data.data);
    }
  }, [data, isFetched, isSuccess]);

  return (
    <>
      {Boolean(columnList.length) &&
        columnList.map((column) => (
          <ColumnContainer key={column.id}>
            <ColumnHeader columnTitle={column.title} columnId={column.id} />
            <CardColumnBody columnId={column.id} />
          </ColumnContainer>
        ))}
    </>
  );
};

export default ColumContainerGroup;
