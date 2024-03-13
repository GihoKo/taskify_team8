import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ProfileImage from '@components/atoms/ProfileImage';

export interface ReplyProps {
  id: string;
  name: string;
  createdDate: string;
  content: string;
  onClickModify: () => void;
  onClickDelete: () => void;
}

export default function Reply({ id, name, createdDate, content, onClickModify, onClickDelete }: ReplyProps) {
  return (
    <S.Area>
      <S.PositionAdjuster>
        <ProfileImage defaultName={name} />
      </S.PositionAdjuster>
      <S.Box>
        <S.HeaderWrapper>
          <S.Writer>서인덕</S.Writer>
          <S.CreatedDate>{createdDate}</S.CreatedDate>
        </S.HeaderWrapper>
        <S.Content>{content}</S.Content>
        <S.ModifyTextWrapper>
          <S.ModifyText onClick={onClickModify}>수정</S.ModifyText>
          <S.ModifyText onClick={onClickDelete}>삭제</S.ModifyText>
        </S.ModifyTextWrapper>
      </S.Box>
    </S.Area>
  );
}

const S = {
  Area: styled.div`
    display: flex;
    gap: 0.8rem;
    justify-content: left;
    align-items: flex-start;
    width: 28.8rem;
    height: 9.6rem;

    position: relative;

    @media ${mediaBreakpoint.tablet} {
      width: 42rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 45rem;
    }
  `,
  PositionAdjuster: styled.div`
    position: relative;
    top: -0.5rem;
    @media ${mediaBreakpoint.tablet} {
      top: -1rem;
    }
  `,

  Box: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media ${mediaBreakpoint.tablet} {
      gap: 1.2rem;
    }
  `,
  HeaderWrapper: styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;
  `,
  Writer: styled.span`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
    }
  `,
  CreatedDate: styled.span`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
  Content: styled.div`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
    }
  `,
  ModifyText: styled.span`
    color: ${({ theme }) => theme.color.gray_9FA6B2};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
  ModifyTextWrapper: styled.div`
    display: flex;
    gap: 0.8rem;
  `,
};
