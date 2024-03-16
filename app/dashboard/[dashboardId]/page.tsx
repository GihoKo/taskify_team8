import CardColumn from './_components/atoms/CardColumn';
import ColumnContainer from './_components/atoms/ColumnContainer';
import ColumnContainerGroup from './_components/atoms/ColumnContainerGroup';
import UpdateColumnModal from './_components/Columns/UpdateColumnModal';
import CardAppendButton from './_components/molecules/CardAppendButton';
import ColumnAppendButton from './_components/molecules/ColumnAppendButton';
import Card from './_components/organisms/Card';
import ColumnHeader from './_components/organisms/ColumnHeader';

const DashboardPage = () => {
  return (
    <>
      <ColumnContainerGroup>
        {[1, 2, 3].map((v) => (
          <ColumnContainer key={v}>
            <ColumnHeader />
            <CardColumn>
              <CardAppendButton />
              <Card />
              <Card />
              <Card />
            </CardColumn>
          </ColumnContainer>
        ))}
        <ColumnContainer isLastColumn>
          <ColumnAppendButton />
        </ColumnContainer>
      </ColumnContainerGroup>
      <UpdateColumnModal />
    </>
  );
};

export default DashboardPage;
