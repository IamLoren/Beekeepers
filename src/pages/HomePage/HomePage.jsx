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
import {
  selectColorTheme,
  selectactiveContent,
} from '../../redux/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveContent } from '../../redux/normaCounter/normaCounterSlice.js';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const activeContent = useSelector(selectactiveContent);
  const theme = useSelector(selectColorTheme);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <StyledWrapperDiv>
      <Container>
        <StyledFlexContainer>
          <div>
            <ButtonsWrapper>
              <DailyNorma />
              <StyledButton
                onClick={() => dispatch(changeActiveContent('chart'))}
              >
                {t('statistics.Your month chart')}
              </StyledButton>
              <StyledButton
                onClick={() => dispatch(changeActiveContent('planting'))}
              >
                {t('statistics.Grow your tree')}
              </StyledButton>
              <StyledButton
                onClick={() => dispatch(changeActiveContent('bot'))}
              >
                {t('statistics.Your personal assistant')}
              </StyledButton>
            </ButtonsWrapper>
            <ActiveContentWrapper>
              {activeContent === 'pictureBottleBg' && <PictureBottleBg />}
              {activeContent === 'chart' && <Chart />}
              {activeContent === 'planting' && <Planting />}
              {activeContent === 'bot' && <Assistant />}
            </ActiveContentWrapper>
            <WaterRatioPanel />
          </div>
          <StatisticsWrapper theme={theme}>
            <TodayWaterList />
            <MonthStatsTable />
          </StatisticsWrapper>
        </StyledFlexContainer>
      </Container>
    </StyledWrapperDiv>
  );
};

export default HomePage;
