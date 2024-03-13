import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
import { StyledHeader, StyledWrapper } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      {' '}
      <Logo />
      <StyledWrapper>
        <UserAuth />
        <UserLogo />
      </StyledWrapper>
    </StyledHeader>
  );
};
