import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const UserAuth = () => {
  return (
    <div>
      <Link to="signin">Sign in</Link>
      <svg width={10}>
        <use href={`${sprite}#icon-logo`} />
      </svg>
    </div>
  );
};

export default UserAuth;
