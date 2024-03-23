import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Confetti from 'react-confetti';
import {
  StyledGreeting,
  StyledGreetingText,
  StyledGreetingTitle,
  StyledGreetingWrapper,
} from './Greeting.styled';
import { useDispatch } from 'react-redux';
import { changeGreetingModal } from '../../redux/statisticData/statisticDataSlice';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

export const Greeting = ({ progress }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [percents, setPercents] = useState(20);
  const width = window.innerWidth - 5;
  const height = window.innerHeight - 50;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (percents < progress) {
        setPercents((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, [percents, progress]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(changeGreetingModal(false));
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, [dispatch]);
  return (
    <StyledGreeting>
      <StyledGreetingTitle>
        {t('greeting.you are a hero of selfcare')}!
      </StyledGreetingTitle>
      <Confetti width={width} height={height} />
      <StyledGreetingWrapper>
        <CircularProgressbar
          strokeWidth={8}
          value={percents}
          text={`${percents} %`}
          styles={buildStyles({
            strokeLinecap: 'circle',
            textColor: `${percents < 60 ? `var(--accent-text)` : 'green'}`,
            textSize: '16px',
            textWeight: '900',
            pathColor: `${percents < 60 ? `var(--accent-text)` : 'green'}`,
            trailColor: `${percents == 0 ? 'lightgray' : 'transparent'}`,
            backgroundColor: 'transparent',
          })}
        />
      </StyledGreetingWrapper>
      <StyledGreetingText>{t('greeting.keep it up')}!</StyledGreetingText>
    </StyledGreeting>
  );
};

export default Greeting;
