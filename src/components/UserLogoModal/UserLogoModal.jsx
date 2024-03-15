import { useState } from 'react';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import sprite from '../../assets/sprite.svg';
import {
  StyledButton,
  StyledModalWrapper,
  StyledSpan,
  StyledSvg,
} from './UserLogoModal.styled';

const UserLogoModal = () => {
  // const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isUserLogoutModalOpen, setIsUserLogoutModalOpen] = useState(false);

  const handleSettingClick = () => {
    // setIsUserInfoModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsUserLogoutModalOpen(true);
  };

  return (
    <StyledModalWrapper>
      {/* {isUserInfoModalOpen && (
        <SettingModal onClose={() => setIsUserInfoModalOpen(false)} />
      )} */}
      {isUserLogoutModalOpen && (
        <UserLogoutModal onClose={() => setIsUserLogoutModalOpen(false)} />
      )}
      <StyledButton onClick={handleSettingClick}>
        <StyledSpan>
          {' '}
          <StyledSvg width={16} height={16}>
            <use href={`${sprite}#icon-cog-6-tooth`} />
          </StyledSvg>
        </StyledSpan>
        Setting
      </StyledButton>
      <StyledButton onClick={handleLogoutClick}>
        {' '}
        <StyledSpan>
          {' '}
          <StyledSvg width={16} height={16}>
            <use href={`${sprite}#icon-arrow-right-on-rectangle`} />
          </StyledSvg>
        </StyledSpan>
        Log out
      </StyledButton>
    </StyledModalWrapper>
  );
};

export default UserLogoModal;
