import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Confetti from 'react-confetti'
import { StyledGreeting, StyledGreetingText, StyledGreetingTitle, StyledGreetingWrapper } from './Greeting.styled';

const Greeting = () => {
const [percents, setPercents] = useState(20);
const width = window.innerWidth - 5;
const height = window.innerHeight - 50;

useEffect(() => {
    const intervalId = setInterval(() => {
      if (percents < 100) {
        setPercents(prevNumber => prevNumber + 2);
      } else {
        clearInterval(intervalId);
      }
    }, 50); 
    return () => clearInterval(intervalId); 
  }, [percents]);

  return (
    <StyledGreeting>
        <StyledGreetingTitle>you are hero of selfcare!</StyledGreetingTitle>
         <Confetti
      width={width}
      height={height}
    />
    <StyledGreetingWrapper>
        <CircularProgressbar
          strokeWidth={8}
          value={percents}
          text={`${percents} %`}
          styles={buildStyles({
            strokeLinecap: 'circle',
            textColor:`${percents < 60 ? `var(--accent-text)` : "green"}`,
            textSize: '16px',
            textWeight: '900',
            pathColor: `${percents < 60 ? `var(--accent-text)` : "green"}`,
            trailColor: `${percents == 0 ? 'lightgray' : "transparent"}`,
            backgroundColor: 'transparent',
          })}
        />
    </StyledGreetingWrapper>
        <StyledGreetingText>keep it up!</StyledGreetingText>
    </StyledGreeting>
  )
}

export default Greeting