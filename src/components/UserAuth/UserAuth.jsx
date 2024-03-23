import sprite from '../../assets/sprite.svg';
import {
  StyledLink,
  StyledSpan,
  StyledSvg,
  StyledUserAuthWrapper,
} from './UserAuth.styled';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

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
