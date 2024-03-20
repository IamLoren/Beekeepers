import { useDispatch } from 'react-redux';
import {
  changeLogoutModal,
  changeModalOpen,
  closeModals,
} from '../../redux/modals/modalsSlice';
import {
  ButtonDelete,
  ButtonsWrapper,
  ModalWrapper,
  StyledText,
  StyledTitle,
} from './UserLogoutModal.styled';
import { logoutThunk } from '../../redux/auth/operations';
import { clearStatisticData } from '../../redux/statisticData/statisticDataSlice';
import { clearNormaCounterData } from '../../redux/normaCounter/normaCounterSlice';

const UserLogoutModal = () => {
  const dispatch = useDispatch();

  const handleCancelClick = () => {
    dispatch(changeModalOpen(false));
    dispatch(closeModals(false));
  };

  const handleLogoutClick = () => {
    dispatch(logoutThunk());
    dispatch(clearStatisticData());
    console.log(clearStatisticData);
    dispatch(clearNormaCounterData());
    console.log(clearNormaCounterData);
    dispatch(changeModalOpen(false));
    dispatch(changeLogoutModal(false));
  };

  return (
    <ModalWrapper className="delete-modal">
      <StyledTitle>Log out</StyledTitle>
      <StyledText className="delete-subtitle">
        Do you really want to leave?
      </StyledText>
      <ButtonsWrapper>
        <ButtonDelete onClick={handleLogoutClick}>Logout</ButtonDelete>
        <ButtonDelete className="cancel-btn" onClick={handleCancelClick}>
          Cancel
        </ButtonDelete>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default UserLogoutModal;
