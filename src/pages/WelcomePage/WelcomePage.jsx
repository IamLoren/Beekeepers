import { useNavigate } from 'react-router-dom'
import sprite from '../../assets/sprite.svg'

import {
  StyledSvg,
  StyledFullPage,
  StyledLeftItem,
  WelcomeLiSpan,
  StyledButton,
  StyledLeftList,
  StyledRightWrapper,
  StyledRightItem,
  StyledRightList,
  StyledTitle1,
  StyledTitle2,
  StyledLeftTitle3,
  StyledRightTitle3
} from './WelcomePage.styled';

const WelcomePage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup')
  }


  return (    
    <>
      <StyledFullPage>
        <div>
          <StyledTitle1>Water consumption tracker</StyledTitle1>
          <StyledTitle2>Record daily water intake and track</StyledTitle2>
          <StyledLeftTitle3>Tracker Benefits</StyledLeftTitle3>
          <StyledLeftList>
            <StyledLeftItem>
            <StyledSvg>
              <use href={sprite + '#icon-calendar-day'}></use>
            </StyledSvg>
              <WelcomeLiSpan>Habit drive</WelcomeLiSpan>
            </StyledLeftItem>
            <StyledLeftItem>
            <StyledSvg>
              <use href={sprite + '#icon-presentation-chart-bar'}></use>
            </StyledSvg>
              <WelcomeLiSpan>View statistics</WelcomeLiSpan>
            </StyledLeftItem>
            <StyledLeftItem>
            <StyledSvg>
              <use href={sprite + '#icon-wrench-screwdriver'}></use>
            </StyledSvg>
              <WelcomeLiSpan>Personal rate setting</WelcomeLiSpan>
            </StyledLeftItem>
          </StyledLeftList>

          <StyledButton onClick={handleClick}>
            Try tracker
          </StyledButton>
        </div>
        <StyledRightWrapper>
          <StyledRightTitle3>Why drink water</StyledRightTitle3>
          <StyledRightList>
            <StyledRightItem>
              Supply of nutrients to all organs
            </StyledRightItem>
            <StyledRightItem>Providing oxygen to the lungs</StyledRightItem>
            <StyledRightItem>
              Maintaining the work of the heart
            </StyledRightItem>
            <StyledRightItem>
              Release of processed substances
            </StyledRightItem>
            <StyledRightItem>
              Ensuring the stability of the internal environment
            </StyledRightItem>
            <StyledRightItem>
              Maintaining within the normal temperature
            </StyledRightItem>
            <StyledRightItem>
              Maintaining an immune system capable of resisting disease
            </StyledRightItem>
          </StyledRightList>
        </StyledRightWrapper>
      </StyledFullPage>
    </>
  );
};

export default WelcomePage;