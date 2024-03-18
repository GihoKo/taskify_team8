'use client';

import { Fragment } from 'react';

import { mockEmailList } from '../../_constants/mocks';
import { S } from '../MemberListTable';

const InviteeListTable = () => {
  return (
    <S.Wrapper>
      {mockEmailList.map(({ id, email }, index) => (
        <Fragment key={id}>
          <S.Row>
            <S.LeftColumn>{email}</S.LeftColumn>
            <S.DeleteButton type='button'>취소</S.DeleteButton>
          </S.Row>
          <S.Border $isLastIndex={index === mockEmailList.length - 1} />
        </Fragment>
      ))}
    </S.Wrapper>
  );
};

export default InviteeListTable;
