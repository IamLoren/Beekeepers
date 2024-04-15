import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import Container from '../../components/Container/Container';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import Chart from '../../components/Chart/Chart';
import Planting from '../../components/Planting/Planting';
import Assistant from '../../components/Assistant/Assistant.jsx';
import PictureBottleBg from './PictureBottleBg';
import {
  selectColorTheme,
  selectLanguage,
  selectactiveContent,
} from '../../redux/selectors.js';
import { changeActiveContent } from '../../redux/normaCounter/normaCounterSlice.js';
import StyledWrapperDiv, {
  ActiveContentWrapper,
  ButtonsWrapper,
  StatisticsWrapper,
  StyledButton,
  StyledFlexContainer,
} from './HomePage.styled';
import { useEffect } from 'react';
import i18n from '../../Internationalization/i18n';

const HomePage = () => {
  const activeContent = useSelector(selectactiveContent);
  const theme = useSelector(selectColorTheme);
  const currentLanguage = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const growYourTreeText = t('statistics.Grow your tree');
  const assistantText = t('statistics.Your personal assistant');
  const monthChartText = t('statistics.Your month chart');

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

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
                {monthChartText}
              </StyledButton>
              <StyledButton
                onClick={() => dispatch(changeActiveContent('planting'))}
              >
                {growYourTreeText}
              </StyledButton>
              <StyledButton
                onClick={() => dispatch(changeActiveContent('bot'))}
              >
                {assistantText}
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
