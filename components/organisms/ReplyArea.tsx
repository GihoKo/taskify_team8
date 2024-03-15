import Reply, { ReplyProps } from '@components/molecules/Reply';
import ReplyInputForm from '@components/molecules/ReplyInputForm';

interface Props {
  replies: ReplyProps[];
}

export default function ReplyArea({ replies }: Props) {
  return (
    <>
      <ReplyInputForm />
      {replies.map((reply) => (
        <Reply key={reply.id} {...reply} />
      ))}
    </>
  );
}
