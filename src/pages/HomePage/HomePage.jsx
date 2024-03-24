import Container from '../../components/Container/Container';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import StyledWrapperDiv, {
  ActiveContentWrapper,
  ButtonsWrapper,
  StatisticsWrapper,
  StyledButton,
  StyledFlexContainer,
} from './HomePage.styled';
import PictureBottleBg from './PictureBottleBg';
import Chart from '../../components/Chart/Chart';
import Planting from '../../components/Planting/Planting';
import Assistant from '../../components/Assistant/Assistant.jsx';
import { selectactiveContent } from '../../redux/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveContent } from '../../redux/normaCounter/normaCounterSlice.js';

const HomePage = () => {
  const activeContent = useSelector(selectactiveContent);
  const dispatch = useDispatch();

  return (
    <StyledWrapperDiv>
      <Container>
        <StyledFlexContainer>
          <div>
            <ButtonsWrapper>
              <DailyNorma />
              <StyledButton onClick={() => dispatch(changeActiveContent('chart'))}>
                Your month chart
              </StyledButton>
              <StyledButton onClick={() => dispatch(changeActiveContent('planting'))}>
                Grow your tree
              </StyledButton>
              <StyledButton
                onClick={() => dispatch(changeActiveContent('bot'))}
              >
                Your personal assistant
              </StyledButton>
            </ButtonsWrapper>
            <div>
              <ActiveContentWrapper>
                {activeContent === 'pictureBottleBg' && <PictureBottleBg />}
                {activeContent === 'chart' && <Chart />}
                {activeContent === 'planting' && <Planting />}
                {activeContent === 'bot' && <Assistant />}
              </ActiveContentWrapper>
            </div>
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
