import sprite from '../../assets/sprite.svg';
import {
  StyledButton,
  StyledModalWrapper,
  StyledSpan,
  StyledSvg,
} from './UserLogoModal.styled';
import { useDispatch } from 'react-redux';
import {
  changeLogoutModal,
  changeModalOpen,
  changeSettingModal,
} from '../../redux/modals/modalsSlice';

const UserLogoModal = () => {
  const dispatch = useDispatch();

  const handleSettingClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeSettingModal(true));
  };

  const handleLogoutClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeLogoutModal(true));
  };

  return (
    <>
      <StyledModalWrapper>
        <StyledButton onClick={handleSettingClick}>
          <StyledSpan>
            <StyledSvg width={16} height={16}>
              <use href={`${sprite}#icon-cog-6-tooth`} />
            </StyledSvg>
          </StyledSpan>
          Setting
        </StyledButton>
        <StyledButton onClick={handleLogoutClick}>
          <StyledSpan>
            <StyledSvg width={16} height={16}>
              <use href={`${sprite}#icon-arrow-right-on-rectangle`} />
            </StyledSvg>
          </StyledSpan>
          Log out
        </StyledButton>
      </StyledModalWrapper>
    </>
  );
};

export default UserLogoModal;
