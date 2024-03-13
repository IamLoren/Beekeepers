import Container from '../../components/Container/Container';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import { StyledFlexContainer } from './HomePage.styled';

const HomePage = () => {
  return (
    <div>
      <Container>
        <StyledFlexContainer>
          <div>
          <DailyNorma />
          <WaterRatioPanel />
        </div>
        <div>
          <TodayWaterList />
          <MonthStatsTable />
        </div>
        </StyledFlexContainer>
        
      </Container>
    </div>
  );
};

export default HomePage;
