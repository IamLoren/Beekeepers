import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import {
  StyledBtn,
  StyledImg,
  StyledName,
  StyledSvg,
  StyledWrapper,
} from './UserLogo.styled';
import { useState } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal';

const UserLogo = () => {
  const userName = useSelector((state) => state.authSlice.user.name);
  const userEmail = useSelector((state) => state.authSlice.user.email);
  const userAvatar = useSelector((state) => state.authSlice.user.avatar);
  const [isUserLogoModalOpen, setIsUserLogoModalOpen] = useState(false);

  const renderContent = () => {
    if (userName && userAvatar) {
      return (
        <>
          <StyledName>{userName}</StyledName>
          <StyledImg src={userAvatar} alt="User Avatar" />
        </>
      );
    } else if (userName) {
      return <StyledName>{userName}</StyledName>;
    } else if (userEmail) {
      return <StyledName>{userEmail.charAt(0).toUpperCase()}</StyledName>;
    }
    return null;
  };

  const handleClick = () => {
    setIsUserLogoModalOpen(!isUserLogoModalOpen);
  };

  return (
    <>
      <div>
        {' '}
        <StyledWrapper>
          <StyledBtn onClick={handleClick}>
            <div>{renderContent()}</div>
            <StyledSvg width={16} height={16}>
              <use href={`${sprite}#icon-chevron-double-up`} />
            </StyledSvg>
          </StyledBtn>
        </StyledWrapper>
        {isUserLogoModalOpen && (
          <UserLogoModal onClose={() => setIsUserLogoModalOpen(false)} />
        )}
      </div>
    </>
  );
};

export default UserLogo;
