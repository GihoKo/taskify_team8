import CardColumn from './_components/atoms/CardColumn';
import ColumnContainer from './_components/atoms/ColumnContainer';
import ColumnList from './_components/atoms/ColumnList';
import CardAppendRectangle from './_components/molecules/CardAppendRectangle';
import ColumnAppenderRectangle from './_components/molecules/ColumnAppenderRectangle';
import Card from './_components/organisms/Card';
import ColumnHeader from './_components/organisms/ColumnHeader';

const DashboardPage = () => {
  return (
    <>
      <ColumnList>
        {[1, 2, 3].map((v) => (
          <ColumnContainer key={v}>
            <ColumnHeader />
            <CardColumn>
              <CardAppendRectangle />
              <Card />
              <Card />
              <Card />
            </CardColumn>
          </ColumnContainer>
        ))}
        <ColumnContainer isLastColumn>
          <ColumnAppenderRectangle />
        </ColumnContainer>
      </ColumnList>
    </>
  );
};

export default DashboardPage;
