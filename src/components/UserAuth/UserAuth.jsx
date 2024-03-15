import sprite from '../../assets/sprite.svg';
import {
  StyledLink,
  StyledSpan,
  StyledSvg,
  StyledUserAuthWrapper,
} from './UserAuth.styled';

const UserAuth = () => {
  return (
    <StyledUserAuthWrapper>
      <StyledLink to="/signin">
        <StyledSpan>Sign in</StyledSpan>
        <StyledSvg width={28} height={28}>
          <use href={`${sprite}#icon-user`} />
        </StyledSvg>
      </StyledLink>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
