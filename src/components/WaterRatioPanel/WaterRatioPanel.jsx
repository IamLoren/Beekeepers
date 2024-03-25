import { useDispatch, useSelector } from 'react-redux';
import {
  selectDailyNorma,
  selectIsGreetingModalOpen,
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
  BoldIndicator,
} from './WaterRatioPanel.styled';
import sprite from '../../assets/sprite.svg';
import { createPortal } from 'react-dom';
import { Greeting } from '../../components/Greeting/Greeting.jsx';
import {
  changeDailyProgress,
  changeGreetingModal,
} from '../../redux/statisticData/statisticDataSlice.js';
import { useEffect } from 'react';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const WaterRatioPanel = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const modalIsOpen = useSelector(selectIsModalOpen);
  const consumedWater = useSelector(selectPortionsAmount);
  const isGreetingModalOpen = useSelector(selectIsGreetingModalOpen);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeAddModal(true));
  };

  const progress = Math.round((consumedWater / dailyNorma) * 100);
  useEffect(() => {
    dispatch(changeDailyProgress(progress));
    if (progress >= 100) {
      dispatch(changeGreetingModal(true));
    }
  }, [dispatch, progress]);
  const limitedProgress = Math.min(progress, 100);

  return (
    <StyledRatioSectionContainer>
      <StyledProgressBarContainer>
        <StyledToday>{t('today')}</StyledToday>
        <StyledProgressBar id="ml" max="100" value="0">
          <ProgressFill $progress={limitedProgress} />
          <CircleIndicator $progress={limitedProgress} />
        </StyledProgressBar>
        <StyledProgressNumbers>
          <BoldIndicator $isBold={progress <= 0}>0%</BoldIndicator>
          <MiddleIndicator $isBold={progress === 50}>50%</MiddleIndicator>
          <LastIndicator $isBold={progress >= 100} $progress={progress}>
            {progress > 100 ? `${progress}%` : '100%'}
          </LastIndicator>
        </StyledProgressNumbers>
      </StyledProgressBarContainer>
      <div>
        <StyledAddBtn type="button" onClick={onAddClick}>
          <svg className="add" fill="none">
            <use href={sprite + '#icon-plus-circle'}></use>
          </svg>
          {t('addWater')}
        </StyledAddBtn>
      </div>
      {modalIsOpen && <Modal />}
      {isGreetingModalOpen &&
        createPortal(
          <Greeting progress={progress} />,
          document.getElementById('portal')
        )}
    </StyledRatioSectionContainer>
  );
};

export default WaterRatioPanel;
