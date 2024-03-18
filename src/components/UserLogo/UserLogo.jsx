import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import {
  AvatarWrapper,
  StyledBtn,
  StyledName,
  StyledSvg,
  StyledWrapper,
} from './UserLogo.styled';
import { useState } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import {
  selectLogoutModal,
  selectSettingModal,
  selectUser,
} from '../../redux/selectors';
import { Popover } from '@mui/material';

const UserLogo = () => {
  const isSettingModalOpen = useSelector(selectSettingModal);
  const isLogoutModalOpen = useSelector(selectLogoutModal);
  const { name, email, avatarURL } = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div>
        {' '}
        <StyledWrapper>
          <StyledBtn onClick={handleClick}>
            {name && <StyledName>{name}</StyledName>}
            <AvatarWrapper $borderColor={avatarURL ? 'transparent' : '#407bff'}>
              {avatarURL ? (
                <img src={avatarURL} width={28} height={28} alt="user avatar" />
              ) : name ? (
                <StyledName>{name[0].toUpperCase()}</StyledName>
              ) : (
                <span>{email[0].toUpperCase()}</span>
              )}
            </AvatarWrapper>
            <StyledSvg width={16} height={16}>
              <use href={`${sprite}#icon-chevron-double-up`} />
            </StyledSvg>
          </StyledBtn>
        </StyledWrapper>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <UserLogoModal
            isSettingModalOpen={isSettingModalOpen}
            isLogoutModalOpen={isLogoutModalOpen}
            onClose={() => setAnchorEl(false)}
          />
        </Popover>
      </div>
    </>
  );
};

export default UserLogo;
