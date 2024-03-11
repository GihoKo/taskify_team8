import Image from 'next/image';

import mockImg from '@/public/images/mockImg.png';

export default function Home() {
  return (
    <>
      <Image src={mockImg} alt='mock' width={24} height={24} />
      <h1>안녕하세요 프리텐다드인가요?</h1>
    </>
  );
}
