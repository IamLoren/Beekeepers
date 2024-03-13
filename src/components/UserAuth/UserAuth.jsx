import sprite from '../../assets/sprite.svg';
import {
  StyledLink,
  StyledSvg,
  StyledUserAuthWrapper,
} from './UserAuth.styled';

const UserAuth = () => {
  return (
    <StyledUserAuthWrapper>
      <StyledLink to="signin">Sign in</StyledLink>
      <StyledSvg width={24} height={24}>
        <use href={`${sprite}#icon-user`} />
      </StyledSvg>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
