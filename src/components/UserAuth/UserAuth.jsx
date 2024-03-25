import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import sprite from '../../assets/sprite.svg';
import {
  StyledLink,
  StyledSpan,
  StyledSvg,
  StyledUserAuthWrapper,
} from './UserAuth.styled';

const UserAuth = () => {
  const { t } = useTranslation();
  return (
    <StyledUserAuthWrapper>
      <StyledLink to="/signin">
        <StyledSpan>{t('signIn')}</StyledSpan>
        <StyledSvg width={28} height={28}>
          <use href={`${sprite}#icon-user`} />
        </StyledSvg>
      </StyledLink>
    </StyledUserAuthWrapper>
  );
};

export default UserAuth;
