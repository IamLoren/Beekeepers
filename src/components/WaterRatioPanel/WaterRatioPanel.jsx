import { useDispatch, useSelector } from 'react-redux';
import {
  selectDailyNorma,
  selectIsModalOpen,
  selectPortionsAmount,
} from '../../redux/selectors';
import {
  changeAddModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice';
import Modal from '../Modal/Modal';
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
  const dailyNorma = useSelector(selectDailyNorma);
  const modalIsOpen = useSelector(selectIsModalOpen);
  const consumedWater = useSelector(selectPortionsAmount);

  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeAddModal(true));
  };

  const progress = Math.round((consumedWater / dailyNorma) * 100);
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
        <StyledAddBtn type="button" onClick={onAddClick}>
          <svg className="add" fill="none">
            <use href={sprite + '#icon-plus-circle'}></use>
          </svg>
          Add Water
        </StyledAddBtn>
      </div>
      {modalIsOpen && <Modal />}
    </StyledRatioSectionContainer>
  );
};

export default WaterRatioPanel;
