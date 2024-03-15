// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { StyledUserAuthLink } from './Logo.styled';
import { selectIsLogged } from '../../redux/selectors';

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
