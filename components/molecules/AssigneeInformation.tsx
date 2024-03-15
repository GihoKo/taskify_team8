import styled from 'styled-components';

import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ProfileImage from '@components/atoms/ProfileImage';

interface Props {
  assigneeName: string;
  dueDate: string;
  imgUrl?: string;
}

export default function AssigneeInformation({ assigneeName, dueDate, imgUrl }: Props) {
  return (
    <S.Area>
      <S.AssigneeBox>
        <S.Text>담당자</S.Text>
        <S.AssigneeAligner>
          <ProfileImage defaultName={assigneeName} imgUrl={imgUrl} />
          <S.AssigneeName>{assigneeName}</S.AssigneeName>
        </S.AssigneeAligner>
      </S.AssigneeBox>
      <S.DueDateBox>
        <S.Text>마감일</S.Text>
        <S.DueDate>{dueDate}</S.DueDate>
      </S.DueDateBox>
    </S.Area>
  );
}

const S = {
  Area: styled.div`
    width: 28.7rem;
    height: 6.4rem;
    flex-shrink: 0;

    padding: 1.2rem 1.6rem;

    border-radius: 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_D9D9D9};
    background: ${({ theme }) => theme.color.white_FFFFFF};

    display: flex;
    gap: 6rem;
    @media ${mediaBreakpoint.tablet} {
      padding: 1.6rem;

      flex-direction: column;
      gap: 2rem;

      width: 18rem;
      height: 15.5rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 20rem;
      height: 15.5rem;
    }
  `,

  AssigneeBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    @media ${mediaBreakpoint.tablet} {
      gap: 0.6rem;
    }
  `,
  Text: styled.span`
    color: ${({ theme }) => theme.color.black_000000};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.2rem;
    }
  `,
  AssigneeAligner: styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `,

  AssigneeName: styled.span`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media ${mediaBreakpoint.tablet} {
      font-size: 1.4rem;
    }
  `,

  DueDateBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media ${mediaBreakpoint.tablet} {
      gap: 0.6rem;

      font-size: 1.2rem;
    }
  `,

  DueDate: styled.span`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media ${mediaBreakpoint.tablet} {
    }
  `,
};
