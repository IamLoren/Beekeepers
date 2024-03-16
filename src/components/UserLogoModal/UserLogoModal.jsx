import sprite from '../../assets/sprite.svg';
import {
  StyledButton,
  StyledModalWrapper,
  StyledSvg,
} from './UserLogoModal.styled';
import { useDispatch } from 'react-redux';
import {
  changeLogoutModal,
  changeModalOpen,
  changeSettingModal,
} from '../../redux/modals/modalsSlice';

const UserLogoModal = ({ isSettingModalOpen, isLogoutModalOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleSettingClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeSettingModal(true));
    onClose();
  };

  const handleLogoutClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeLogoutModal(true));
    onClose();
  };

  if (isSettingModalOpen || isLogoutModalOpen) {
    return null;
  }

  return (
    <>
      <StyledModalWrapper>
        <StyledButton onClick={handleSettingClick}>
          <StyledSvg width={16} height={16}>
            <use href={`${sprite}#icon-cog-6-tooth`} />
          </StyledSvg>
          Setting
        </StyledButton>
        <StyledButton onClick={handleLogoutClick}>
          <StyledSvg width={16} height={16}>
            <use href={`${sprite}#icon-arrow-right-on-rectangle`} />
          </StyledSvg>
          Log out
        </StyledButton>
      </StyledModalWrapper>
    </>
  );
};

export default UserLogoModal;
