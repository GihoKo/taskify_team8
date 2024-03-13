import ColumnButton from './_column/_components/atoms/ColumnButton';
// 버튼 레이아웃 확인을 위해 잠시 ColumnButton 사용중
export default function DashboardDetail() {
  return (
    <>
      <ColumnButton text='생성' />
      <ColumnButton text='취소' />
    </>
  );
}
