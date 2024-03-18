import styled from 'styled-components';

import Reply, { ReplyProps } from '@components/molecules/Reply';
import ReplyInputForm from '@components/molecules/ReplyInputForm';

interface Props {
  replies: ReplyProps[];
}

export default function ReplyArea({ replies }: Props) {
  return (
    <>
      <ReplyInputForm />
      <S.Container>
        {replies.map((reply) => (
          <Reply key={reply.id} {...reply} />
        ))}
      </S.Container>
    </>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
