import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { selectIsLogged } from '../../redux/selectors';
import { StyledUserAuthLink } from './Logo.styled';

const Logo = () => {
  const isAuthenticated = useSelector(selectIsLogged);
  return (
    <StyledUserAuthLink to={isAuthenticated ? '/home' : '/welcome'}>
      <svg width={102} height={48}>
        <use href={`${sprite}#icon-logo-1`} />
      </svg>
    </StyledUserAuthLink>
  );
};

export default Logo;
