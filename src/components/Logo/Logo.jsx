import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const Logo = () => {
  return (
    <Link to="/">
      <svg width={10}>
        <use href={`${sprite}#icon-logo`} />
      </svg>
      Logo-svg
    </Link>
  );
};

export default Logo;
