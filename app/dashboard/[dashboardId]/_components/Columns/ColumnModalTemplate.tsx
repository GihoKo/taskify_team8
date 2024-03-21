import { useState } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ColumnButton from './commons/ColumnButton';
import ColumnButtonsWrap from './commons/ColumnButtonWrap';
import ColumnInput from './commons/ColumnInput';
import CreateModalTitle from './commons/ColumnModalTitle';

interface ColumnModalTemplatesProps {
  title: string;
  cancelString: string;
  submitString: string;
  inputTitle: string;
  placeholder: string;
  isModalOpen: boolean;
  onClickCancel: () => void;
  featureFunction: (url: string) => void;
}

export default function ColumnModalTemplates({
  title,
  cancelString,
  submitString,
  inputTitle,
  featureFunction,
  isModalOpen,
  onClickCancel,
  placeholder,
}: ColumnModalTemplatesProps) {
  const [inputValue, setInputValue] = useState('');

  if (!isModalOpen) {
    return null;
  }

  const postImageUrl = (url: string) => {
    console.log('url', url);
  };

  const onClickSubmit = () => {
    postImageUrl('url');

    featureFunction(inputValue);
  };

  return (
    <S.MockDimmedArea>
      <S.CreateColumnBox>
        <CreateModalTitle title={title} />
        <ColumnInput onChange={setInputValue} placeholder={placeholder} inputValue={inputValue}>
          {inputTitle}
        </ColumnInput>
        <ColumnButtonsWrap>
          <ColumnButton onClick={onClickCancel}>{cancelString}</ColumnButton>
          <ColumnButton onClick={onClickSubmit}>{submitString}</ColumnButton>
        </ColumnButtonsWrap>
      </S.CreateColumnBox>
    </S.MockDimmedArea>
  );
}
// TODO : mockWrapper 삭제
const S = {
  MockDimmedArea: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
  `,

  CreateColumnBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.8rem 2rem;
    width: 32.7rem;
    height: 24.1rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white_FFFFFF};

    @media ${mediaBreakpoint.tablet} {
      width: 54rem;
      height: 27.6rem;
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
};
