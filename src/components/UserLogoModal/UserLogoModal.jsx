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
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';
import { Fade } from '@mui/material';

const UserLogoModal = ({ isSettingModalOpen, isLogoutModalOpen, onClose }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
      <Fade in={true} timeout={500}>
        <StyledModalWrapper>
          <StyledButton onClick={handleSettingClick}>
            <StyledSvg width={16} height={16}>
              <use href={`${sprite}#icon-cog-6-tooth`} />
            </StyledSvg>
            {t('setting')}
          </StyledButton>
          <StyledButton onClick={handleLogoutClick}>
            <StyledSvg width={16} height={16}>
              <use href={`${sprite}#icon-arrow-right-on-rectangle`} />
            </StyledSvg>
            {t('logout')}
          </StyledButton>
        </StyledModalWrapper>
      </Fade>
    </>
  );
};

export default UserLogoModal;
