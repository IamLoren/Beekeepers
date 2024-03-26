import Container from '../../components/Container/Container';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import {
  StyledError,
  StyledLink,
  StyledNotFound,
  StyledText,
  StyledTextP,
  StyledType,
  StyledWrapper,
} from './ErrorPage.styled';

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <StyledWrapper>
        <StyledNotFound>
          <StyledError>
            <StyledType>404</StyledType>
          </StyledError>
          <StyledTextP>
            {t('errorPage.We are sorry, Page not found')}!
          </StyledTextP>
          <StyledText>
            {t(
              'errorPage.The page you are looking for might have been removed or is temporarily unavailable'
            )}
          </StyledText>
          <StyledLink to="/">{t('errorPage.Back To Homepage')}</StyledLink>
        </StyledNotFound>
      </StyledWrapper>
    </Container>
  );
};

export default ErrorPage;
