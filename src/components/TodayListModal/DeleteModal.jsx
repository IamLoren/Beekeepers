import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import {
  deletePortionThunk,
  fetchDailyPortionsThunk,
  fetchMonthlyPortionsThunk,
} from '../../redux/statisticData/operations';
import { selectSelectedItem } from '../../redux/selectors';
import { closeModals } from '../../redux/modals/modalsSlice';
import {
  formingTodayDate,
  getCurrentData,
} from '../../serviceFunctions/serviceFunctions';
import {
  ButtonDelete,
  ButtonsWrapper,
  ModalWrapper,
  SubtitleModal,
  TitleModal,
} from './TodayListModal.styled';

const DeleteModal = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);
  const { t } = useTranslation();

  const onDeleteClick = () => {
    dispatch(deletePortionThunk(selectedItem.id)).then(() => {
      dispatch(closeModals());
      const today = new Date();
      const currentDate = getCurrentData();
      dispatch(fetchDailyPortionsThunk(formingTodayDate(today)));
      dispatch(fetchMonthlyPortionsThunk(currentDate));
    });
  };

  return (
    <ModalWrapper className="delete-modal">
      <TitleModal>{t('deleteModal.Delete entry')}</TitleModal>
      <SubtitleModal className="delete-subtitle">
        {t('deleteModal.Are you sure you want to delete the entry')}?
      </SubtitleModal>
      <ButtonsWrapper>
        <ButtonDelete onClick={onDeleteClick}>{t('delete')}</ButtonDelete>
        <ButtonDelete
          className="cancel-btn"
          onClick={() => {
            dispatch(closeModals());
          }}
        >
          {t('cancel')}
        </ButtonDelete>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default DeleteModal;
