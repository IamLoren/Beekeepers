import { useDispatch, useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/selectors.js';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import {
  changeDailyNormaModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice.js';
import { changeActiveContent } from '../../redux/normaCounter/normaCounterSlice.js';
import {
  Btn,
  NormaBtnWrap,
  NormaText,
  Title,
  Wrapper,
} from './DailyNorma.styled';

const DailyNorma = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const dailyNormaLiters = dailyNorma / 1000;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onEditClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeDailyNormaModal(true));
  };

  return (
    <Wrapper onClick={() => dispatch(changeActiveContent('pictureBottleBg'))}>
      <Title>{t('normaModal.My daily norma')}</Title>
      <NormaBtnWrap>
        <NormaText>
          {dailyNormaLiters} {t('L')}
        </NormaText>
        <Btn type="button" onClick={onEditClick}>
          {t('edit')}
        </Btn>
      </NormaBtnWrap>
    </Wrapper>
  );
};

export default DailyNorma;
