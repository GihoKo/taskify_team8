import CardColumn from './_components/atoms/CardColumn';
import ColumnContainer from './_components/atoms/ColumnContainer';
import ColumnList from './_components/atoms/ColumnList';
import Page from './_components/atoms/Page';
import CardAppendRectangle from './_components/molecules/CardAppendRectangle';
import ColumnAppenderRectangle from './_components/molecules/ColumnAppenderRectangle';
import Card from './_components/organisms/Card';
import ColumnHeader from './_components/organisms/ColumnHeader';
import DashboardNav from './_components/organisms/DashboardNav';

const DashboardPage = () => {
  return (
    <>
      <Page>
        <DashboardNav />
        <ColumnList>
          {[1, 2, 3, 4].map((v) => (
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
      </Page>
      {/* <Cogwheel /> */}
      {/* <Cogwheel fixedSize='2rem' /> */}
    </>
  );
};

export default DashboardPage;
