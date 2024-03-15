import {StyledFullPage, StyledContainer, StyledLeftWrapper, StyledTitle1, StyledTitle2, StyledLeftTitle3, StyledLeftList, StyledLeftItem, StyledButton, StyledRightWrapper, StyledRightTitle3, StyledRightList, StyledRightItem} from './WelcomePage.styled'

import sprite from '../../assets/sprite.svg'

const WelcomePage = () => {
  return (
   <StyledFullPage>
    <StyledContainer>
      <StyledLeftWrapper>
        <StyledTitle1>Water consumption tracker</StyledTitle1>
        <StyledTitle2>Record daily water intake and track</StyledTitle2>
        <StyledLeftTitle3>Tracker Benefits</StyledLeftTitle3>
        <StyledLeftList>
          <StyledLeftItem>
            <svg width={30} height={30}>
              <use href={sprite + '#icon-calendar-day'}></use>
            </svg>
              <p>Habit drive</p>
          </StyledLeftItem>
          <StyledLeftItem>
          <svg width={30} height={30}>
              <use href={sprite + '#icon-presentation-chart-bar'}></use>
            </svg>
            <p>View statistics</p>
          </StyledLeftItem>
          <StyledLeftItem>
          <svg width={30} height={30}>
              <use href={sprite + '#icon-wrench-screwdriver'}></use>
            </svg>
            <p>Personal rate setting</p>
          </StyledLeftItem>
        </StyledLeftList>
        <StyledButton>Try tracker</StyledButton>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledRightTitle3>Why drink water</StyledRightTitle3>
        <StyledRightList>
          <StyledRightItem>
            <p>Supply of nutrients to all organs</p>
          </StyledRightItem>
          <StyledRightItem>
            <p>Providing oxygen to the lungs</p>
          </StyledRightItem>
          <StyledRightItem>
            <p>Maintaining the work of the heart</p>
          </StyledRightItem>
          <StyledRightItem>
            <p>Release of processed substances</p>
          </StyledRightItem>
          <StyledRightItem>
            <p>Ensuring the stability of the internal environment</p>
          </StyledRightItem>
          <StyledRightItem>
            <p>Maintaining within the normal temperature</p>
          </StyledRightItem>
          <StyledRightItem>
            <p>Maintaining an immune system capable of resisting disease</p>
          </StyledRightItem>
        </StyledRightList>
      </StyledRightWrapper>
    </StyledContainer>
   </StyledFullPage>
    )
}

export default WelcomePage;