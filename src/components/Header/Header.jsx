import { useSelector } from 'react-redux';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
import { StyledBox, StyledWrapper } from './Header.styled';
import { selectIsLogged } from '../../redux/selectors';

export const Header = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  return (
    <header>
      <Container>
        <StyledWrapper>
          {' '}
          <Logo />{' '}
          <StyledBox>{isAuthenticated ? <UserLogo /> : <UserAuth />}</StyledBox>
        </StyledWrapper>
      </Container>
    </header>
  );
};
