import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { StyledSvg, StyledUserAuthWrapper } from './UserAuth.styled';

const UserAuth = () => {
  return (
    <StyledUserAuthWrapper>
      <Link to="signin">Sign in</Link>
      <StyledSvg width={24} height={24}>
        <use href={`${sprite}#icon-user`} />
      </StyledSvg>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
