import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import {
  changeLogoutModal,
  changeModalOpen,
  closeModals,
} from '../../redux/modals/modalsSlice';
import { logoutThunk } from '../../redux/auth/operations';
import { clearStatisticData } from '../../redux/statisticData/statisticDataSlice';
import { clearNormaCounterData } from '../../redux/normaCounter/normaCounterSlice';
import {
  ButtonDelete,
  ButtonsWrapper,
  ModalWrapper,
  StyledText,
  StyledTitle,
} from './UserLogoutModal.styled';

const UserLogoutModal = () => {
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    dispatch(changeModalOpen(false));
    dispatch(closeModals(false));
  };
  const { t } = useTranslation();

  const handleLogoutClick = () => {
    dispatch(logoutThunk());
    dispatch(clearStatisticData());
    dispatch(clearNormaCounterData());
    dispatch(changeModalOpen(false));
    dispatch(changeLogoutModal(false));
  };

  return (
    <ModalWrapper className="delete-modal">
      <StyledTitle>{t('logout')}</StyledTitle>
      <StyledText className="delete-subtitle">
        {t('logOut.Do you really want to leave?')}
      </StyledText>
      <ButtonsWrapper>
        <ButtonDelete onClick={handleLogoutClick}>{t('logout')}</ButtonDelete>
        <ButtonDelete className="cancel-btn" onClick={handleCancelClick}>
          {t('cancel')}
        </ButtonDelete>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default UserLogoutModal;
