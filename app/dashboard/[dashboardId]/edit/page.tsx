import ArrowLeftIconButton from './_components/molecules/ArrowLeftIconButton';
import ContentsArea from './_components/organisms/ContentsArea';
import DashboardInfoEditForm from './_components/organisms/DashboardInfoEditForm';

const DashboardEditPage = () => {
  return (
    <ContentsArea>
      <ArrowLeftIconButton>돌아가기</ArrowLeftIconButton>
      <DashboardInfoEditForm />
    </ContentsArea>
  );
};

export default DashboardEditPage;
