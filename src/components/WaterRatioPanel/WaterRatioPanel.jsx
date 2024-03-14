import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import {
  StyledRatioSectionContainer,
  StyledProgressBarContainer,
  StyledToday,
  StyledProgressNumbers,
  StyledAddBtn,
  StyledProgressBar,
  ProgressFill,
  CircleIndicator,
  MiddleIndicator,
  LastIndicator,
} from './WaterRatioPanel.styled';
import sprite from '../../assets/sprite.svg';

const WaterRatioPanel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const progress = 101;

  const limitedProgress = Math.min(progress, 100);

  return (
    <StyledRatioSectionContainer>
      <StyledProgressBarContainer>
        <StyledToday>Today</StyledToday>
        <StyledProgressBar id="ml" max="100" value="0">
          <ProgressFill $progress={limitedProgress} />
          <CircleIndicator $progress={limitedProgress} />
        </StyledProgressBar>
        <StyledProgressNumbers>
          <span>0%</span>
          <MiddleIndicator>50%</MiddleIndicator>
          <LastIndicator $progress={progress}>
            {progress > 100 ? `${progress}%` : '100%'}
          </LastIndicator>
        </StyledProgressNumbers>
      </StyledProgressBarContainer>
      <div>
        <StyledAddBtn type="button" onClick={() => setModalIsOpen(true)}>
          <svg className="add" fill="none">
            <use href={sprite + '#icon-plus-circle'}></use>
          </svg>
          Add Water
        </StyledAddBtn>
      </div>
      {modalIsOpen && (
        <Modal closeModal={() => setModalIsOpen(false)}>
          <AddWaterModal />
        </Modal>
      )}
    </StyledRatioSectionContainer>
  );
};

export default WaterRatioPanel;
