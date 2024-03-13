import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';

export const Header = () => {

  return (
    <header>
      <Container>
        <Logo />
      <UserAuth />
      <UserLogo />
      </Container>
    </header>
  );
};
