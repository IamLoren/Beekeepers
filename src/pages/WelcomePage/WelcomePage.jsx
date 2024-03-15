import {StyledFullPage, StyledContainer, StyledLeftWrapper, StyledTitle1, StyledTitle2, StyledLeftTitle3, StyledLeftList, StyledLeftItem, StyledSvg, StyledButton, StyledRightWrapper, StyledRightTitle3, StyledRightList, StyledRightItem} from './WelcomePage.styled'
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal'
import sprite from '../../assets/sprite.svg'

const WelcomePage = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    isOpenModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [isOpenModal])
  const handleShowModal = () => {
    setIsOpenModal(true);
  } 


  return (
   <StyledFullPage>
    <StyledContainer>
      <StyledLeftWrapper>
        <StyledTitle1>Water consumption tracker</StyledTitle1>
        <StyledTitle2>Record daily water intake and track</StyledTitle2>
        <StyledLeftTitle3>Tracker Benefits</StyledLeftTitle3>
        <StyledLeftList>
          <StyledLeftItem>
            <StyledSvg>
              <use href={sprite + '#icon-calendar-day'}></use>
            </StyledSvg>
              <p>Habit drive</p>
          </StyledLeftItem>
          <StyledLeftItem>
          <StyledSvg>
              <use href={sprite + '#icon-presentation-chart-bar'}></use>
            </StyledSvg>
            <p>View statistics</p>
          </StyledLeftItem>
          <StyledLeftItem>
          <StyledSvg>
              <use href={sprite + '#icon-wrench-screwdriver'}></use>
            </StyledSvg>
            <p>Personal rate setting</p>
          </StyledLeftItem>
        </StyledLeftList>
        <StyledButton onClick={handleShowModal}>Try tracker</StyledButton>
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
    <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}> Modal Window</Modal>

   </StyledFullPage>
    )
}

export default WelcomePage;