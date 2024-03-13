// import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { StyledUserAuthLink } from './Logo.styled';

const Logo = () => {
  return (
    <StyledUserAuthLink to="/">
      <svg width={102} height={48}>
        <use href={`${sprite}#icon-logo-1`} />
      </svg>
    </StyledUserAuthLink>
  );
};

export default Logo;
