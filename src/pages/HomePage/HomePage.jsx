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
import Chart from '../../components/Chart/Chart';
import Planting from '../../components/Planting/Planting';
import Assistant from '../../components/Assistant/Assistant.jsx';
import { selectactiveContent } from '../../redux/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveContent } from '../../redux/normaCounter/normaCounterSlice.js';

const HomePage = () => {
  const activeContent = useSelector(selectactiveContent)
  const dispatch = useDispatch(); 

  return (
    <StyledWrapperDiv>
      <Container>
        <StyledFlexContainer>
          <div>
            <div>
              <DailyNorma/>
              <button onClick={() => dispatch(changeActiveContent('chart'))}>
                Кнопка 2
              </button>
              <button onClick={() => dispatch(changeActiveContent('planting'))}>
                Кнопка 3
              </button>
              <button onClick={() => dispatch(changeActiveContent('achivments'))}>
                Кнопка 4
              </button>
            </div>
            <div>
              <div>
                {(activeContent === 'pictureBottleBg') && <PictureBottleBg />}
                {(activeContent === 'chart') && <Chart />}
                {(activeContent === 'planting') && <Planting />}
                {(activeContent === 'achivments') && <Assistant />}
                </div>
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
