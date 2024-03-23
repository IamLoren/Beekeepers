import Container from '../../components/Container/Container';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import StyledWrapperDiv, {
  StatisticsWrapper,
  StyledFlexContainer,
} from './HomePage.styled';
import PictureBottleBg from './PictureBottleBg';

const HomePage = () => {
  return (
    <StyledWrapperDiv>
      <Container>
        <StyledFlexContainer>
          <div>
            <DailyNorma />
            <PictureBottleBg />
            <WaterRatioPanel />
          </div>
          <StatisticsWrapper>
            <TodayWaterList />
            <MonthStatsTable />
          </StatisticsWrapper>
        </StyledFlexContainer>
      </Container>
    </StyledWrapperDiv>
  );
};

export default HomePage;
