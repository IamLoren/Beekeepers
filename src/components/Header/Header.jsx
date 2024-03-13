import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';

export const Header = () => {

  return (
    <header>
      <Logo />
      <UserAuth />
      <UserLogo />
    </header>
  );
};
