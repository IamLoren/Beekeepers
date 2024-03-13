import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
import { StyledHeader, StyledWrapper } from './Header.styled';

export const Header = ({ isAuthenticated }) => {
  return (
    <StyledHeader>
      <Logo />
      {isAuthenticated ? (
        <StyledWrapper>
          <UserLogo />
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          <UserAuth />
        </StyledWrapper>
      )}
    </StyledHeader>
  );
};
